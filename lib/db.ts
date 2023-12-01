// IndexedDB wrapper for senders and history
const DB_NAME = 'email_agent_db';
const DB_VERSION = 1;
let dbPromise: Promise<IDBDatabase> | null = null;

function openDB(): Promise<IDBDatabase> {
  if (dbPromise) return dbPromise;
  dbPromise = new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);
    request.onupgradeneeded = (event) => {
      const db = request.result;
      if (!db.objectStoreNames.contains('senders')) {
        db.createObjectStore('senders', { keyPath: 'email' });
      }
      if (!db.objectStoreNames.contains('history')) {
        db.createObjectStore('history', { keyPath: 'id', autoIncrement: true });
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
  return dbPromise;
}

export async function getSender(email: string): Promise<any> {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction('senders', 'readonly');
    const store = tx.objectStore('senders');
    const req = store.get(email);
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

export async function upsertSender(sender: {
  email: string;
  name: string;
  category: string;
  label: string;
  last_seen: string;
}): Promise<void> {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction('senders', 'readwrite');
    const store = tx.objectStore('senders');
    const req = store.put(sender);
    req.onsuccess = () => resolve();
    req.onerror = () => reject(req.error);
  });
}

export async function logHistory(entry: {
  sender_email: string;
  subject: string;
  snippet: string;
  category: string;
  label: string;
  classified_at: string;
}): Promise<void> {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction('history', 'readwrite');
    const store = tx.objectStore('history');
    const req = store.add(entry);
    req.onsuccess = () => resolve();
    req.onerror = () => reject(req.error);
  });
}

export async function getHistory(limit = 100): Promise<any[]> {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction('history', 'readonly');
    const store = tx.objectStore('history');
    const req = store.openCursor(null, 'prev');
    const results: any[] = [];
    req.onsuccess = () => {
      const cursor = req.result;
      if (cursor && results.length < limit) {
        results.push(cursor.value);
        cursor.continue();
      } else {
        resolve(results);
      }
    };
    req.onerror = () => reject(req.error);
  });
}

export async function getAllSenders(): Promise<any[]> {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction('senders', 'readonly');
    const store = tx.objectStore('senders');
    const req = store.getAll();
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}


export async function findSimilarEmail(email: string, subject: string, snippet: string, limit = 5) {
  const history = await getHistory(500); // look at recent 500
  const results = history.filter(entry => {
    let score = 0;
    if (entry.sender_email.split("@")[1] === email.split("@")[1]) score += 2; // domain match
    if (entry.subject && subject && entry.subject.toLowerCase().includes(subject.toLowerCase())) score += 1;
    if (entry.snippet && snippet && entry.snippet.toLowerCase().includes(snippet.toLowerCase())) score += 1;
    return score > 0;
  });
  return results.slice(0, limit);
}


export async function clearData(): Promise<void> {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(['senders', 'history'], 'readwrite');
    const senderStore = tx.objectStore('senders');
    const historyStore = tx.objectStore('history');
    const req1 = senderStore.clear();
    const req2 = historyStore.clear();
    req1.onsuccess = () => {
      req2.onsuccess = () => resolve();
    };
    req1.onerror = () => reject(req1.error);
    req2.onerror = () => reject(req2.error);
  });
}