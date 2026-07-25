# Romans Building Services P2 — Design-System Audit & GSAP Narrative Contract

**Branch:** `feat/p2-homepage-design-system`  
**Live:** https://romansbuildingservices.com  
**Stack:** Vite 7 / React 18 / TypeScript / Tailwind 3 / shadcn / Netlify  
**Status:** Audit produced 2026-07-25 — no code changes or side effects.

---

## 1. Design-System Architecture

### 1.1 Token Surface (`tailwind.config.ts`, L23–L96)

| Token | Source | Status |
|---|---|---|
| Navy (#0A2E76 / #1F4CBE) | Custom | ✅ Strong brand identity |
| Amber (#EE9D2B / #FBBF24) | Custom | ✅ CTA accent works in both light/dark |
| Blue-bright (#2563EB) | Custom | ✅ Used as secondary accent |
| Green (#059669) | Custom | ✅ Trust-badge icon colour |
| Neutrals (text-primary/muted/bg-light) | Custom flat tokens | ✅ No HSL indirection — pragmatic |
| shadcn compat | Custom flat tokens | ⚠️ "simplified — no HSL indirection" means CSS Variables like `--primary` are NOT emitted. Any shadcn component expecting `hsl(var(--primary))` at runtime will get the static hex, which works but makes runtime theme toggle impossible. Acceptable for a fixed-brand site. |
| Primary font heading | Playfair Display + Georgia fallback | ✅ |
| Primary font body | DM Sans + sans-serif fallback | ✅ |
| Typographic scale | 1.25x ratio (xs through 5xl) | ✅ |
| Premium shadows | 3 levels (premium / premium-lg / premium-xl) | ✅ |
| Border radius | sm/md/lg → 0.25/0.375/0.5rem | ✅ |

### 1.2 CSS Utilities (`src/index.css`, L54–184)

| Utility | Lines | Status |
|---|---|---|
| `.btn-premium` | L58–69 | ✅ Cubic-bezier easing on hover/active |
| `.link-animated` | L74–90 | ✅ Underline slide-on-hover |
| `.accent-line` | L95–100 | ✅ Brand motif (3rem amber line) |
| `.pull-quote` | L105–111 | ✅ Playfair italic at 1.75rem |
| `.texture-grain` | L144–160 | ✅ SVG fractal noise overlay on navy sections |
| `.img-enhanced` | L165–167 | ⚠️ Defined but never used in any component |
| `.text-shadow-strong` | L174 | ✅ Used in hero H1 |
| `.scrollbar-hide` | L179–183 | ✅ Used in gallery carousel |

### 1.3 Dead Files

| File | Issue |
|---|---|
| `src/App.css` | Entire file is Vite boilerplate (logo-spin keyframes, `.read-the-docs`). **No source file imports or references it.** Should be deleted. |
| `src/utils/animations.ts` | Exports only `premiumEase = [0.22, 1, 0.36, 1]`. Imported in `ModernContactSection.tsx` but only used as a CSS transition `ease` value — not actually controlling any JS animation. The constant is never imported by any other component. Could be inlined. |

### 1.4 Dead Dependencies

| Package | Location | Status |
|---|---|---|
| `framer-motion` v12.23.12 | `package.json` L28 | **ZERO imports across all 108 source files.** This is a ~30KB (gzip) dependency bundled for nothing. Remove unless GSAP is deliberately chosen as replacement. |

### 1.5 shadcn Component Inventory

All components in `src/components/ui/` are minimal re-exports of Radix primitives (button, card, dialog, form, accordion, select, tabs, separator, badge, input, label, textarea, sonner). No customisation beyond Tailwind tokens. These are used only in service/sub-page templates and the quote form — none appear in homepage sections.

---

## 2. Homepage Component Ownership

### 2.1 Section Map (`src/pages/SinglePageApp.tsx`)

| Section | Component | Lazy? | File |
|---|---|---|---|
| Hero + credential strip | `RomansPremiumHeroSection` | No | `src/components/RomansPremiumHeroSection.tsx` |
| Quick link pills | Inline map | No | `SinglePageApp.tsx` L41–58 |
| About | `OptimizedAnimatedAboutSection` | No | `src/components/OptimizedAnimatedAboutSection.tsx` |
| Section divider (navy) | `SectionDivider` | No | `src/components/SectionDivider.tsx` |
| Pathways | `RelatedLinksBlock` | No | `src/components/RelatedLinksBlock.tsx` |
| Services | `InteractiveServicesSection` | No | `src/components/InteractiveServicesSection.tsx` |
| Section divider (light) | `SectionDivider` | No | `src/components/SectionDivider.tsx` |
| Gallery | `ProjectGallerySection` | ✅ `lazy()` | `src/components/ProjectGallerySection.tsx` |
| Process strip | `ProcessStrip` | ✅ `lazy()` | `src/components/ProcessStrip.tsx` |
| How we work | `HowWeWorkSection` | ✅ `lazy()` | `src/components/HowWeWorkSection.tsx` |
| Learn hub CTA | Inline markup | No | `SinglePageApp.tsx` L104–121 |
| FAQ | `HomeFAQSection` | ✅ `lazy()` | `src/components/HomeFAQSection.tsx` |
| Contact | `ModernContactSection` | ✅ `lazy()` | `src/components/ModernContactSection.tsx` |

**Observation:** Hero, About, Services, and RelatedLinksBlock are **always bundled** in the initial chunk. The Suspense boundaries in SinglePageApp.tsx use `fallback={null}` for the lazy sections — no loading spinner until the router-level `<Suspense>` in main.tsx kicks in.

### 2.2 Component Dependency Graph

```
main.tsx (BrowserRouter + HelmetProvider + Layout)
  └─ Layout
       ├─ ModernNavigation (always inline)
       ├─ <main>
       │    └─ SinglePageApp
       │         ├─ SEO + LocalBusinessSchema + SpeakableSchema + PersonSchema
       │         ├─ RomansPremiumHeroSection
       │         ├─ OptimizedAnimatedAboutSection
       │         ├─ SectionDivider
       │         ├─ RelatedLinksBlock
       │         ├─ InteractiveServicesSection
       │         ├─ SectionDivider
       │         ├─ ProjectGallerySection ─── lazy()
       │         ├─ ProcessStrip ────────────── lazy()
       │         ├─ HowWeWorkSection ────────── lazy()
       │         ├─ HomeFAQSection ──────────── lazy()
       │         └─ ModernContactSection ────── lazy()
       └─ Footer
  └─ StickyMobileCTA
```

The **five non-lazy** components and their imported videos/structured-data schemas form the critical bundle. The four lazy sections split ~20KB each.

---

## 3. Asset Quality & Provenance

### 3.1 Volume by Directory

| Directory | Total Size | Format | Notes |
|---|---|---|---|
| `src/assets/images/` | **41 MB** | JPG (120 files) | Source-quality originals. No WebP variants. Served through Vite's build pipeline (imported as module paths). |
| `public/gallery/thumbs/` | ~2.5 MB | WebP | 600×600/600×576 variants — well optimised. |
| `public/gallery/full/` | ~8 MB | WebP (40+ files) | Full-resolution gallery images. |
| `public/lovable-uploads/` | **12 MB** | PNG originals + WebP | Wix-era uploads. PNG originals still present alongside converted WebP. |
| `src/assets/videos/` | **7.4 MB** | MP4 (5 files) | See dead video below. |
| **Total** | **~71 MB** | | |

### 3.2 Dead Assets

| Asset | Size | Location | Evidence |
|---|---|---|---|
| `romansstone_1572202218_*.mp4` | **3.8 MB** | `src/assets/videos/` | Zero references in any source file. Dead weight in the build pipeline. |
| All PNG originals in `public/lovable-uploads/` | ~5 MB | `public/lovable-uploads/*.png` | Each has a WebP sibling. PNGs are redundant in production unless used as `<picture>` fallbacks — they are not. |
| `App.css` | 648 bytes | `src/App.css` | Unreferenced Vite boilerplate. |

### 3.3 Live Site Observations

- Hero `poster` image: correctly preloaded as `<link rel="preload" as="image">` with `fetchpriority="high"` — **good**.
- Logo loads eagerly (no `loading="lazy"`) — correct for above-the-fold element.
- All other images use `loading="lazy"` — correct, but **no explicit `width`/`height` attributes** on most images, risking Cumulative Layout Shift (CLS). The gallery thumbnails show natural dimensions like 600×600, proving sizes are known — they should be in the markup.
- Hero video (927KB, MP4) loads on timeout or user interaction — deferred correctly.
- About section video (1.5MB, MP4) loads **eagerly** — `autoPlay` + `muted` + `loop` triggers download immediately. No `preload="none"`, no interaction gate, no lazy-load strategy. This is a ~1.5MB LCP competitor past the first viewport.

### 3.4 Provenance

Image filenames follow the pattern `romansstone_<timestamp>_<instagram-media-id>_2394650725`, indicating origin via Instagram. The `public/lovable-uploads/` names (e.g. `021212_ced9a2de...`, `unnamed (46).png`) are Wix Media Manager exports with no clear provenance or rename. These should be audited and either renamed to a consistent scheme or removed.

---

## 4. Performance

### 4.1 Bundle Splitting

| Chunk | Contents | Status |
|---|---|---|
| `react-vendor` (manual) | react, react-dom, react-router-dom | ✅ |
| Everything else | Single implicit chunk | ⚠️ Vite's `manualChunks` only defines one split. framer-motion (~30KB gzip) is bundled into the main chunk unnecessarily — nobody imports it. |

### 4.2 Build Pipeline

- Minifier: `esbuild` (fast, but less aggressive than terser/swc)
- Sourcemaps: disabled (`sourcemap: false`)
- Prerender: `postbuild` script runs `node scripts/prerender.mjs` for static HTML per route
- 404 document: generated in `dist/404.html` — verified by p0 test

### 4.3 Deferral Strategy

| Resource | Mechanism | Status |
|---|---|---|
| Google Analytics | `dataLayer` queue set early; `<script>` appended on `load` or `pointerdown` | ✅ |
| SearchAtlas | `requestIdleCallback` + React effect (to avoid Vite duplication bug) | ✅ |
| Microsoft Clarity | Inline in `index.html` (not deferred) — sync load | ⚠️ Small payload but blocks. Should move to effect or idle callback. |
| Hero video | `preload="none"`, source inserted on 3.5s timeout or interaction | ✅ |
| Google Fonts | `preconnect` + `preload as="style"` + `media="print" onload="this.media='all'"` | ✅ |
| Gallery images | `loading="lazy"` | ✅ |
| About video | No deferral — loads immediately | ⚠️ Needs `preload="none"` + intersection-observer or interaction gate |

### 4.4 Missing Optimisations

- **Image `width`/`height` attributes:** Not set on any image except the hero video poster. Every `loading="lazy"` image layout-shifts when it loads.
- **Hero video encoding:** 927KB is reasonable, but AV1 (`.av1.mp4`) or HEVC (`.hevc.mp4`) could halve it. No `<source type='video/mp4; codecs="av01.0...">'` fallback.
- **About video encoding:** 1.5MB. Same concern.
- **Sitemap images:** `sitemap-images.xml` exists — good, but verify it references all gallery images.

---

## 5. Accessibility

### 5.1 Strengths

- Semantic heading structure: `h1` → `h2` → `h3` throughout the page. Verified on live site.
- All `<img>` elements have `alt` attributes — verified via live DOM scan.
- `prefers-reduced-motion: reduce` kills all animations and hides `<video>` elements (`src/index.css` L43–51).
- Hero video marked `aria-hidden="true"`.
- Focus-visible styles defined globally (`*:focus-visible { ring-2 ring-navy ... }`).
- Quote form has `role="alert"` on errors, `role="radiogroup"` for urgency, `aria-checked` for radio buttons.
- All form inputs have explicit `<label htmlFor="...">`.
- Phone links use `<a href="tel:...">` — correct tel protocol for screen readers.

### 5.2 Gaps

| Issue | Location | Lines | Severity |
|---|---|---|---|
| **No skip-to-content link** | `Layout.tsx` / `index.html` | — | High. Keyboard users must tab through all nav items. |
| **Gallery carousel is flat overflow** | `ProjectGallerySection.tsx` | L70–96 | Medium. No `aria-live="polite"` or `role="list"/"region"`. Screen readers cannot navigate horizontally scrolling content reliably. |
| **FAQ uses `<div>` not `<details>/<summary>`** | `HomeFAQSection.tsx` | L48–56 | Low-Medium. All FAQs are visible (no accordion), so usability is fine, but ARIA landmark/semantic markup for FAQ regions would help. |
| **Logo image in nav has `fetchPriority="auto"`** | `ModernNavigation.tsx` | L94 | Low. Above-fold image should have explicit fetchpriority. |
| **SearchAtlas script loaded via idle callback** | `main.tsx` | L26–44 | Low. Has `nitro-exclude` and `nowprocket` attrs but no `type="text/plain"` fallback for assistive tech that processes inline scripts. |
| **Process strip icons no accessible labels** | `ProcessStrip.tsx` | L23–25 | Low. Icons are decorative (meaning conveyed by text below), but the `<span class="font-body ...">` holds the actual label — acceptable as-is. |

---

## 6. Responsive & Fold Behaviour

### 6.1 Viewport Coverage (Playwright Config)

| Viewport | Width × Height | Used For |
|---|---|---|
| narrow | 320 × 800 | Galaxy Fold / iPhone SE |
| fold-cover | 344 × 882 | Samsung Galaxy Z Fold cover screen |
| mobile | 390 × 844 | iPhone 14 Pro |
| desktop | 1440 × 900 | Standard laptop |

12 project variants: chromium/firefox/webkit × 4 viewports.

### 6.2 Live Site Section Heights (1440×900)

| Section | Height (px) | Folds Covered |
|---|---|---|
| Hero (min-h-screen) | **993** | Viewport 1 |
| Quick link pills | 86 | Fold 1–2 |
| About | 1633 | Folds 2–4 |
| Pathways | 331 | Fold 4 |
| Services | 1114 | Folds 5–6 |
| Gallery | 786 | Fold 6–7 |
| Process strip | 159 | Fold 7 |
| How we work | 872 | Folds 7–8 |
| Learn CTA | 274 | Fold 8 |
| FAQ | 1130 | Folds 8–9 |
| Contact | 1059 | Folds 9–10 |

Page is **~9,530px** / ~10 viewports tall.

### 6.3 Responsive Issues

- **About video has no explicit dimensions** (`w-full`, `aspect-[4/3]` on class) — the aspect-ratio utility prevents layout shift on modern browsers, but no explicit `width`/`height` attrs for the pre-load poster.
- **Hero `h-[120%]`** intentionally crops video. On narrow viewports this is fine, but on ultrawide screens (2560px+) the crop may reveal gradient boundaries.
- **StickyMobileCTA** only shows on `/services`, `/suburbs`, `/problems` — NOT on the homepage. The home page's "Call Minas" and "Get a Sydney Quote" buttons (inline hero + footer) suffice.
- `h-12 md:h-16 lg:h-20` on SectionDividers — responsive SVG path heights. Good.

---

## 7. Motion Implementation & Risks

### 7.1 Current Motion Surface

| Element | Mechanism | Type |
|---|---|---|
| Button hover | CSS `btn-premium` (translateY, scale, shadow) | CSS transition |
| Link underline | CSS `link-animated` (width expansion) | CSS transition |
| Card hover | CSS `group-hover:scale-105` on images | CSS transition |
| Gallery overlay | CSS `group-hover:opacity-100` | CSS transition |
| Nav shrink | CSS `transition-[padding]` on scroll | CSS transition |
| Nav ChevronDown | CSS `transition-transform`, `rotate-180` | CSS transition |
| Section dividers | SVG `<path>` fill | Static SVG — no animation |
| Logo-spin in App.css | `@keyframes logo-spin` | **Dead code** — in unreferenced file |

**There is NO JS-powered animation anywhere in the production code.**  
**`framer-motion` is a dead dependency.**  
**`gsap` is not installed.**

### 7.2 Reduced-Motion Safety

The base layer in `index.css` L43–51 kills all animations and hides videos — excellent. However:

- The `*.btn-premium` transitions are killed by the `transition-duration: 0.01ms !important` rule — correct.
- Hero video is hidden (`display: none` for `<video>`) — correct.
- About video is also hidden — correct.
- **No JavaScript animation library runs** so there is no risk of a JS animation bypassing the CSS reduced-motion rule.

### 7.3 Risk: framer-motion Dead Weight

- ~30KB gzip in the bundle for a library that is never instantiated.
- The `package.json` entry `"framer-motion": "^12.23.12"` creates expectation of JS motion that does not exist.
- Recommendation: Remove framer-motion. If scroll-triggered narrative is desired, install GSAP + ScrollTrigger instead.

---

## 8. GSAP Narrative Opportunity

### 8.1 Rationale

The site tells a strong story — 30 years, owner-led, heritage craft — but the page is a static scroll with CSS-only polish. A ScrollTrigger-driven narrative would match the premium brand tone and create retention lift.

### 8.2 Proposed Story Arc (6 Scenes)

| Scene | Section | GSAP Effect | Business Outcome |
|---|---|---|---|
| 1 | Hero credential strip | Fly-up letters on "Est. 1995 / Owner-led / Sydney-wide / Licenced & insured" as strip enters viewport | Reinforce trust anchors as user scrolls away from hero |
| 2 | About video/text overlap | Video clip-in + text card slides from right on scroll into section (premiumEase cubic-bezier) | Reward scroll — makes 30-year story feel discovered, not told |
| 3 | Timeline dots in About | Each dot + label activates as it scrolls into view (stagger 0.15s) | Visual progression reinforces longevity narrative |
| 4 | Services cards | Staggered upward entrance (three featured, then three secondary) | Creates anticipation for service browsing |
| 5 | Gallery carousel | Horizontal auto-scroll that pauses on hover — controlled by ScrollTrigger pin | Portfolio feel without interaction burden |
| 6 | How-we-work step numbers | Numbers count-up animation (1→2→3→4) as steps scroll into view | Gamifies the process, increases conversion intent |

### 8.3 Implementation Contract

```
Motion must be:
  - visible-by-default   (animations fire without explicit user toggle)
  - reduced-motion safe  (gated behind window.matchMedia('(prefers-reduced-motion: reduce)'))
  - commercially causal  (drives scroll depth, not decorative)
```

### 8.4 Package Recommendation

```
npm install gsap
```

No additional packages needed — ScrollTrigger ships with GSAP Core since v3. Import:

```ts
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
```

### 8.5 Code-Split Architecture

Create `src/hooks/useGsapScene.ts` — a single hook that:
1. Checks `prefers-reduced-motion` — returns early if true
2. Registers ScrollTrigger exactly once (module-level guard)
3. Accepts a ref + timeline config
4. Cleans up on unmount

Each section imports this hook. GSAP + ScrollTrigger are loaded as a single code-split chunk via a dynamic `import('gsap')` in the hook, keeping the initial bundle clean. Target: GSAP loaded only when a section with animations scrolls into view.

### 8.6 Risks & Mitigations

| Risk | Mitigation |
|---|---|
| GSAP adds ~27KB gzip to the critical path | Load as lazy dynamic import, not static import. |
| ScrollTrigger causes layout thrashing | Use `scrub: 1` with `toggleActions: 'play none none reverse'` — no continuous recalculation. |
| Reduced-motion bypass | Check `matchMedia` in the hook + `will-change: transform` only when animation is active. |
| iOS Safari scroll jank | Set `ScrollTrigger.normalizeScroll(true)` — built-in GSAP fix for iOS rubber-banding. |

---

## 9. Test Contract

### 9.1 Existing Test Coverage

| File | Type | Coverage |
|---|---|---|
| `tests/p0-trust-and-indexing.test.mjs` | Unit (node:test) | SEO headers, prerender integrity, 404 doc, netlify.toml redirects, X-Robots-Tag, security headers |
| `tests/p1-conversion-hardening.test.mjs` | Unit (node:test) | Quote API validation, honeypot, rate limit, analytics/hero deferral, customer-language checks, no dead framer-motion references |
| `tests/browser/quote-conversion.spec.ts` | E2E (Playwright) | Quote modal flow, hero video deferral, phone click conversion event |
| `tests/browser/learn-and-error.spec.ts` | E2E (Playwright) | Learn page + 404 behaviour |

### 9.2 Test Gaps

| Gap | Priority | Suggested Test |
|---|---|---|
| No GSAP integration test | High (if GSAP added) | Verify ScrollTrigger fires on scroll, does not fire under reduced-motion |
| No CLS regression test | Medium | Measure cumulative layout shift before/after image lazy-load |
| No image dimension assertion | Medium | Check every `loading="lazy"` img has explicit width/height in JSX |
| No skip-link test | Low | Tab to first focusable element, verify it's the skip link |
| No font swap test | Medium | Verify `font-display: swap` on both fonts (inspect loaded stylesheet) |
| No hero video encoding coverage | Low | Verify `video.canPlayType('video/mp4')` before source insertion |

### 9.3 New Test Requirements (for GSAP Narrative)

```
test('ScrollTrigger animations are suppressed when prefers-reduced-motion is set')
  → inject CSS media query override
  → scroll page
  → assert no gsap-propagated inline styles on animated elements

test('Section entrance animations complete within scroll range')
  → scroll each animated section into view
  → assert the animated element's opacity is ~1 and transform is ~identity

test('GSAP bundle is not in the critical initial chunk')
  → assert no import('gsap') string in the main entry script
```

### 9.4 Playwright Extension

The existing playwright config supports 12 viewport variants. Add one extra fixture for reduced-motion testing:

```ts
{ name: 'chromium-reduced-motion', use: {
  browserName: 'chromium',
  viewport: { width: 1440, height: 900 },
  contextOptions: { reducedMotion: 'reduce' },
}},
```

---

## 10. Gaps & Bugs (Exact Files & Lines)

| # | Severity | File | Lines | Issue |
|---|---|---|---|---|
| 1 | **High** | `package.json` | L28 | `"framer-motion"` declared in dependencies with **zero imports** across all source files. Dead weight ~30KB gzip. |
| 2 | **High** | `src/App.css` | L1–42 | Entire file is Vite boilerplate. **No source file imports or references it.** Should be deleted. |
| 3 | **Medium** | `src/assets/videos/romansstone_1572202218_2164111388501836278_2394650725.mp4` | — | 3.8 MB video file with zero references in any source file. Dead asset bloating the build. |
| 4 | **Medium** | `src/components/OptimizedAnimatedAboutSection.tsx` | L19–27 | About-section video loads eagerly (`autoPlay`, no `preload="none"`, no interaction gate). 1.5 MB download competing with hero on page load. |
| 5 | **Medium** | `src/components/OptimizedAnimatedAboutSection.tsx` | L20 | About video has no `width`/`height` attributes — CLS risk on poster load. Width is `w-full` + `aspect-[4/3]`, but aspect-ratio only prevents layout shift after the first paint. |
| 6 | **Medium** | `src/components/ProjectGallerySection.tsx` | L78–84 | Gallery images use `loading="lazy"` but have no explicit `width`/`height` — CLS risk. |
| 7 | **Medium** | `src/components/InteractiveServicesSection.tsx` | L66–71 | Service card images have no explicit dimensions — CLS risk. |
| 8 | **Medium** | `src/components/ModernContactSection.tsx` | L94–99 | Contact thumbnails have `loading="lazy"` but no explicit `width`/`height`. |
| 9 | **Low-Medium** | `src/components/Layout.tsx` | L10–19 | No skip-to-content link. Keyboard users tab through 15+ navigation items before reaching `<main>`. |
| 10 | **Low** | `src/utils/animations.ts` | L1–2 | Exports a single constant (`premiumEase`). Used in only one component as a CSS transition timing. Could be inlined. |
| 11 | **Low** | `src/index.css` | L165–167 | `.img-enhanced` utility class defined but never used in any component. |
| 12 | **Low** | `public/lovable-uploads/*.png` | — | PNG originals (~5 MB total) alongside WebP variants with no `<picture>` fallback usage. Could be deleted. |
| 13 | **Low** | `src/components/navigation/ModernNavigation.tsx` | L94 | Logo image has no explicit `fetchpriority` — above-fold image should have `fetchpriority="high"`. |
| 14 | **Low** | `src/components/ProcessStrip.tsx` | L23–25 | Icon containers have no `aria-hidden="true"` — they are decorative but not hidden from AT. |
| 15 | **Low** | `src/main.tsx` | L105–111 | Microsoft Clarity is loaded synchronously from `index.html`. Could be deferred to idle callback. |

---

## 11. Summary

### What is strong

- Clean single-page-app architecture with lazy section loading
- Solid brand token system with custom Tailwind config
- Good SEO foundation (JSON-LD, sitemaps, llms.txt, prerender)
- Production-quality analytics deferral
- Comprehensive Playwright test matrix across 3 browsers × 4 viewports
- Reduced-motion support in the base CSS layer

### What needs immediate attention

1. **Remove framer-motion** from dependencies — it is dead code that wastes bundle weight
2. **Delete `src/App.css`** — Vite boilerplate that has no purpose
3. **Remove the 3.8 MB dead video** from `src/assets/videos/`
4. **Add width/height attributes** to every lazily-loaded image to prevent CLS
5. **Defer the about-section video** with the same interaction/timeout pattern as the hero video

### What to decide before building

- **GSAP vs framer-motion** — framer-motion is present but unused. The contract above recommends GSAP + ScrollTrigger for scroll-driven narrative. If framer-motion is kept it must be imported and used, or removed. They should not coexist.
- **Image pipeline overhaul** — 41 MB of source JPGs in `src/assets/images/` vs ~10 MB of WebP in `public/gallery/`. The source images are not used directly — all components reference the `/gallery/thumbs/` WebP path. Consider whether the JPG originals are needed in the Vite pipeline or can be purged.