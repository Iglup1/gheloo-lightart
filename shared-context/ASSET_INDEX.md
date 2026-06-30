# Asset Index

Every concrete file shared between agents should be listed here.

Format:

```md
## YYYY-MM-DD - short name

- File: `assets/...`
- From: Kenjy / Codex / Claude
- Purpose:
- Important notes:
```

## 2026-06-28 - shared context folder created

- File: `shared-context/README.md`
- From: Codex
- Purpose: establish where screenshots, packets, source images, and generated previews should be committed so Claude and Codex can both inspect them.
- Important notes: current chat screenshots are not automatically available as local image files. Future files Kenjy provides with accessible paths should be copied here and indexed.

Created folders:

- `assets/screenshots/`
- `assets/source-images/`
- `assets/packets/`
- `assets/previews/`
- `notes/`

## 2026-06-28 - project memory and context mirror

- File: `shared-context/SHARED_CONTEXT.md`
- From: Codex
- Purpose: mirror the root shared context into the shared asset folder so Claude/Codex can read project status from one folder.
- Important notes: keep this mirrored after meaningful context updates.

- File: `shared-context/notes/PROJECT_MEMORY.md`
- From: Codex
- Purpose: detailed packet, chunk, UI, build-watchdog, and Light Art rules gathered from Kenjy's messages.
- Important notes: embedded chat screenshots are summarized here because they are not accessible as local image files. Future actual files should be copied into `assets/...` and indexed.

## 2026-06-29 - 63x63 update floor properties packet

- File: `shared-context/assets/packets/2026-06-29-update-floor-properties-63x63.txt`
- From: Kenjy
- Purpose: raw `UpdateFloorProperties` payload used after auto-creating each Light Art mega room so the room becomes the large build floor again.
- Important notes: keep the file as raw shared evidence. The floorplan string row breaks are meaningful; `pixelart-lightart.js` preserves them, only normalizing CRLF to LF before sending.

## 2026-06-30 - confirmed floor packet from room 5053285 test

- File: `shared-context/assets/packets/2026-06-30-update-floor-properties-63x63-room-5053285.txt`
- From: Kenjy
- Purpose: raw `UpdateFloorProperties` packet supplied when testing room id `5053285`; confirms the same 63x63 floor payload shape should be used.
- Important notes: the room id is context from Kenjy's test message; the `UpdateFloorProperties` payload itself does not include a room id. This is a raw logged byte-expression, not the semantic JS payload. The active JS sender should follow Python: `BIG_FLOOR_64` string plus trailing ints `0,0,0,0,0,2,0,0,0,0,-1`.
