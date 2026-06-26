# DEVLOG — gheloo-lightart

Shift handoff log. Every agent reads this at start, updates at end.

---

## [2026-06-26] Claude — Session 1

**Done:**
- Uploaded project to GitHub: https://github.com/Iglup1/gheloo-lightart
- Set up repo, git identity, initial commit

**Project state:**
- `pixelart-lightart.js` — single-file browser extension, 2243 lines, fully functional
- Runs in Habbo Hotel browser client (injected script)
- Uses `window.PKT`, `window.sendPacket`, `window.onPacket`, `window.Inventory` — provided by game client/extension host (`window.__ghk_ready`)

**What this script does:**
- Upload image → convert to pixel art plan using colored lights (S/M/L/XL/XXL sizes, 8 colors)
- Auto-buy missing lights from catalog
- Auto-build in room with chunk support (split large rooms into sections)
- Preview (canvas render + room packet inject)
- Checkpoint/resume if build interrupted
- Settings persisted to `localStorage`

**Key internals:**
- `makePlan()` — generates light placement plan from image
- `addLightArtRaster()` — light_art mode raster scan (3 passes: base/mid/glow)
- `placeGrouped()` — places items grouped by height/state/rotation
- `placeWithWatchdog()` — retry logic per item, waits for `ObjectAdd` ack
- `setBuildSetting()` — sends `:bh/:bs/:bd` chat commands, waits confirmation
- `chunkGridInfo()` / `chunkAnchor()` — chunk coordinate system
- `buyMissing()` — inventory diff → purchase jobs

**Open / next:**
- No specific next task yet — owner will instruct next session

---

## [2026-06-26] Claude — Session 2

**Done:**
- Fixed critical y-axis flip bug in `makeProjectedBuildObjects` for light_art mode
- Fixed lx/ly normalization (light_art now uses direct pixel coords, not maxPx stretch)
- Removed "Canvas kamer-preview" button (user confirmed not needed)
- Added distinct toggle CSS for "Plaats preview in kamer": light blue = inactive, dark blue = active

**Root cause of bad room output:**
The formula was `y = anchorY - localY`, which placed image-top at room-bottom (upside-down per chunk).
Fixed to: `y = anchorY - (logicalH - 1 - localY)` — image-top now maps to room-top (lower y = upper screen).

**Changed files:** `pixelart-lightart.js`

**Open / next:**
- Test in-game: load Joker image, chunk 2×2×20, verify lights land in correct positions
- Chunk numbering already correct in original (1=top-left y=33, 2=bottom-left y=62, 3=top-right, 4=bottom-right)
- Preview button toggle works via `injectObjectsPacket` + `injectObjectRemove` — no actual building
- Algorithm quality may need further tuning after coordinate fix is verified

---

## [2026-06-26] Codex — Session 3

**Done:**
- Read `CODEX_INSTRUCTIONS.md` and latest `DEVLOG.md`.
- Cloned/pulled `gheloo-lightart` locally and confirmed the GitHub repo is now the source of truth.
- Verified `pixelart-lightart.js` already contains the current Light Art fixes: raster-based preview generation, fake `{in:Objects}` room preview injection, fast `{in:ObjectRemove}` cleanup, marker preview objects, and the y-axis chunk placement fix.

**Changed files:**
- `DEVLOG.md`

**Open / next:**
- Continue all future work in `C:\Users\prepa\OneDrive\Bureaublad\gheloo-lightart\pixelart-lightart.js`.
- After testing in-game, tune the Light Art algorithm further if the room preview still looks too blurry or too sparse.

---

## [2026-06-26] Codex — Session 4

**Done:**
- Added a collaboration rule requiring concrete file + line references in final summaries and `DEVLOG.md`.
- This is explicitly for both Codex and Claude, so Kenjy does not have to keep re-explaining what changed or where.

**Changed files:**
- `CODEX_INSTRUCTIONS.md:47` — added the line-reference reporting requirement.
- `DEVLOG.md` — added this handoff entry.

**Open / next:**
- Claude and Codex should include references like `pixelart-lightart.js:1405` whenever they explain important changes.
- Continue testing the latest `pixelart-lightart.js`; Claude pushed a small code update before this entry was added.

---

## [2026-06-26] Codex — Session 5

