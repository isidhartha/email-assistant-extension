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


### 2022-07-20
- feat: implement email thread summarisation agent


### 2022-07-23
- feat: implement sidebar panel injection via content script


### 2022-07-27
- style: run prettier on all TypeScript source files


### 2022-07-28
- feat: add Outlook Web support in content script


### 2022-08-01
- chore: update manifest.json permissions for Outlook support


### 2022-08-01
- fix: handle OpenAI network error with user-friendly message


### 2022-08-03
- fix: fix Zod schema for nullable thread sender fields


### 2022-08-06
- feat: implement background service worker for AI processing


### 2022-08-12
- fix: handle undefined API key on first extension launch


### 2022-08-12
- fix: resolve SQLite WAL mode file locking conflict


### 2022-08-16
- chore: update manifest.json permissions for Outlook support


### 2022-08-17
- fix: resolve content script isolated world access issue


### 2022-09-05
- fix: handle missing email body element in DOM extraction


### 2022-09-06
- perf: cache DOM extraction result per thread ID


### 2022-09-14
- feat: implement background service worker for AI processing


### 2022-09-16
- perf: lazy-load SQLite module on first history access


### 2022-09-20
- fix: handle long email thread exceeding context limit


### 2022-09-20
- fix: fix service worker lifecycle reset on Chrome restart


### 2022-09-26
- refactor: separate agent definitions from service worker


### 2022-09-30
- perf: lazy-load SQLite module on first history access


### 2022-10-05
- fix: resolve content script isolated world access issue


### 2022-10-10
- feat: add content script injection for Gmail inbox pages


### 2022-10-11
- feat: implement summary caching for repeated thread views


### 2022-10-15
- chore: configure Vite for Chrome extension build output


### 2022-10-27
- fix: correct chrome.runtime message size limit handling


### 2022-10-28
- fix: fix service worker lifecycle reset on Chrome restart


### 2022-10-28
- feat: add history panel listing past AI interactions


### 2022-10-29
- refactor: separate agent definitions from service worker


### 2022-11-01
- fix: resolve Gmail CSS specificity override conflict


### 2022-11-01
- feat: add support for Gmail conversation view threading


### 2022-11-06
- perf: lazy-load SQLite module on first history access


### 2022-11-06
- refactor: separate Gmail and Outlook content script logic


### 2022-11-07
- feat: add extension badge showing unread action count


### 2022-11-09
- feat: implement copy-to-clipboard for generated drafts


### 2022-11-10
- refactor: separate agent definitions from service worker


### 2022-11-11
- chore: add extension-specific eslint rules


### 2022-11-14
- fix: fix Zod schema for nullable thread sender fields


### 2022-11-16
- feat: add Zod schema validation for all message types


### 2022-11-24
- docs: update CONTRIBUTING.md with extension reload workflow


### 2022-12-04
- fix: resolve content script isolated world access issue


### 2022-12-18
- fix: fix service worker lifecycle reset on Chrome restart


### 2022-12-24
- docs: document permission requirements in manifest notes


### 2022-12-26
- feat: implement DOM thread context extraction for Gmail


### 2022-12-27
- docs: document Chrome extension installation steps in README


### 2023-01-13
- feat: add content script injection for Gmail inbox pages


### 2023-01-13
- perf: implement request deduplication for repeated threads


### 2023-01-16
- fix: handle undefined API key on first extension launch


### 2023-01-19
- style: fix eslint violations across content scripts


### 2023-01-26
- feat: implement loading spinner during AI processing


### 2023-01-30
- feat: implement background service worker for AI processing


### 2023-02-04
- style: run prettier on all TypeScript source files


### 2023-02-06
- perf: cache DOM extraction result per thread ID


### 2023-02-09
- docs: update CONTRIBUTING.md with extension reload workflow


### 2023-02-10
- feat: implement settings page for API key configuration


### 2023-02-20
- refactor: move SQLite schema to migration files


