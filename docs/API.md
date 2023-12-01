# Chrome Message API — Email Assistant Extension

Messages are passed via `chrome.runtime.sendMessage` from content scripts to the background service worker.

---

## `summariseThread`

Summarises an email thread.

**Request:**
```ts
{
  action: "summariseThread",
  payload: {
    subject: string;
    messages: Array<{ from: string; body: string; date: string }>;
  }
}
```

**Response:**
```ts
{
  summary: string;       // 3-5 bullet point summary
  keyTopics: string[];
}
```

---

## `draftReply`

Drafts a reply to the current thread.

**Request:**
```ts
{
  action: "draftReply",
  payload: {
    thread: Thread;
    tone: "formal" | "casual" | "concise";
    instructions?: string;  // optional user hint
  }
}
```

**Response:**
```ts
{
  draft: string;
  subject: string;  // suggested reply subject
}
```

---

## `extractActions`

Extracts action items from a thread.

**Request:**
```ts
{ action: "extractActions", payload: { thread: Thread } }
```

**Response:**
```ts
{
  actions: Array<{
    task: string;
    deadline?: string;
    assignee?: string;
  }>;
}
```

---

## `getHistory`

Retrieves stored assistant interactions.

**Request:**
```ts
{ action: "getHistory", payload: { limit?: number; offset?: number } }
```

**Response:**
```ts
{
  records: Array<{ id: number; action: string; createdAt: string; summary: string }>;
  total: number;
}
```
