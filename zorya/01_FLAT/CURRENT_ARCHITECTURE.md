# The Black Poppy Flat — Current Architecture

## Status
Current implementation target. This document supersedes conflicting storage/name rules in legacy Canon/Atlas documents.

## Purpose
The Black Poppy Flat is the living digital home of the Black Poppy Universe. It connects durable knowledge, documents, people, teams, companions, worlds, symbols, projects, campaigns, products, visual assets, research, decisions, history and active creative work.

## North star
**Create it once. Lose it never.**

## Persistence architecture

### Local design archive
`E:\Ethos`

Authoritative source for source-design files and approved source artwork.

### GitHub
Authoritative for:
- application source code
- Markdown repository
- schemas
- migrations
- engineering documentation
- tests
- release history

### Cloudflare Pages
Hosts the front-end application.

### Cloudflare Workers
Handles:
- API requests
- application logic
- automation
- authentication orchestration
- GitHub sync operations where implemented
- asset processing/indexing workflows

### Cloudflare D1
Authoritative for structured application records:
- object records
- metadata
- statuses
- relationships
- asset records
- source records
- products
- project/campaign state
- activity history
- search/index data

### Cloudflare R2
Stores deployed/runtime binary copies used by the application:
- PNG/JPG/SVG
- photography
- logos
- product artwork
- campaign graphics
- exports
- reference files

R2 does **not** replace `E:\Ethos` as the source-design archive.

### Notion
Operational only:
- Now / Next / Blocked
- launches
- campaigns
- tasks
- meetings
- production tracking

## Working rooms

### Hall
Front door: active work, alerts, unfinished items, recent additions, projects, quick capture.

### Study
Durable knowledge and Markdown: research, notes, foundations, philosophy, systems, people, teams and world documentation.

### Atelier
Active creative work: drafts, ideas, experiments and worktables.

### Cabinet
Visual asset browser/reference system: inbox, logos, brand boards, product art, photography, campaigns, textures, references and historical visuals.

### Archive
Archaeology and superseded material: retired systems, old versions, superseded decisions and recovered source material.

### Parlour
Conversation, storytelling, community and narrative work.

### Workroom
Products, campaigns, launches, production and publishing.

### Library
Curated durable knowledge collections.

## Core object types
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

## Universal object envelope
```json
{
  "id": "permanent-id",
  "type": "object-type",
  "title": "human-readable-title",
  "status": "lifecycle-status",
  "created_at": "timestamp",
  "updated_at": "timestamp",
  "created_by": "actor-or-source",
  "tags": [],
  "notes": "",
  "version": 1
}
```

## Required lifecycle behavior
Knowledge: `Capture → Draft → Durable → Published → Archived`

Visuals: `Inbox → Atelier → Approved → In Use → Archived`

Nothing durable should be silently destroyed.

## Migration principle
Legacy Black Poppy Canon v0.x and Atlas documents are source material and archaeology. Preserve useful services, data-model ideas and UI behavior only after mapping them into the current Flat architecture. Do not rename the current product back to Canon or Atlas.