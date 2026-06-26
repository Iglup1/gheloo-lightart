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

## [2026-06-26] Codex - Session 8

**Done:**
- Added `SHARED_CONTEXT.md` as the shared place for packets, screenshots/photo notes, room layouts, catalog/object facts, color facts, and test observations Kenjy gives to one AI but both agents need.
- Updated Codex and Claude instructions so both agents must read `SHARED_CONTEXT.md` before changing code and update it when Kenjy shares reusable technical context.
- Added a rule that important code-line explanations should be reflected in `PROJECT_BRIEFING.md` or `SHARED_CONTEXT.md` when useful for the other AI.

**Changed files:**
- `SHARED_CONTEXT.md:1` - new shared context file.
- `SHARED_CONTEXT.md:17` - current packet/game facts, including light `bs` color meanings and `:bh 0` behavior.
- `SHARED_CONTEXT.md:34` - catalog/furniture facts for chunk markers and number markers.
- `SHARED_CONTEXT.md:50` - Light Art visual target and overlap/color expectations.
- `SHARED_CONTEXT.md:58` - build reliability target for settings, ObjectAdd, retries, and checkpoints.
- `PROJECT_BRIEFING.md:5` - project briefing must now be read together with `DEVLOG.md` and `SHARED_CONTEXT.md`.
- `PROJECT_BRIEFING.md:33` - packets, screenshots, test results, room facts, and algorithm explanations must be shared.
- `PROJECT_BRIEFING.md:71` - reminder to keep `SHARED_CONTEXT.md` updated.
- `CODEX_INSTRUCTIONS.md:11` - Codex startup now includes `SHARED_CONTEXT.md`.
- `CODEX_INSTRUCTIONS.md:15` - Codex must record reusable packets/screenshots/test facts in `SHARED_CONTEXT.md`.
- `CODEX_INSTRUCTIONS.md:52` - Codex must update shared line explanations when useful for the other AI.
- `CLAUDE_INSTRUCTIONS.md:29` - Claude startup now includes `SHARED_CONTEXT.md`.
- `CLAUDE_INSTRUCTIONS.md:52` - Claude must record reusable packets/screenshots/test facts in `SHARED_CONTEXT.md`.
- `CLAUDE_INSTRUCTIONS.md:54` - Claude must update shared line explanations when useful for the other AI.

**Open / next:**
- When Kenjy gives either AI packets, screenshots, image examples, chunk coordinates, catalog/object ids, or build logs, put the reusable facts in `SHARED_CONTEXT.md` before ending the session.
- Continue Light Art quality/build reliability work in `pixelart-lightart.js`.

---

## [2026-06-26] Codex - Session 9

**Done:**
- Simulated the new shared-context workflow by adding a compact Claude onboarding snapshot with the important facts Kenjy already gave Codex.
- Added historical context about the Light Art goal, preview/build expectations, known packets, light color states, chunk behavior, UI expectations, and current risks.
- Linked the onboarding snapshot from `PROJECT_BRIEFING.md` so Claude sees it before spending time on Light Art work.

**Changed files:**
- `SHARED_CONTEXT.md:69` - added Claude onboarding snapshot for the long Kenjy/Codex conversation.
- `SHARED_CONTEXT.md:73` - repository/workflow facts and the "do not edit logger" rule.
- `SHARED_CONTEXT.md:83` - what Kenjy is trying to build.
- `SHARED_CONTEXT.md:91` - important `pixelart-lightart.js` code entry points.
- `SHARED_CONTEXT.md:108` - light state/color mapping and color-mixing expectations.
- `SHARED_CONTEXT.md:126` - fake incoming room-preview expectations.
- `SHARED_CONTEXT.md:137` - chunk/room layout expectations and marker purchase packets.
- `SHARED_CONTEXT.md:150` - real build reliability, whispers, ObjectAdd, pickup, watchdog, and resume expectations.
- `SHARED_CONTEXT.md:171` - UI expectations.
- `SHARED_CONTEXT.md:183` - what has already been fixed or partially fixed.
- `SHARED_CONTEXT.md:197` - risky/next-work areas.
- `PROJECT_BRIEFING.md:34` - points future agents to `SHARED_CONTEXT.md:69` before Light Art work.
- `DEVLOG.md` - added this handoff entry.

