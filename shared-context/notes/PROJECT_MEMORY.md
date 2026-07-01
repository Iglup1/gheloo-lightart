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
- Room preview grid overlay should be subtle and no-number. Kenjy rejected both the marker-meubel grid and the later room-anchored class experiment.
- Current requested baseline is commit `74d5eb0`: one large projected isometric Light Art preview with the older GUI/grid overlay above the art.
- `Plaats preview in kamer` must not buy furniture. It should only inject fake incoming preview objects. Buying belongs to `Koop+Build`.
- Current grid correction: the overlay should feel room-anchored like a `.object-location` widget, not fixed to the user's screen. It follows camera movement by tracking an existing `.object-location` reference each frame. Grid cells must be full 20x20 chunk cells (`tilePx = 16`), not half-size 10x10.
- Final interaction rule from Kenjy: the grid should be draggable while `los`; after the user aligns it above the art, clicking `vast` stores the offset to a real `.object-location` widget (`style.left/top`) and then follows that widget every frame. This is the expected way to make it feel locked in the room without marker furniture.
- The room grid overlay must be layered below normal Leet/Nitro windows and extension UIs. It should be above room/furniture only, not a topmost screen overlay.
- Scorebord anchor packets supplied by Kenjy:
  - Buy: `{out:PurchaseFromCatalog}{i:148}{i:232174}{i:0}{b:false}{b:true}`
  - Purchase OK example: `{in:PurchaseOK}{i:232174}{s:"highscore_mostwin*1"}...`
  - New scorebord item id comes through `UnseenItems`, example `{in:UnseenItems}{i:1}{i:1}{i:1}{i:77943756}`.
  - Client-side remove shape: `{in:ObjectRemove}{s:"77943756"}{i:17586}{i:218103808}{b:false}`.
  - Place example: `{out:PlaceObject}{s:"78083750 1 0 0"}`
  - Activate after placement: `{out:UseFurniture}{i:78083750}{i:0}`
  - Correction: do not use `bs 1` for activating this scorebord; use `UseFurniture`.

## Mega-Room Build Flow

Kenjy's target Light Art build mode is 4 chunks per room:

- Create `projectName1`, build global chunks `1,2,3,4`.
- Create `projectName2`, build global chunks `5,6,7,8`.
- Continue until all selected chunks are done.
- The `Project naam` UI field is the room/save prefix. Empty means use the image filename without extension.

Required room packet flow per room:

```txt
{out:CreateFlat}{s:"naam"}{i:7}{i:1836016741}{i:1818178816}{i:8192}{i:2560}{b:false}{b:false}{b:false}
```

Then wait for:

```txt
{in:FlatCreated}{i:ROOM_ID}{s:"naam"}
```

After opening/entering the room, `GetGuestRoomResult` can also confirm the room id:

```txt
{in:GetGuestRoomResult}{b:true}{i:ROOM_ID}{s:"naam"}...
```

Use this actual room id for every room-id-dependent packet such as `SaveRoomSettings`. Then send:

```txt
{out:OpenFlatConnection}{i:ROOM_ID}{s:""}
{out:SaveRoomSettings}{i:ROOM_ID}{s:"naam"}{i:0}{i:196608}{i:10}{i:32}{i:0}{i:0}{i:256}{i:0}{i:0}{i:0}{i:1}{i:0}{i:0}{i:0}{i:0}{i:0}{i:0}
```

Send `SaveRoomSettings` twice with 1 second between packets. Then:

```txt
{out:AssignRights}{i:37968}
{out:AssignRights}{i:4502029}
```

Then send the 63x63 `UpdateFloorProperties` payload from:

```txt
shared-context/assets/packets/2026-06-29-update-floor-properties-63x63.txt
```

Implementation detail: the raw logged `UpdateFloorProperties` byte-expression is useful evidence, but should not be used as the JS payload. Python sends the semantic packet:

```python
BIG_FLOOR_64 = "\r".join(["0" * 64 for _ in range(64)]) + "\r"
make_packet('UpdateFloorProperties', BIG_FLOOR_64, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, -1)
```

JS should send:

```js
packetString(BIG_FLOOR_64) + '{i:0}{i:0}{i:0}{i:0}{i:0}{i:2}{i:0}{i:0}{i:0}{i:0}{i:-1}'
```

