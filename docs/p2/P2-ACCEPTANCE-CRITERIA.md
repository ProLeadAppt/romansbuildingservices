# P2 Acceptance Criteria

## Baseline

- Mobile Lighthouse performance: 66.
- Accessibility: 96.
- Best Practices: 73.
- SEO: 92.
- LCP: 5.1 seconds.
- TBT: 250 milliseconds.
- CLS: 0.
- Initial transfer: 3,591 KiB across 62 requests.
- Homepage exceeds Chromium's 32,767-pixel full-page screenshot limit at iPhone width.
- Build prerenders 164 of 164 routes.
- SEO verifier passes 164 pages.
- Browser suite passes 60 tests with 12 expected remote-only skips.
- npm audit reports 11 vulnerabilities: 10 high and 1 moderate.

## Conversion and content

- One primary quote action and one proof action above the fold.
- Symptom-first pathways appear before internal service categories.
- Exactly three homepage project proofs link to real approved case-study routes.
- Only one process explanation exists in the main journey.
- Quote survey and phone path remain available on all supported viewports.
- No new claim is published without an Approved claim-ledger entry.
- No customer PII is added to analytics events.

## Responsive layout

- No horizontal overflow at 320, 344, 390, 768, 1024 and 1440 CSS pixels.
- Interactive targets are at least 44 by 44 CSS pixels.
- Body copy remains at least 16 CSS pixels on mobile.
- The 390 by 844 homepage is no more than 16 viewport heights after fonts and lazy content settle.
- No critical text is embedded in media.
- Image focal points remain meaningful on mobile, Fold cover, tablet and desktop.

## Motion and media

- Neither hero nor founder video is requested during the initial page load.
- Hero media may load after first interaction or explicit play intent.
- Founder media may load only when its section approaches the viewport.
- Posters communicate the same subject as their videos.
- `prefers-reduced-motion: reduce` removes non-essential movement and autoplay.
- Motion never controls access to copy, links or form controls.

## Performance

Measured on the remote Netlify preview with three mobile Lighthouse runs. Use the median.

- Performance at least 90.
- Accessibility at least 98 with no known WCAG A/AA failures.
- Best Practices at least 95.
- SEO at least 98.
- LCP at most 2.5 seconds.
- TBT at most 200 milliseconds.
- CLS at most 0.1.
- Initial transfer at most 1,500 KiB before user interaction.

## Preservation and verification

- Lint passes.
- TypeScript passes with no emit.
- Node tests pass.
- Production build passes.
- 164 of 164 routes prerender.
- SEO verifier passes all generated pages.
- Chromium, Firefox and WebKit pass narrow, Fold cover, mobile and desktop projects.
- Unknown remote URLs return a real HTTP 404.
- Quote function still returns expected 400, 405 and honeypot 200 behavior on preview.
- The unmerged remote preview is supplied for review before production merge.
