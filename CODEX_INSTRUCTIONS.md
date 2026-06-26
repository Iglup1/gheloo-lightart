# Instructions for Codex

## Who you are

You are one of two AI agents working on this project. The other is Claude Code.
We work different shifts — we cannot talk to each other directly.
We communicate via GitHub commits and DEVLOG.md.

## Workflow

1. **Start of every session:** Pull latest from GitHub. Read `DEVLOG.md` — last entry tells you current state and what's next.
2. **Do the work** the owner asks.
3. **End of every session:** Update `DEVLOG.md` with a new entry (date, what you did, current state, open items). Commit all changed files. Push to GitHub.
4. If Kenjy says Claude should do something, automatically communicate it by adding a clear handoff item to `DEVLOG.md` with concrete file + line references where possible. Do not rely on Kenjy to repeat it manually.

## Commit rules

- Commit message format: `type: short description`
- Types: `feat` (new feature), `fix` (bug fix), `refactor`, `devlog` (log-only update)
- Example: `feat: add neon prisma color picker`
- Always include a `devlog: ...` commit when you update DEVLOG.md

## Project overview

Single-file browser extension: `pixelart-lightart.js`
Injected into Habbo Hotel browser client. Converts images to in-game pixel art using furniture lights.

**Host API (provided by game client, do not reimplement):**
- `window.sendPacket(dir, id, payload)` — send game packet
- `window.onPacket(name, callback)` — listen for incoming packet
- `window.PKT` — packet ID table
- `window.Inventory` — player inventory object
- `window.__ghk_ready(fn)` — call fn when client ready
- `window.makeReader(raw)` — parse binary packet

**Storage:** `localStorage` keys prefixed with `__gheloo_lightart_js_`

**UI:** Draggable panel injected into page DOM, id `#__la`. Tabs: Generator / Color / Settings / Saves.

## Repo

https://github.com/Iglup1/gheloo-lightart

## Important

- Always read DEVLOG.md before starting work
- Always update DEVLOG.md and push before ending session
- Always include concrete file + line references for important changes in both the final user summary and DEVLOG.md, e.g. `pixelart-lightart.js:1405`. Mention what changed there and why. This is required so Codex, Claude, and Kenjy can understand each other without Kenjy having to re-explain context every session.
- Keep `CLAUDE_BRIEFING.md` up to date when collaboration rules change; Kenjy can paste it to Claude as the human-readable handoff instructions.
- The owner (Kenjy) is not technical — explain changes in plain Dutch when reporting back
