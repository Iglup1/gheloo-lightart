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
- Important notes: keep the file as raw shared evidence. In `pixelart-lightart.js`, newline characters are stripped before sending because Gheloo's `GPacket.fromExpression()` cannot parse string tokens across literal newlines.
