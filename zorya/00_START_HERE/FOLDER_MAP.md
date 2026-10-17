# Local Handoff Folder Map

Target local root:

`E:\Ethos\Claude\zorya`

Recommended structure:

```text
zorya/
├── 00_START_HERE/
│   ├── README_DEVELOPER.md
│   ├── DECISIONS_LOCKED.md
│   ├── BUILD_PLAN.md
│   ├── TASK_BOARD.md
│   ├── SOURCE_INDEX.md
│   ├── FOLDER_MAP.md
│   ├── CURRENT_STATUS.md
│   ├── DEPLOYMENT.md
│   └── ACCEPTANCE_TESTS.md
├── 01_FLAT/
│   ├── CURRENT_ARCHITECTURE.md
│   ├── app/
│   ├── architecture/
│   ├── routes/
│   ├── components/
│   ├── data/
│   ├── api/
│   ├── cloudflare/
│   ├── database/
│   ├── atelier/
│   ├── grimoire/
│   ├── registry/
│   └── docs/
├── 02_PRODUCT_SYSTEM/
│   ├── MASTER_PRODUCT_CATALOG.md
│   ├── product-catalog.json
│   ├── black-poppy-magik/
│   └── turtle-oracle/
├── 03_WORLDS/
│   ├── TURTLE_ORACLE.md
│   ├── BLACK_POPPY_MAGIK.md
│   ├── FUNKY_BLACK_POPPY.md
│   ├── CURSEY_QUEEN.md
│   └── CONTINUUM.md
├── 04_VISUAL_ATELIER/
│   ├── ATELIER_REQUIREMENTS.md
│   ├── asset-registry/
│   ├── product-registry/
│   ├── collections/
│   ├── metadata/
│   └── search-index/
├── 05_GRIMOIRE/
│   ├── book-of-shadows/
│   ├── modules/
│   ├── rituals/
│   ├── herbs/
│   ├── astrology/
│   └── sigil-system/
├── 06_BRAND_AND_ASSETS/
│   ├── black-poppy/
│   ├── turtle-oracle/
│   ├── logos/
│   ├── poppies/
│   ├── sigils/
│   ├── ritual-cards/
│   ├── labels/
│   ├── packaging/
│   ├── product-art/
│   ├── mockups/
│   ├── reference/
│   └── archive/
├── 07_INFRASTRUCTURE/
│   ├── cloudflare/
│   ├── workers/
│   ├── pages/
│   ├── d1/
│   ├── r2/
│   ├── github/
│   └── domains/
├── 08_ZORYA/
│   ├── voice/
│   ├── continuity/
│   ├── drift-recovery/
│   ├── decisions/
│   └── historical-context/
└── 99_ARCHIVE/
    ├── canon-legacy/
    ├── atlas-legacy/
    ├── superseded-builds/
    └── unused-concepts/
```

## Rule
This structure is a handoff/organization structure. It must not cause source-design files elsewhere in `E:\Ethos` to be moved automatically. The asset registry should point back to their real source paths.