### 2023-03-02
- feat: implement tone selector formal casual concise


### 2023-03-02
- chore: add extension-specific eslint rules


### 2023-03-13
- fix: correct chrome.runtime message size limit handling


### 2023-03-21
- feat: implement SQLite schema with version migrations


### 2023-03-23
- refactor: consolidate API key retrieval into storage module


### 2023-03-24
- feat: add support for Gmail conversation view threading


### 2023-04-06
- feat: add inline error message display for API failures


### 2023-04-08
- feat: implement copy-to-clipboard for generated drafts


### 2023-04-11
- docs: update architecture.md with service worker lifecycle


### 2023-04-11
- fix: fix service worker lifecycle reset on Chrome restart


### 2023-04-11
- fix: resolve Outlook DOM selector change after UI update


### 2023-04-12
- feat: add better-sqlite3 local history storage


### 2023-04-13
- feat: implement settings page for API key configuration


### 2023-04-20
- docs: document Chrome extension installation steps in README


### 2023-04-22
- feat: implement loading spinner during AI processing


### 2023-04-24
- fix: handle missing email body element in DOM extraction


### 2023-04-25
- feat: add history panel listing past AI interactions


### 2023-04-27
- fix: handle undefined API key on first extension launch


### 2023-05-03
- fix: fix sidebar persistence across Gmail soft navigation


### 2023-05-17
- feat: add extension badge showing unread action count


### 2023-05-19
- fix: resolve race condition between concurrent messages


### 2023-05-21
- feat: implement sidebar panel injection via content script


### 2023-05-23
- feat: implement settings page for API key configuration


### 2023-05-23
- feat: implement Chrome Manifest V3 extension scaffold


### 2023-05-25
- refactor: separate Gmail and Outlook content script logic


### 2023-06-03
- fix: resolve Gmail CSS specificity override conflict


### 2023-06-08
- fix: handle OpenAI network error with user-friendly message


### 2023-06-13
- feat: implement threading context for contextual reply drafts


### 2023-06-15
- feat: implement action item extraction agent


### 2023-06-18
- feat: implement tone selector formal casual concise


### 2023-06-19
- chore: bump TypeScript to 5.4


### 2023-06-23
- chore: add extension-specific eslint rules


### 2023-06-24
- refactor: consolidate message type definitions into enum


### 2023-07-04
- feat: add keyboard shortcut to toggle assistant sidebar


### 2023-07-05
- feat: implement Chrome Manifest V3 extension scaffold


### 2023-07-06
- docs: update CONTRIBUTING.md with extension reload workflow


### 2023-07-14
- feat: add Outlook Web support in content script


### 2023-07-15
- feat: add keyboard shortcut to toggle assistant sidebar


### 2023-07-15
- refactor: move SQLite schema to migration files


### 2023-07-19
- fix: correct SQLite database path on different OS


### 2023-07-19
- feat: implement action item extraction agent


### 2023-07-20
- feat: implement copy-to-clipboard for generated drafts


### 2023-07-21
- chore: bump TypeScript to 5.4


### 2023-07-25
- feat: add history panel listing past AI interactions


### 2023-07-26
- docs: add screenshots guide placeholder to README


### 2023-07-27
- feat: implement SQLite schema with version migrations


### 2023-07-27
- feat: implement sidebar panel injection via content script


### 2023-08-02
- feat: add history panel listing past AI interactions


### 2023-08-09
- feat: implement DOM thread context extraction for Gmail


### 2023-08-10
- test: add unit tests for Gmail thread DOM extraction


### 2023-08-14
- docs: update architecture.md with service worker lifecycle


### 2023-08-15
- fix: fix keyboard shortcut conflict with Gmail native keys


### 2023-08-19
- style: fix eslint violations across content scripts


### 2023-08-22
- feat: implement settings page for API key configuration


### 2023-08-23
- feat: add better-sqlite3 local history storage


### 2023-08-25
- test: add Zod message schema validation tests


