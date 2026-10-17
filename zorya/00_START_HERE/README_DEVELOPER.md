# Zorya Developer Handoff

## Read this first

This directory is the current developer handoff for **The Black Poppy Flat** and the connected Black Poppy worlds.

Local master handoff target:

`E:\Ethos\Claude\zorya`

GitHub is the durable developer mirror for code, Markdown, schemas, migrations, documentation, and release history.

## Current source-of-truth rules

1. **E:\Ethos is authoritative for source design files.** Do not reorganize, rename, overwrite, or delete originals without explicit approval.
2. **GitHub is authoritative for application source code and durable Markdown documentation.**
3. **Cloudflare Pages/Workers are deployment/runtime infrastructure.**
4. **Cloudflare D1 is for structured application records and indexes.**
5. **Cloudflare R2 is for deployed/served binary asset copies, not the master source-design archive.**
6. **Notion is operational only:** tasks, launches, campaigns, meetings, production tracking. It is not the design archive and not the Flat's permanent source of truth.
7. No important work may exist only in browser storage or chat.
8. Nothing durable is destructively deleted. Archive/supersede instead.

## Product

The current product name is **The Black Poppy Flat**. Legacy names such as Black Poppy Canon and Black Poppy Atlas are retained only as historical/architecture source material.

North-star rule:

> Create it once. Lose it never.

## What the Flat must contain

- The Hall — active work, alerts, unfinished work, recent additions, quick capture
- The Study — durable knowledge and Markdown
- The Atelier — active creative work
- The Cabinet — visual assets and references
- The Archive — superseded/historical work
- The Parlour — conversation, storytelling, community, narrative
- The Workroom — products, campaigns, launches, production, publishing
- The Library — curated durable knowledge

## Worlds included in this handoff

- Black Poppy Magik & Apothecary
- Black Poppy Grimoire / Book of Shadows
- Turtle Oracle
- Funky Black Poppy
- Cursey Queen
- Black Poppy Continuum

DCAP is a separate civic universe and must not bleed into Black Poppy product/brand work unless explicitly requested.

## Start order

1. Read `DECISIONS_LOCKED.md`.
2. Read `BUILD_PLAN.md`.
3. Read `../01_FLAT/CURRENT_ARCHITECTURE.md`.
4. Read `../02_PRODUCT_SYSTEM/MASTER_PRODUCT_CATALOG.md`.
5. Read `../04_VISUAL_ATELIER/ATELIER_REQUIREMENTS.md`.
6. Audit the existing legacy app/code before deleting or replacing anything.
7. Build in versioned checkpoints.

## Non-negotiable working rule

Do not invent missing brand/product content. Mark unknowns as `NEEDS OWNER DECISION` and continue with the surrounding build.