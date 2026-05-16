// Service × Area programmatic SEO matrix.
//
// Targets high-commercial-intent local queries like "heritage restoration
// eastern suburbs" or "concrete repairs northern beaches". Each combo has
// a hand-written area-service context paragraph (~120 words) — never
// templated swaps. The base page reuses the canonical service info from
// serviceHierarchy.ts so we don't duplicate facts.
//
// We deliberately ship a small set (9 combos) instead of the full 7×6=42
// matrix. Adding more shouldn't dilute the existing pages; each new combo
// must clear the "would Minas cringe?" bar with real local specificity.

import { serviceHierarchy } from '@/data/serviceHierarchy';
import { getArea, type AreaProfile } from '@/data/areas';

export interface ServiceAreaCombo {
  serviceSlug: string;
  areaSlug: string;
  // Hand-written paragraph specific to doing THIS service in THIS area.
  // Should reference real housing stock, common materials, area-specific
  // wrinkles — not just "we work across the eastern suburbs".
  context: string;
  // 2-3 sentence summary used in the hero subtitle and meta description.
  heroLine: string;
}

export const SERVICE_AREA_COMBOS: ServiceAreaCombo[] = [
  {
    serviceSlug: 'heritage-restoration',
    areaSlug: 'sydney-cbd',
    heroLine:
      "Heritage restoration in The Rocks, Pyrmont, Ultimo and across the CBD. Colonial sandstone, lime mortars and council approvals — the way these buildings were meant to be looked after.",
    context:
      "The CBD has Sydney's oldest building stock: 1820s sandstone in The Rocks, mid-1800s warehouses around Pyrmont and Ultimo, and pockets of heritage commercial through Darlinghurst. Most of this work falls under Sydney Harbour Foreshore Authority or City of Sydney heritage controls, and council reviews are part of every job. We mix lime putty mortars on site, hand-cut replacement sandstone, and document everything required for approval before work starts. Cement-based repairs that suit a 1990s build will destroy a 200-year-old sandstone wall — we've spent decades undoing those mistakes on CBD buildings. Most of our CBD work is on heritage-listed properties or buildings in heritage conservation zones, which means tighter materials specification and longer timelines than non-heritage work.",
  },
  {
    serviceSlug: 'heritage-restoration',
    areaSlug: 'eastern-suburbs',
    heroLine:
      "Heritage restoration across the Eastern Suburbs. Victorian terraces in Paddington and Woollahra, Federation homes in Bellevue Hill and Bondi, sandstone retaining walls everywhere in between.",
    context:
      "The Eastern Suburbs are full of Victorian and Federation-era homes that need real heritage work — not modern shortcuts. Paddington and Woollahra terraces typically need tuckpointing, render repair, and structural crack work; Bondi and Coogee period homes get hit by salt damage and need consolidation; Bellevue Hill and Vaucluse Federation homes often need full external restoration after decades of patchwork. We handle the Waverley and Woollahra council heritage approval process and have working relationships with the heritage architects in the area. The mortars, brick matches and stone work are all done with materials period-correct to each building. Painted-over original brickwork is the single most common loss we restore — stripping back, repointing and re-tuckpointing transforms the property and consistently lifts value by more than the cost of the work.",
  },
  {
    serviceSlug: 'heritage-restoration',
    areaSlug: 'inner-west',
    heroLine:
      "Heritage restoration in Newtown, Balmain, Surry Hills, Glebe and across the Inner West. Tuckpointing, render repair and structural work on Sydney's terrace heartland.",
    context:
      "The Inner West is Sydney's largest concentration of 1840s–1890s workers' terraces, and almost every one we look at needs work somewhere. Balmain, Glebe, Newtown and Surry Hills all share the same problems: original lime mortars exhausted, cement repointing from the 1960s–80s spalling brick faces, painted-over tuckpointing hiding good brickwork, failed slate damp-proof courses driving rising damp. Council heritage controls are real here — Inner West Council, City of Sydney and Leichhardt all have heritage conservation areas that cover most of the older stock. We do test panels on every facade restoration before committing, mix lime mortars on site, and handle the heritage paperwork. The single highest-value job on a typical Inner West terrace is stripping cement render or modern paint, repointing with matched lime mortar, and running new tuckpointing — that brings back the property's character and lifts value materially.",
  },
  {
    serviceSlug: 'heritage-restoration',
    areaSlug: 'north-shore',
    heroLine:
      "Heritage restoration across the North Shore. Federation homes in Mosman, Neutral Bay and Lane Cove; California bungalows through Chatswood and Lindfield; sandstone retaining walls everywhere.",
    context:
      "The North Shore's housing stock is dominated by Federation and inter-war homes — Mosman, Neutral Bay, Cremorne and Lane Cove especially. Most are face brick with original tuckpointing, decorative render panels, terracotta tile roofs and sandstone detailing on steps, plinths and gateposts. Eighty to a hundred years on, the work needed varies: painted brickwork stripped, cracked render replaced, sandstone retaining walls rebuilt, original tuckpointing brought back. Cremorne Point and Mosman Bay properties carry salt damage from the harbour even though they're not technically coastal — we treat those with breathable lime-based systems that let walls dry properly. Willoughby and Mosman councils have active heritage conservation controls and we work through their approval processes regularly.",
  },
  {
    serviceSlug: 'masonry',
    areaSlug: 'sydney-cbd',
    heroLine:
      "Masonry contractor for Sydney CBD. Brickwork, stonework, repointing and retaining walls on heritage and commercial buildings across the city centre.",
    context:
      "Masonry work in the CBD is mostly heritage and commercial — 19th-century sandstone facades, Victorian warehouses converted to apartments, heritage shopfronts that need careful brick and stone repair. Most jobs are within heritage conservation zones, so materials specification, mortar mixes and methods all need to match what was originally there. Access is usually tight: scaffold permits, foot-traffic protection, and out-of-hours work for street-level jobs near busy retail. We do this constantly and have the systems set up — councils we work with regularly, scaffold suppliers who know the rules, and protective scaffold for pedestrian flow. For strata buildings in Pyrmont and Ultimo, brick and stone repair on the original warehouse facades is some of the most common work we do.",
  },
  {
    serviceSlug: 'masonry',
    areaSlug: 'eastern-suburbs',
    heroLine:
      "Masonry across the Eastern Suburbs. Sandstone terrace work in Paddington, retaining walls in Woollahra and Vaucluse, brick repair through Bondi and Coogee.",
    context:
      "Eastern Suburbs masonry covers four main jobs: Victorian terrace brick repair (Paddington, Surry Hills border, Woollahra), sandstone retaining wall repair and construction (Bellevue Hill, Vaucluse, Rose Bay), brick facade work on inter-war apartment blocks (Bondi, Coogee), and salt-damage repair across all of it. Sandstone here is mostly Hawkesbury or Pyrmont, and we source matched stone for replacements. Coastal salt accelerates everything — we use breathable lime-based systems on facades within a few kilometres of the water, and salt-tolerant mortar mixes on retaining walls. The Waverley and Woollahra councils both have active heritage controls; we handle the paperwork before any external work starts on listed or conservation-zone properties.",
  },
  {
    serviceSlug: 'masonry',
    areaSlug: 'inner-west',
    heroLine:
      "Masonry contractor for the Inner West. Brick repointing, structural brick repair and stonework on Sydney's terrace heartland.",
    context:
      "Inner West masonry work is overwhelmingly terrace and workers' cottage repair: brick repointing, structural crack stitching, lintel replacement, sandstone step and plinth work. The default Inner West construction is Sydney red brick on lime mortar, often with sandstone detailing and a slate damp-proof course that's failed by now. Cement mortar repointing — common from the 1960s onward — spalls the brick faces over decades, and we routinely strip it out and re-point with matched lime mortar. Tuckpointing restoration is the big visual transformation: bringing the original white fillet line back on facades that have been painted or repointed flat. Inner West Council and City of Sydney run active heritage conservation controls across most of the older stock.",
  },
  {
    serviceSlug: 'concrete-repairs',
    areaSlug: 'northern-beaches',
    heroLine:
      "Concrete repairs and concrete cancer treatment across the Northern Beaches. Strata building remediation in Manly, Dee Why, Collaroy and Avalon — done properly so it lasts.",
    context:
      "The Northern Beaches has the highest concrete cancer rate per kilometre of buildings in Sydney. Manly, Dee Why, Collaroy and Freshwater all have heavy stocks of 1970s–90s strata buildings, and most balconies and parapets over 20 years old have spalling concrete somewhere. Salt drives chloride deep into the concrete, rusts the steel, and slabs split from the inside out. Cheap patch repairs fail within five years in this environment — the only thing that works is a full cut-back to sound concrete, proper steel treatment with a corrosion inhibitor, salt-resistant repair mortar applied in layers, and a breathable protective coating. We've staged whole-building programs for strata committees across the Beaches, typically running 2–3 years to spread cost across financial years. Membrane work on balconies usually goes hand-in-hand with the concrete repairs.",
  },
  {
    serviceSlug: 'concrete-repairs',
    areaSlug: 'eastern-suburbs',
    heroLine:
      "Concrete repairs and concrete cancer treatment across the Eastern Suburbs. Strata building remediation in Bondi, Coogee, Randwick and Maroubra.",
    context:
      "The Eastern Suburbs has Sydney's second-highest concentration of strata buildings with concrete cancer — the post-war and 1970s–80s walk-ups through Bondi, Coogee, Randwick and Maroubra. Salt air from the coast drives chloride into the concrete, rusting the steel reinforcement and spalling balcony slabs, parapets and facade panels. We've worked on dozens of strata buildings here and the pattern is consistent: full assessment, ranked by urgency, then staged remediation over multiple years with budget set by the strata committee. Repair must be done properly — cut-back to sound concrete, steel treated with corrosion inhibitor, salt-resistant patch mortar, and a breathable protective coating that lets moisture escape without letting salt in. Skipping any of these steps just delays the next repair cycle.",
  },
  {
    serviceSlug: 'foundation-repairs',
    areaSlug: 'greater-sydney',
    heroLine:
      "Foundation repairs across Greater Sydney. Underpinning, structural diagnosis and footing repair on homes in Strathfield, Burwood, Concord, Homebush and Parramatta.",
    context:
      "Greater Sydney's clay soils — especially through Strathfield, Burwood, Concord and Homebush — drive significant seasonal foundation movement. After drought followed by heavy rain, reactive clay swells and shrinks unevenly under shallow footings, and older homes start cracking. Most cracks we look at are cosmetic, but every one needs proper assessment against actual movement before recommending repair. We do level checks and tell-tales over time where active movement is suspected, plus soil tests on serious jobs. Treatment depends on diagnosis — sometimes fixing broken stormwater and waiting six months solves it, sometimes targeted underpinning is needed, occasionally the whole side of a building needs full footing replacement. Jumping straight to underpinning without diagnosis wastes money and doesn't fix the cause.",
  },
];

