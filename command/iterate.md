---
description: Iterate on one PRD item of given feature
agent: build
---

@progress.md

- Feature ID: $1
- Use prdman skill

**PRD Items**
!`prdman list $1`

1. Check the list of PRD items.
2. Find the next incomplete item and implement it.
3. Run your tests, lints, code formatting and type checks.
4. Update the PRD item's status to `done` via `prdman update-status` command.
5. Append the progress.md with the description of what you did.

ONLY DO ONE PRD ITEM TASK AT A TIME.
