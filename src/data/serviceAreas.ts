// Ten existing service-area guides. Context supports a practical enquiry;
// it is not evidence of local jobs, defect rates or a standard repair.

import { serviceHierarchy } from '@/data/serviceHierarchy';
import { getArea, type AreaProfile } from '@/data/areas';

export interface ServiceAreaCombo {
  serviceSlug: string;
  areaSlug: string;
  // Practical assessment and access context for this existing guide.
  context: string;
  // 2-3 sentence summary used in the hero subtitle and meta description.
  heroLine: string;
}

export const SERVICE_AREA_COMBOS: ServiceAreaCombo[] = [
  {
    "serviceSlug": "heritage-restoration",
    "areaSlug": "sydney-cbd",
    "heroLine": "Heritage restoration enquiries for Sydney CBD buildings. Original fabric, repair scope, access and property-specific heritage requirements.",
    "context": "For an older facade in The Rocks, Pyrmont or Ultimo, establish what is original, what has been altered and which fabric should be retained. Surviving stone profiles, mortar and earlier records can guide a conservation approach. Confirm the property’s listing, responsible authority and any approval or exemption conditions before work. Street access, neighbouring tenancies and pedestrian protection also affect the scope. Discuss any heritage adviser or specialist involvement when arranging an assessment with Romans."
  },
  {
    "serviceSlug": "heritage-restoration",
    "areaSlug": "eastern-suburbs",
    "heroLine": "Heritage masonry enquiries across the Eastern Suburbs. Careful assessment of terrace facades, stone details and earlier repairs.",
    "context": "For a Paddington or Woollahra terrace, a stone detail in Bellevue Hill or an older coastal property, start with the material and the building’s own history. Paint, render and past repairs can conceal original finishes. Agree whether test work or specialist heritage advice is needed before cleaning, stripping or repointing. Check the actual council and property controls rather than applying one rule across the Eastern Suburbs. Discuss the repair options, access and proposed programme with Romans before agreeing the scope."
  },
  {
    "serviceSlug": "heritage-restoration",
    "areaSlug": "inner-west",
    "heroLine": "Heritage restoration enquiries for Inner West terraces, cottages and shopfronts. Material compatibility, retained details and considered repair planning.",
    "context": "An Inner West facade may contain original joints, later cement repairs, paint and replacement brickwork on the same wall. Identify those layers before choosing what to retain or remove. For terraces and shopfronts, party walls, narrow access and occupied neighbours can shape the work programme. Check the relevant council’s current heritage requirements; the wider regional label spans more than one local authority. Discuss a suitable finish and any trial area before committing to extensive restoration."
  },
  {
    "serviceSlug": "heritage-restoration",
    "areaSlug": "north-shore",
    "heroLine": "Heritage restoration enquiries across the North Shore. Masonry, sandstone details and property-specific conservation advice.",
    "context": "For an older house in Mosman, Neutral Bay, Lane Cove or Chatswood, record the affected element and surviving details rather than relying on a broad period label. A retaining wall, decorative panel and load-bearing wall can require different assessments. Consider drainage, exposure, earlier coatings and safe access alongside appearance. Heritage status and permissions need checking for the exact property. Confirm the repair scope and any engineering or heritage specialist responsibilities before work begins."
  },
  {
    "serviceSlug": "masonry",
    "areaSlug": "sydney-cbd",
    "heroLine": "Sydney CBD masonry enquiries for brick, stone and mortar repairs. Plan the building assessment, public access and written scope.",
    "context": "A street-facing shopfront, warehouse conversion and commercial building bring different masonry and access questions. Identify the material, height and location of damage, including any risk to people below. For Pyrmont, Ultimo and the city centre, discuss loading access, occupied tenancies and any public-space protection with the relevant parties. Original materials and heritage requirements may affect the repair specification. Share available drawings, photographs and access constraints with Romans when discussing the assessment and proposed scope."
  },
  {
    "serviceSlug": "masonry",
    "areaSlug": "eastern-suburbs",
    "heroLine": "Masonry enquiries across the Eastern Suburbs. Brick, sandstone and retaining-wall repairs matched to the assessed building.",
    "context": "For a terrace wall in Paddington, a retaining wall in Woollahra or brickwork at a Bondi or Coogee property, explain what the element supports and how it is exposed to water. A retaining structure needs different investigation from decorative stone or facade pointing. Assess material compatibility and drainage before selecting mortar, a coating or replacement units. Confirm any engineering, ownership and heritage requirements for the property, then agree the repair scope and access."
  },
  {
    "serviceSlug": "masonry",
    "areaSlug": "inner-west",
    "heroLine": "Inner West masonry enquiries for brickwork, repointing and stone repairs. Retain sound fabric and plan work around the property.",
    "context": "For an Inner West terrace or cottage, mortar colour is only one part of a compatible repair. The brick or stone condition, earlier pointing, joint profile and source of deterioration also matter. Party walls, narrow side passages and neighbours can affect investigation and access. A sample repair may help agree appearance before wider work. Check any relevant heritage requirements and discuss the assessed scope with Romans; the building’s actual fabric determines the method."
  },
  {
    "serviceSlug": "concrete-repairs",
    "areaSlug": "northern-beaches",
    "heroLine": "Concrete repair enquiries for Northern Beaches strata and other properties. Engineering, investigation and safe access before a repair programme.",
    "context": "For a building in Manly, Dee Why, Collaroy or Avalon, provide existing reports and identify where cracked or loose concrete sits relative to residents, entrances and public areas. Coastal exposure is useful context, not a diagnosis or a regional defect ranking. Assessment and any testing guide corrosion treatment, repair materials and related waterproofing work. Agree urgent protection, inspections and resident access before staging work. A budget programme should follow the assessed risk rather than a standard multi-year schedule."
  },
  {
    "serviceSlug": "concrete-repairs",
    "areaSlug": "eastern-suburbs",
    "heroLine": "Concrete repair enquiries across the Eastern Suburbs. Assess balconies, facades and other affected elements before choosing remediation.",
    "context": "A balcony, parapet and structural slab can present different risks even within the same Bondi, Coogee, Randwick or Maroubra building. Share the location of symptoms, past repairs and available strata or engineering records. Keep clear of loose material and arrange professional assessment of structural concerns. The findings determine the repair extent and any associated waterproofing or corrosion measures. Confirm specialist responsibilities, approvals and access before agreeing work; a generic patch sequence cannot establish a durable outcome."
  },
  {
    "serviceSlug": "foundation-repairs",
    "areaSlug": "greater-sydney",
    "heroLine": "Foundation repair enquiries across Sydney metro suburbs. Investigation, engineering and access planning for property-specific repair options.",
    "context": "For a property in Strathfield, Burwood, Concord, Homebush or Parramatta, record movement history and share any engineering, drainage or ground-investigation reports. Cracks and uneven floors can have several causes, so a suburb or photograph cannot determine whether underpinning is needed. An engineer should guide structural investigation and any monitoring or repair design. Include adjoining buildings, services and safe access in the discussion. Confirm which parts Romans and any specialist contractors would undertake before agreeing the scope."
  }
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