// Helper: get all combos rendered as routes for prerender + sitemap
export const SERVICE_AREA_ROUTES = (): Array<{ service: string; area: string }> =>
  SERVICE_AREA_COMBOS.map((c) => ({ service: c.serviceSlug, area: c.areaSlug }));

export const getServiceAreaCombo = (serviceSlug: string, areaSlug: string): ServiceAreaCombo | undefined =>
  SERVICE_AREA_COMBOS.find((c) => c.serviceSlug === serviceSlug && c.areaSlug === areaSlug);

export const getServicesForArea = (areaSlug: string): ServiceAreaCombo[] =>
  SERVICE_AREA_COMBOS.filter((c) => c.areaSlug === areaSlug);

export const getAreasForService = (serviceSlug: string): Array<{ combo: ServiceAreaCombo; area: AreaProfile }> => {
  return SERVICE_AREA_COMBOS.filter((c) => c.serviceSlug === serviceSlug)
    .map((combo) => {
      const area = getArea(combo.areaSlug);
      return area ? { combo, area } : null;
    })
    .filter((x): x is { combo: ServiceAreaCombo; area: AreaProfile } => x !== null);
};

export const getServiceData = (serviceSlug: string) =>
  serviceHierarchy.find((s) => s.slug === serviceSlug);
