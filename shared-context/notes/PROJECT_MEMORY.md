# Project Memory

This note is the detailed shared memory for Codex and Claude. Read this before changing `pixelart-lightart.js`.

## Goal

Build a single JavaScript extension for the Gheloo/Leet logger that generates Leet/Habbo pixel art and Light Art. The current priority is Light Art: it should become smoother and more artistic as Blender increases, using overlapping light furniture, colour mixing, stronger stacks, and larger glow sizes. This is no longer a Python project.

Do not edit Gheloo logger or host files. Only edit the extension/script and project docs unless Kenjy explicitly asks otherwise.

## Important Workflow

- Main source: `pixelart-lightart.js`
- Live extension copy: `C:\Users\prepa\OneDrive\Bureaublad\Gheloo-main\extensions\pixelart-lightart.js`
- After code changes, copy the main script to the live extension folder and to clipboard.
- Update `DEVLOG.md`, root `SHARED_CONTEXT.md`, and this shared-context folder when user gives new packets, screenshots, tests, or behaviour.
- Commit and push after verified changes.
- If GitHub rejects push, pull/rebase then push.

Shared-memory updates are mandatory. Codex and Claude must not wait for Kenjy to specifically ask for them. If Kenjy gives reusable packets, screenshots, coordinates, colour tests, UI feedback, build logs, or rules, capture them here or in root `SHARED_CONTEXT.md`, mirror `SHARED_CONTEXT.md` into `shared-context/SHARED_CONTEXT.md`, update `ASSET_INDEX.md` for files, then commit and push.

## Light Furniture

Available light states:

- `bs 0`: white
- `bs 1`: red
- `bs 2`: orange
- `bs 3`: yellow
- `bs 4`: green
- `bs 5`: cyan
- `bs 6`: purple
- `bs 7`: pink

Rotation (`bd`) does not visually matter for lights. Build height (`bh`) can matter for smooth vertical placement and half-tile interpolation; `:bh 0` must be typed to set zero. Plain `:bh` disables custom height.

Light catalog/type mapping used in the script:

- XXL: type `886600850`, catalog page `368`, offer `36841`
- XL: type `886600851`, catalog page `368`, offer `36842`
- L: type `886600852`, catalog page `368`, offer `36844`
- M: type `886600853`, catalog page `368`, offer `36843`
- S: type `886600854`, catalog page `368`, offer `36845`

The light colours mix additively in the room. User specifically expects blends like orange + white to create better skin tones, and overlapping coloured lights to create perceived secondary colours. The file `habbo_light_sprite_combinations_codex_guide_v2.txt` contains colour combination analysis and should be used for palette/recipe changes.

## Build Packets And Acks

Known outgoing placement example:

```txt
{out:PlaceObject}{s:"61296604 18 20 2"}
```

Known incoming object add shape:

```txt
{in:ObjectAdd}{i:62165551}{i:886600852}{i:46}{i:41}{i:1}{s:"2.0"}{s:"0.001"}{i:1}{i:0}{s:"3"}{i:-1}{i:1}{i:4502029}{s:"kadet"}
```

Meaning for watchdog:

- typeId is the furniture type.
- x/y are tile coordinates.
- rot is placement rotation.
- first string after rot is height.
- state string is `bs`.
- Owner can appear at the end.

Incoming confirmation texts include:

```txt
Custom bouwhoogte is veranderd naar: 1! Typ :bh om de custom bouwhoogte uit te schakelen.
Custom draaipositie is veranderd naar: 1! Typ :bd om de custom draaipositie uit te schakelen.
Custom staat is veranderd naar: 1! Typ :bs om de custom staat uit te schakelen.
Custom bouwhoogte is uitgeschakeld!
Custom draaipositie is uitgeschakeld!
Custom staat is uitgeschakeld!
```

Setting commands need a cooldown. User reported spammed `:bh/:bd/:bs` messages do not always take effect, so keep roughly one second between different setting messages and wait for whisper confirmation.

Client-side preview removal can use:

```txt
{in:ObjectRemove}{s:"63088959"}{i:17586}{i:218103808}{b:false}
```

Room preview should inject one large incoming `Objects` packet with fake object ids and correct coordinates, not build one-by-one. Only buying missing furniture is allowed before preview injection.

## Chunk Layout

User gave exact 20x20 chunk outlines for the default 2x2 Light Art room. The camera takes each chunk as a flat 2D frame, so furniture must stay inside the intended chunk plane as much as possible. Bigger lights may bleed a little outside for glow quality.

Light Art chunk count must use both art dimensions. Do not derive rows from columns. Example: Art grootte `60x100` with 20-tile chunks must be `3x5`, not `3x3`.

Default exact frame starts currently used:

- chunk 1: `{ x: 2, y: 42 }`
- chunk 2: `{ x: 2, y: 13 }`
- chunk 3: `{ x: 32, y: 13 }`
- chunk 4: `{ x: 28, y: 39 }`

Default marker anchors currently used:

- chunk 1: `{ x: 21, y: 61 }`
- chunk 2: `{ x: 21, y: 32 }`
- chunk 3: `{ x: 51, y: 32 }`
- chunk 4: `{ x: 47, y: 58 }`

Chunk numbering in previews is row-major from top-left: `1,2,3 / 4,5,6 / 7,8,9`. The user wants small preview grid labels on canvases, but room overlay grid should have no numbers and only tiny/subtle lines.

Markers:

- standing half cylinder 14: page `2026`, offer `6572`, type `886731030`
- diagonal trim/corner: page `348`, offer `21567`
- number furniture: page `-1`, offer `240903`, type `886656643`

## UI Requirements

- Keep the UI looking like Leet shop/catalog style.
- Do not allow vertical resizing; horizontal resizing only.
- If width is too small, do not crop left-side labels/buttons/sliders.
- Section titles should have consistent spacing and be visually distinct from controls.
- Source canvas shows the source image with source colour grading applied.
- Furniture preview canvas shows what the furniture/camera preview would look like.
- Source colour controls affect the real generator input.
- Camera preview filters affect only the preview image, not the furniture choices.
- Canvas chunk grids should be tiny old-style dotted lines with small corner numbers.
- Room preview grid overlay should be a subtle UI overlay, no numbers, toggled by a dark-blue active `grids` button beside `Plaats preview in kamer`.
- The room preview grid must not be a normal fixed screen overlay. Kenjy wants it to spawn as room preview content, like furniture, so it moves with the room/camera.
- The `grids` button controls client-side fake guide objects that are appended to the fake incoming `Objects` preview packet. Guide chunks are visually `chunkSize * 2`.

## Current User Feedback To Preserve

- Blender 0 should be closer to pixel art with small lights.
- Higher Blender should become smoother and more artistic, not a random dotted matrix.
- Flat areas of one colour should blend smoothly with larger lights instead of looking pixelated.
- Colour transitions should use multiple overlapping lights and combination recipes.
- Darker colours and clothing must not collapse into only orange/cyan/red noise.
- If a source image is 20x20 and one chunk can contain 400 small lights, the generator should not spread it over multiple chunks.
- Preview in the Leet room must be a single incoming `Objects` packet, plus client-side remove packets when toggled off.

## Asset Note

Current chat screenshots were embedded in the conversation and are not directly available as local files. When Kenjy supplies actual file paths, copy them into `shared-context/assets/...` and list them in `shared-context/ASSET_INDEX.md`.
