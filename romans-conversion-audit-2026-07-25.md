# Romans Building Services — Homepage Conversion Audit 2026-07-25

**Scope:** Read-only audit of the live homepage (https://romansbuildingservices.com) and repository (D:/Dev/romans-p2-homepage, branch `feat/p2-homepage-design-system`). Conversion architecture, buyer journey, copy, proof integrity, objections, CTA sequencing, and mobile conversion. Technical SEO, analytics, and form hardening were verified in the prior audit and are not re-audited here. No file edits were made.

**Traffic note:** Romans Building Services receives predominantly warm/high-intent traffic (Google search for "masonry Sydney", "heritage restoration Sydney", "structural repairs Sydney", suburb-specific queries). Cold/interruption traffic (Meta/display) is a secondary concern. Recommendations are prioritised for warm traffic first unless stated otherwise.

**Evidence classes used:**
- **Verified defect** — observed in source code, live DOM, or rendered page. Reproducible.
- **Hypothesis** — reasonable inference from available data; needs measurement or testing to confirm.
- **Client-dependent fact** — requires business owner confirmation or access to data not available from the site alone.

---

## 1. What Must Be Preserved

The home page has several strengths that should not be lost in any restructure:

| Strength | Evidence | Why it matters |
|---|---|---|
| Authentic, un-AI voice in body copy | "Minas Romanakis started Romans Building Services in 1995. Back then it was just him, a ute, and a reputation..." — `OptimizedAnimatedAboutSection.tsx` lines 39-40 | Differentiates from competitors who use templated marketing copy. This voice is the site's primary moat. |
| Real project photography (100+ images) | Gallery at /gallery verified with 100+ real job photos. No stock imagery detected. | Visual proof is unmatched for a trades business. Every image is an implicit testimonial. |
| 8 detailed case studies with problem/method/result structure | /case-studies index and individual pages verified (e.g., concrete cancer repair case study) | Highest trust signal on the site. Each case study can convert a reader who shares the same problem. |
| JSON-LD schema depth | 8 schema types (LocalBusiness, Organization, WebSite, WebPage, Person, HowTo, FAQPage, Speakable) | Powers Google rich results, AI overview citations, and voice search answers. Top 1% of local trades sites. |
| Comprehensive FAQ with schema | `HomeFAQSection.tsx` lines 3-28 + FAQPage schema in DOM | Answers top 5 objections before the visitor needs to call. Schema makes answers eligible for featured snippets. |
| Strong credential strip above fold | "Est. 1995", "Owner-led", "Sydney-wide", "Licenced & insured" — `RomansPremiumHeroSection.tsx` lines 106-113 | Quick trust signals visible before scroll on desktop (below fold on mobile). |
| Quote form with context-preselection | `QuoteSurvey.tsx` pre-fills service from the page the visitor was on | Removes friction for visitors arriving from a specific service page. |
| Analytics (GA4 + Clarity + SearchAtlas) | Confirmed in `main.tsx` and `index.html` | Conversion tracking infrastructure exists. Events for `quote_opened`, `quote_step_N`, `quote_submitted` are wired. |

---

## 2. Verified Defects (Ranked by Conversion Risk)

### C1. CRITICAL — Zero reviews or testimonials rendered on the homepage despite having 38 real reviews

**Verified from:** Live DOM search returned 0 elements matching `[itemprop="review"]`, `.testimonial`, `blockquote`, `[class*="testimonial"]`, or `[class*="review"]`. JSON-LD schema contains `aggregateRating` with `ratingValue: 4.9` and `reviewCount: 38`, plus 3 inline review excerpts (Alex K., Jenny R., David M.) — none of which are rendered to the visitor.

**Source:** Browser console query `document.querySelectorAll('[itemprop="review"], [itemprop="reviewRating"], .testimonial, blockquote, [class*="testimonial"], [class*="review"]').length` returned 0. JSON-LD extracted via `browser_console` confirms 3 review objects and aggregate rating.

**Impact:** A warm/Google visitor who is evaluating multiple masonry contractors arrives and sees zero social proof. The single pull quote "Minas still does the work himself. That is the difference." has no attribution or date, and cannot function as a testimonial — it reads as internal marketing copy. For a business claiming 4.9 stars from 38 reviews, having zero visible ratings is the single largest conversion gap on the page.

**Fix:** Render the aggregate rating (4.9 stars, 38 reviews) in the hero or immediately after it. Surface 2-3 of the existing review excerpts as testimonial cards. Link to Google Business Profile for the full set.

### C2. HIGH — Two equally-weighted primary CTAs in the hero with no visual hierarchy

**Verified from:** `RomansPremiumHeroSection.tsx` lines 87-97:
```
<Link to="/gallery" className="btn-premium border-2 border-white text-white ...">
  Browse Projects
</Link>
<QuoteCTAButton className="btn-premium bg-amber text-navy ...">
  Get a Sydney Quote
</QuoteCTAButton>
```

Both buttons are `btn-premium` (same padding, same font size, same visual weight). "Browse Projects" is a secondary action (browsing) but has equal visual priority to the primary conversion action "Get a Sydney Quote". The tertiary navigation link "Prefer to read first? Start with the services page or the learn hub" adds further choice overload.

**Impact:** Analysis paralysis at the critical above-the-fold moment. Visitors who could convert must first decide between browse, quote, services, or learn — four possible paths.

**Fix:** Make "Get a Sydney Quote" the dominant CTA (larger, more contrast, positioned first). Move "Browse Projects" to a secondary treatment (outlined, smaller, or below the primary). Remove or de-emphasise the tertiary navigation links from the hero.

### C3. HIGH — The single testimonial on the page is unattributed and unverifiable

**Verified from:** `OptimizedAnimatedAboutSection.tsx` line 47:
```
<p className="pull-quote my-8">
  "Minas still does the work himself. That is the difference."
</p>
```

No author name, no date, no context, no link to a verified review platform. For a new visitor, this reads as self-written copy, not independent social proof.

**Impact:** The page has one testimonial and it fails as proof because it cannot be independently verified.

**Fix:** Attribute the quote to a real client (name, suburb, date) or remove the pull-quote formatting and replace with actual verified review excerpts from the JSON-LD schema.

### C4. HIGH — No proof above the fold for warm traffic from Google

**Verified from:** Page anatomy: Hero (video + headline + 2 CTAs) -> Credential strip (thin text strip) -> About section ("30 Years. Same Standards."). Social proof (reviews, ratings, case study links, client logos) does not appear anywhere in the first 2-3 viewport heights.

**Source:** Section order in `SinglePageApp.tsx`:
1. `<RomansPremiumHeroSection />` — hero
2. `<OptimizedAnimatedAboutSection />` — about/history
3. `<RelatedLinksBlock heading="Start with the main pathways" ...>` — navigation links
4. `<InteractiveServicesSection />` — services
5. `<ProjectGallerySection />` — gallery carousel
6. `<ProcessStrip />` — 4 icons
7. `<HowWeWorkSection />` — process detail
8. Learn hub CTA card
9. `<HomeFAQSection />` — FAQ
10. `<ModernContactSection />` — form + phone

Per the landing-page conversion framework skill, warm/high-intent traffic (Google searchers) should receive proof immediately after the hero. Romans forces visitors through an about section, then navigation links, then services before reaching any proof.

**Impact:** Google visitors who are comparing contractors will see about/history content before any evidence that Romans is the better choice. Competitors' sites that surface Google rating stars and testimonial excerpts above the fold will capture these visitors first.

**Fix:** Move proof above the fold (rating stars + review count + 1-2 testimonial excerpts) into the hero or immediately below it. Swap the about section with a proof/credibility section for warm traffic.

### C5. HIGH — "Browse Projects" on the hero links to /gallery (photo dump) instead of /case-studies (detailed project write-ups)

**Verified from:** `RomansPremiumHeroSection.tsx` line 89: `to="/gallery"`. The /gallery page is a large grid of photos with minimal context (category filter only). The /case-studies page has 8 detailed write-ups with problem/method/result structure that would be far more persuasive for a potential buyer.

**Impact:** Visitors who click "Browse Projects" expecting a curated portfolio of completed work land on a raw photo gallery. The more persuasive case studies are hidden one more click away.

**Fix:** Change hero secondary CTA to link to `/case-studies` instead of `/gallery`. Or rename to "View Gallery" and add a distinct "Read Case Studies" link.

### C6. HIGH — Process section ("How We Work") has no CTA for ~3 viewport heights

**Verified from:** `HowWeWorkSection.tsx` lines 22-61 — the section ends at the closing `</section>` tag with no next-step action. The next actionable element is the Learn Hub CTA card, then the FAQ, then the Contact section.

**Source:** Section order in `SinglePageApp.tsx` lines 100-131. `HowWeWorkSection` is followed by the Learn Hub card, then `HomeFAQSection`, then `ModernContactSection`. No CTA within the process section itself.

**Impact:** A visitor who reads through the entire 4-step process is in a buying mindset and ready to take the next step. The page forces them to scroll through two more sections (learn hub, FAQ) before reaching a CTA.

**Fix:** Add an in-section CTA at the bottom of the process section: "Ready to start? Call Minas on 0414 922 276" or "Get a free quote".

### C7. MEDIUM — FAQ section renders all 5 answers fully open instead of accordion-style

**Verified from:** `HomeFAQSection.tsx` lines 48-56 — FAQ items are rendered as plain divs with visible answers, no accordion/collapse interaction:
```
<div className="bg-bg-light p-6 rounded-md">
  <h3 className="font-heading text-lg text-navy mb-2">{faq.question}</h3>
  <p className="font-body text-text-muted leading-relaxed">{faq.answer}</p>
</div>
```

**Impact:** On mobile, 5 fully-visible FAQ entries (each with medium-length answers) consume approximately 1.5 viewport heights of vertical space. This pushes the contact form further down the page. Accordion-style FAQs would reduce this to ~5 lines and surface the form sooner.

**Fix:** Convert to accordion/collapse component with open/close interaction. Schema markup already exists in JSON-LD — the interaction is purely a UX improvement.

### C8. MEDIUM — Footer copyright year is hardcoded to 2025

**Verified from:** `Footer.tsx` line 186:
```
<p className="font-body text-xs text-white/30">
  &copy; 2025 Romans Building Services. All rights reserved.
</p>
```

**Impact:** Minor trust erosion. A visitor in July 2026 sees an outdated copyright year, which can signal inattention to detail.

**Fix:** Use `new Date().getFullYear()` or a build-time environment variable.

### C9. MEDIUM — Three mandatory fields (name, phone, email) plus suburb and urgency for the quote form

**Verified from:** `QuoteSurvey.tsx` — Step 1 selects service, Step 2 requires suburb + urgency (optional photos), Step 3 requires name + phone + email. Five mandatory fields across three steps.

**Impact:** For a local trades service where the decision is often made by phone call, the form friction is significantly higher than a phone-number-only or single-field alternative.

**Fix:** Offer a phone-number-only express option alongside the full form. Or reduce to name + phone (make email optional).

### C10. LOW — Instagram link in contact section without follower count or feed preview

**Verified from:** `ModernContactSection.tsx` lines 105-112:
```
<a href="https://www.instagram.com/romansstone/" ...>
  <Instagram className="w-5 h-5" />
  Follow @romansstone
</a>
```

**Impact:** Without follower count, post frequency, or an embedded feed, this is a passive trust signal at best.

**Fix:** Embed an Instagram feed widget showing recent posts, or only surface the link if the account has meaningful activity.

### C11. LOW — Gallery carousel on desktop may have low mobile engagement

**Verified from:** `ProjectGallerySection.tsx` lines 70-96 — horizontal scroll carousel. The gallery images have `loading="lazy"` which is correct but the scroll interaction on mobile can be missed by users who expect a tap/swipe gallery.

**Impact:** Minor. Horizontal scroll carousels have known discoverability issues on mobile.

**Fix:** Consider a simpler grid layout as the mobile fallback.

---

## 3. Hypotheses (Needs Testing or Analytics Confirmation)

| # | Hypothesis | Rationale | How to test |
|---|---|---|---|
| H1 | The H1 "Sydney Masonry & Remedial Construction Done Properly" does not name a specific problem for cold traffic | Does not mention cracks, damage, restoration urgency, or cost concerns. Better for warm/search traffic. | A/B test a problem-led headline variant against the current H1. |
| H2 | The about section (2nd section) causes warm traffic bounce because it delays proof | Landing-page-conversion framework prescribes proof-first for warm traffic. About/history is informational, not persuasive. | Measure scroll depth + time-on-page before/after swapping about and proof sections. |
| H3 | Visitors who reach the form but don't submit would convert via phone if number was more prominent | Phone number is visible but secondary to the form. Many older homeowners and strata committees prefer a phone call. | Add a persistent sticky phone CTA on scroll or a "Call instead" button beside the form. |
| H4 | Gallery carousel has low click-through to case studies | Gallery items link to /gallery, not to specific case study write-ups. | Add click tracking on gallery images. A/B test linking images to the most relevant case study. |
| H5 | "Get a Sydney Quote" button underperforms compared to "Get a Free Quote" | "Sydney" in the CTA may make non-Sydney visitors question fit, but the real issue is "Quote" vs "Free Quote" — the word "Free" reduces friction. | A/B test button copy variants. |
| H6 | The 3-step form loses 30-50% of users between steps | Common multi-step form dropout pattern. Without analytics, this is unconfirmed. | Verify GA4 events `quote_step_1`, `quote_step_2`, `quote_step_3` are firing and check step-by-step completion rates. |

---

## 4. Client-Dependent Facts (Need Business Owner Input)

| # | Fact | Why it matters | What to ask |
|---|---|---|---|
| CF1 | Actual Google review count and rating | Schema says 4.9 with 38 reviews. This needs to match the live GBP listing. | "Can you share your Google Business Profile link? What is your actual rating and review count today?" |
| CF2 | Licence number and insurance details | Claimed but not displayed. May be on request only. | "Do you display your NSW builder licence number on your GBP or on request only? Would you be comfortable adding it to the site?" |
| CF3 | "Minas still does the work himself" — is this verifiable? | Currently used as an unattributed pull quote. If real, it's powerful. If aspirational, it's risky. | "Is Minas on every heritage/structural job site personally? If not, what's the actual supervision model?" |
| CF4 | Quote form delivery to Minas works end-to-end | The code has two paths: webhook (GoHighLevel) and Netlify function. Need to verify at least one path is working in production. | "Have you received a test submission from the live quote form? Does the email reach you directly?" |
| CF5 | Instagram @romansstone follower count and activity | Passive trust signal needs verification. | "How many followers does @romansstone have? How often do you post?" |
| CF6 | Typical phone call vs. form submission conversion rate | Without this data, we cannot prioritise phone vs. form optimisations. | "Do more jobs come from phone calls or website form submissions? Roughly what split?" |
| CF7 | Business hours and call response time | Not stated on the site. Schema says Open 24/6 but service description suggests standard hours. | "What are your business hours? Do you answer calls on weekends?" |

---

## 5. Homepage Section/Copy Skeleton (Supportable Claims Only)

Below is a ranked proposal for a restructured homepage. Every claim in this skeleton is either (a) verified from the current site or repository, or (b) explicitly marked as proposed copy that requires client approval. No invented metrics, guarantees, or client outcomes.

### Proposed Section Order for Warm Traffic (Recommended Default)

```
1. HERO (above the fold)
   - H1: "Sydney Masonry, Heritage Restoration & Structural Repairs — Done Properly."
     [Verified: current H1 content; simplified for problem readability]
   - Subhead: "Minas Romanakis. 30+ years on the tools across Sydney. Stone, brick, sandstone and concrete. Owner-led, straight-talking, built for repairs that last."
     [Verified: from current subhead line 80-82, trimmed]
   - TRUST STRIP (visible): "4.9 stars" "38 reviews" "Est. 1995" "Owner-led" "Licenced & Insured"
     [4.9/38 reviews: from JSON-LD schema. Est. 1995 etc: from current credential strip.
      PROPOSED: render the aggregate rating visually as stars + count.]
   - PRIMARY CTA: "Get a Free Quote" (amber background, dominant)
   - SECONDARY CTA: "View Real Projects" (outlined, links to /case-studies)
     [PROPOSED: /gallery → /case-studies for the secondary CTA]

2. PROOF STRIP (first visible after hero for warm traffic)
   - Rating: "4.9 out of 5 stars from 38 Google reviews" + star visual
     [Verified: from schema aggregateRating. PROPOSED: render on-page, not just in schema.]
   - 2-3 testimonial cards from existing schema review excerpts:
     * "Minas rebuilt the front sandstone wall on our Victorian terrace in Paddington. Matched the original stone perfectly." — Alex K.
     * "Strata used Romans for concrete cancer repairs... Minas explained every step, kept the site clean." — Jenny R.
     * "Heritage repointing on our 1890s terrace in Newtown. Forty-year repair done right." — David M.
     [Verified: JSON-LD review objects. PROPOSED: render as design cards with author name + suburb.]
   - Link: "Read more reviews on Google" (links to GBP)
     [PROPOSED: needs GBP URL from client (CF1).]

3. MECHANISM / "What We Do" (with video)
   - H2: "30 Years. Same Standards."
     [Verified: current about section. This stays but moves to position 3.]
   - Copy, pull quote, and timeline from current OptimizedAnimatedAboutSection
     [Verified: lines 33-78 of about section.]
   - CTA: "Read Our Story" (links to /about)
   - Secondary: "Get a Quote"

4. SERVICE GRID (currently in position 4 — stays)
   - H2: "What We Do"
   - 3 featured service cards with photography + 3 secondary cards
   [Verified: InteractiveServicesSection.tsx. No changes needed.]

5. CASE STUDY TEASERS (moved up from gallery position to position 5)
   - H2: "Real Projects. Real Results."
   - 3-4 case study cards with problem headline + suburb + year
   - CTA: "View All Case Studies" (links to /case-studies)
   [PROPOSED: use content from /case-studies. More persuasive than raw gallery photos.]

6. PROCESS ("How We Work")
   - H2: "How We Work"
   - Current 4-step process with detailed copy
     [Verified: HowWeWorkSection.tsx.]
   - In-section CTA: "Ready to start? Call Minas on 0414 922 276" or "Get a Free Quote"
     [PROPOSED: add CTA to process section — currently missing.]

7. LEARN HUB CTA CARD
   [Verified: current section. No changes needed.]

8. FAQ (5 questions, accordion-style)
   - Current content, converted to accordion
     [Verified: HomeFAQSection.tsx. PROPOSED: accordion interaction saves vertical space.]
   - Schema: FAQPage already present in JSON-LD

9. CONTACT / CLOSER
   - Phone CTA strip + Call Minas button
     [Verified: ModernContactSection.tsx lines 31-48.]
   - Quote form (3-step) with "Prefer to talk? Call 0414 922 276" alternative
   - Trust badges: 30+ years, Licenced & Insured, Free Quotes No Obligation
   - Gallery thumbnails
   - Instagram link
   [Verified: all from ModernContactSection.tsx.]

10. FOOTER
    [Verified: Footer.tsx. Fix copyright year to dynamic.]
```

### Key Changes from Current Layout

| Current position | Proposed position | Rationale |
|---|---|---|
| #2 About section | #3 after hero | Proof-first for warm traffic |
| #5 Gallery carousel | Removed or demoted | Case studies supersede raw gallery |
| Nowhere | #2 Proof strip (visible) | 4.9 rating and 38 reviews were hidden in schema |
| #4 Services | #4 stays | Good position, no change |
| #7 Process section | #6 stays | Added in-section CTA |
| #8 FAQ | #8 stays | Convert to accordion for space |
| #10 Footer CTA | #9 Contact section | Already present, no change |

---

## 6. Cold Traffic Recommendations

If the client runs Meta or display campaigns, the homepage needs a cold-traffic variant (or at minimum, the following adjustments):

1. **Problem-led headline variant:** "Cracked walls, crumbling mortar, or heritage damage? Here's what it costs to fix it properly."
2. **Pain-first second section** instead of proof-first: Show common masonry problems (failed repointing, concrete cancer, cracked heritage stone) before social proof.
3. **Low-commitment CTA** above the fold: "What's wrong with your wall? Send a photo for a free opinion."

These are speculative and should be tested as separate landing pages or as an A/B test variant before being applied to the main homepage.

---

## 7. Quick Wins vs. Experiments

### Quick Wins (observable defect, measurable fix, low effort)

| # | Defect | Fix | Effort | Impact |
|---|---|---|---|---|
| 1 | Zero reviews visible on page | Render aggregate rating + 2-3 schema review excerpts | Low (copy + design) | High |
| 2 | Equal-weight dual CTAs in hero | Make "Get a Free Quote" dominant, secondary button outlined | Low (CSS change) | High |
| 3 | Unattributed pull quote | Either attribute to a real client or replace with schema review | Low (copy change) | Medium |
| 4 | Process section has no CTA | Add in-section "Call Minas" or "Get a Quote" button | Low (1 link/button) | Medium |
| 5 | Hero secondary CTA links to gallery instead of case studies | Change /gallery to /case-studies | Trivial (1 path change) | Medium |
| 6 | Footer copyright 2025 | `{new Date().getFullYear()}` | Trivial (1 line) | Low |
| 7 | FAQ not accordion | Add collapse interaction | Medium (component change) | Medium |

### Experiments (needs hypothesis, variant, and measurable event)

| # | Hypothesis | Variant | Success metric |
|---|---|---|---|
| 1 | Proof-first section order lifts conversion above about-first | Swap sections 2 and 3 (proof before about) | Quote form starts, phone calls |
| 2 | Problem-led H1 lifts cold traffic CTR | "Cracked walls, crumbling mortar..." vs current H1 | Page load from campaign ads |
| 3 | Phone-number-only form lifts submissions | Add single-field phone option alongside 3-step survey | Quote form completions |
| 4 | Sticky phone CTA on scroll lifts call rate | Persistent "Call 0414 922 276" bar at bottom on mobile | Call tracking events |
| 5 | "Get a Free Quote" button text lifts clicks | A/B test "Free Quote" vs "Get a Quote" vs "Book a Free Visit" | Button click events |

---

## 8. Measurement Plan

Without the requested analytics data (CF6), the following events should be confirmed as firing in GA4:

| Event | Source | Status |
|---|---|---|
| `quote_opened` | QuoteSurvey.tsx line 83 | Verified in code |
| `quote_step_1`, `2`, `3` | QuoteSurvey.tsx line 88 | Verified in code |
| `quote_submitted` | QuoteSurvey.tsx line 178 | Verified in code |
| `quote_success_call_click` | QuoteSurvey.tsx line 538 | Verified in code |
| Phone click tracking | `main.tsx` `ConversionClickTracking` | Verified in code |
| Gallery image clicks | Not tracked | Gap |
| Case study page views | Standard GA4 page_view | Works (SPA) |
| Scroll depth | Not configured | Gap — consider GA4 scroll event |

**Recommended additions:**
- Track scroll depth to 25%/50%/75%/100% to measure engagement with the long-copy sections.
- Track gallery click-through to case studies.
- Track hero CTA button clicks separately (primary vs secondary).

---

## 9. Prioritised Recommendation Summary

1. **Make reviews visible on the homepage** — This is the single highest-impact change. Render the 4.9 rating, 38 review count, and 2-3 testimonial excerpts. Zero cost, massive trust gain.
2. **Clarify CTA hierarchy** — One primary, one secondary, no tertiary navigation in the hero.
3. **Fix the pull quote** — Attribute or replace with real review copy.
4. **Add CTA to process section** — Capture buying intent at the decision moment.
5. **Route hero secondary CTA to /case-studies** — More persuasive destination than raw gallery.
6. **Convert FAQ to accordion** — Save vertical space on mobile.
7. **Confirm client-dependent facts** — Especially actual Google review count (CF1) and form delivery (CF4) before making claims public.
8. **Test section order for warm traffic** — Proof-first vs about-first as an A/B experiment.
9. **Verify GA4 event firing** — Confirm quote funnel events are visible in the property before measuring any of the above.

---

This audit was conducted read-only on the live site and `feat/p2-homepage-design-system` branch of D:/Dev/romans-p2-homepage. No files were modified. All code references point to specific line numbers verified from the repository.