**Done:**
- Added `CLAUDE_INSTRUCTIONS.md`, a paste-ready instruction handoff Kenjy can send to Claude.
- Added a workflow rule that when Kenjy tells Codex "Claude should do X", Codex must automatically communicate that through `DEVLOG.md` instead of relying on Kenjy to repeat it.

**Changed files:**
- `CLAUDE_INSTRUCTIONS.md:1` — new Claude-facing briefing with repo workflow, reporting style, project rules, current Light Art focus, and handoff behavior.
- `CODEX_INSTRUCTIONS.md:14` — added automatic Claude handoff rule for Codex.
- `CODEX_INSTRUCTIONS.md:50` — added requirement to keep `CLAUDE_INSTRUCTIONS.md` updated when collaboration rules change.
- `DEVLOG.md` — added this handoff entry.

**Open / next:**
- If Kenjy says "Claude moet ..." in a Codex session, add that request to the latest `DEVLOG.md` entry or create a new handoff entry and push it.
- Claude should read `CLAUDE_INSTRUCTIONS.md` plus latest `DEVLOG.md` before editing.

---

## [2026-06-26] Codex - Session 6

**Done:**
- Added `PROJECT_BRIEFING.md`, a shared current-state briefing explaining what has already been built, where the important code lives, and what assumptions are stale/current.
- Updated Codex and Claude instructions so both agents must read `PROJECT_BRIEFING.md` before changing code.

**Changed files:**
- `PROJECT_BRIEFING.md:1` - new shared project-state briefing.
- `PROJECT_BRIEFING.md:19` - source-of-truth and "do not edit logger" rules.
- `PROJECT_BRIEFING.md:34` - important `pixelart-lightart.js` line references for preview, generator, chunks, markers, build, watchdog, and UI.
- `PROJECT_BRIEFING.md:54` - summary of what has already been fixed.
- `PROJECT_BRIEFING.md:64` - current caution points, including stale old devlog note about `Canvas kamer-preview`.
- `CODEX_INSTRUCTIONS.md:11` - Codex must read `DEVLOG.md` and `PROJECT_BRIEFING.md` at session start.
- `CODEX_INSTRUCTIONS.md:47` - Codex must read `PROJECT_BRIEFING.md` before code changes.
- `CLAUDE_INSTRUCTIONS.md:28` - Claude must read `PROJECT_BRIEFING.md` at session start.
- `CLAUDE_INSTRUCTIONS.md:55` - Claude-specific reminder to read `PROJECT_BRIEFING.md` before changing code.
- `DEVLOG.md` - added this handoff entry.

**Open / next:**
- Keep `PROJECT_BRIEFING.md` updated when major behavior or important line locations change.
- Claude and Codex should now start with three reads: `DEVLOG.md`, `PROJECT_BRIEFING.md`, and their instruction/briefing file.

---

## [2026-06-26] Codex - Session 7

**Done:**
- Renamed `CLAUDE_BRIEFING.md` to `CLAUDE_INSTRUCTIONS.md` so Claude and Codex instruction files use the same naming style.
- Updated references from `CLAUDE_BRIEFING.md` to `CLAUDE_INSTRUCTIONS.md`.
- Added a clear project-purpose section so any AI can understand the goal without Kenjy re-explaining it.

**Changed files:**
- `CLAUDE_INSTRUCTIONS.md:1` - renamed/retitled the Claude handoff file to match `CODEX_INSTRUCTIONS.md`.
- `CLAUDE_INSTRUCTIONS.md:10` - added the project purpose and current Light Art target.
- `PROJECT_BRIEFING.md:7` - added a shared project-purpose section for all agents.
- `PROJECT_BRIEFING.md:69` - updated collaboration-file references to `CLAUDE_INSTRUCTIONS.md`.
- `CODEX_INSTRUCTIONS.md:50` - updated the Claude instruction filename.
- `DEVLOG.md` - renamed Claude instruction references and added this handoff entry.

**Open / next:**
- New agents should read `DEVLOG.md`, `PROJECT_BRIEFING.md`, and their own instruction file before editing.
- Continue Light Art quality/build reliability work in `pixelart-lightart.js`.

---

## HOW TO UPDATE THIS FILE

At **start of session**: read latest entry, understand state.
At **end of session**: add new entry with date, agent name, what changed, current state, what's next.

Format:
```
## [YYYY-MM-DD] <Agent> — Session N

**Done:** bullet list
**Changed files:** list
**Open / next:** bullet list
```

Commit message after update: `devlog: <agent> session N — <one line summary>`
