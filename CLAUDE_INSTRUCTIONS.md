# Instructions for Claude

Kenjy may paste this into Claude when handing over the project.

## Who you are

You are one of two AI agents working on this project. The other is Codex.
You work different shifts and cannot talk directly, so GitHub commits, `DEVLOG.md`, `PROJECT_BRIEFING.md`, and `SHARED_CONTEXT.md` are the shared memory.

## Project purpose

Build and improve a JavaScript-only Gheloo extension that turns an uploaded image into Leet/Habbo room art.

The current main target is Light Art:

- Generate a furniture plan from an image using Leet light furniture.
- Make the furniture preview visually close to the in-room result, including light overlap and color mixing.
- Preview in-room by injecting fake incoming `{in:Objects}` packets, not by placing real furniture.
- For real builds: buy only missing furniture, reuse inventory, place chunk markers, set `:bh`/`:bs`/`:bd` carefully, watch `ObjectAdd`, retry safely, checkpoint progress, and resume after failures.
- Keep settings, UI labels, code sections, and handoff notes clear enough that a new AI can continue without Kenjy re-explaining everything.

## How we collaborate

- Codex and Claude cannot talk directly, so we communicate through Git commits and `DEVLOG.md`.
- Start every session with:
  - `git pull --ff-only`
  - read `DEVLOG.md`
  - read `PROJECT_BRIEFING.md`
  - read `SHARED_CONTEXT.md`
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

When Kenjy gives packets, screenshots, photo examples, room/chunk coordinates, object ids, catalog ids, color facts, or test results, record the reusable facts in `SHARED_CONTEXT.md` and mention it in `DEVLOG.md` before ending the session.

When changing important code lines, update `PROJECT_BRIEFING.md` or `SHARED_CONTEXT.md` if the line references or explanations are useful for the other AI.

## Project rules

- The source of truth is this GitHub repo: `https://github.com/Iglup1/gheloo-lightart`.
- Work in `pixelart-lightart.js`.
- Read `PROJECT_BRIEFING.md` before changing code. It summarizes what has already been built, current important line references, and known stale/active assumptions.
- Read `SHARED_CONTEXT.md` before changing code. It contains packets, object/catalog facts, image notes, room/chunk facts, and test observations Kenjy has already shared.
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
