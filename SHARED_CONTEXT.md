# Shared context from Kenjy

This file stores project facts, packets, image notes, room layouts, and test observations that Kenjy gives to one AI but both Codex and Claude need.

Every agent must read this file before changing `pixelart-lightart.js`.

## How to use this file

- Add packets here when Kenjy shares packet text, object ids, type ids, catalog offers, room object examples, or build confirmations.
- Add image/screenshot notes here when Kenjy explains what a preview should look like or why a result is wrong.
- Add room layout notes here when Kenjy gives chunk coordinates, marker placement, camera-frame positions, or build-room constraints.
- Add algorithm notes here when Kenjy explains color mixing, light overlap, furniture sizes, build height, state/color behavior, or speed/watchdog behavior.
- Keep entries short but precise. Quote only the important packet parts if the full packet is huge.
- Always include where the related code lives if known, for example `pixelart-lightart.js:535`.
- If a code change makes an old note obsolete, mark it as obsolete instead of deleting it.

## Current packet and game facts

- Light states for Leet lights:
  - `bs 0` = white
  - `bs 1` = red
  - `bs 2` = orange
  - `bs 3` = yellow
  - `bs 4` = green
  - `bs 5` = cyan
  - `bs 6` = purple
  - `bs 7` = pink
- Light rotation (`bd`) does not visually matter for Light Art, but build packets still include a rotation field.
- Build height (`bh`) matters for lining up lights horizontally; `:bh 0` must be sent as `:bh 0`, not bare `:bh`, because bare `:bh` disables custom height.
- Real preview in the Leet room should use fake incoming `{in:Objects}` / `{in:ObjectAdd}` packets, not real furniture placement.
- Preview removal can use fake incoming `{in:ObjectRemove}` packets for preview object ids.
- Real build must validate `ObjectAdd`; if an object appears with wrong `z`/state/rotation, pick it up and retry with corrected settings.

## Catalog and furniture facts

- Chunk/camera markers use:
  - Standing half cylinder 14 purchase: `{out:PurchaseFromCatalog}{i:2026}{i:6572}{i:0}{b:false}{b:true}`
  - Diagonal trim 4 purchase: `{out:PurchaseFromCatalog}{i:348}{i:21567}{i:0}{b:false}{b:true}`
  - Number markers purchase: `{out:PurchaseFromCatalog}{i:-1}{i:240903}{i:0}{b:false}{b:true}`
- Existing code references:
  - Light mix choice: `pixelart-lightart.js:535`
  - Light raster generation: `pixelart-lightart.js:668`
  - Inventory/purchase scan: `pixelart-lightart.js:1117`
  - Chunk anchors: `pixelart-lightart.js:1176`
  - Marker specs: `pixelart-lightart.js:1230`
  - Real placement watchdog: `pixelart-lightart.js:1466`
  - Build setting confirmation: `pixelart-lightart.js:1645`
  - Fake room preview injection: `pixelart-lightart.js:1740`

## Light Art visual target

- Small light chunks are normally 20x20 tiles, so a one-chunk image at one light per tile can be around 400 small lights before overlap layers.
- Lights may overlap and may extend slightly outside the chunk when that improves glow quality.
- Bigger lights should be used as glow layers on top of smaller detail lights, not as the only representation.
- Avoid unwanted red/white dominance. Use red only where it belongs or where color mixing needs it.
- Furniture preview should be based on simulated light blobs/overlap, while the source preview should keep source-image detail and not be over-pixelated.

## Light blob sizes (measured by Kenjy from reference in-game photos, 2026-06-27)

Kenjy photographed each light size in isolation and measured the glow blob diameter in pixels:
- **S**: 60×60 px diameter in photo
- **M**: 125×125 px diameter in photo
- **L**: 160×160 px diameter in photo
- **XL**: 180×180 px diameter in photo
- **XXL**: 400×400 px diameter in photo

Key observation: "het plots snel afloopt" — the glow drops off sharply, not gradually. Bright center plateau holds until ~60-65% of radius, then rapid falloff to black at edge. This is different from a gaussian/smooth gradient.

**Used in renderPreview** (`pixelart-lightart.js:~1051`):
- Divide photo diameter by 15 → image-pixel radius for preview canvas (scale ~3.75 → 300px canvas for 80px image).
- dotR values: S=4.0, M=8.3, L=10.7, XL=12.0, XXL=26.7 image pixels.
- Gradient stops: 0 / 0.40 / 0.65 / 0.85 / 1.0 with rapid falloff from 65% onward.
- S alpha: `clamp(p.opacity * 2.6, 0.02, 0.09)` — luminance-scaled via l².
- M/L/XL/XXL fixed alpha: 0.22 / 0.16 / 0.09 / 0.05.

## Habbo light glow sprite sheets (extracted 2026-06-27 by Claude, Session 16)

Nitro files at: `https://images.leet.city/leet-asset-bundles/libraries/furniture_new2/hfdiy_NewLight_{S|M|L|XL|XXL}_xueze.nitro`

Format: custom container — 2-byte file count, then per-file: 2-byte name length, name, zlib-compressed data. Contains JSON manifest + PNG spritesheet.

Layer "b" = glow effect sprites. Direction 2. States 0-7 map to colorCodes 0-7.

**Sprite sizes per light type (layer b, srcW×srcH):**
- S: 63×64 px, spritesheet 298×142
- M: 127×128 px, spritesheet 554×266
- L: 191×192 px, spritesheet 1586×204
- XL: 319×320 px, spritesheet 2610×332
- XXL: 447×448 px, spritesheet 3630×456

**Frame coordinates per colorCode (x, y within spritesheet):**
- S: {0:{x:67,y:76},1:{x:132,y:76},2:{x:67,y:10},3:{x:197,y:10},4:{x:197,y:76},5:{x:2,y:10},6:{x:2,y:76},7:{x:132,y:10}}
- M: {0:{x:260,y:6},1:{x:389,y:136},2:{x:389,y:6},3:{x:2,y:6},4:{x:131,y:136},5:{x:131,y:6},6:{x:260,y:136},7:{x:2,y:136}}
- L: {0:{x:388,y:10},1:{x:774,y:10},2:{x:581,y:10},3:{x:1160,y:10},4:{x:967,y:10},5:{x:2,y:10},6:{x:1353,y:10},7:{x:195,y:10}}
- XL: {0:{x:323,y:10},1:{x:1286,y:10},2:{x:1607,y:10},3:{x:644,y:10},4:{x:965,y:10},5:{x:2249,y:10},6:{x:2,y:10},7:{x:1928,y:10}}
- XXL: {0:{x:1349,y:6},1:{x:1798,y:6},2:{x:2247,y:6},3:{x:3145,y:6},4:{x:2,y:6},5:{x:451,y:6},6:{x:900,y:6},7:{x:2696,y:6}}

