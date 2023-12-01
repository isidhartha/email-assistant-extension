import { runAgent } from './lib/openai';
import { upsertSender, logHistory, getSender, clearData } from './lib/db';
import { loadTags } from './lib/local-storage';

function injectTag(row: HTMLElement, tag: string): void {
  const subjectEl = row.querySelector("span.bog") as HTMLElement;
  if (!subjectEl) return;
  // Prevent duplicate tags
  if (subjectEl.querySelector(".ai-tag")) return;
  const tagEl = document.createElement("span");
  tagEl.className = "ai-tag";
  tagEl.innerText = `[${tag}] `;
  tagEl.style.fontWeight = "bold";
  tagEl.style.color = "blue";
  subjectEl.insertBefore(tagEl, subjectEl.firstChild);
}

async function runTriage(): Promise<void> {
  console.log("Running triage...");
  // Skip if we've already processed this page
  if (document.querySelector('.ai-tag')) return;

  const userCategories = await loadTags();

  const rows = document.querySelectorAll("tr.zA");

  for (let row of Array.from(rows)) {
    const subjectEl = row.querySelector("span.bog");
    if (!subjectEl) continue;

    // Try to get sender's email address
    let senderEmail: string | null = null;
    // Gmail sometimes stores sender info in 'span.yP' or 'span.zF'
    const senderEl = row.querySelector("span.yP, span.zF");
    let senderName: string | null = null;
    if (senderEl) {
      senderEmail = senderEl.getAttribute("email") || senderEl.getAttribute("data-hovercard-id") || (senderEl as HTMLElement).title || (senderEl as HTMLElement).innerText;
      senderName = (senderEl as HTMLElement).innerText;
    }

    const subject = (subjectEl as HTMLElement).innerText;

    // Get snippet/preview (usually in span.a4W or span.y2)
    let snippet: string | null = null;
    const snippetEl = row.querySelector("span.a4W, span.y2");
    if (snippetEl) {
      snippet = (snippetEl as HTMLElement).innerText;
    }

    console.log("Inbox item: ", { subject, senderEmail, senderName, snippet });

    // Try to load cached classification from DB
    let agentRes: string | null = null;
    if (senderEmail) {
      const cached = await getSender(senderEmail);
      if (cached && cached.label) {
        agentRes = cached.label;
      }
    }

    console.log("Cached agent response:", agentRes);

    // If not cached, call agent and store
    if (!agentRes && userCategories.length > 0 && agentActive) {
      agentRes = await runAgent({ subject, sender: senderEmail, snippet }, userCategories);
      console.log("Agent response:", agentRes);
      if (senderEmail) {
        upsertSender({
          email: senderEmail,
          name: senderName || '',
          category: agentRes,
          label: agentRes,
          last_seen: new Date().toISOString()
        });
      }
      logHistory({
        sender_email: senderEmail || '',
        subject,
        snippet: snippet || '',
        category: agentRes,
        label: agentRes,
        classified_at: new Date().toISOString()
      });
    }

    // Set the tag to the agent response
    if ((subjectEl as HTMLElement).querySelector(".ai-tag")) continue;

    if (agentRes) {
      injectTag(row as HTMLElement, agentRes);
    }

  }
}

function observeInboxChanges() {
  const inboxContainer = document.querySelector('div[role="main"]');
  if (!inboxContainer) return;
  let timeout: number | null = null;
  const observer = new MutationObserver(() => {
    // Debounce rapid changes
    if (timeout) window.clearTimeout(timeout);
    timeout = window.setTimeout(() => {
      runTriage();
    }, 1000);
  });
  observer.observe(inboxContainer, {
    childList: true,
    subtree: true
  });
}

async function clearDatabase() {
  console.log('Clearing all data...');
  // Clear the data from the Agent database
  await clearData();

  console.log('All data cleared.');
}

let agentActive = false; // Default is false

// Run once after Gmail loads
setTimeout(() => {
  runTriage();
  observeInboxChanges();
}, 4000);



chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log("Received message:", message);
  if (message.action === 'runTriage') {
    if (agentActive) runTriage();
  } else if (message.action === 'clearDatabase' || message.action === 'clearData') {
    clearDatabase();
  } else if (message.action === 'activateAgent') {
    agentActive = true;
    console.log('Agent activated');
    runTriage();
  } else if (message.action === 'deactivateAgent') {
    agentActive = false;
    console.log('Agent deactivated');
    // Optionally, remove tags from the DOM
    document.querySelectorAll('.ai-tag').forEach(tag => tag.remove());
  }
});