`packetString(...)` must encode CR/LF as `\\r`, because Gheloo's `GPacket.fromExpression()` expands escaped `\r` into real carriage returns. The floor update belongs after room enter/RoomReady and before `SaveRoomSettings`, matching Python.

Chunk remap rule: for each room group, global chunks are temporarily mapped to local room chunks 1-4. So room 2 builds global `5,6,7,8`, but their furniture coordinates use the exact local frame starts/anchors for `1,2,3,4`.

Current scorebord automation rule: after preparing each generated room, the extension buys one scorebord, reads its real item id from `UnseenItems`, places it at `x:1, y:0, rot:0` with `bh 63.0`, then activates it using `UseFurniture`.

## 2026-06-30 Source Photo Reset

Kenjy can accidentally drag/scale the `Bron + color` source image out of view. The UI must expose a visible recovery button:

- Button label: `Bronfoto terugzetten`.
- Reset only:
  - `imgPanX = 0`
  - `imgPanY = 0`
  - `imgScale = 1.0`
- Rebuild the preview if an image is loaded.
- Do not reset generator size, chunk selection, max lights, build settings, or colour settings.

## 2026-06-30 Mega-Room Continue Rule

Kenjy supplied a failed PLAN INFO/log copied to:

```txt
shared-context/assets/logs/2026-06-30-mega-room-checkpoint-step-1532.txt
```

Important observed checkpoint:

- `stage: "Kamer 1"`
- `completed: 1531`
- `nextStep: 1532`
- `total: 2990`

Rule for all future agents:

- A `Kamer N` checkpoint is a mega-room checkpoint.
- Continue must call `buildMegaRooms(...)`, not normal `build(...)`.
- Checkpoints from `placeGrouped(...)` during mega-room building must include:
  - `megaRoom: true`
  - `roomIndex`
  - `roomNumber`
  - `roomName`
  - `chunks`
- When resuming a mega-room checkpoint:
  - Continue in the current room.
  - Do not create the room again.
  - Do not place chunk numbers again.
  - Skip already completed steps with `resumeSkip`.
  - Clear `resumeSkip` after that room completes so later rooms build from step 1.

## 2026-07-01 PixelArt User Extensions Hub Rule

The full PixelArt UI must not open automatically when the extension starts.

Current intended behavior:

- Boot creates the PixelArt card hidden.
- Boot registers that hidden panel with the Gheloo User Extensions hub:

```js
window.__ext_hub_register({
  name: 'PixelArt',
  icon: '...',
  panel: root
});
```

- No separate floating `PA PixelArt` launcher should be shown on the game screen.
- Clicking the `PixelArt` tile inside the User Extensions window opens the PixelArt card.
- The close button hides the card only.
- Hidden card state must remain alive:
  - loaded image,
  - source pan/zoom,
  - generated plan,
  - settings,
  - logs.
- Clicking the hub tile again reuses and shows the same card.
- Extension stop/toggle off removes card, room grid overlay, and PixelArt styles.

The Gheloo hub code in `content.js` handles positioning/displaying `opts.panel` when the tile is clicked.

## Python Reference Repo

Kenjy shared `https://github.com/Iglup1/pixelart-gpython` as the old Python implementation to inspect for packets and room flow. Codex cloned it locally to:

```txt
C:\Users\prepa\OneDrive\Bureaublad\pixelart-gpython-ref
```

Useful Python findings from `leet_pixelart.py`:

- Mega room creation sends `CreateFlat`.
- It waits for `FlatCreated`.
- It sends `OpenFlatConnection`.
- It waits for `RoomReady`.
- It sends the big floorplan and saves room settings before building.
- Number labels are deliberately outside the camera/photo footprint.

Current JS rule based on this inspection:

- `prepareMegaRoom(...)` should use the confirmed `GetGuestRoomResult` room id for `SaveRoomSettings` when available.
- Physical chunk camera markers are removed.
- Do not generate or build standing half cylinder 14 marker furniture.
- Do not generate or build diagonal corner marker furniture.
- Only the number furniture remains:
  - page `-1`
  - offer `240903`
  - type `886656643`

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