**Open / next:**
- Claude should read `SHARED_CONTEXT.md:69` before changing `pixelart-lightart.js`; that section is meant to stop duplicate questions and coin-burning.
- Continue actual Light Art algorithm/build fixes in `pixelart-lightart.js`.

---

## [2026-06-26] Claude — Session 10

**Done:**
- Read `CLAUDE_INSTRUCTIONS.md`, `DEVLOG.md`, `PROJECT_BRIEFING.md`, `SHARED_CONTEXT.md` (pulled latest from GitHub first).
- Rewrote `addLightArtRaster` at `pixelart-lightart.js:668` with a deterministic 3-pass algorithm:
  - Pass 1 (lines 673-694): S light at every visible non-dark pixel, no random jitter or noise thresholds. Uses `chooseLightMix` directly (correct color penalties already built in). Up to 2 colors per pixel when `mixPower > 68`.
  - Pass 2 (lines 696-711): M glow light every 2nd pixel for pixels with luminance >= 0.20.
  - Pass 3 (lines 713-730): L bloom light every 4th pixel for luminance >= 0.40, only when `stackPower > 40`.
- Old algorithm used `noise01()` thresholds and `jitter()` offsets — these caused random sparse blobs instead of a recognizable image.
- New algorithm is fully deterministic: same image always gives same output, every visible pixel gets an S light.

**Root cause of old bad output:**
`noise01(x, y, 503) > threshold` randomly skipped pixels in pass 2 and 3. Combined with `jitter()` displacing pass 1 lights slightly, result was scattered random dots instead of clean pixel art.

**Changed files:**
- `pixelart-lightart.js:668-731` — full rewrite of `addLightArtRaster`

**Open / next:**
- Test in-game with Joker image + 2×2×20 chunk mode. Preview should now show recognizable image.
- If image is still too sparse, lower `darkCut` threshold in settings (controls which dark pixels get skipped at `pixelart-lightart.js:825`).
- If too many lights for budget, raise `maxLights` or reduce `stackPower` to skip pass 3.
- Chunk coordinate mapping (Y-axis fix from session 2) remains in place — `pixelart-lightart.js:1405`.

---

## [2026-06-26] Codex - Session 10

**Done:**
- Investigated Kenjy's new bad preview packet/screenshot where the generated lights were visibly outside the chunk outlines.
- Parsed the provided `{in:Objects}` packet: markers confirm chunk anchors `1=(21,33)`, `2=(21,62)`, `3=(51,33)`, `4=(51,62)`.
- Fixed chunk 4 anchor and stopped Light Art from using the anti-overlap tile spreader that pushed stacked lights out of their chunks.
- Updated `SHARED_CONTEXT.md` with the packet-derived facts and the root cause so Claude does not repeat this mistake.

**Changed files:**
- `pixelart-lightart.js:1180` - changed chunk 4 exact anchor to `{ x: 51, y: 62 }` based on Kenjy's marker packet.
- `pixelart-lightart.js:1409` - Light Art now keeps calculated `{ x, y }` directly; only non-Light-Art modes use `reserveTile(...)`.
- `SHARED_CONTEXT.md:142` - added exact marker anchors from Kenjy's room/object packet.
- `SHARED_CONTEXT.md:211` - added latest chunk-outline bug report and packet analysis.
- `SHARED_CONTEXT.md:217` - documented root cause: `reserveTile(...)` spread overlapped Light Art lamps outside chunks.
- `DEVLOG.md` - added this handoff entry.

**Verification:**
- Ran `node --check pixelart-lightart.js` successfully.

**Open / next:**
- Kenjy should retest `Plaats preview in kamer`; expected result is that Light Art lamps stack/overlap inside the chunk anchors instead of spreading across the room.
- If chunks still look offset, inspect `makeProjectedBuildObjects(...)` around `pixelart-lightart.js:1315` and compare the new packet against the anchors in `SHARED_CONTEXT.md:142`.

---

## [2026-06-26] Codex - Session 11

**Done:**
- Corrected the chunk mapping based on Kenjy's Wired Tool outside-line coordinates instead of marker/label coordinates.
- Fixed chunk numbering to match Kenjy's room: `1=left/bottom`, `2=left/top`, `3=right/bottom`, `4=right/top`.
- Updated all chunk-number consumers so preview overlay, selection, marker specs, and room projection use the same numbering.
- Updated shared context with the inspected outside-line coordinates and derived mapper anchors.

