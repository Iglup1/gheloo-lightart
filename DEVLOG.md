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