### 2023-08-28
- feat: implement summary caching for repeated thread views


### 2023-08-29
- feat: add history panel listing past AI interactions


### 2023-09-01
- fix: handle OpenAI network error with user-friendly message


### 2023-09-01
- test: add service worker message handler unit tests


### 2023-09-07
- feat: implement settings page for API key configuration


### 2023-09-10
- feat: implement summary caching for repeated thread views


### 2023-09-15
- refactor: consolidate message type definitions into enum


### 2023-09-18
- feat: implement settings page for API key configuration


### 2023-09-20
- feat: implement tone selector formal casual concise


### 2023-09-22
- docs: document Chrome extension installation steps in README


### 2023-09-25
- feat: implement SQLite schema with version migrations


### 2023-10-05
- fix: resolve Gmail CSS specificity override conflict


### 2023-10-16
- feat: add inline error message display for API failures


### 2023-10-24
- feat: add support for Gmail conversation view threading


### 2023-10-25
- fix: handle undefined API key on first extension launch


### 2023-10-30
- perf: implement request deduplication for repeated threads


### 2023-11-01
- fix: handle missing email body element in DOM extraction


### 2023-11-02
- feat: implement settings page for API key configuration


### 2023-11-04
- feat: implement DOM thread context extraction for Gmail


### 2023-11-08
- refactor: consolidate API key retrieval into storage module


### 2023-11-13
- feat: implement settings page for API key configuration


### 2023-11-13
- refactor: consolidate message type definitions into enum


### 2023-11-21
- chore: configure Vite for Chrome extension build output


### 2023-11-30
- fix: handle empty thread body with fallback message


### 2023-12-04
- chore: add extension-specific eslint rules


### 2023-12-04
- feat: add Zod schema validation for all message types


### 2023-12-06
- feat: implement settings page for API key configuration


### 2023-12-07
- test: add service worker message handler unit tests


### 2023-12-07
- style: fix eslint violations across content scripts


### 2023-12-20
- style: run prettier on all TypeScript source files


### 2023-12-25
- chore: add extension-specific eslint rules


### 2023-12-26
- fix: fix sidebar persistence across Gmail soft navigation


### 2024-01-01
- feat: implement loading spinner during AI processing


### 2024-01-01
- test: add unit tests for Gmail thread DOM extraction


### 2024-01-02
- fix: resolve SQLite WAL mode file locking conflict


### 2024-01-03
- test: add mock-based test for OpenAI agent calls


### 2024-01-05
- feat: add inline error message display for API failures


### 2024-01-11
- fix: fix sidebar persistence across Gmail soft navigation


### 2024-01-16
- feat: add history panel listing past AI interactions


### 2024-01-16
- feat: implement settings page for API key configuration


### 2024-01-22
- docs: document Chrome extension installation steps in README


### 2024-01-23
- feat: add support for Gmail conversation view threading


### 2024-01-30
- style: fix eslint violations across content scripts


### 2024-02-03
- feat: implement background service worker for AI processing


### 2024-02-03
- test: add service worker message handler unit tests


### 2024-02-06
- fix: correct chrome.runtime message size limit handling


### 2024-02-10
- fix: fix keyboard shortcut conflict with Gmail native keys


### 2024-02-12
- feat: add better-sqlite3 local history storage


### 2024-02-16
- docs: add screenshots guide placeholder to README


### 2024-02-22
- feat: implement copy-to-clipboard for generated drafts


### 2024-02-22
- feat: implement background service worker for AI processing


### 2024-02-22
- fix: correct chrome.runtime message size limit handling


### 2024-02-23
- docs: document Chrome extension installation steps in README


### 2024-02-27
- style: fix eslint violations across content scripts


### 2024-02-28
- feat: implement DOM thread context extraction for Gmail


### 2024-03-05
- test: add unit tests for Gmail thread DOM extraction


### 2024-03-14
- feat: implement background service worker for AI processing


### 2024-03-15
- fix: resolve content script isolated world access issue


