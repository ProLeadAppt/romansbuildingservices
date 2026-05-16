# Romans Building Services — SEO/GEO Content Depth Program

**Date:** 2026-05-16
**Owner:** Tyson Kaye (with Minas Romanakis for voice review on key pages)
**Trigger:** Bing Webmaster flag on `/projects` — "too many pages with insufficient content". Audit of 141 prerendered pages showed 40 under 500 words and 6 under 325 words. Bing's flag is the tip of a wider thin-content issue.

## Goal

Bring every prerendered page above safe search-engine and AI-citation thresholds without sacrificing the authentic voice the rebuild was paid for. Make the site the best-cited masonry source in Sydney for ChatGPT, Perplexity, Bing Copilot, and Google AI Overviews.

## Non-goals

- No generic SEO filler. No corporate jargon. No AI slop. See `feedback_writing_voice.md` in memory.
- No new pages. The pSEO scaffolding is already correct.
- No design changes. Visual system stays as-is.
- No infrastructure changes beyond schema additions and the `/projects` recrawl.

## Voice rules (hard)

- Plain Australian English. Short sentences. Real specifics.
- No em dashes or en dashes in body copy. Full stops or commas instead.
- No: leverage, solutions, expertise, premium, world-class, industry-leading, trusted partner, passionate, we pride ourselves, cutting-edge, tailored, bespoke, elevate, unlock, seamless, robust, ensure, in today's world, more than just, not just X but Y.
- No exclamation marks. No "call now". No fake humility. No generic empathy.
- Minas is Greek-Australian, started 1995, runs the job himself.
- "Would Minas cringe" test on every paragraph.

## Approach

**Hybrid content model:** structural scaffolding (FAQ schema, "what we use" blocks, process strips) lives in shared components and data files. Lead paragraphs and page-specific specifics stay hand-written inline per page. Mirrors the existing `src/data/areas.ts` + `problemNotes` pattern.

## Content depth targets

| Page type | Current | Target | Notes |
|---|---|---|---|
| Homepage | 443 | 700–900 | Don't bloat hero. Depth below the fold. |
| Hub pages (services, areas, heritage) | 244–324 | 800–1100 | Intro essay + per-card descriptions + closing FAQ |
| Service sub-pages (35) | 450–500 | 800–1200 | Add "what we use", "what happens on the job", 6-Q FAQ |
| Area/suburb pages | 449–700 | 800–1100 | Architectural era notes, common issues |
| Problem pages (15) | varies | 800–1100 | Diagnosis Q&A |
| Problem×area (30) | varies | 700–1000 | Hand-crafted area paragraph |
| Heritage era pages (5) | varies | 1000–1400 | Strongest content for GEO citations |
| Gallery | 599 | 900+ | 8 to 10 featured project blurbs |
| About | 363 | 800–1000 | Expand Minas's story |
| Contact | 174 | leave thin | Add `noindex,follow` meta |

## Page structure patterns

**Service sub-page skeleton:**
1. Lead paragraph (2 to 3 sentences)
2. What we do here (card grid, expanded)
3. What we use (NEW, 4 to 6 bullets, real materials)
4. What happens on the job (NEW, 4 to 5 short paragraphs)
5. Common questions (expanded from 3 to 6 Qs)
6. Related services + areas we cover

**Hub page skeleton:**
1. Lead essay (3 to 4 paragraphs)
2. Card grid (expanded card copy)
3. How to pick the right one (short Q&A)
4. FAQ block (4 to 5 Qs)

**Area/suburb pages:** add "What's typical around here" block per area/suburb.

**Heritage era pages:** add "How to tell it's a [era] building", "What goes wrong with [era] buildings", "What we use to restore them".

**Gallery:** add 8 to 10 featured project blurbs under images. 2 to 3 sentences each, real specifics.

**Homepage:** add "How we work" strip + "Common questions before you call" mini-FAQ.

**Contact:** add `<meta name="robots" content="noindex,follow">`. No prose expansion.

## SEO/GEO infrastructure additions

- HowTo schema on service pages where work has discrete steps
- Article schema on heritage era pages
- Review/AggregateRating schema only if real reviews exist (no fabrications)
- Place schema on area pages with suburbs covered
- ImageObject with contentLocation on featured gallery items
- Sitewide internal-linking pass: 3 to 5 contextual inline links per page with descriptive anchor text
- Meta description audit: every page hand-written, 140 to 155 chars, suburb/service front-loaded
- `<noscript>` fallback on key pages as safety net
- Regenerate `llms.txt` and `llms-full.txt` after content updates

## /projects URL fix

The Netlify 301 from `/projects` to `/gallery` already exists in `netlify.toml`. Bing's flag is stale.
1. Verify 301 fires after deploy (`curl -I https://romansbuildingservices.com/projects`)
2. Submit URL inspection + recrawl in Bing Webmaster Tools after Phase 1 ships
3. Sweep internal links to confirm none still point at `/projects`

## Execution phases

**Phase 1 — Hub and money pages (8 pages, ~1 session)**
- `/gallery`, `/`, `/areas`, `/services`, `/heritage`, `/about`, `/contact`
- Submit Bing recrawl after deploy

**Phase 2 — Service sub-pages (35 pages, ~2 sessions)**
- Batch 2a: 18 pages (masonry, heritage-restoration, structural-repairs sub-pages)
- Batch 2b: 17 pages (foundation, concrete, remedial, building-restoration sub-pages)
- HowTo schema added where applicable

**Phase 3 — Area, suburb, problem pages (~35 pages, ~1.5 sessions)**
- 6 area hubs: add "what's typical around here"
- 35 suburb pages: architectural era + common issue paragraph
- 15 problem pages: expand diagnosis Q&A
- 30 problem×area pages: expand existing hand-written notes

**Phase 4 — Schema + linking + heritage era (~10 pages + sitewide, ~1 session)**
- 5 heritage era pages rewritten to 1000–1400 words
- Schema additions: HowTo, Article, Place, ImageObject
- Sitewide internal-linking pass
- Regenerate llms.txt + llms-full.txt
- Meta description audit

## Cadence

Rebuild, redeploy, submit recrawl after each phase. Don't hold everything to the end.

## Voice review checkpoints

Phase 1 lead paragraphs and Phase 4 heritage era pages should get a Minas read-through before they ship. Leaf pages can ship on Tyson's sign-off if voice rules hold up.

## Files most likely to change

- `src/pages/ProjectsPage.tsx` (gallery)
- `src/pages/AboutPage.tsx`, `ContactPage.tsx`, `ServicesPage.tsx`, `ServicesAreasPage.tsx`
- `src/pages/areas/*`, `src/pages/heritage/*`, `src/pages/problems/*`, `src/pages/services/**/*`
- `src/components/ServicePageTemplate.tsx`, `SuburbPageTemplate.tsx`, `HeritageEraPageTemplate.tsx`, `ProblemPageTemplate.tsx`, `ProblemAreaPageTemplate.tsx`
- `src/components/LocalSEO/StructuredData.tsx` (add HowTo, Article, Place, ImageObject)
- `src/data/areas.ts`, `src/data/heritage.ts`, `src/data/galleryImages.ts` (new featured-project blurbs)
- `public/llms.txt`, `public/llms-full.txt` (regenerated after content lands)

## Verification

After each phase:
1. Run `node scripts/word-count-audit.mjs` and confirm targets met
2. `npm run build` + visual spot-check on 3 random pages from the phase
3. `curl -I` on critical URLs after deploy
4. Submit recrawl in Bing Webmaster + Google Search Console
