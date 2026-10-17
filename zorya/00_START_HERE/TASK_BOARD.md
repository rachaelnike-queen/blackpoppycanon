# Developer Task Board

Use this as the implementation checklist. Keep status updated in GitHub and mirror operational status into Notion only if useful.

Legend: `[ ]` not started · `[-]` in progress · `[x]` complete · `[!]` blocked

## A. Preservation / archaeology
- [ ] Clone/tag current repository before structural changes.
- [ ] Inventory current `/src` tree.
- [ ] Copy/retain legacy engineering docs under archive/docs.
- [ ] Build migration map from Canon/Atlas → Flat.
- [ ] Inventory existing Flat/Atelier HTML artifacts.
- [ ] Inventory all `E:\Ethos` design-source folders without moving them.
- [ ] Produce duplicate/hash report for visual assets.
- [ ] Produce approval-status review queue.

## B. Infrastructure
- [ ] Confirm final GitHub repository strategy: retain current repo vs dedicated Flat repo.
- [ ] Confirm Cloudflare Pages project for Flat.
- [ ] Confirm custom domain route `flat.rachaelnike.com`.
- [ ] Create/confirm Workers API.
- [ ] Create/confirm D1 database.
- [ ] Create/confirm R2 runtime bucket.
- [ ] Document bindings and environment variables.
- [ ] Add deployment workflow.
- [ ] Add rollback procedure.
- [ ] Add health/status endpoint.

## C. Data layer
- [ ] Implement universal object envelope.
- [ ] Implement permanent IDs.
- [ ] Implement archive/supersede behavior.
- [ ] Implement first-class relationships.
- [ ] Implement provenance/source model.
- [ ] Implement activity/version history.
- [ ] Implement Product object.
- [ ] Implement Asset object.
- [ ] Implement Collection object.
- [ ] Implement Decision object.
- [ ] Implement Source object.

## D. Flat shell
- [ ] Hall.
- [ ] Study.
- [ ] Atelier.
- [ ] Cabinet.
- [ ] Archive.
- [ ] Parlour.
- [ ] Workroom.
- [ ] Library.
- [ ] Responsive navigation.
- [ ] Global search.
- [ ] Command palette.
- [ ] Quick capture.

## E. Visual Atelier / Cabinet
- [ ] Asset indexer/importer.
- [ ] Ethos source-path field.
- [ ] Duplicate detection.
- [ ] Grid/list/gallery views.
- [ ] Filters.
- [ ] Search.
- [ ] Collections.
- [ ] Metadata editor.
- [ ] Lifecycle controls.
- [ ] Product assignment.
- [ ] Related-doc/decision/source relationships.
- [ ] Version comparison.
- [ ] Runtime/R2 copy tracking.

## F. Product Workroom
- [ ] Load Black Poppy Magik catalog seed.
- [ ] Load Turtle Oracle catalog seed.
- [ ] Product list/filter/search.
- [ ] Product detail page.
- [ ] Artwork relationships.
- [ ] Mockup relationships.
- [ ] Packaging relationships.
- [ ] Supplier fields.
- [ ] Cost / retail / margin fields.
- [ ] Supplier verification-date field.
- [ ] Production status/history.

## G. Black Poppy Magik
- [ ] Index brand boards/moodboards.
- [ ] Index poppy/emblem work.
- [ ] Index ritual cards.
- [ ] Index sigils.
- [ ] Index War Water and apothecary assets.
- [ ] Index label experiments.
- [ ] Index pentagram art.
- [ ] Assign designs to BPM-001 through BPM-016.
- [ ] Build BPM-001 XL Desk Mat detail/variant workflow first.
- [ ] Build collections: Ritual Table, Working Grimoire, Black Poppy Desk, Objects & Talismans, Black Poppy Editions.

## H. Grimoire
- [ ] Inventory existing Book of Shadows modules.
- [ ] Map modules into current Flat/Grimoire object structure.
- [ ] Preserve existing ritual content.
- [ ] Preserve existing sigil system.
- [ ] Build daily-use navigation.
- [ ] Build search/relationships.
- [ ] Build print/export where needed.

## I. Turtle Oracle
- [ ] Preserve/import Complete Visual Atelier v4 as a source artifact.
- [ ] Index older Atelier versions as history.
- [ ] Import current TO catalog.
- [ ] Index product/reading imagery.
- [ ] Index sigils/charts/story cards.
- [ ] Preserve dedicated TO visual system.
- [ ] Keep TO product/readings system separate from BPM.

## J. Other worlds
- [ ] Funky Black Poppy registry hooks.
- [ ] Cursey Queen registry hooks.
- [ ] Black Poppy Continuum registry hooks.
- [ ] Explicit cross-world relationship controls.

## K. QA
- [ ] Desktop.
- [ ] Mobile.
- [ ] Keyboard.
- [ ] Accessibility.
- [ ] Search quality.
- [ ] Broken links.
- [ ] Archive/restore.
- [ ] Duplicate handling.
- [ ] Backup/restore.
- [ ] Deployment rollback.
- [ ] PWA install/offline behavior if retained.
- [ ] Verify no critical data exists only in browser cache.

## First deliverable
A functioning Flat shell at the intended live route with Hall, Cabinet/Visual Atelier, Workroom/Product Catalog and global search wired to persistent data. BPM-001 and the Turtle Oracle catalog must be visible as real records, not hard-coded decorative cards.