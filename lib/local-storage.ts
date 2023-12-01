export interface AgentSettings {
  showSponsorTags: boolean;
  openaiApiKey: string;
}

// Save settings to chrome.storage
export function saveSettings(settings: AgentSettings): void {
  chrome.storage.sync.set(settings);
}

// Load settings from chrome.storage
export function loadSettings(callback: (settings: AgentSettings) => void): void {
  chrome.storage.sync.get(['showSponsorTags', 'openaiApiKey'], (result) => {
    callback({
      showSponsorTags: !!result.showSponsorTags,
      openaiApiKey: result.openaiApiKey || ''
    });
  });
}

// --- Category (Tag) Management ---
export function saveTags(tags: string[]): void {
  chrome.storage.sync.set({ tags });
}

export function loadTags(): Promise<string[]> {
  return new Promise((resolve) => {
    chrome.storage.sync.get(['tags'], (result) => {
      resolve(result.tags || []);
    });
  });
}