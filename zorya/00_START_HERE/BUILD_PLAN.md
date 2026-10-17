# Build Plan — The Black Poppy Flat

This is the current implementation sequence for the developer. It reconciles the legacy Canon/Atlas architecture with the current Flat decisions.

## Phase 0 — Preserve and inventory
- [ ] Clone current repository and create a migration checkpoint/tag.
- [ ] Inventory every current code file before replacement.
- [ ] Inventory all durable Markdown/source documentation.
- [ ] Inventory `E:\Ethos` design folders without moving originals.
- [ ] Generate asset manifest: filename, source path, type, world, status, dimensions, duplicate hash, related product/campaign.
- [ ] Mark every source as CURRENT / LEGACY / ARCHIVE / UNKNOWN.
- [ ] Do not destructively delete.

## Phase 1 — Flat foundation
- [ ] Establish current Flat application root and versioning.
- [ ] Configure Cloudflare Pages front end.
- [ ] Configure Cloudflare Workers API layer.
- [ ] Create/confirm D1 database and migrations.
- [ ] Create/confirm R2 runtime asset bucket(s).
- [ ] Define environment variables and secrets outside source control.
- [ ] Add deployment, rollback, health-check and release process.
- [ ] Add installable PWA manifest/service worker if retained after architecture review.

## Phase 2 — Core data model
Implement permanent object identity and relationships.

Required object types:
- Person
- AI Collaborator
- Companion
- Team
- World
- Document
- Asset
- Symbol
- Project
- Campaign
- Product
- Decision
- Source
- Relationship
- Collection

Universal fields:
- id
- type
- title
- status
- created_at
- updated_at
- created_by/source
- tags
- notes
- version

Required rules:
- permanent IDs never reused
- archive, do not erase
- relationships are first-class objects
- provenance is retained
- history/version trail retained

## Phase 3 — Flat rooms
- [ ] Hall: active work, alerts, unfinished work, recent additions, projects, quick capture.
- [ ] Study: durable Markdown/knowledge, research, foundations, philosophy, systems, people, teams, world docs.
- [ ] Atelier: drafts, ideas, experiments, active creative worktables.
- [ ] Cabinet: image inbox, logos, brand boards, product art, photography, campaign assets, references, textures, historical visuals.
- [ ] Archive: archaeology, retired systems, superseded decisions, old versions, recovered sources.
- [ ] Parlour: storytelling, conversation, community and narrative.
- [ ] Workroom: products, campaigns, launches, production and publishing.
- [ ] Library: curated durable collections.

## Phase 4 — Visual Atelier / Cabinet
- [ ] Multi-file import/index workflow for PNG/JPG/SVG and relevant production formats.
- [ ] Ethos source-path field on every design asset.
- [ ] Duplicate detection by hash.
- [ ] Thumbnail/grid/list/gallery views.
- [ ] Search by filename/title/tag/world/product/campaign/notes.
- [ ] Filters by world, category, collection, lifecycle, product, campaign.
- [ ] Lifecycle: Inbox → Atelier → Approved → In Use → Archived.
- [ ] Metadata editor.
- [ ] Version/history display.
- [ ] Product assignment.
- [ ] Related Markdown/decision/source relationships.
- [ ] Never overwrite original Ethos source files.

## Phase 5 — Product system
- [ ] Import master product catalog.
- [ ] Product detail pages in Workroom.
- [ ] Link each product to artwork, mockups, packaging, supplier, variants and production status.
- [ ] Preserve product-level design decisions.
- [ ] Add cost/retail/margin fields without inventing current supplier data.
- [ ] Add supplier verification date.

## Phase 6 — Black Poppy Magik
- [ ] Ritual Table collection.
- [ ] Working Grimoire collection.
- [ ] Black Poppy Desk collection.
- [ ] Objects & Talismans collection.
- [ ] Black Poppy Editions collection.
- [ ] Ritual library.
- [ ] Sigil system.
- [ ] Apothecary labels/packaging.
- [ ] Product artwork and mockups.
- [ ] Social/publishing relationships only where intentional.

## Phase 7 — Grimoire / Book of Shadows
- [ ] Audit existing Book of Shadows modules first.
- [ ] Import existing durable content; do not invent replacement content.
- [ ] Build modular daily-use Grimoire interface.
- [ ] Rituals.
- [ ] Herbs/reference.
- [ ] Astrology/calendar where supported by existing content.
- [ ] Sigil creator/system integration.
- [ ] Export/print where useful.

## Phase 8 — Turtle Oracle
- [ ] Import current Turtle Oracle catalog.
- [ ] Import/retain Turtle Oracle Visual Atelier assets separately from Black Poppy Magik.
- [ ] Preserve Turtle Oracle brand rules and reading-system language.
- [ ] Product/reading detail records.
- [ ] Asset-to-product relationships.
- [ ] Reading templates/delivery documents referenced but not mixed into BPM visuals.

## Phase 9 — Other worlds
- [ ] Funky Black Poppy registry/inventory hooks.
- [ ] Cursey Queen media/content registry.
- [ ] Black Poppy Continuum editorial registry.
- [ ] Keep DCAP separate unless explicitly linked as a source/project reference.

## Phase 10 — Search, capture and relationships
- [ ] Universal search.
- [ ] Command palette.
- [ ] Quick capture.
- [ ] Relationship navigation.
- [ ] Recent items.
- [ ] Saved/curated collections.

## Phase 11 — Migration
- [ ] Migrate legacy Canon objects only after mapping them into current Flat types.
- [ ] Preserve historical IDs where useful and safe.
- [ ] Create mapping table: legacy ID → current ID.
- [ ] Import historical docs/assets as archive, not current truth.
- [ ] Mark old Atlas/Canon naming as superseded metadata.

## Phase 12 — QA / acceptance
- [ ] Desktop usability.
- [ ] Mobile usability.
- [ ] Keyboard navigation.
- [ ] Accessibility basics (labels, focus, contrast, semantic structure).
- [ ] No critical data exists only in browser/localStorage.
- [ ] Asset bytes persist independently of browser cache.
- [ ] Search returns product + asset + document relationships.
- [ ] Archive/restore works.
- [ ] Duplicate assets detected without deleting originals.
- [ ] Deployment rollback tested.
- [ ] Backup/restore documented.
- [ ] Broken-link scan.
- [ ] Cross-world visual contamination check.

## Definition of done for v2.0 launch
A developer can add a source asset to Ethos, register it in the Flat, assign it to a product, find it later by search/relationship, see its provenance/history, deploy a runtime copy, and never depend on a chat transcript or browser cache to recover it.