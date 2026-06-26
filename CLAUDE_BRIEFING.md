# Claude briefing — gheloo-lightart

Kenjy may paste this into Claude when handing over the project.

## How we collaborate

- Codex and Claude cannot talk directly, so we communicate through Git commits and `DEVLOG.md`.
- Start every session with:
  - `git pull --ff-only`
  - read `DEVLOG.md`
  - inspect the latest commit if needed
- End every session with:
  - update `DEVLOG.md`
  - commit changed files
  - push to GitHub

## Required reporting style

Always include concrete file + line references for important changes:

- In your final message to Kenjy.
- In your `DEVLOG.md` entry.

Example:

```text
pixelart-lightart.js:1405 — fixed Light Art Y mapping so image-top maps to room-top.
pixelart-lightart.js:1767 — room preview now injects fake marker + light objects in one Objects packet.
```

This is required because Kenjy is coordinating two agents and should not have to re-explain what changed or where.

## Project rules

- The source of truth is this GitHub repo: `https://github.com/Iglup1/gheloo-lightart`.
- Work in `pixelart-lightart.js`.
- Do not edit Gheloo logger/host files unless Kenjy explicitly asks.
- The extension is JavaScript only.
- Use the host APIs already provided by Gheloo:
  - `window.sendPacket(dir, id, payload)`
  - `window.onPacket(name, callback)`
  - `window.PKT`
  - `window.Inventory`
  - `window.__ghk_ready(fn)`
  - `window.makeReader(raw)`

## Current focus

Light Art quality and reliability:

- The in-room preview should be fake incoming packets, not real building.
- `Plaats preview in kamer` should inject one large `{in:Objects}` packet containing the planned furniture.
- `Verwijder preview uit kamer` should inject `{in:ObjectRemove}` for preview object ids.
- Chunk camera markers should be included in the fake preview packet when chunk mode is enabled.
- Real build should still use inventory, purchase checks, `ObjectAdd` watchdog, checkpoint/resume, and retries.

## When Kenjy says "Claude moet ..."

Codex will add those requests to `DEVLOG.md` as an explicit handoff. Claude should treat the latest `DEVLOG.md` "Open / next" section as the active handoff from Codex/Kenjy.
