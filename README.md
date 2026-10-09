# The Black Poppy Flat

Cloud-first rebuild of the former Black Poppy Canon.

**Version:** 2.0.0-alpha.1  
**Status:** Foundation build  
**Owner:** Miss Rachael Nike

## Architecture

- GitHub: source code, Markdown, migrations, engineering docs
- Cloudflare Worker: application + API runtime
- Cloudflare D1: structured records and relationships
- Cloudflare R2: visual assets
- Notion: active work management only

## North Star

**Create it once. Lose it never.**

The legacy v0.11 application is source material and archaeology. The Flat is a fresh cloud rebuild.

## Rooms

- Hall: front door and current state
- Study: durable Markdown and research
- Atelier: active creative work
- Cabinet: visual assets and references
- Archive: archaeology and superseded material
- Parlour: story/community
- Workroom: products, campaigns and production
- Library: curated durable knowledge

## Cloud resources

- D1: `black-poppy-flat-db`
- R2: `black-poppy-flat-assets`
- Worker: `black-poppy-flat`

## Current milestone

A real cloud shell with D1-backed quick capture, object search, and R2-backed visual upload.