### 2024-03-18
- fix: handle missing email body element in DOM extraction


### 2024-03-23
- fix: fix keyboard shortcut conflict with Gmail native keys


### 2024-03-23
- fix: fix sidebar z-index conflict with Gmail compose window


### 2024-03-27
- feat: implement settings page for API key configuration


### 2024-03-28
- fix: fix Zod schema for nullable thread sender fields


### 2024-03-28
- feat: add better-sqlite3 local history storage


### 2024-03-31
- docs: add screenshots guide placeholder to README


### 2024-04-01
- refactor: extract DOM selectors to dedicated module


### 2024-04-07
- docs: update architecture.md with service worker lifecycle


### 2024-04-07
- feat: implement summary caching for repeated thread views


### 2024-04-08
- fix: correct chrome.runtime message size limit handling


### 2024-04-14
- docs: update architecture.md with service worker lifecycle


### 2024-04-16
- feat: implement action item extraction agent


### 2024-04-16
- fix: handle empty thread body with fallback message


### 2024-04-24
- docs: add message passing API reference to docs/API.md


### 2024-04-25
- feat: implement tone selector formal casual concise


### 2024-04-29
- feat: add keyboard shortcut to toggle assistant sidebar


### 2024-05-01
- fix: handle long email thread exceeding context limit


### 2024-05-05
- fix: handle OpenAI network error with user-friendly message


### 2024-05-07
- style: fix eslint violations across content scripts


### 2024-05-21
- fix: handle OpenAI network error with user-friendly message


### 2024-05-24
- refactor: move SQLite schema to migration files


### 2024-05-27
- feat: add Tailwind CSS scoped styles for sidebar UI


### 2024-05-29
- refactor: consolidate API key retrieval into storage module


### 2024-05-29
- fix: resolve SQLite WAL mode file locking conflict


### 2024-05-29
- fix: handle long email thread exceeding context limit


### 2024-06-04
- feat: implement background service worker for AI processing


### 2024-06-05
- feat: add OpenAI Agents SDK three-agent setup


### 2024-06-07
- refactor: consolidate API key retrieval into storage module


### 2024-06-13
- feat: add reply drafting agent with configurable tone control


### 2024-06-14
- fix: resolve Outlook DOM selector change after UI update


### 2024-06-21
- fix: resolve race condition between concurrent messages


### 2024-06-25
- test: add Zod message schema validation tests


### 2024-07-05
- feat: implement loading spinner during AI processing


### 2024-07-06
- feat: implement Chrome Manifest V3 extension scaffold


### 2024-07-14
- docs: update CONTRIBUTING.md with extension reload workflow


### 2024-07-15
- feat: add OpenAI Agents SDK three-agent setup


### 2024-07-16
- feat: add keyboard shortcut to toggle assistant sidebar


### 2024-07-27
- fix: correct SQLite database path on different OS


### 2024-07-28
- feat: add support for Gmail conversation view threading


### 2024-07-30
- feat: add reply drafting agent with configurable tone control


### 2024-08-02
- feat: implement sidebar panel injection via content script


### 2024-08-03
- test: add mock-based test for OpenAI agent calls


### 2024-08-06
- chore: configure Vite for Chrome extension build output


### 2024-08-07
- fix: handle empty thread body with fallback message


### 2024-08-09
- fix: handle missing email body element in DOM extraction


### 2024-08-12
- feat: add Tailwind CSS scoped styles for sidebar UI


### 2024-08-12
- feat: add content script injection for Gmail inbox pages


### 2024-08-16
- feat: implement action item extraction agent


### 2024-08-17
- fix: resolve SQLite WAL mode file locking conflict


### 2024-08-20
- feat: implement action item extraction agent


### 2024-08-22
- test: add unit tests for Gmail thread DOM extraction


### 2024-09-04
- feat: implement SQLite schema with version migrations


### 2024-09-04
- feat: add Outlook Web support in content script


