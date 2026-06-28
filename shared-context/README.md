# Shared Context Assets

This folder is for concrete files that both Codex and Claude should be able to inspect.

Use it for:

- screenshots Kenjy sends for visual feedback
- source images used in Light Art tests
- pasted packet logs or room object packets
- generated previews/simulations
- short notes that need more detail than `SHARED_CONTEXT.md`

Rules:

- Keep `SHARED_CONTEXT.md` as the high-level summary.
- Put raw/detail files in this folder.
- Add every new file to `ASSET_INDEX.md` with date, source, and why it matters.
- Do not store secrets, tokens, cookies, or account credentials.
- Do not edit Gheloo logger/host files to collect assets.

Suggested subfolders:

- `assets/screenshots/`
- `assets/source-images/`
- `assets/packets/`
- `assets/previews/`
- `notes/`

