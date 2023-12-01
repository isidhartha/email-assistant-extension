/// <reference types="chrome" />

// Utility functions for storage
function saveApiKey(apiKey: string): void {
  chrome.storage.sync.set({ openaiApiKey: apiKey });
}
function loadApiKey(): Promise<string> {
  return new Promise((resolve) => {
    chrome.storage.sync.get(['openaiApiKey'], (result) => {
      resolve(result.openaiApiKey || '');
    });
  });
}
function saveTags(tags: string[]): void {
  chrome.storage.sync.set({ tags });
}
function loadTags(): Promise<string[]> {
  return new Promise((resolve) => {
    chrome.storage.sync.get(['tags'], (result) => {
      resolve(result.tags || []);
    });
  });
}

// UI Elements
const onboarding = document.getElementById('onboarding') as HTMLDivElement;
const mainUI = document.getElementById('mainUI') as HTMLDivElement;
const onboardingApiKey = document.getElementById('onboardingApiKey') as HTMLInputElement;
const submitApiKeyBtn = document.getElementById('submitApiKeyBtn') as HTMLButtonElement;
const activateAgentBtn = document.getElementById('activateAgentBtn') as HTMLButtonElement;
const deactivateAgentBtn = document.getElementById('deactivateAgentBtn') as HTMLButtonElement;
const settingsBtn = document.getElementById('settingsBtn') as HTMLButtonElement;
const settingsPanel = document.getElementById('settingsPanel') as HTMLDivElement;
const closeSettingsBtn = document.getElementById('closeSettingsBtn') as HTMLButtonElement;
const addCategoryBtn = document.getElementById('addCategoryBtn') as HTMLButtonElement;
const categoryInput = document.getElementById('categoryInput') as HTMLInputElement;
const categoryList = document.getElementById('categoryList') as HTMLUListElement;
const clearDatabaseBtn = document.getElementById('clearDatabaseBtn') as HTMLButtonElement;

// Show onboarding if no API key
window.onload = async () => {
  const apiKey = await loadApiKey();
  if (!apiKey) {
    onboarding.style.display = 'block';
    mainUI.style.display = 'none';
  } else {
    onboarding.style.display = 'none';
    mainUI.style.display = 'block';
    renderTagList(await loadTags());
  }
};

// Onboarding submit
submitApiKeyBtn?.addEventListener('click', () => {
  const key = onboardingApiKey.value.trim();
  if (key) {
    saveApiKey(key);
    onboarding.style.display = 'none';
    mainUI.style.display = 'block';
    renderTagList([]);
  }
});

// Agent activation/deactivation (send message to content script)
activateAgentBtn?.addEventListener('click', () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    if (tabs[0].id && tabs[0].url?.includes("mail.google.com")) {
      chrome.tabs.sendMessage(tabs[0].id, { action: 'activateAgent' });
    } else {
      alert("Please select the Gmail tab.");
    }
  });
});
deactivateAgentBtn?.addEventListener('click', () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    if (tabs[0].id && tabs[0].url?.includes("mail.google.com")) {
      chrome.tabs.sendMessage(tabs[0].id, { action: 'deactivateAgent' });
    } else {
      alert("Please select the Gmail tab.");
    }
  });
});

// Settings panel toggle
settingsBtn?.addEventListener('click', () => {
  settingsPanel.style.display = 'block';
});
closeSettingsBtn?.addEventListener('click', () => {
  settingsPanel.style.display = 'none';
});

// Category management
addCategoryBtn?.addEventListener('click', async () => {
  const newTag = categoryInput.value.trim();
  if (newTag) {
    const tags = await loadTags();
    if (!tags.includes(newTag)) {
      const updated = [...tags, newTag];
      saveTags(updated);
      renderTagList(updated);
    }
    categoryInput.value = '';
  }
});
clearDatabaseBtn?.addEventListener('click', () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    if (tabs[0].id && tabs[0].url?.includes("mail.google.com")) {
      chrome.tabs.sendMessage(tabs[0].id, { action: 'clearDatabase' });
      alert("Database clear requested. Please refresh Gmail.");
    } else {
      alert("Please select the Gmail tab.");
    }
  });
});
function renderTagList(tags: string[]) {
  categoryList.innerHTML = '';
  tags.forEach((tag, idx) => {
    const li = document.createElement('li');
    li.className = "flex items-center justify-between py-1";
    li.textContent = tag;
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.className = "ml-2 bg-red-400 text-white px-2 py-1 rounded hover:bg-red-500";
    removeBtn.onclick = async () => {
      tags.splice(idx, 1);
      saveTags(tags);
      renderTagList(tags);
    };
    li.appendChild(removeBtn);
    categoryList.appendChild(li);
  });
}