Hardcoded in `pixelart-lightart.js` as `LIGHT_GLOW_FRAMES` (~line 165). Loaded at runtime by `loadLightSpritesIfNeeded()` (~line 1028) using browser `DecompressionStream('deflate')`. Result cached as `lightSpriteSheets` per size. `renderPreview` uses `ctx.drawImage` with these sprites when available.

**Ball bbox vs. frame size (from Kenjy's Lightbulbs-data, pixel-perfect measurement):**
- S: ball 63×64 px = full frame (no transparent padding)
- M: ball 127×128 px = full frame (no transparent padding)
- L: ball 191×192 px = full frame (no transparent padding)
- XL: ball ~250×251 px within 319×320 frame (~34.5 px transparent border per side)
- XXL: ball ~252×253 px within 447×448 frame (~97 px transparent border per side)
- All sizes: max alpha = 128/255 (~50.2%), linear radial falloff `alpha ≈ 128 × (1 - dist/radius)`
- XL/XXL: alpha mask not identical for all 8 colors (unlike S/M/L where all 8 share exact same mask)
- Artifact pixels at bottom-center of each sprite (alpha 128) — expected, do not crop

**LIGHT_GLOW_DRAW_SIZE derivation (correct as of 2026-06-27):**
Formula: `ds = (srcW / 63) × 2.0` → ~31.5 px/tile consistent for all sizes.
- S: 2.0 tiles | M: 4.0 tiles | L: 6.0 tiles | XL: 10.0 tiles | XXL: 14.0 tiles
- Previous wrong values (M=6.0, L=9.0, XL=14.0, XXL=24.0) made M/L/XL/XXL blobs 1.4-1.7× too large in preview.

**loader.js (attempted 2026-06-27, deleted)**: tried auto-fetching script from GitHub raw URL. Game's CSP blocks fetch to raw.githubusercontent.com. Do NOT re-add this. Workflow stays: script copied to clipboard after every change.

**Workflow rule added 2026-06-27**: Both agents must update DEVLOG after every code commit (not just end of session) and update SHARED_CONTEXT immediately when Kenjy shares any info. See updated CLAUDE_INSTRUCTIONS.md and CODEX_INSTRUCTIONS.md.

## Build reliability target

- Minimize `:bh`, `:bs`, and `:bd` changes because chat-setting commands are slow and can desync.
- When settings must change, wait for the incoming whisper confirmation before placing.
- If no valid `ObjectAdd` arrives, retry placement up to the configured watchdog limit and log each attempt.
- Checkpoint progress so a failed/paused build can continue from the last confirmed valid step.

## New shared-info rule

When Kenjy gives any AI packets, screenshots, explanations, camera/chunk coordinates, or test results that the other AI might need, that AI must update this file or `DEVLOG.md` before ending the session.

## Claude onboarding snapshot - what already happened

This is the compressed handoff from the long Codex/Kenjy conversation so Claude does not burn time rediscovering it.

### Repository and workflow

- The real project is now the GitHub repo `https://github.com/Iglup1/gheloo-lightart`.
- Do not work from loose files in `Gheloo-main/extensions`; those were earlier copies.
- Do not edit the Gheloo logger/host itself. Only inspect it if needed.
- The extension is JavaScript-only pasted/loaded into Gheloo's JS extension system.
- Every session starts with reading `DEVLOG.md`, `PROJECT_BRIEFING.md`, `SHARED_CONTEXT.md`, and the agent instruction file.
- Every session ends with `DEVLOG.md`, commit, and push.
- If Kenjy gives Claude or Codex any packet, screenshot, room layout, image result, object id, or test observation, put the reusable facts here before ending.

### What Kenjy is trying to build

- Main goal: a Light Art generator for Leet/Habbo rooms.
- User uploads an image; script generates a furniture plan using Leet light furniture.
- Preview in the room must be fake incoming packets so Kenjy can see the plan instantly without actually placing furniture.
- Real build must still buy/check inventory, place markers, set build settings, validate `ObjectAdd`, retry, checkpoint, and resume.
- The old Python version had more advanced light overlap, color mixing, chunk/mega-art behavior, and watchdog behavior. Claude should use it only as conceptual reference if available, but this repo is now the JS implementation source of truth.

### Important code entry points

- `pixelart-lightart.js:271` - `injectObjectsPacket(items)` creates one fake incoming `{in:Objects}` packet for preview objects.
- `pixelart-lightart.js:535` - `chooseLightMix(...)` decides which light color/state mix to use.
- `pixelart-lightart.js:668` - `addLightArtRaster(...)` is the current Light Art generation algorithm.
- `pixelart-lightart.js:950` - `renderPreview(...)` draws source + furniture preview canvases.
- `pixelart-lightart.js:1117` - `buyMissing(...)` checks inventory and buys missing furni.
- `pixelart-lightart.js:1176` - `exactChunkAnchor(nr)` has chunk placement anchors.
- `pixelart-lightart.js:1230` - `markerSpecs()` creates chunk camera/number markers.
- `pixelart-lightart.js:1318` - `makeProjectedBuildObjects(root, withInventory)` maps plan items to room coordinates.
- `pixelart-lightart.js:1421` - `makeMarkerPreviewObjects()` creates fake marker objects for room preview.
- `pixelart-lightart.js:1466` - `placeWithWatchdog(...)` handles real placement retry and `ObjectAdd` validation.
- `pixelart-lightart.js:1529` - `placeGrouped(...)` groups real build by build settings.
- `pixelart-lightart.js:1645` - `setBuildSetting(...)` sends `:bh`, `:bs`, `:bd` and waits for confirmation.
- `pixelart-lightart.js:1740` - `togglePlacePreview(root)` toggles fake in-room preview.
- `pixelart-lightart.js:1959` - UI currently still has both `Canvas kamer-preview` and `Plaats preview in kamer`; Kenjy generally wants the in-room packet preview, not a separate canvas room preview, unless specifically debugging chunk placement.

### Light color and mixing facts

- Leet light state/color mapping:
  - `bs 0` white
  - `bs 1` red
  - `bs 2` orange
  - `bs 3` yellow
  - `bs 4` green
  - `bs 5` cyan
  - `bs 6` purple
  - `bs 7` pink
- `bd` rotation does not visually matter for Light Art lights, but packets still contain rotation.
- `bh` can matter for alignment: some lights at `bh 0.5` visually sit between tiles and look smoother horizontally.
- If setting height to zero, send `:bh 0`; do not send bare `:bh`, because bare `:bh` disables custom height.
- Kenjy showed additive color-mixing expectation: overlapping red/green/blue lights can create yellow/cyan/magenta/white, but the generator must avoid washing everything to white.
- Previous bad result: too many red blobs where the source did not need red. The algorithm should penalize unwanted red/white and preserve intended purples/greens/yellows.
- Big lights are useful as glow layers over smaller detail lights, not as the only representation. A 20x20 chunk can contain about 400 small light positions before extra overlap/glow layers.

### Preview expectations

- Source preview should remain detailed. Do not over-pixelate the source image.
- Furniture preview should simulate what the lights will look like in the hotel: blurred glows, overlap, color mixing, and furniture size differences.
- Kenjy wants an in-room preview button that sends fake incoming `{in:Objects}` with all planned objects at the correct coordinates.
- This fake preview should not use outgoing placement packets except possibly buying preview-needed furniture if a later workflow explicitly requires real inventory. The latest clarified intent was: generate one big incoming packet like:
  - `{in:Objects}{i:1}{i:<ownerId>}{s:"kadet"}{i:<count>}...`
- Preview removal should send fake incoming `{in:ObjectRemove}{s:"<id>"}...` for preview object ids.
- Chunk/camera markers should be included in the fake preview when chunk mode is enabled so Kenjy knows where to take photos.
- Kenjy specifically disliked results where the in-room preview generated sparse random blobs instead of a recognizable image. The algorithm should be self-checked visually before claiming improvement.

### Chunk and room layout expectations

- Room is treated as 63x63.
- Chunk mode commonly uses 20x20 chunks.
- A 2x2 layout means four chunks. Kenjy's outline packet uses `bs` state as the chunk id:
  - chunk 1 = `bs 0`
  - chunk 2 = `bs 1`
  - chunk 3 = `bs 2`
  - chunk 4 = `bs 3`
- Exact left/top outline point from Kenjy's Wired Tool inspection and packet parse:
  - chunk 1 left/top point = `x:2, y:42`
  - chunk 2 left/top point = `x:2, y:13`
  - chunk 3 left/top point = `x:32, y:13`
  - chunk 4 left/top point = `x:28, y:39`
- The outline packet proves the frame is a camera-2D diamond in room coordinates, not a plain `x+localX, y+localY` rectangle:
  - chunk 1 `bs 0` bbox is `x:2..31, y:32..61`
  - chunk 2 `bs 1` bbox is `x:2..31, y:3..32`
  - chunk 3 `bs 2` bbox is `x:32..61, y:3..32`
  - chunk 4 `bs 3` bbox is `x:28..58, y:29..59`
- For Light Art, map image pixels from the left/top point with this 2D camera projection:
  - `roomX = startX + localX * 0.5 + localY`
  - `roomY = startY - localX * 0.5 + localY`
- Marker/number anchors are separate from Light Art frame starts and should sit near the lower/label side of the frame.
- If the input only needs one chunk, build/preview only one chunk. Do not place the image into chunk 2/3/4 by accident.
- Lights may extend slightly outside a chunk if needed for glow quality, because light furniture is bigger than one tile.
- Kenjy gave room screenshots where each 20x20 chunk is framed by marker furniture and number labels. Markers are not decorative; they help camera/photo alignment.
- Marker purchases:
  - standing half cylinder 14: `{out:PurchaseFromCatalog}{i:2026}{i:6572}{i:0}{b:false}{b:true}`
  - diagonal trim 4: `{out:PurchaseFromCatalog}{i:348}{i:21567}{i:0}{b:false}{b:true}`
  - number markers: `{out:PurchaseFromCatalog}{i:-1}{i:240903}{i:0}{b:false}{b:true}`

### Real build reliability expectations

- Buying must check inventory first. Kenjy repeatedly saw scripts buying lights he already owned. Do not buy by plan count blindly.
- Purchases can be batched, but the inventory diff must account for type ids and existing items.
- Build should minimize chat commands. `:bh`, `:bs`, and `:bd` are slow and can desync; group items to reduce setting changes.
- If settings must change, wait about one second / wait for confirmation before placing. Earlier versions spammed `:bh/:bs/:bd`, causing "Kies tussen 0 en 63" or missed state changes.
- Whisper confirmations known from game:
  - `Custom bouwhoogte is veranderd naar: 1! Typ :bh om de custom bouwhoogte uit te schakelen.`
  - `Custom draaipositie is veranderd naar: 1! Typ :bd om de custom draaipositie uit te schakelen.`
  - `Custom staat is veranderd naar: 1! Typ :bs om de custom staat uit te schakelen.`
  - `Custom bouwhoogte is uitgeschakeld!`
  - `Custom draaipositie is uitgeschakeld!`
  - `Custom staat is uitgeschakeld!`
- `ObjectAdd` must be treated as the real placement acknowledgement. Example shape Kenjy gave:
  - `{in:ObjectAdd}{i:62165551}{i:886600852}{i:46}{i:41}{i:1}{s:"2.0"}{s:"0.001"}{i:1}{i:0}{s:"3"}{i:-1}{i:1}{i:4502029}{s:"kadet"}`
  - This example corresponds to object id `62165551`, type id `886600852`, x `46`, y `41`, rotation `1`, z `2.0`, state `3`.
- If `ObjectAdd` appears with wrong z/state/rotation, pick it up and retry:
  - `{out:PickupObject}{i:10}{i:<objectId>}`
- If no valid `ObjectAdd` arrives after watchdog retries, stop and save checkpoint/log so Kenjy can continue later.
- Continue button should be green and resume from checkpoint/log context.

### Known UI expectations

- Kenjy likes the Habbo/Nitro-style UI: blue header, grey tab buttons, yellow `Koop+Build`, red `Stop`, green `Continue`.
- Tabs should be horizontal like `Generator | Color | Settings | Saves`.
- Generator tab should contain image/mode/art-size/chunk controls and the run buttons near the relevant area.
- Settings tab is for build settings, not source image size.
- Names must be noob-friendly:
  - avoid unclear labels like `Render W`, `Alpha`, `Steps`, `Cols`, `Bleed`, `Right`, `Up` unless explained or renamed.
- When resizing the UI vertically, it should reveal more content below, not just show blank space or crop the right edge.
- Source preview and furniture preview should both remain visible while changing color settings.
- Color settings should allow red/green/blue strength separately, plus broader grading controls.

### Things already fixed or partially fixed

- Source of truth moved to GitHub repo.
- Extension file is `pixelart-lightart.js`.
- Fake incoming room preview exists via `injectObjectsPacket`.
- Fake preview cleanup exists via object remove.
- Chunk marker preview objects exist.
- Y-axis mapping was fixed so image-top maps to room-top.
- A shared workflow now exists:
  - `DEVLOG.md` for session-by-session handoff.
  - `PROJECT_BRIEFING.md` for stable project overview and code map.
  - `SHARED_CONTEXT.md` for packets, screenshots, object ids, and Kenjy explanations.
  - `CODEX_INSTRUCTIONS.md` / `CLAUDE_INSTRUCTIONS.md` for agent rules.

### Things still risky / likely next work

- Light Art quality is still not where Kenjy wants it. Main work is better algorithmic simulation of real light overlap and color mixing.
- The generator should be tested on a recognizable image and judged visually before pushing major algorithm changes.
- Inventory checking/buying may still miscount lights if type ids/placement ids are wrong.
- Real build may still stop after a few items if ObjectAdd matching is too strict or settings are not confirmed.
- UI may still contain stale `Canvas kamer-preview` and sizing/cropping issues.
- Line numbers in `PROJECT_BRIEFING.md` and this file must be updated after large edits to `pixelart-lightart.js`.

### 2026-06-27 compact handoff from Claude local session

- Claude worked locally in `C:\Users\prepa\OneDrive\Bureaublad\Gheloo-main\extensions\pixelart-lightart.js` but forgot to push to GitHub for about the last hour. Codex synced that live file back into this repo before continuing.
- Keep these workflow rules from Kenjy:
  - Do not edit the Gheloo logger/host files.
  - Do not re-add `loader.js` or `raw.githubusercontent.com` fetches because CSP blocks them.
  - After every code change, copy `pixelart-lightart.js` to clipboard, update `DEVLOG.md`, commit, and push.
  - When Kenjy shares photos, sizes, packets, or test results, update this file or `DEVLOG.md` immediately.
- The local Claude version added or changed:
  - `randomizer`/`Blender` setting for Light Art blend amount.
  - `imgPanX`, `imgPanY`, `imgScale` for panning/scaling the source image inside the fixed build grid.
  - `localVariance(...)` and `flatMap` precomputation so flat color areas get larger blobs while edges keep S lights.
  - Additive preview rendering using actual/approximated light sprites and `globalCompositeOperation = 'lighter'`.
  - Source canvas draws high-quality source image and chunk boundaries only, without chunk numbers.
  - `drawChunkBoundariesOnly(...)`, `sourceImageRef`, and source-canvas drag controls.
- Important algorithm notes from Kenjy/Claude compact:
  - 8 light states: white `0`, red `1`, orange `2`, yellow `3`, green `4`, cyan `5`, purple `6`, pink `7`.
  - S/M/L/XL/XXL glow sizes in preview are controlled through `LIGHT_GLOW_DRAW_SIZE`.
  - Blender `0` should behave like crisp pixel art with mostly S lights.
  - Higher Blender should reduce S lights in flat zones and use larger M/L/XL/XXL lights for broad blended areas.
  - Use additive color mixing; overlapping lights should create new perceived colors, but avoid unwanted cyan/white fallthrough in wrong areas.
  - Row-major chunk numbering was introduced locally: `rowFromTop * cols + col + 1`.
- Current risk after sync: Claude's local changes may conflict with Kenjy's earlier exact 2x2 camera-frame mapping. Before changing chunk projection again, compare against Kenjy's real outline packets and screenshots.

### 2026-06-27 remaining compact details from Claude

- The "flat suppression + size upgrade" work from Claude's compact is now present in GitHub, not pending:
  - `pixelart-lightart.js:696` has `localVariance(...)`.
  - `pixelart-lightart.js:757` builds `flatMap`.
  - `pixelart-lightart.js:774` uses `sFlatCut` so S lights are skipped in flat areas at medium/high Blender.
  - `pixelart-lightart.js:824` has `runBlobPass(...)`.
  - `pixelart-lightart.js:841` computes `blobPower = flatness * blend` as `bp`.
  - `pixelart-lightart.js:858` to `pixelart-lightart.js:864` runs M/L/XL/XXL passes.
- Root cause of poor blending:
  - Good "kleuren op elkaar" requires multiple light sizes layered at different scales.
  - Single-pass approaches picked one size/color per cell and stepped through the image once, so they did not create enough layered additive blending.
- Root cause of S domination:
  - At high Blender, S at step 1 covered every visible pixel and visually drowned out M/L/XL.
  - Fix is the current `flatMap` + `sFlatCut`: flat regions skip S so bigger lights can carry the face/background color fields.
- Color mixing mechanism:
  - M/L/XL passes use `sampleCell(...)` with a radius around the blob step.
  - At color transitions this averages nearby pixels and creates a different hue than the exact S pixel.
  - Overlapping exact S + averaged blob colors creates the perceived blend.
- Size upgrade logic:
  - `bp = flatness * blend`.
  - M upgrades to L when `bp > 0.55`.
  - M upgrades to XL when `bp > 0.80`.
  - L upgrades to XL when `bp > 0.85`.
- User feedback behind this:
  - Blender 0-100 screenshots showed faces/couple images; user said Blender must be better because colors need to overlap.
  - User preferred slowly increasing blend where bigger lights are used for large areas but not so much that detail disappears.
  - User explicitly approved committing/updating GitHub/devlog/shared context for this.

### 2026-06-27 Blender tuning from Kenjy screenshots

- Kenjy tested a 60x60 / 9-chunk couple photo at Blender `0`, `5`, `19`, `26`, `59`, `78`, `100`.
- Problems seen:
  - Blender `0` still was not true pixel art because the code used `+settings.randomizer || 50`, so `0` became `50`.
  - Mid/high Blender still looked too much like a pixel/dot matrix.
  - Blender `100` became too yellow/overexposed instead of a smooth art version.
- Desired behavior:
  - Blender `0` = simple pixel art with only/mostly small lights.
  - Higher Blender = smoother light art, flatter one-color regions become broad blended fields.
  - Color transitions should overlap multiple light colors.
  - Strong colors should be reinforced by multiple stacked lights, not by random scattered pixels.
- Implemented direction:
  - Preserve numeric zero with a shared `num(...)` helper.
  - Use eased blend progression so low values stay crisp and high values become more painterly.
  - Start `flatMap` earlier and lower `sFlatCut` as blend rises so S lights disappear sooner in flat zones.
  - Reduce S opacity and increase S step with blend.
  - Upgrade M->L/XL and L->XL earlier in flat regions.
  - Add deterministic same-color strength stacks for M/L/XL.
  - Replace `Math.random()` placement jitter with deterministic `jitter(...)` so previews are repeatable.
  - Fade the preview tile grid as Blender rises so high values visually read less pixel-art.

### 2026-06-27 additive color-recipe engine

- Kenjy linked Dutch/English color-mixing references and clarified the generator should remember possible lamp combinations, not only pick one closest lamp color.
- Light Art lamps behave as additive light sources:
  - Do not average sRGB channel values directly.
  - Convert sRGB to linear light, add lamp energy, then convert back to sRGB for preview/matching.
  - Subtractive mixing (paint/ink) is useful background knowledge but is not the model for these hotel light glows.
- Implemented direction in `pixelart-lightart.js`:
  - `srgbToLinear(...)` / `linearToSrgb(...)` around line 555.
  - `additiveRecipeColor(...)` around line 585.
  - `buildLightMixTable(...)` around line 599 creates repeated/non-repeated lamp recipes from the 8 available states.
  - `bestLightRecipe(...)` around line 631 scores recipes in Lab-like perceptual space, with penalties to avoid saturated regions turning white too quickly.
  - `chooseLightMix(...)` around line 657 now asks the recipe table first before falling back to old heuristics.
  - `placeWithSecondary(...)` around line 885 now places multiple extra recipe colors instead of only the first secondary color.
- Intended behavior:
  - Blender `0`: mostly S-light pixel art.
  - Higher Blender: broad flat regions use larger glow layers and multi-color recipes.
  - Repeated colors in a recipe make a color stronger; mixed colors make transitions/secondary hues.
  - White state `0` should only appear for actually bright/near-neutral areas, not as a default result of every overlap.

### 2026-06-27 high Blender quality correction

- Kenjy reported the first additive recipe version made Blender much worse because it became too sparse/controlled.
- Desired high Blender output is not "few smooth blobs"; it should look like dense glow art:
  - Many tiny S/M light points still visible as texture.
  - Large M/L/XL/XXL glow layers underneath/around the points.
  - More overlap and more furniture is acceptable if it looks cooler.
  - A previous simulated target used about 19k furniture over 50 chunks and looked much closer to the desired style.
- Implemented direction:
  - `sFlatCut` now suppresses S less aggressively at high Blender.
  - M/L/XL/XXL blob steps are denser at high Blender.
  - `runSparklePass(...)` around `pixelart-lightart.js:977` adds deterministic dense S/M sparkle texture above smooth fields when Blender is above 24.
  - Max-lamp slider is raised to 120000 so high-quality/high-cost previews are possible.
- Future tuning:
  - If high Blender is still too sparse, increase `keepBase` in `runSparklePass(...)`.
  - If high Blender is too noisy, reduce sparkle opacity or raise the `noise01(...) > keep` filter.
  - Do not remove big blob passes; the desired style needs both broad glows and tiny light texture.

### 2026-06-27 color correction after bad recipe test

- Kenjy tested the additive recipe version and reported the colors were much worse: too much red/orange/cyan and not close to the source.
- Current rule from Kenjy: "gewoon dichtstbijzijndste kleur pakken".
- Implementation:
  - `nearestSingleLight(...)` around `pixelart-lightart.js:657` picks the closest of the 8 available light states in a Lab-like visual distance.
  - `chooseLightMix(...)` around `pixelart-lightart.js:678` now immediately returns one nearest light color.
  - The older multi-light recipe chooser is no longer active inside `chooseLightMix(...)`.
- Blend should now affect density, light size, and glow overlap, not invent extra color recipes.

### 2026-06-28 controlled sprite-recipe color mixing

- Kenjy showed that strict nearest-color made skin become flat orange/brown, while manually stacking orange + white produced much better skin.
- Kenjy linked `habbo_light_sprite_combinations_codex_guide_v2.txt`.
- Guide rules used:
  - Light sprites behave like semi-transparent radial alpha sprites.
  - Practical recipe color can be approximated by weighted RGB averages.
  - `orange + white` creates pastel orange; repeated orange + white creates stronger warm skin/orange.
  - White should lighten/pastel colors; repeated colors strengthen the dominant hue.
- Current implementation:
  - `weightedRecipeColor(...)` around `pixelart-lightart.js:680`.
  - `buildControlledRecipeTable(...)` around `pixelart-lightart.js:688`.
  - `bestControlledRecipe(...)` around `pixelart-lightart.js:729`.
  - `chooseLightMix(...)` now returns a controlled recipe, not all generated combinations and not only one color.
- Important safety:
  - Recipes are whitelisted, not exhaustive random combos.
  - Warm skin range prefers orange + white and orange/yellow recipes.
  - Cyan/red are penalized unless the source really matches them, preventing the previous cyan/red pollution.

### 2026-06-27 Light Art axis/BH insight

- Kenjy clarified an important projection rule:
  - The photo x-axis cannot really be fine-tuned freely in the room; in this build formation it effectively moves in about 0.5 tile increments.
  - The photo y-axis can be made much smoother with `:bh`, so vertical image detail should use build-height fractions where possible.
- Implementation direction:
  - Light Art projection now rounds/snap-fines `localX` to 0.5 steps.
  - The fractional part of `localY` is converted into `z = baseBh + yFrac * bhStep`.
  - This is in `makeProjectedBuildObjects(...)` around `pixelart-lightart.js:1778` and `pixelart-lightart.js:1821`.
- This should make blended/jittered lights smoother vertically without trying to fake impossible x-axis precision.

### Latest chunk-outline bug report from Kenjy

- Kenjy sent an `{in:Objects}` packet with 330 objects after testing Claude's latest build. Parsed facts:
  - 314 light objects with type id `886600854`.
  - Marker/camera objects had anchors at `x=21/51` and `y=33/62`, confirming chunk 4 should be `x:51, y:62`, not `x:48, y:60`.
  - 174 objects were outside the expected clipped 20x20 chunk boxes when compared to the marker anchors.
- Root cause found in `pixelart-lightart.js:1409`: Light Art used `reserveTile(...)`, which spreads overlapping same-color lights to nearby tiles. That is wrong for Light Art because Kenjy wants lights to overlap/stack for strength and color mixing.
- Second root cause found after Kenjy shared Wired Tool screenshots: Codex had used marker/label coordinates and plain room-grid rectangle mapping instead of the actual camera-2D outline. The outline starts are `1=(2,42)`, `2=(2,13)`, `3=(32,13)`, `4=(28,39)`.
- Fix direction: for `settings.generatorMode === 'light_art'`, use the calculated `{ x, y }` directly; only non-Light-Art modes should use `reserveTile(...)`. Chunk numbering must follow `bs` state order `1/2/3/4`, and Light Art projection must use `roomX = startX + localX * 0.5 + localY`, `roomY = startY - localX * 0.5 + localY`.

### 2026-06-28 source color vs camera preview filters

- Kenjy clarified two separate image stages:
  - `Bron + color` is the real edited source image. Its saturation/brightness/contrast/gamma/RGB sliders must affect the generated furniture plan.
  - `Meubel preview` may have camera-edit filters that mimic Leet's camera editor, but those filters are only for previewing a later screenshot look. They must not affect furniture selection, packet preview, purchase counts, or build output.
- Current implementation:
  - Source color settings are applied onto the source canvas in `applySourceColorFilters(...)` and the plan still uses the adjusted `work` buffer from `makePlan(...)`.
  - Camera filters are applied only after furniture preview rendering in `applyCameraPreviewFilters(...)`.
  - Camera sliders in the Color tab are: `Meer verzadiging`, `Hyper verzadigd`, `Minder verzadiging`, `Bleek`, `Grijs`, `Rossig`.
  - Camera slider events rerender only the preview canvas and intentionally do not call `makePlan(...)`.
- Chunk overlay rule:
  - Both previews should show subtle dashed chunk boundaries.
  - Chunk numbers should use the older tiny corner style on both canvases.

### 2026-06-28 updated guide v4 color families

- Kenjy pointed to the updated `habbo_light_sprite_combinations_codex_guide_v2.txt` v4 and clarified the recipe system is not only for skin.
- Important v4 rules:
  - Black cannot be made by stacking lights; black/dark means no or less light.
  - Dark/deep colors should use fewer layers, no white hotspot, lower opacity, and large colored aura.
  - Families matter: warm/fire, cold/ice, magic/purple, toxic/nature, pastel, and muted/deep.
  - White is for lighter/pastel/hot centers and should be avoided for deep saturated colors unless the source is actually bright.
- Current code direction:
  - Controlled recipe table includes warm, burgundy/magic/pink-purple, cold, toxic, and muted/deep recipes.
  - `bestControlledRecipe(...)` uses hue flags for warm/magic/green/cyan/deep instead of only skin detection.
  - Deep colors penalize white recipes and slightly prefer short no-white recipes.
- UI:
  - Generator, Color, and Settings panels now each have a "terug naar default" button.
  - Reset buttons restore only their own group and do not clear logs/saves.

### 2026-06-28 current UI shape

- Normal user-facing Generator tab should stay compact:
  - Art modus.
  - Blender.
  - Preview pixels / Art grootte.
  - Max lampen.
  - Transparantie/crop.
  - Chunks on/off and Welke stukken.
  - Generator reset.
  - Koop en bouw controls.
- Hidden advanced chunk defaults still exist in code (`chunkSize`, `chunkCols`, `chunkBleed`, `chunkRight*`, `chunkUp*`) but are not shown because Kenjy does not want to tweak them manually.
- Removed from UI for now:
  - Light Art style selector.
  - Canvas kamer-preview button.
  - Koop+Plaats markers button.
  - Saves tab room-packet preview section.
- Koop en bouw button order should remain:
  - Plaats preview in kamer.
  - Koop+Bouw.
  - Stop.
  - Continue.
  - Plan info.
  - Saves.
- Panel resize is horizontal only. Do not re-enable vertical resize unless Kenjy explicitly asks.
- Chunk overlays should use the older subtle style: small dashed grid lines and tiny numbers in the upper-left corner of each chunk on both source and furniture canvases.

### 2026-06-28 shared-context asset workflow

- Kenjy asked for screenshots/files/packets to be shared in GitHub so Claude can inspect the same evidence instead of only reading summaries.
- New folder:
  - `shared-context/README.md`
  - `shared-context/ASSET_INDEX.md`
  - `shared-context/assets/`
  - `shared-context/notes/`
- Workflow:
  - If Kenjy provides a local file path, copy the file into the relevant `shared-context/assets/...` subfolder and index it.
  - If Kenjy provides raw packet text, save it as a `.txt` file under `shared-context/assets/packets/` and index it.
  - If a screenshot is only embedded in chat and no local path is exposed, summarize it in `SHARED_CONTEXT.md` and ask for/upload a file only if exact pixel-level inspection is required.
  - Keep `SHARED_CONTEXT.md` detailed enough that Claude understands what changed, what Kenjy asked, and why.

### 2026-06-28 room grid overlay request

- Kenjy showed Leet's scoreboard DOM:
  - `position-absolute visible object-location`
  - inner `nitro-widget-high-score nitro-context-menu`
- Important observation from Kenjy: this UI appears to move with the Leet room when the screen moves.
- New requested behaviour:
  - `Plaats preview in kamer` still injects one large incoming `Objects` packet for furniture preview.
  - A separate UI grid overlay should show the camera/chunk guide lines in the room.
  - The room overlay must not use furniture, must not show numbers, and must use very small/subtle lines so it does not block the camera.
  - Add a rectangular `grids` button next to `Plaats preview in kamer`.
  - `grids` is on by default and appears dark blue when active; clicking toggles the overlay.
- Implemented in `pixelart-lightart.js`:
  - `roomGridOverlay` default and runtime `roomGridOverlayActive`.
  - `renderRoomGridOverlay(...)` creates `#__la_room_grid_overlay` with `position-absolute visible object-location`.
  - `roomGridOverlayHost()` tries Nitro room/widget containers first, then falls back to `document.body`.
  - The overlay appears after preview Objects injection and is removed when preview is removed or the extension stops.
- UI polish in same pass:
  - Increased effective min width to reduce left-side clipping.
  - Added right padding inside the body.
  - Section headings now have more consistent font size, padding, and margins.
  - Horizontal resize clamp now respects the new min width.
- Shared context:
  - Root `SHARED_CONTEXT.md` is mirrored to `shared-context/SHARED_CONTEXT.md`.
  - Detailed shared memory lives at `shared-context/notes/PROJECT_MEMORY.md`.
  - New files are listed in `shared-context/ASSET_INDEX.md`.

### 2026-06-28 mandatory Codex/Claude shared-memory rule

- Kenjy clarified that both agents must update shared context automatically. This must not depend on Kenjy explicitly saying "update GitHub/context".
- Required from both Codex and Claude:
  - After code changes, update `DEVLOG.md` with concrete file/line references, verification, and next steps.
  - When Kenjy gives reusable facts, update `SHARED_CONTEXT.md`.
  - When Kenjy gives durable rules, packet meanings, coordinates, colour facts, UI rules, or workflow rules, update `shared-context/notes/PROJECT_MEMORY.md`.
  - When Kenjy gives accessible raw files, packets, screenshots, source images, or previews, copy them into `shared-context/assets/...` and index them in `shared-context/ASSET_INDEX.md`.
  - Mirror root `SHARED_CONTEXT.md` into `shared-context/SHARED_CONTEXT.md`.
  - Commit and push these context updates even if no code changed.
- `CODEX_INSTRUCTIONS.md` and `CLAUDE_INSTRUCTIONS.md` have both been updated with this mandatory rule.

### 2026-06-28 art height chunks and room grid overlay correction

- Kenjy reported `Art grootte` only used width for Light Art chunks: `60x100` still showed `3x3` instead of `3x5`.
- Fix: Light Art chunk columns now use art width and chunk rows use art height. Example: `60x100` with 20-tile chunks becomes `3x5`.
- Kenjy also clarified that the room grid overlay must behave like Leet's scoreboard/object-location UI:
  - It should stay in the same room-relative overlay layer, not act like a normal fixed screen overlay.
  - It should be placed/sized automatically according to the current preview.
- Current implementation:
  - `roomGridOverlayHost()` first searches for an existing `.object-location` widget and appends the grid to that same parent.
  - The grid no longer uses hardcoded `left:120px; top:120px`.
  - The grid stores/uses the current preview objects and estimates overlay position/size from their room-coordinate bounds.
- If this still does not follow the room exactly in live Leet, inspect the parent of the real scoreboard `.object-location` and adjust `roomGridOverlayHost()` to that exact container.

### 2026-06-28 room-anchored grid correction

- Obsolete: the fake marker/corner-object grid was wrong. Kenjy rejected the version that spawned marker furniture all over the room.
- Current desired behaviour:
  - The furniture preview itself is still one large fake incoming `{in:Objects}` packet.
  - The grid guide is not furniture and must not add marker objects to that packet.
  - The grid guide is a reusable room-anchored UI overlay, like a Nitro/Habbo context-menu/highscore widget.
  - It is `position:absolute` in the room/canvas container, not `position:fixed`.
  - It updates every frame with `requestAnimationFrame`.
  - It uses room/world coordinates, subtracts camera offset, applies room zoom, and then uses inverse scale (`1 / zoom`) so visual size stays constant while the room moves/zooms underneath.
  - The guide has no numbers and uses tiny/subtle grid lines above the art.
  - Guide chunk cells are visually `chunkSize * 2`.
- Current implementation in `pixelart-lightart.js`:
  - `RoomAnchoredOverlay` reusable class at `pixelart-lightart.js:2371`.
  - `roomOverlayGeometry(...)` derives the overlay from current preview object bounds at `pixelart-lightart.js:2468`.
  - `renderRoomGridOverlay(...)` creates `#__la_room_grid_overlay` at `pixelart-lightart.js:2499`.
  - Preview placement injects only the light objects, then calls the overlay renderer at `pixelart-lightart.js:2585`.

### 2026-06-28 restore last good preview behaviour

- Kenjy identified commit `74d5eb0` (`fix: derive lightart chunk rows from height`) as the last good version.
- Restored `pixelart-lightart.js` behaviour from that commit:
  - Light Art in-room preview is again one large projected isometric art plane instead of split/random marker-grid furniture.
  - The grid is the older GUI overlay above the art, not marker furniture and not the later `RoomAnchoredOverlay` class experiment.
- Important preview rule:
  - `Plaats preview in kamer` must not buy furniture. It should only generate/inject fake incoming preview objects.
  - Buying is reserved for `Koop+Build`, which still calls `buyMissing(root)`.

### 2026-06-28 room-anchored overlay grid sizing

- Kenjy clarified again: the grid must not be screen-anchored. It should feel anchored in the room above the art, like a furniture/object-location UI.
- Do not return to marker furniture objects for the grid.
- Current approach:
  - Keep the single large art preview.
  - Render the grid as a DOM overlay with `.object-location` styling.
  - Attach to the same parent as an existing `.object-location` widget when available.
  - Track a real `.object-location` reference every animation frame and apply its camera movement delta to `#__la_room_grid_overlay`.
- Grid chunk cells should represent 20x20 furniture tiles, not half-size 10x10. Implementation uses `tilePx = 16` in `roomGridOverlayBox(...)`.

### 2026-06-29 draggable grid lock workflow

- Kenjy clarified the desired interaction:
  - The grid overlay may appear on screen at first, but must be manually draggable.
  - When it is visually aligned with the art, a `vast/los` button should lock it to the room.
  - Locking means store the offset from a real `.object-location` widget (for example scoreboard) using the widget's `style.left/top`.
  - While locked, every frame set the grid position to `reference.left/top + saved offset`, so when the room/camera moves and the scoreboard location changes from e.g. `left:607px; top:245px` to `left:400px; top:252px`, the grid follows by the same delta.
- Current code:
  - `#__la_room_grid_lock` is the lock/unlock button.
  - Unlocked grid can be dragged with mouse.
  - Locked grid follows `.object-location` style movement per frame.

### 2026-06-29 scorebord anchor packets and overlay layer

- The room grid overlay must sit above the room/furniture preview, but below normal Leet/Nitro windows and extension UIs.
- Do not use a near-max z-index for `#__la_room_grid_overlay`; it should not cover catalog/shop/extensions windows.
- Kenjy supplied the scorebord/context-menu anchor workflow:
  - Buy scorebord: `{out:PurchaseFromCatalog}{i:148}{i:232174}{i:0}{b:false}{b:true}`
  - Purchase confirmation: `{in:PurchaseOK}{i:232174}{s:"highscore_mostwin*1"}...`
  - New inventory id arrives through `UnseenItems`, example `{in:UnseenItems}{i:1}{i:1}{i:1}{i:77943756}`.
  - Preview/client removal shape: `{in:ObjectRemove}{s:"77943756"}{i:17586}{i:218103808}{b:false}`.
  - Place scorebord example: `{out:PlaceObject}{s:"78083750 1 0 0"}`
  - Activate scorebord after placement: `{out:UseFurniture}{i:78083750}{i:0}`
- Important correction: no `bs 1` is needed for the scorebord. Place it normally, then send `UseFurniture` to activate the UI.
- The grid overlay should continue using the `.object-location` movement reference. Scorebord DOM examples from Kenjy:
  - `<div class="position-absolute visible object-location" style="left: 607px; top: 245px;">...`
  - After moving the room/camera, the same kind of widget can become e.g. `left: 400px; top: 252px`.

### 2026-06-29 mega-room build flow for Light Art

- Kenjy wants the build function to create rooms automatically and build 4 chunks per room.
- Room names use a project/photo name prefix plus a number:
  - `projectName1` builds chunks `1,2,3,4`.
  - `projectName2` builds chunks `5,6,7,8`.
  - Repeat until all selected/generated chunks are done.
- The JavaScript extension now has a `Project naam` input. Empty means use the loaded image filename without extension.
- The mega-room packet sequence must be:
  1. `CreateFlat` with the target room name.
  2. Wait for `FlatCreated` and read `{i:roomId}{s:name}`.
  3. Send `OpenFlatConnection` with the created room id.
  4. Send `SaveRoomSettings` twice with 1 second between sends, using the created room id and room name.
  5. Send `AssignRights` for Kenjy's aka id `37968`.
  6. Send `AssignRights` for Kenjy's own id `4502029`.
  7. Send `UpdateFloorProperties` using the 63x63 floor payload from `shared-context/assets/packets/2026-06-29-update-floor-properties-63x63.txt`.
  8. Build the 4 mapped chunks in that room, then continue with the next room.
- Important floor payload detail:
  - Python does not send the logged raw byte-expression as the payload.
  - Python sends `make_packet('UpdateFloorProperties', BIG_FLOOR_64, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, -1)`.
  - `BIG_FLOOR_64` is `64` rows of `64` zeroes joined with `\r`, plus a final `\r`.
  - In JS, use `packetString(BIG_FLOOR_64) + '{i:0}{i:0}{i:0}{i:0}{i:0}{i:2}{i:0}{i:0}{i:0}{i:0}{i:-1}'`.
  - `GPacket.fromExpression()` understands escaped `\\r` in strings, so `packetString(...)` must encode CR/LF as `\\r`.
  - The floor update should run after entering the room/RoomReady and before saving room settings, matching the Python flow.
- Chunk mapping rule:
  - Global chunks are temporarily remapped to local room positions 1-4 during each room build.
  - Example: global chunks `5,6,7,8` are selected for room 2 but placed using local chunk anchors `1,2,3,4`.
- Current implementation notes:
  - `buyMissing(root)` still buys/scans for the whole plan before the mega-room build starts.
  - Scorebord auto-purchase/place/activate is now wired per generated room:
    - Scorebord purchase waits for the `UnseenItems` id.
    - It places the scorebord at `x:1, y:0, rot:0` with `bh 63.0`.
    - It activates with `UseFurniture` after placement.
- Kenjy supplied `GetGuestRoomResult` after opening a newly-created room:
  - Example: `{in:GetGuestRoomResult}{b:true}{i:5053231}{s:"e1"}...`
  - The second field after the boolean is the room id (`5053231` in the example).
  - Any packets that need room id, especially `SaveRoomSettings`, must use this created/opened room id.

### 2026-06-30 Python reference repo inspection

- Kenjy shared the Python reference repo: `https://github.com/Iglup1/pixelart-gpython`.
- Codex cloned it locally to `C:\Users\prepa\OneDrive\Bureaublad\pixelart-gpython-ref` for inspection only.
- Relevant Python findings from `leet_pixelart.py`:
  - Room creation waits for `FlatCreated`.
  - Then it sends `OpenFlatConnection`.
  - Then it waits for `RoomReady`.
  - Then it sends the big floorplan and saves room settings.
  - Number labels are intentionally outside the camera/photo footprint.
- JS implementation update:
  - `prepareMegaRoom(...)` now uses the id confirmed by `GetGuestRoomResult` for `SaveRoomSettings` when available.
  - Old physical chunk camera markers are removed from the extension.
  - Do not place standing half cylinder 14 / diagonal corner marker furniture for chunk framing anymore.
  - Keep only the chunk number furniture.

### Current chunk marker rule

- The word "marker" may still appear in internal JS helper names, but user-facing behaviour must be:
  - no physical chunk outline/frame furniture,
  - no standing half cylinder marker,
  - no diagonal corner marker,
  - only number labels remain.
- Number furniture:
  - page `-1`
  - offer `240903`
  - type `886656643`
- These numbers are labels for the camera/chunk workflow, not part of the Light Art image itself.
