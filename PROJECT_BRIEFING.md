# Project briefing - current state

This file is the shared "what has already happened" briefing for Codex, Claude, or any other AI helping on this project.

Both agents must read this file before changing code, together with `DEVLOG.md` and `SHARED_CONTEXT.md`.

## Project purpose

Build and improve a JavaScript-only Gheloo extension that turns an uploaded image into Leet/Habbo room art.

The main target right now is Light Art:

- Generate a furniture plan from an image using Leet light furniture.
- Make the furniture preview look close to what the room will show, including light overlap and color mixing.
- Let Kenjy preview the plan in-room by injecting fake incoming `{in:Objects}` packets, not by placing real furniture.
- When actually building, buy only missing furniture, reuse inventory, place chunk markers, set `:bh`/`:bs`/`:bd` carefully, watch `ObjectAdd`, retry safely, checkpoint progress, and resume after failures.
- Keep the extension easy to adjust: clear settings names, clear code sections, and clear handoff notes.

## Source of truth

- GitHub repo: `https://github.com/Iglup1/gheloo-lightart`
- Local working folder used by Codex: `C:\Users\prepa\OneDrive\Bureaublad\gheloo-lightart`
- Main extension file: `pixelart-lightart.js`
- Do not edit the Gheloo logger/host files unless Kenjy explicitly asks.

## What Kenjy wants

- A JavaScript-only Gheloo extension for Leet/Habbo.
- Main focus: Light Art generator quality and reliable in-room preview/build behavior.
- The in-room preview must not really build furniture. It should inject fake incoming room objects.
- Real build still needs buying, inventory checks, setting commands, watchdog, retries, checkpoints, and resume.
- Explanations must include file + line references so Kenjy does not have to re-explain context between agents.
- Packets, screenshots, test results, image notes, room-layout facts, and algorithm explanations from Kenjy must be recorded in `SHARED_CONTEXT.md` or `DEVLOG.md` so the other AI can continue without asking Kenjy for the same material again.
- Before doing Light Art work, read the onboarding snapshot in `SHARED_CONTEXT.md:69`; it condenses the long Kenjy/Codex conversation into practical implementation facts.

## Current important code locations

- `pixelart-lightart.js:271` - `injectObjectsPacket(items)` builds/injects one fake `{in:Objects}` packet for room preview.
- `pixelart-lightart.js:535` - `chooseLightMix(...)` chooses light color/state mixes and penalizes wrong red/white usage.
- `pixelart-lightart.js:668` - `addLightArtRaster(...)` is the current Light Art raster generator.
- `pixelart-lightart.js:950` - `renderPreview(...)` renders source + furniture preview canvases.
- `pixelart-lightart.js:1117` - `buyMissing(...)` scans inventory and buys missing furniture.
- `pixelart-lightart.js:1166` - `chunkGridInfo()` defines chunk grid dimensions.
- `pixelart-lightart.js:1176` - `exactChunkAnchor(nr)` contains exact 20x20 chunk anchor coordinates.
- `pixelart-lightart.js:1230` - `markerSpecs()` creates chunk camera marker objects.
- `pixelart-lightart.js:1318` - `makeProjectedBuildObjects(root, withInventory)` converts plan pixels to room coordinates.
- `pixelart-lightart.js:1405` - Light Art Y mapping uses `anchorY - (logicalH - 1 - localY) * syRoom`, so image-top maps to room-top.
- `pixelart-lightart.js:1421` - `makeMarkerPreviewObjects()` creates fake marker objects for room preview.
- `pixelart-lightart.js:1466` - `placeWithWatchdog(...)` handles retries and ObjectAdd validation during real build.
- `pixelart-lightart.js:1529` - `placeGrouped(...)` groups real build placement by build settings.
- `pixelart-lightart.js:1645` - `setBuildSetting(...)` sends `:bh`, `:bs`, `:bd` and waits for confirmation.
- `pixelart-lightart.js:1740` - `togglePlacePreview(...)` turns fake room preview on/off.
- `pixelart-lightart.js:1767` - room preview currently combines marker preview objects with projected build objects before injection.
- `pixelart-lightart.js:1959` - current UI still has both `Canvas kamer-preview` and `Plaats preview in kamer` buttons.

## What has been fixed already

- Source of truth moved from loose `Gheloo-main/extensions` copy to GitHub repo `gheloo-lightart`.
- Light Art preview was changed from real building attempts to fake incoming packet preview.
- Preview cleanup uses fake incoming `{in:ObjectRemove}` for preview object ids.
- Chunk marker objects are included in fake preview when chunk mode is enabled.
- Light Art Y-axis mapping was fixed so chunks are not upside down.
- Light Art plan generation currently uses a raster-based generator instead of only sparse glow spots.
- Reporting rules now require file + line references in final messages and devlog entries.

## Current known caution points

- Kenjy is still visually testing Light Art quality. If the preview looks too blurry, too sparse, or too unlike the source image, tune `addLightArtRaster(...)` and validate with in-game preview.
- If code changes line numbers, update this briefing when the referenced sections move in a meaningful way.
- `Canvas kamer-preview` exists in the current UI at `pixelart-lightart.js:1959`; old devlog text saying it was removed may be stale.
- Keep `CLAUDE_INSTRUCTIONS.md`, `CODEX_INSTRUCTIONS.md`, and `DEVLOG.md` consistent when collaboration rules change.
- Keep `SHARED_CONTEXT.md` updated when Kenjy shares packets, screenshots, color facts, object ids, catalog ids, room/chunk coordinates, or test results.

## How to hand off new Claude tasks

If Kenjy says "Claude moet ...", Codex must add that request to `DEVLOG.md` with:

- exact request in plain Dutch,
- relevant files and line refs,
- what is already known,
- what should be tested next.

If Kenjy shares packet text, image examples, screenshots, or gameplay observations, add the reusable facts to `SHARED_CONTEXT.md` and mention the update in `DEVLOG.md`.
