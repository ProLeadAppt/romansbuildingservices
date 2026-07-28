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

## Programmatic page structure, reviewed 2026-07-28

An earlier pass flagged `areas` and `service-areas` as possibly cannibalising
each other. **That was wrong.** The families target distinct intents and the
implementation is sound. Recorded here so the question is not reopened:

| Family | URLs | Pattern |
|---|---|---|
| Region hubs | 6 | `/areas/[region]` |
| Suburb pages | 35 | `/suburbs/[suburb]` (indexed via `sitemap-areas.xml`) |
| Service × region | 10 | `/services/[service]/[region]` |
| Problem pages | 15 | `/problems/[problem]` |
| Problem × region | 30 | `/problems/[problem]/[region]` |

Two reasons this passes despite 81 location-targeted URLs sitting above the
`seo-local` 50-page hard stop:

1. **Suburb pages carry hand-written local content**, not swapped placeholders.
   Each entry in `src/data/suburbs.ts` has its own `housingContext` (specific
   stone types, mortar chemistry, named streets), a tailored service list and
   its own FAQs. `/suburbs/the-rocks` talks about 1820s colonial sandstone and
   Sydney Harbour Foreshore Authority approvals. That is not a doorway page.

2. **The problem × region cross-product is already gated.**
   `src/pages/problems/ProblemAreaPage.tsx` returns `NotFound` unless a
   hand-written `areaNote` exists for that exact combination, so unwritten
   combinations 404 instead of serving thin templated pages. This is the
   safeguard `/seo programmatic` looks for, and it is already in place.

The 50-page threshold is a heuristic for thin templated content. It should
still be re-checked whenever the matrix grows, but the correct reading today
is "above the heuristic, with the mitigating control the heuristic is proxying
for". Do not restructure these URLs without a specific ranking reason.

## Known gaps

1. **`FAQPage` no longer yields rich results** (retired 2026-05-07). Inert,
   not harmful. Keep on semantic grounds only.

2. **Sitemap `lastmod` is 2026-07-07** across the index. Confirm the children
   carry honest per-URL dates rather than a single build stamp.

3. **`sitemap-areas.xml` is misnamed.** It holds 35 `/suburbs/*` URLs and only
   6 `/areas/*` URLs. Harmless to crawlers, confusing to humans.

4. **`public/lovable-uploads/`** suggests imported Lovable assets. Run
   `/seo images` for alt text, format and file-size coverage across that
   directory.

## Resolved 2026-07-28

- **`HowTo` schema removed.** Google withdrew HowTo rich results in September
  2023 and retired the reporting in 2025. Removed from
  `LocalSEO/StructuredData.tsx`, `ServicePageTemplate.tsx`,
  `ProblemPageTemplate.tsx`, `HowWeWorkSection.tsx` and three `learn/` pages.
  Visible process copy is unchanged.
- **`SpeakableSpecification` removed.** Google limits speakable to approved
  news publishers, so it never applied here. Removed from 8 call sites.
- The founding-claim guard in `tests/p1-conversion-hardening.test.mjs` now
  asserts against `foundingDate` rather than the deleted HowTo description.

## Verification

```bash
npm run build          # includes postbuild prerender
npm run test
node scripts/verify-seo.mjs
npm run test:browser   # Playwright
```

`scripts/verify-seo.mjs` already exists. Run it alongside `/seo audit` and
reconcile the two rather than replacing it.
