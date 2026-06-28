# Instructions for Codex

## Who you are

You are one of two AI agents working on this project. The other is Claude Code.
We work different shifts — we cannot talk to each other directly.
We communicate via GitHub commits, DEVLOG.md, SHARED_CONTEXT.md, and shared-context/.

## Workflow

1. **Start of every session:** Pull latest from GitHub. Read `DEVLOG.md`, `PROJECT_BRIEFING.md`, and `SHARED_CONTEXT.md` before changing code. The last `DEVLOG.md` entry tells you current handoff state; `PROJECT_BRIEFING.md` summarizes what has already been built and where; `SHARED_CONTEXT.md` contains reusable packets, screenshots notes, room facts, and test observations from Kenjy.
2. **Do the work** the owner asks.
3. **After EVERY code change** (not just end of session): update `DEVLOG.md`, commit `pixelart-lightart.js` + `DEVLOG.md` together, push to GitHub. Do not batch multiple changes into one DEVLOG entry at the end — update after each commit. This way if tokens run out or Kenjy switches agents mid-session, the other agent has full context.
4. **Immediately when Kenjy shares anything** (photos, pixel sizes, packets, coordinates, screenshots, measurements, test results): record the reusable facts in `SHARED_CONTEXT.md`, commit and push it immediately. Do not wait until end of session. If tokens run out before you do this, the other agent loses all context Kenjy gave you.
5. If Kenjy says Claude should do something, automatically communicate it by adding a clear handoff item to `DEVLOG.md` with concrete file + line references where possible. Do not rely on Kenjy to repeat it manually.

## Mandatory shared-memory updates

This is required every time, even when Kenjy does not explicitly ask for it:

- After code changes, update `DEVLOG.md` with what changed, why, verification, and concrete file/line references.
- When Kenjy gives reusable facts, update `SHARED_CONTEXT.md`.
- When Kenjy gives packets, screenshots, source images, generated previews, or detailed test evidence, copy/save accessible files under `shared-context/assets/...` and index them in `shared-context/ASSET_INDEX.md`.
- When Kenjy gives durable rules, packet meanings, chunk coordinates, colour facts, UI rules, or workflow rules, update `shared-context/notes/PROJECT_MEMORY.md`.
- Keep `shared-context/SHARED_CONTEXT.md` mirrored from root `SHARED_CONTEXT.md` after context changes.
- Commit and push documentation/context updates even if no code changed.
- Before starting work, read the latest `DEVLOG.md` entry plus relevant shared-context notes so Codex and Claude stay synchronized.

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
- Always read PROJECT_BRIEFING.md before changing code
- Always read SHARED_CONTEXT.md before changing code
- Always update DEVLOG.md and push before ending session
- Always include concrete file + line references for important changes in both the final user summary and DEVLOG.md, e.g. `pixelart-lightart.js:1405`. Mention what changed there and why. This is required so Codex, Claude, and Kenjy can understand each other without Kenjy having to re-explain context every session.
- When you change important code lines, update `PROJECT_BRIEFING.md` or `SHARED_CONTEXT.md` if those line references or explanations are useful for the other AI.
- Keep `CLAUDE_INSTRUCTIONS.md` up to date when collaboration rules change; Kenjy can paste it to Claude as the human-readable handoff instructions.
- The owner (Kenjy) is not technical — explain changes in plain Dutch when reporting back
