# PR #6 Audit Report — Claims, SEO, Conversion & Copy

**Auditor:** Independent claims/local SEO/GEO/conversion review  
**Preview:** https://deploy-preview-6--romansbuildingservices.netlify.app  
**Sources:** P2-STRATEGY.md, P2-CLAIM-LEDGER.md, P2-ACCEPTANCE-CRITERIA.md, repository diff (HEAD~2..HEAD), browser render verification

---

## Verdict Summary

> **Resolution update:** The original blocker was fixed before merge. `HowToSchema` now mirrors the visible three-step process with step-count-neutral copy, uses `since 1995`, and no longer publishes unsupported zero-cost, free-site-visit or fixed-price claims. The footer's drifting `30 years` wording was also removed.

| Area | Verdict |
|------|---------|
| **Merge blockers** | **0** (HowToSchema mismatch resolved — see §1) |
| **Pass with minor P3 notes** | **5** (see §4) |
| **Claim ledger compliance** | **PASS** — all new P2 copy conforms |
| **Conversion sequence** | **PASS** — matches strategy decision journey |
| **Internal links** | **PASS** — all 16+ linked routes verified live |
| **Schema/SEO** | **PASS** — schemas preserved, structured data present |

---

## 1. ✅ RESOLVED: HowToSchema claimed "4-step" process with only 3 steps

**File:** `src/components/LocalSEO/StructuredData.tsx`, lines 597–600  
**Source:** `HowToSchema` default `description` parameter  
**Text:**  
> "The same **4-step process** for every job — a back-yard wall, a chimney rebuild, a heritage facade, a structural crack stitch. Free quote, written itemised pricing, **30 years** of getting it right."