### 2024-09-06
- fix: handle missing email body element in DOM extraction


### 2024-09-06
- feat: implement Chrome Manifest V3 extension scaffold


### 2024-09-15
- fix: handle long email thread exceeding context limit


### 2024-09-17
- docs: add message passing API reference to docs/API.md


### 2024-09-26
- chore: bump TypeScript to 5.4


### 2024-09-29
- fix: resolve race condition between concurrent messages


### 2024-10-01
- feat: implement background service worker for AI processing


### 2024-10-03
- feat: add support for Gmail conversation view threading


### 2024-10-07
- feat: implement action item extraction agent


### 2024-10-14
- feat: add OpenAI Agents SDK three-agent setup


### 2024-10-16
- feat: implement email thread summarisation agent


### 2024-10-18
- feat: add Outlook Web support in content script


### 2024-10-20
- fix: correct SQLite database path on different OS


### 2024-10-21
- feat: implement SQLite schema with version migrations


### 2024-10-28
- test: add Zod message schema validation tests


### 2024-11-02
- chore: configure Vite for Chrome extension build output


### 2024-11-02
- docs: update architecture.md with service worker lifecycle


### 2024-11-06
- refactor: separate agent definitions from service worker


### 2024-11-07
- feat: implement Chrome Manifest V3 extension scaffold


### 2024-11-09
- fix: correct chrome.runtime message size limit handling


### 2024-11-12
- test: add service worker message handler unit tests


### 2024-11-13
- fix: fix sidebar z-index conflict with Gmail compose window


### 2024-11-20
- feat: add support for Gmail conversation view threading


### 2024-11-25
- fix: resolve Outlook DOM selector change after UI update


### 2024-11-27
- feat: implement copy-to-clipboard for generated drafts


### 2024-12-02
- refactor: separate agent definitions from service worker


### 2024-12-02
- fix: handle empty thread body with fallback message


### 2024-12-04
- feat: add OpenAI Agents SDK three-agent setup


### 2024-12-04
- refactor: separate agent definitions from service worker


### 2024-12-09
- fix: handle OpenAI network error with user-friendly message


### 2024-12-11
- refactor: consolidate message type definitions into enum


### 2024-12-13
- docs: add message passing API reference to docs/API.md


### 2024-12-15
- test: add unit tests for Gmail thread DOM extraction


### 2024-12-16
- feat: implement tone selector formal casual concise


### 2024-12-18
- chore: bump TypeScript to 5.4


### 2024-12-20
- feat: add extension badge showing unread action count


### 2024-12-20
- feat: add Outlook Web support in content script


### 2024-12-24
- chore: bump TypeScript to 5.4


### 2024-12-24
- docs: add screenshots guide placeholder to README


### 2024-12-25
- fix: correct chrome.runtime message size limit handling


### 2025-01-09
- fix: fix Zod schema for nullable thread sender fields


### 2025-01-14
- feat: add keyboard shortcut to toggle assistant sidebar


### 2025-01-21
- fix: handle empty thread body with fallback message


### 2025-01-28
- chore: configure Vite for Chrome extension build output


### 2025-01-28
- docs: add screenshots guide placeholder to README


### 2025-01-29
- fix: resolve Outlook DOM selector change after UI update


### 2025-01-31
- feat: implement Chrome Manifest V3 extension scaffold


### 2025-02-09
- fix: correct SQLite database path on different OS


### 2025-03-04
- feat: implement copy-to-clipboard for generated drafts


### 2025-03-05
- test: add unit tests for Gmail thread DOM extraction


### 2025-03-18
- feat: add extension badge showing unread action count


### 2025-03-19
- fix: fix sidebar z-index conflict with Gmail compose window


### 2025-03-27
- feat: implement settings page for API key configuration


### 2025-03-31
- perf: cache DOM extraction result per thread ID


### 2025-04-02
- feat: add inline error message display for API failures


### 2025-04-09
- feat: add content script injection for Gmail inbox pages


