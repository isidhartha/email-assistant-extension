# Contributing to Email Assistant Extension

## Getting Started

1. Fork and clone
2. Create a branch: `git checkout -b feature/your-feature`
3. Install: `npm install`
4. Add your `OPENAI_API_KEY` to `.env`
5. Build: `npm run build`
6. Load `dist/` as an unpacked extension in Chrome
7. Lint: `npm run lint`
8. Open a Pull Request

## Testing

Test manually on Gmail and Outlook Web. Automated tests for business logic can be run with `npm test`.

## Chrome Extension Notes

- Manifest V3 only (no MV2 background pages)
- Use `chrome.storage.local` for cross-context state, not `localStorage`
- Content scripts run in isolated worlds — communicate via `chrome.runtime.sendMessage`