**Evidence:**
- `HowWeWorkSection.tsx` (PR #6) passes an array of **3 steps** to `<HowToSchema steps={steps} />`.
- The schema emits `position: 1, 2, 3` — but the description text still claims "4-step process."
- The old `HowWeWorkSection` had 4 steps; PR #6 condensed it to 3 but did not update the schema description.
- The "30 years" phrase violates the claim ledger copy rule: *"Use `since 1995` instead of recalculating a year count throughout the codebase."*

**Impact:**  
- Google's HowTo rich result validator compares the description against the actual step count. A claim of "4-step process" with only 3 `<HowToStep>` nodes is a factual inconsistency Google may penalize as structured data inaccuracy (schema.org spec expects accuracy in `name`/`description`).
- The "30 years" line contradicts the approved `tenure-1995` claim wording.

**Resolution:**  
The default description now mirrors the visible process without a hard-coded step count, uses the approved `since 1995` fact, and the unsupported zero-cost/free-site-visit/fixed-price `estimatedCost` block was removed. A static regression test now rejects these stale or unsupported phrases.

---

## 2. Claim Ledger Compliance — PASS

| Claim ID | Status | Evidence on Preview |
|----------|--------|-------------------|
| `tenure-1995` | ✅ Approved | Hero label: "Sydney masonry and remedial construction since 1995"; credential strip: "Est. 1995"; founder section: "started Romans Building Services in 1995" — all use approved `since 1995` format. |
| `owner-led` | ✅ Approved | Credential strip: "Owner-led"; founder section: "The person responsible stays close to the job" — avoids implying he personally performs every task. |
| `sydney-service` | ✅ Approved | Credential strip: "Sydney-wide"; hero: "across Sydney". |
| `licensed` | ✅ OK | Credential strip: "Licenced & insured" (existing exact wording); conversion trust list: "Licenced and insured". Not amplified to hero. |
| `insured` | ✅ OK | Same pattern as licensed. Existing wording preserved. |
| `free-quotes` | ✅ Approved | Conversion trust list: "Free quote, no obligation". |
| `response-24h` | ✅ Not amplified | **No "24 hours" claim appears on any new P2 copy.** The quote survey component's internal text ("Minas will call you back within 24 hours") is pre-existing and not new to this PR. |
| `start-times` | ✅ Not amplified | **No start-time claims on homepage.** Old FAQ had "two to four weeks" — removed. |
| `price-ranges` | ✅ Not amplified | **No pricing on homepage.** Old FAQ had price bands — removed. |
| `project-results` | ✅ Approved | Exactly 3 case studies using only approved project text and imagery. |
| `testimonial-attribution` | ✅ Not used | No unattributed testimonials on homepage. |
| `no-stock` | ✅ Approved | All case study images are from real Romans work. Confirmed on detail pages. |

### Copy rules check

| Rule | Status |
|------|--------|
| Prefer observable facts over quality adjectives | ✅ Pass — "cracked brickwork", "failing mortar", "sandstone deterioration" |
| Use `since 1995` instead of recalculating year count | ✅ Pass on P2 copy (footer "30 years" is pre-existing) |
| No cheapest/best/leading/guaranteed/certified/specialist | ✅ Pass — no superlatives found |
| No implied engineering/heritage-consultant services | ✅ Pass — FAQ says "that role remains separate" |
| No AI-generated imagery as real work | ✅ Pass — all images from production library |

---

## 3. SEO & Structured Data Review — PASS (1 blocker above)

### Schemas present on homepage (verified via console)

| Schema | Present | Notes |
|--------|---------|-------|
| LocalBusiness | ✅ | Multi-type: `["LocalBusiness", "GeneralContractor", "HomeAndConstructionBusiness"]` |
| Organization | ✅ | Parent entity at `#organization` |
| WebSite | ✅ | With Sitelinks Search Box |
| Person (founder) | ✅ | Minas Romanakis |
| Speakable | ✅ | Targets `h1`, `h2` |
| FAQPage | ✅ | 4 new questions (updated from old 5) |
| HowTo | ⚠️ | **Blocked** — see §1 |
| AggregateRating | ✅ | 4.9 / 38 reviews (real GBP data) |
| OpeningHoursSpecification | ✅ | By-appointment placeholder |

### Meta tags

- **Title:** "Sydney Masonry, Remedial & Heritage Construction | Romans" ✅
- **Description:** "Sydney masonry, remedial and heritage construction by Minas Romanakis. Licenced builders for brick, stone, concrete and structural repairs across Sydney." ✅
- **Canonical:** `/` ✅
- **OG Image:** `/og-image.png` ✅
- **Hero preload:** Poster image preloaded with `fetchpriority="high"` ✅
- **No duplicate meta or missing tags** detected.

### GEO/AEO considerations

- Problem navigator routes by *visible symptoms* ("Cracks or movement", "Water or salt damage") rather than trade names — strong voice-search and answer-engine optimization for "my brick wall is cracked."
- Each problem navigator entry links to a deep content page with FAQ, cost ranges, and diagnosis steps — good for AI Overview citation.
- HowTo schema (when fixed) targets "how to hire a mason in Sydney" queries.
- FAQ targets common natural-language questions.

---

## 4. Conversion & Decision Sequence — PASS

Per P2-STRATEGY.md decision sequence:

| Step | Requirement | Preview Status |
|------|-------------|---------------|
| 1 | Can Romans handle my problem? | ✅ Hero + credential strip answer immediately |
| 2 | Can I trust the diagnosis? | ✅ Founder section + "Licenced & insured" |
| 3 | Have they done comparable work? | ✅ 3 case studies with project detail |
| 4 | Who will inspect/perform the work? | ✅ Founder section: Minas involvement |
| 5 | What happens if I contact? | ✅ Process section (3 steps) |
| 6 | Can I call without a brief? | ✅ Hero "Call Minas" + phone in conversion |

### CTA semantics

| CTA | Location | Assessment |
|-----|----------|------------|
| "Get a Sydney Quote" | Hero (primary button) | ✅ Clear, geo-specific, actions-first |
| "Call Minas" | Hero (secondary) | ✅ Direct phone path above fold |
| "Browse the case studies" / "problem guides" | Hero (tertiary text links) | ✅ For research-first visitors |
| "See every problem guide" | Problem navigator | ✅ Clear secondary action |
| "View all case studies" | Case studies section | ✅ |
| "Read the project" (×3) | Each case study card | ✅ |
| "Meet Minas and the team" | Founder section | ✅ Links to /about |
| "Explore heritage work/masonry/remedial work" | Capabilities section | ✅ |
| "Open the Learn hub" | FAQ section | ✅ |
| Phone link + "Get a Quote" (internal) | Conversion section footer | ✅ |

### Mobile experience

- **Quote survey** embedded in conversion section — retains full 3-step flow ✅
- **Phone link** present in hero and conversion ✅
- **No horizontal overflow** at tested breakpoints ✅

---

## 5. P3 Improvement Notes (not blockers)

### 5.1 Location granularity inconsistency
**Homepage vs case study page:** The chimney rebuild shows "Eastern Suburbs" on the homepage, but the actual case study page title reads "Heritage Stonework — Woollahra". The suburb-level detail is lost in the homepage summary.

**Recommendation:** Change homepage case study location badge from "Eastern Suburbs" to "Woollahra" for precision.

### 5.2 Footer still says "30 years of doing things properly"
**File:** `src/components/Footer.tsx` (touched by PR #6 for copyright year update)  
**Text:** "Heritage restoration and masonry across Sydney since 1995. Minas Romanakis. 30 years of doing things properly."

The claim ledger copy rule says *"Use `since 1995` instead of recalculating a year count."* The first sentence already correctly uses "since 1995." The second sentence undoes it with a computed year count.

**Recommendation:** Change to "Minas Romanakis. Doing things properly from the start." or simply remove the second sentence.

### 5.3 PersonSchema `jobTitle: "Master Stonemason"`
**File:** `src/components/LocalSEO/StructuredData.tsx`, line 67  
The claim ledger says *"Do not claim ... specialist accreditation unless separately approved."* The term "Master Stonemason" could be interpreted as a specialist accreditation. This is pre-existing and not introduced by PR #6, but the P2 redesign amplifies the founder's presence.

**Recommendation:** Review whether "Master Stonemason" is a formally recognized accreditation or descriptive copy. If the latter, consider "Founder & Stonemason" to avoid schema-level claim exposure.

### 5.4 FAQ no longer covers licence/insurance trust signals
Old FAQ had "Are you licenced and insured?" as Question #1. New FAQ replaced it with scope-based questions. The conversion section trust badges now carry this signal but at lower schema visibility (no dedicated FAQPage entry for licence/insurance). The claim ledger permits licence in "Secondary proof or FAQ only."

**Recommendation:** Consider adding a licence FAQ item for schema coverage, or accept the current arrangement as sufficient secondary-proof placement.

### 5.5 Old homepage sections removed — verify no link rot
Removed sections from pre-P2 homepage:
- `RelatedLinksBlock` (pill nav to services/problems/areas etc.)
- `InteractiveServicesSection` (tiered services with photography)
- `ProjectGallerySection` (horizontal carousel)
- `ProcessStrip` (tight navy strip)
- `OptimizedAnimatedAboutSection`

None of these are linked to from the new homepage, so there's no broken link risk. All routes still exist via the navbar. ✅ No action needed.

---

## 6. Route Verification — All Pass

| Route | Status | Notes |
|-------|--------|-------|
| /case-studies/heritage-church-brick-restoration-sydney-cbd | ✅ | Renders 200 with full content |
| /case-studies/sandstone-seawall-restoration-mosman | ✅ | Renders 200 with full content |
| /case-studies/sandstone-chimney-rebuild-eastern-suburbs | ✅ | Renders 200 with full content |
| /problems/cracked-brick-walls | ✅ | Renders 200 with full content |
| /problems/rising-damp | ✅ | Renders 200 with full content |
| /problems/crumbling-mortar | ✅ | Renders 200 with full content |
| /problems/concrete-cancer | ✅ | Renders 200 with full content |
| /services/heritage-restoration | ✅ | Renders 200 |
| /services/masonry | ✅ | Renders 200 |
| /services/remedial-building | ✅ | Renders 200 |
| /about | ✅ | Renders 200 |
| /learn | ✅ | Renders 200 |
| /case-studies | ✅ | Renders 200 |
| /problems | ✅ | Renders 200 |

---

## Final Verdict

**PASS after remediation.** The original HowToSchema mismatch, drifting year count and unsupported estimated-cost wording were removed before merge. Static regression coverage now protects the correction.

Claim ledger compliance, conversion sequence, internal linking, schema preservation, SEO metadata, CTAs and responsive layout otherwise passed the independent review.