### 2025-04-19
- feat: add extension badge showing unread action count


### 2025-04-21
- feat: implement DOM thread context extraction for Gmail


### 2025-04-22
- docs: update CONTRIBUTING.md with extension reload workflow


### 2025-04-22
- feat: implement tone selector formal casual concise


### 2025-04-30
- fix: fix Zod schema for nullable thread sender fields


### 2025-05-04
- feat: add better-sqlite3 local history storage


### 2025-05-07
- feat: add Tailwind CSS scoped styles for sidebar UI


### 2025-05-13
- test: add unit tests for Gmail thread DOM extraction


### 2025-05-14
- refactor: separate agent definitions from service worker


### 2025-05-15
- docs: document permission requirements in manifest notes


### 2025-05-15
- docs: add screenshots guide placeholder to README


### 2025-05-16
- fix: resolve race condition between concurrent messages


### 2025-05-18
- fix: handle empty thread body with fallback message


### 2025-05-20
- fix: fix service worker lifecycle reset on Chrome restart


### 2025-05-21
- chore: add extension-specific eslint rules


### 2025-05-22
- feat: implement email thread summarisation agent


### 2025-06-03
- feat: implement DOM thread context extraction for Gmail


### 2025-06-04
- fix: fix sidebar persistence across Gmail soft navigation


### 2025-06-11
- refactor: separate Gmail and Outlook content script logic


### 2025-06-13
- refactor: extract sidebar rendering into component functions


### 2025-06-14
- feat: implement DOM thread context extraction for Gmail


### 2025-07-01
- feat: add Zod schema validation for all message types


### 2025-07-02
- perf: cache DOM extraction result per thread ID


### 2025-07-05
- feat: add OpenAI Agents SDK three-agent setup


### 2025-07-21
- feat: implement action item extraction agent


### 2025-07-22
- style: fix eslint violations across content scripts


### 2025-07-25
- fix: resolve race condition between concurrent messages


### 2025-07-28
- fix: handle empty thread body with fallback message


### 2025-07-28
- refactor: extract sidebar rendering into component functions


### 2025-08-04
- chore: configure Vite for Chrome extension build output


### 2025-08-06
- docs: document Chrome extension installation steps in README


### 2025-08-17
- fix: resolve content script isolated world access issue


### 2025-08-18
- feat: implement settings page for API key configuration


### 2025-08-19
- feat: implement tone selector formal casual concise


### 2025-08-24
- refactor: consolidate message type definitions into enum


### 2025-08-26
- fix: handle missing email body element in DOM extraction


### 2025-08-26
- feat: implement settings page for API key configuration


### 2025-08-27
- refactor: consolidate API key retrieval into storage module


### 2025-08-28
- test: add service worker message handler unit tests


### 2025-09-02
- feat: add extension badge showing unread action count


### 2025-09-05
- refactor: extract DOM selectors to dedicated module


### 2025-09-06
- fix: handle missing email body element in DOM extraction


### 2025-09-12
- test: add Zod message schema validation tests


### 2025-09-12
- test: add unit tests for Gmail thread DOM extraction


### 2025-09-15
- feat: add inline error message display for API failures


### 2025-09-15
- perf: cache DOM extraction result per thread ID


### 2025-09-16
- feat: implement copy-to-clipboard for generated drafts


### 2025-09-19
- style: fix eslint violations across content scripts


### 2025-09-19
- feat: implement chrome.runtime message passing protocol


### 2025-09-25
- test: add Zod message schema validation tests


### 2025-09-26
- style: fix eslint violations across content scripts


### 2025-09-28
- feat: implement tone selector formal casual concise


### 2025-09-30
- perf: lazy-load SQLite module on first history access


### 2025-09-30
- feat: implement threading context for contextual reply drafts


### 2025-10-07
- fix: fix keyboard shortcut conflict with Gmail native keys


### 2025-10-09
- refactor: extract DOM selectors to dedicated module


