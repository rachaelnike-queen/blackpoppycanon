# Visual Atelier / Cabinet Requirements

## Purpose
The Visual Atelier is the working interface for finding, comparing, approving, assigning and reusing visual assets without losing their provenance.

It is not the master design-file archive. Source design files remain under `E:\Ethos`.

## Import/index requirements
- index PNG, JPG/JPEG, SVG and other supported production formats
- batch ingest/indexing
- duplicate detection by content hash where possible
- preserve original filename
- preserve original source path
- preserve source world/brand
- do not rename or move source files automatically

## Required asset metadata
- permanent asset ID
- title
- original filename
- Ethos source path
- world / brand
- category
- tags
- notes
- creation/import date
- source/provenance
- dimensions
- file size
- hash/duplicate group
- lifecycle status
- related product(s)
- related campaign(s)
- related document(s)
- related decision(s)
- version
- runtime/R2 location if deployed

## Lifecycle
`Inbox → Atelier → Approved → In Use → Archived`

Definitions:
- Inbox: indexed/imported, not yet classified
- Atelier: being reviewed, tagged, compared or edited
- Approved: approved for use
- In Use: actively linked to product/campaign/page/publication
- Archived: retired/superseded but preserved

## Views
- Grid
- List
- Gallery
- By World
- By Product
- By Campaign
- By Status
- By Collection
- Duplicate review

## Search
Search must cover:
- filename
- title
- tags
- world
- product
- campaign
- notes
- related document
- source path

## Collections
Seed collection types:
- Logos
- Product Art
- Ritual Cards
- Sigils
- Apothecary Labels
- Packaging
- Campaigns
- Moodboards
- Reference
- Photography
- Social
- Textures
- Historical

## Product workflow
1. Find/index source design in Ethos.
2. Register asset in Flat.
3. Review in Atelier.
4. Mark Approved only after owner approval.
5. Assign to one or more products.
6. Attach mockups/production exports separately from source artwork.
7. Record production/supplier relationship.
8. Mark In Use when shipped/published.
9. Archive older versions without deleting originals.

## Black Poppy Magik visual rule
Current direction is thick abstract monoline/sketch work, imperfect and intelligent. Do not default to generic gothic/occult clip art, random skulls, or decorative filler.

## Cross-world rule
Turtle Oracle, Funky Black Poppy, Cursey Queen and Black Poppy Magik assets must be independently filterable. Cross-world reuse should be explicit, not accidental.

## Developer acceptance test
A user should be able to search for an old poppy/sigil/product image, see exactly where the source file lives in Ethos, see every product that uses it, see its status and history, compare versions, and find the runtime copy without searching chat history.