**Changed files:**
- `pixelart-lightart.js:935` - preview chunk overlay now uses shared `chunkNumberForGrid(...)`.
- `pixelart-lightart.js:1023` - canvas/room chunk overlay now uses shared `chunkNumberForGrid(...)`.
- `pixelart-lightart.js:1177` - chunk 1 mapper anchor set to `{ x: 2, y: 61 }`.
- `pixelart-lightart.js:1178` - chunk 2 mapper anchor set to `{ x: 2, y: 32 }`.
- `pixelart-lightart.js:1179` - chunk 3 mapper anchor set to `{ x: 28, y: 58 }`.
- `pixelart-lightart.js:1180` - chunk 4 mapper anchor set to `{ x: 32, y: 32 }`.
- `pixelart-lightart.js:1203` - added `chunkNumberForGrid(col, rowFromTop)` with bottom-to-top numbering per column.
- `pixelart-lightart.js:1212` - room-point chunk lookup now uses `chunkNumberForGrid(...)`.
- `pixelart-lightart.js:1217` - `chunkAnchor(...)` now resolves exact anchors using the same numbering.
- `pixelart-lightart.js:1257` - marker specs now use the same numbering.
- `SHARED_CONTEXT.md:141` - documented Kenjy's real chunk numbering.
- `SHARED_CONTEXT.md:146` - documented inspected outside-line starts.
- `SHARED_CONTEXT.md:151` - documented derived mapper anchors.
- `SHARED_CONTEXT.md:227` - documented the second root cause: marker coords were used instead of outside-line light coords.

**Verification:**
- Ran `node --check pixelart-lightart.js` successfully.

**Open / next:**
- Retest `Plaats preview in kamer`; expected chunk placement now follows the outside-line boxes: chunk 1 from `x2/y42`, chunk 2 from `x2/y13`, chunk 3 from `x28/y39`, chunk 4 from `x32/y13`.

---

## [2026-06-26] Codex - Session 12

**Done:**
- Fixed the remaining Light Art chunk bug Kenjy pointed out: the chunk outline coordinates are left/top camera-frame points, not plain floor-grid anchors.
- Mapped Light Art pixels with the 2D camera projection Kenjy described so a 20x20 chunk builds into the inspected isometric frame instead of random room slabs.
- Kept marker/number anchors separate from the light frame starts.
- Made Light Art generation more grid-stable: mix colors and strength stacks now stay on the same source pixel; large bloom is only used sparsely for bright regions.
- Updated `SHARED_CONTEXT.md` so Claude sees the corrected `bs` state order, frame starts, bboxes, and projection formula.

**Changed files:**
- `pixelart-lightart.js:668` - Light Art raster generation now keeps color mixes stacked on-grid instead of offsetting them sideways.
- `pixelart-lightart.js:694` - added small same-pixel stack lights for strength without moving the source coordinate.
- `pixelart-lightart.js:715` - made large `L` bloom stricter/sparser to reduce out-of-frame blobs.
- `pixelart-lightart.js:1177` - `exactChunkAnchor(...)` is now marker/number label placement only.
- `pixelart-lightart.js:1188` - added `exactLightArtFrameStart(...)` with Kenjy's inspected starts: `1=(2,42)`, `2=(2,13)`, `3=(32,13)`, `4=(28,39)`.
- `pixelart-lightart.js:1218` - default 2x2 chunk numbering now follows the room/bs layout: top row `2,3`, bottom row `1,4`.
- `pixelart-lightart.js:1425` - Light Art `roomX` uses `startX + localX * 0.5 + localY`.
- `pixelart-lightart.js:1426` - Light Art `roomY` uses `startY - localX * 0.5 + localY`.
- `SHARED_CONTEXT.md:138` - replaced the old chunk explanation with Kenjy's `bs 0/1/2/3` layout and the camera-2D projection.
- `SHARED_CONTEXT.md:231` - documented the actual root cause: marker/label coordinates plus rectangle mapping were wrong for the camera frame.

**Verification:**
- Ran `node --check pixelart-lightart.js` successfully.

**Open / next:**
- Kenjy should retest `Plaats preview in kamer`. Expected: the fake incoming Objects preview should sit inside the 2D camera outlines instead of spreading as four random blobs.
- If it still looks skewed, compare the fake preview packet positions against the outline bboxes in `SHARED_CONTEXT.md:151`.

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
