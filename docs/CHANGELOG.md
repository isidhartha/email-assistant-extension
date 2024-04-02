# Changelog

All notable changes are documented here.


### 2022-01-09
- perf: lazy-load SQLite module on first history access


### 2022-01-12
- fix: handle undefined API key on first extension launch


### 2022-01-14
- fix: fix keyboard shortcut conflict with Gmail native keys


### 2022-01-18
- chore: configure Vite for Chrome extension build output


### 2022-01-18
- docs: add message passing API reference to docs/API.md


### 2022-01-20
- feat: add Tailwind CSS scoped styles for sidebar UI


### 2022-01-21
- test: add Zod message schema validation tests


### 2022-01-24
- fix: handle empty thread body with fallback message


### 2022-01-26
- fix: resolve SQLite WAL mode file locking conflict


### 2022-01-28
- docs: add message passing API reference to docs/API.md


### 2022-01-30
- test: add service worker message handler unit tests


### 2022-02-09
- feat: implement tone selector formal casual concise


### 2022-02-10
- feat: implement settings page for API key configuration


### 2022-02-16
- refactor: extract DOM selectors to dedicated module


### 2022-02-17
- chore: configure Vite for Chrome extension build output


### 2022-02-17
- feat: implement loading spinner during AI processing


### 2022-02-17
- feat: implement email thread summarisation agent


### 2022-02-23
- feat: add history panel listing past AI interactions


### 2022-02-24
- test: add Zod message schema validation tests


### 2022-02-28
- feat: implement Chrome Manifest V3 extension scaffold


### 2022-03-07
- perf: implement request deduplication for repeated threads


### 2022-03-07
- refactor: move SQLite schema to migration files


### 2022-03-11
- feat: implement settings page for API key configuration


### 2022-03-13
- docs: update CONTRIBUTING.md with extension reload workflow


### 2022-03-16
- chore: update manifest.json permissions for Outlook support


### 2022-03-18
- feat: add keyboard shortcut to toggle assistant sidebar


### 2022-03-24
- fix: fix Zod schema for nullable thread sender fields


### 2022-03-30
- refactor: consolidate message type definitions into enum


### 2022-03-30
- perf: implement request deduplication for repeated threads


### 2022-04-06
- chore: add extension-specific eslint rules


### 2022-04-12
- feat: add extension badge showing unread action count


### 2022-04-13
- perf: implement request deduplication for repeated threads


### 2022-04-14
- docs: add screenshots guide placeholder to README


### 2022-04-25
- refactor: extract sidebar rendering into component functions


### 2022-04-27
- fix: fix sidebar persistence across Gmail soft navigation


### 2022-04-29
- feat: add OpenAI Agents SDK three-agent setup


### 2022-04-29
- feat: add extension badge showing unread action count


### 2022-05-12
- fix: fix keyboard shortcut conflict with Gmail native keys


### 2022-05-14
- perf: lazy-load SQLite module on first history access


### 2022-05-18
- fix: fix Zod schema for nullable thread sender fields


### 2022-05-19
- feat: implement background service worker for AI processing


### 2022-05-20
- chore: update manifest.json permissions for Outlook support


### 2022-05-23
- style: fix eslint violations across content scripts


### 2022-05-27
- fix: handle OpenAI network error with user-friendly message


### 2022-05-30
- fix: correct chrome.runtime message size limit handling


### 2022-06-02
- feat: add Tailwind CSS scoped styles for sidebar UI


### 2022-06-09
- chore: bump TypeScript to 5.4


### 2022-06-16
- fix: handle undefined API key on first extension launch


### 2022-06-17
- feat: add inline error message display for API failures


### 2022-06-19
- feat: implement email thread summarisation agent


### 2022-06-23
- feat: implement action item extraction agent


### 2022-06-27
- feat: implement chrome.runtime message passing protocol


### 2022-07-04
- refactor: extract sidebar rendering into component functions


### 2022-07-07
- fix: fix keyboard shortcut conflict with Gmail native keys


### 2022-07-08
- feat: add better-sqlite3 local history storage


### 2022-07-12
- refactor: consolidate message type definitions into enum


### 2022-07-16
- fix: resolve Outlook DOM selector change after UI update


### 2022-07-19
- feat: add reply drafting agent with configurable tone control