### 2025-10-14
- docs: document Chrome extension installation steps in README


### 2025-10-17
- feat: implement loading spinner during AI processing


### 2025-10-20
- fix: handle long email thread exceeding context limit


### 2025-10-27
- fix: resolve SQLite WAL mode file locking conflict


### 2025-10-31
- fix: resolve race condition between concurrent messages


### 2025-11-11
- refactor: extract sidebar rendering into component functions


### 2025-11-12
- fix: fix sidebar z-index conflict with Gmail compose window


### 2025-11-14
- chore: add extension-specific eslint rules


### 2025-11-19
- test: add service worker message handler unit tests


### 2025-11-21
- feat: add Zod schema validation for all message types


### 2025-11-24
- feat: add history panel listing past AI interactions


### 2025-11-24
- feat: add inline error message display for API failures


### 2025-11-26
- fix: fix sidebar persistence across Gmail soft navigation


### 2025-11-29
- fix: handle missing email body element in DOM extraction


### 2025-12-03
- feat: add content script injection for Gmail inbox pages


### 2025-12-07
- feat: add history panel listing past AI interactions


### 2025-12-09
- feat: add Outlook Web support in content script


### 2025-12-10
- fix: handle undefined API key on first extension launch


### 2025-12-15
- feat: add keyboard shortcut to toggle assistant sidebar


### 2025-12-16
- feat: add Tailwind CSS scoped styles for sidebar UI


### 2025-12-18
- fix: resolve race condition between concurrent messages


### 2025-12-18
- refactor: consolidate message type definitions into enum


### 2025-12-21
- feat: add content script injection for Gmail inbox pages


### 2025-12-24
- test: add Zod message schema validation tests


### 2025-12-26
- fix: fix sidebar z-index conflict with Gmail compose window


### 2025-12-26
- feat: add Outlook Web support in content script


### 2025-12-30
- fix: fix service worker lifecycle reset on Chrome restart


### 2026-01-02
- style: fix eslint violations across content scripts


### 2026-01-02
- fix: handle missing email body element in DOM extraction


### 2026-01-15
- fix: resolve Gmail CSS specificity override conflict


### 2026-01-28
- refactor: consolidate message type definitions into enum


### 2026-01-30
- feat: implement tone selector formal casual concise


### 2026-01-30
- fix: handle empty thread body with fallback message


### 2026-02-08
- fix: correct SQLite database path on different OS


### 2026-02-09
- feat: add content script injection for Gmail inbox pages


### 2026-02-12
- refactor: separate Gmail and Outlook content script logic


### 2026-02-14
- style: fix eslint violations across content scripts


### 2026-02-28
- feat: implement copy-to-clipboard for generated drafts


### 2026-03-01
- feat: add reply drafting agent with configurable tone control


### 2026-03-03
- refactor: extract DOM selectors to dedicated module


### 2026-03-09
- refactor: consolidate message type definitions into enum


### 2026-03-10
- chore: update manifest.json permissions for Outlook support


### 2026-03-12
- fix: handle missing email body element in DOM extraction


### 2026-03-16
- feat: implement settings page for API key configuration


### 2026-03-17
- feat: implement email thread summarisation agent


### 2026-03-18
- docs: update CONTRIBUTING.md with extension reload workflow


### 2026-03-19
- refactor: extract sidebar rendering into component functions


### 2026-03-23
- fix: resolve content script isolated world access issue


### 2026-03-23
- test: add service worker message handler unit tests


### 2026-03-25
- docs: document Chrome extension installation steps in README


### 2026-04-03
- feat: implement chrome.runtime message passing protocol


### 2026-04-07
- docs: add message passing API reference to docs/API.md


### 2026-04-08
- feat: implement action item extraction agent


### 2026-04-08
- docs: update architecture.md with service worker lifecycle


### 2026-04-09
- chore: bump TypeScript to 5.4


### 2026-04-15
- feat: implement action item extraction agent


