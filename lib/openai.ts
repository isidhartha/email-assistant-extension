import { Agent, run, tool, setDefaultOpenAIKey, setDefaultOpenAIClient } from '@openai/agents';
import z from 'zod';
import OpenAI from 'openai';
import { findSimilarEmail } from './db';

export async function getApiKey() {
  // Get the api key from the local storage
  const apiKey = await chrome.storage.sync.get('openaiApiKey');

  return apiKey['openaiApiKey'] || '';
}


export const lookupSimilarEmails = tool({
  name: "lookupSimilarEmails",
  description: "Find emails from the database that are similar to the current one.",
  parameters: z.object({
      email: z.string(),
      subject: z.string(),
      snippet: z.string()
    }).required({ email: true }),
  execute: async ({ email, subject, snippet }) => {
    const matches = await findSimilarEmail(email, subject, snippet);
    return { matches };
  }
});


export async function runAgent(input: { subject: string; sender: string | null; snippet: string | null }, categories: string[]): Promise<string> {

  const apiKey = await getApiKey();

  const defaultClient = new OpenAI({
    apiKey: apiKey,
    dangerouslyAllowBrowser: true
  })

  setDefaultOpenAIClient(defaultClient);

  await setDefaultOpenAIKey(apiKey);

  if (!input.sender) return "not spam";

  const formattedCategories = categories.map(cat => `<category>${cat}</category>`).join('\n');

  const classAgent = new Agent({
    name: 'Email Classification Agent',
    instructions: `
      <task>
      You are an email classification agent. Your job is to classify emails as accurately as possible into a list of categories that has been defined by the user. All emails should either fall into the categories created by the user, or be marked as "uncategorised".
      </task>
      <categories>
      ${formattedCategories}
      </categories>
      <output>
      Only output the category label without any additional text or explanation.
      </output>
    `,
    tools: [lookupSimilarEmails],
    modelSettings: {
      maxTokens: 1000
    },
    model: "gpt-4o-mini"
  });


  const response = await run(classAgent, `<email>
    <subject>${input.subject}</subject>
    <sender>${input.sender}</sender>
    <snippet>${input.snippet}</snippet>
  </email>`);

  return response.finalOutput as string;
}