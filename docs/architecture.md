# Architecture — Email Assistant Extension

## Overview

A Chrome Manifest V3 extension with a three-layer architecture: content scripts injected into email pages, a background service worker for AI processing, and a SQLite-backed history store.

## Content Script (`content.ts`)

Injected into Gmail and Outlook Web pages. Responsibilities:
- Detects email thread context from the DOM
- Extracts subject, sender, and body text
- Injects the assistant sidebar UI
- Sends/receives messages to the background service worker via `chrome.runtime.sendMessage`

## Background Service Worker

The persistent background worker (Manifest V3 service worker) handles:
- Receiving requests from content scripts
- Calling the OpenAI Agents SDK for summarisation, drafting, and action extraction
- Writing results to the local SQLite database via `better-sqlite3`
- Returning responses back to the content script

## OpenAI Agents SDK

Three specialised agents are configured:
- **SummaryAgent** — condenses thread to 3-5 bullet points
- **ReplyAgent** — drafts a contextually appropriate reply
- **ActionAgent** — extracts to-do items and deadlines

## Local Storage (better-sqlite3)

All AI interactions are stored locally in a SQLite database (`~/.email-assistant/history.db`). No data is sent to third-party servers beyond the OpenAI API call.

## Message Passing Protocol

```
Content Script → chrome.runtime.sendMessage({ action, payload })
                                    ↓
                        Background Service Worker
                                    ↓
                        OpenAI API + SQLite
                                    ↓
                        chrome.runtime.sendResponse({ result })
                                    ↓
                            Content Script → UI Update
```
