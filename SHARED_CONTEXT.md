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

## Build reliability target

- Minimize `:bh`, `:bs`, and `:bd` changes because chat-setting commands are slow and can desync.
- When settings must change, wait for the incoming whisper confirmation before placing.
- If no valid `ObjectAdd` arrives, retry placement up to the configured watchdog limit and log each attempt.
- Checkpoint progress so a failed/paused build can continue from the last confirmed valid step.

## New shared-info rule

When Kenjy gives any AI packets, screenshots, explanations, camera/chunk coordinates, or test results that the other AI might need, that AI must update this file or `DEVLOG.md` before ending the session.
