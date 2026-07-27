---
name: seo-site-context
description: "Site facts for romansbuildingservices.com: domain, stack, business model, existing SEO surface and known gaps. Load this before any SEO work in this repo so /seo commands reason about the real site instead of generic assumptions. Triggers on: SEO, audit, schema, sitemap, robots, metadata, canonical, local SEO, programmatic SEO, doorway pages, SPA prerendering, E-E-A-T, GEO, AI Overviews, llms.txt, structured data."
---

# Site context: romansbuildingservices.com

Read this before running any `/seo` command in this repo.

## Business

Roman Building Services, a Sydney building and construction contractor.
Services, service areas, heritage work, case studies and problem-led landing
pages. Conversion goal is quote enquiries and booked consultations.

**Industry classification for `/seo audit`:** local service, service-area
business (SAB) rather than pure brick-and-mortar. Heritage and restoration is
the highest-value, lowest-competition niche in the content set and should be
treated as the flagship cluster.

## Stack, this one matters

- **Vite + React SPA**, not Next.js. React Router pages in `src/pages/`.
- Metadata comes from `react-helmet-async` via `src/components/SEOHead.tsx`.
  `src/components/SEO.tsx` is only a re-export of it, not a second
  implementation. Zero `export const metadata` sites is expected here, not a
  finding.
- Crawlability depends on **prerendering** (`scripts/prerender.mjs`, run in
  `postbuild`). A prerender failure serves crawlers an empty shell. Treat it
  as a Critical SEO incident.
- When running `/seo page` or `/seo audit`, use `--render auto` so the skill
  fetches the rendered DOM rather than the source shell.
- Hosted on Netlify (`netlify.toml`, `netlify/` functions, `public/_redirects`).
  Supabase and nodemailer for forms. Note the repo also carries a large set of
  DNS migration docs, so confirm the live host and nameservers before trusting
  any redirect or header assumption.

## Existing SEO surface

Most segmented sitemap structure in the portfolio.

| Artefact | Location |
|---|---|
| head / metadata | `src/components/SEOHead.tsx` |
| schema | `src/components/LocalSEO/StructuredData.tsx`, `src/components/LocalSEO/BreadcrumbSchema.tsx` |
| robots | `public/robots.txt` |
| sitemaps | `public/sitemap.xml` is a **sitemap index** pointing at 10 children: main, services, areas, service-areas, problems, problem-areas, case-studies, heritage, images, llms |
| AI discovery | `public/llms.txt`, `public/llms-full.txt` |
| verification | `scripts/verify-seo.mjs` |
| existing docs | `SEO_IMPLEMENTATION_COMPLETE.md`, `HEADING_STRUCTURE_REPORT.md`, `SERVICE_PAGES_REPORT.md`, `MOBILE_OPTIMIZATION_GUIDE.md`, `romans-conversion-audit-2026-07-25.md` |

Around 70 route components. Schema types in use: LocalBusiness, Organization,
WebSite, WebPage, ContactPage, CollectionPage, Service, ServiceChannel,
OfferCatalog, Offer, Person, Place, PostalAddress, GeoCoordinates, City,
State, Country, BreadcrumbList, ListItem, ItemList, FAQPage, Question, Answer,
HowTo, HowToStep, HowToTool, Review, Rating, AggregateRating, ImageObject,
ImageGallery, SearchAction, EntryPoint, CommunicateAction,
OpeningHoursSpecification, SpeakableSpecification,
EducationalOccupationalCredential, Thing.

## Known gaps

1. **`HowTo` schema is deprecated.** `src/components/LocalSEO/StructuredData.tsx`
   emits `HowTo`, `HowToStep` and `HowToTool`. Google removed HowTo rich
   results in September 2023 and retired the reporting in 2025. It produces
   nothing today. Replacement guidance:
   `.claude/skills/seo-schema/references/deprecated-types-2024-2026.md`.

2. **`SpeakableSpecification`** is limited to news publishers in Google's own
   documentation and does nothing for a building contractor. Low priority but
   worth removing when touching that file.

3. **`FAQPage` no longer yields rich results** (retired 2026-05-07). Inert,
   not harmful.

4. **Four overlapping programmatic page families**: `areas`, `service-areas`,
   `problems` and `problem-areas`, each with its own sitemap. This is the
   largest doorway-page exposure in the portfolio. `seo-local` warns at 30
   generated pages and hard-stops at 50. Run `/seo programmatic` and
   `/seo local` before adding any more, and check for keyword cannibalisation
   between `areas` and `service-areas`, which look like they may target the
   same intent.

5. **Sitemap `lastmod` is 2026-07-07** across the index. Confirm the children
   carry honest per-URL dates rather than a single build stamp.

6. **`public/lovable-uploads/`** suggests imported Lovable assets. Run
   `/seo images` for alt text, format and file-size coverage across that
   directory.

## Verification

```bash
npm run build          # includes postbuild prerender
npm run test
node scripts/verify-seo.mjs
npm run test:browser   # Playwright
```

`scripts/verify-seo.mjs` already exists. Run it alongside `/seo audit` and
reconcile the two rather than replacing it.
