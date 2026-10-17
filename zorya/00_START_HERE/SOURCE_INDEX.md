# Source Documentation Index

This file tells the developer what existing documentation exists and how to treat it.

## CURRENT / PRIMARY

### The Black Poppy Flat — Engineering Design Document v2.0 Cloud Rebuild Draft
Status: **CURRENT ARCHITECTURE SOURCE**
Use for:
- cloud-first rebuild intent
- Flat naming
- GitHub + Cloudflare architecture
- working-room model
- object model direction

Important override: its statement that R2 is authoritative for visual source bytes is superseded. Current rule: `E:\Ethos` is the source-design authority; R2 is runtime/deployment storage.

### This `zorya/` handoff tree
Status: **CURRENT IMPLEMENTATION GUIDE**
If a handoff document here conflicts with legacy Canon/Atlas documents, use this handoff and flag the conflict.

## LEGACY BUT TECHNICALLY VALUABLE

### ENGINEERING_BIBLE.md / ENGINEERING_BIBLE(1).md
Status: **LEGACY IMPLEMENTATION ARCHAEOLOGY**
Contains:
- old PWA architecture
- route map
- services/repositories
- component catalog
- permanent ID logic
- relationship services
- worktables
- search
- quick capture
- service-worker conventions
- testing principles

Use ideas/components only after mapping into current Flat architecture.

### BLACK_POPPY_ATLAS_EDD_v2_DRAFT.md
Status: **LEGACY TRANSITION ARCHITECTURE**
Contains strong requirements for:
- durable objects
- visual lifecycle
- asset metadata
- R2/D1 split
- history/archaeology
- Notion operational separation

Naming and source-design storage rules are superseded by current Flat/Ethos decisions.

### Black_Poppy_Master_Build_Inventory.md
Status: **HISTORICAL BUILD INVENTORY**
Useful for locating previous builds, products, apps, infrastructure decisions and unresolved work. Treat dates/statuses as historical unless re-verified.

## CURRENT PRODUCT SOURCES

### Black Poppy Magik product system
Captured in `../02_PRODUCT_SYSTEM/MASTER_PRODUCT_CATALOG.md`.

### Turtle Oracle product system
Captured in the same master catalog with a dedicated TO section. Existing Turtle Oracle Visual Atelier HTML builds and product imagery should be preserved/indexed separately.

## EXISTING HTML / APP ARTIFACTS TO PRESERVE
Known historical/current artifacts include:
- launcher/index HTML with Flat/Atelier routes
- Black Poppy Magik Visual Product Atelier artifact
- Turtle Oracle Visual Product Atelier
- Turtle Oracle Real Visual Atelier v2
- Turtle Oracle Visual Atelier v3
- Turtle Oracle Complete Visual Atelier v4
- Black Poppy Universe Apps + Ateliers Registry

Do not assume any artifact is deployed simply because an HTML file exists. Verify live routes separately.

## ASSET SOURCES TO INDEX
Known Black Poppy Magik asset families include:
- brand boards / moodboards
- Black Poppy Continuum emblem/logo work
- vintage/simple apothecary label experiments
- War Water
- ritual cards
- moon/grimoire material
- sigil cards
- wild pentagram art
- product/mockup imagery

Known Turtle Oracle asset families include:
- reading/product images
- sigils
- charts
- story/reading cards
- Visual Atelier builds

## RULE FOR DEVELOPER
Do not treat file age, filename, or presence as approval. Approval/status must be represented explicitly in the Flat. Unknown items remain `UNKNOWN / NEEDS OWNER DECISION` until reviewed.