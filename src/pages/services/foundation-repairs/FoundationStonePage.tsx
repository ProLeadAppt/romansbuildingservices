import { ServicePageTemplate } from '@/components/ServicePageTemplate';
import { getSiblingServices } from '@/data/serviceHierarchy';
import { Landmark, Hammer, Droplets, Pickaxe, ShieldCheck } from 'lucide-react';

const FoundationStonePage = () => {
  const siblings = getSiblingServices('foundation-repairs', 'foundation-stone');

  return (
    <ServicePageTemplate
      title="Foundation Stone Repairs"
      metaTitle="Sydney Heritage Foundation Stone Repairs | Romans"
      metaDescription="Sydney stone and brick foundation repair enquiries. Compatible materials, moisture investigation and assessment-led heritage repair planning."
      heroImage="/gallery/thumbs/romansstone_1451642255_1152781246863726646_2394650725.webp"
      parentService={{ title: 'Foundation Repairs', href: '/services/foundation-repairs' }}
      siblingServices={siblings}
      breadcrumbs={[
        { label: 'Services', href: '/services' },
        { label: 'Foundation Repairs', href: '/services/foundation-repairs' },
        { label: 'Foundation Stone Repairs', href: '' },
      ]}
      intro={[
        "Older stone and brick foundations can contain solid masonry, rubble cores or a mixture of materials and later repairs. Surface erosion, open joints and cracking need investigation in the context of the whole wall. The visible face does not establish the condition or load-bearing capacity of concealed masonry.",
        "Repair planning should consider moisture sources, salts, drainage, ground levels and the compatibility of earlier work. Hard or poorly matched mortar can contribute to deterioration in softer masonry, but the right repair mix depends on the original materials and exposure rather than a single rule for every heritage foundation.",
        "Contact Romans to discuss foundation masonry repairs and the assessment required. Retention of sound original material, matched replacements and careful joint repair may form part of a scope. Structural support, heritage advice and approvals must be addressed before masonry is removed or excavation takes place beside a loaded foundation."
      ]}
      features={[
        {
          icon: Landmark,
          title: "Stone repair and replacement",
          description: "Assess whether a stone can be retained or needs repair or replacement. Any replacement must suit the strength, moisture behaviour, dimensions and appearance of the existing masonry."
        },
        {
          icon: Hammer,
          title: "Brick foundation repairs",
          description: "Identify the extent of deterioration and how loads are carried before removing bricks. Compatible units and mortar are selected for the building rather than by appearance alone."
        },
        {
          icon: Droplets,
          title: "Moisture investigation",
          description: "Distinguish ground moisture, leaks, condensation and rainwater entry before selecting treatment. A damp-course product is not a universal solution for wet foundation walls."
        },
        {
          icon: Pickaxe,
          title: "Mortar compatibility",
          description: "Assess existing mortar and masonry before agreeing a repair mix and joint preparation method. Trial areas can help check workmanship and appearance without committing the whole wall."
        },
        {
          icon: ShieldCheck,
          title: "Heritage requirements",
          description: "Check the property’s listing, conservation controls and required approvals. Agree any conservation advice and sample approval before work; using lime mortar alone does not establish compliance."
        }
      ]}
      whatWeUse={[
        {
          title: "Replacement stone",
          detail: "Select stone for compatibility and the intended use, not just colour. Availability, fabrication and finish need supplier confirmation. New and weathered stone may remain visibly different."
        },
        {
          title: "Replacement brick",
          detail: "Assess dimensions, condition and physical properties of new or reclaimed units. Verify legitimate sourcing and suitability; a similar-looking salvaged brick may not perform like the original."
        },
        {
          title: "Mortar specification",
          detail: "The specification should address strength, permeability, aggregate and exposure. Neither a universal lime grade nor a blanket cement prohibition is a substitute for assessing the existing wall."
        },
        {
          title: "Connections and reinforcement",
          detail: "Any cramps, dowels or reinforcement need design appropriate to the masonry, loads and exposure. Fixings and their bedding materials must be compatible with the retained structure."
        },
        {
          title: "Moisture treatment",
          detail: "Injection or a physical damp course may be unsuitable for some rubble or heritage walls. Establish the moisture mechanism, material compatibility and structural implications before choosing a system."
        },
        {
          title: "Drainage detailing",
          detail: "Drainage needs a safe excavation plan and a lawful discharge point. Digging beside a foundation can undermine it; ground levels and nearby services also need consideration."
        }
      ]}
      processSteps={[
        {
          step: "Assess condition and significance",
          detail: "Record visible defects and available building history. Arrange structural and heritage advice where needed, and investigate moisture before selecting a repair."
        },
        {
          step: "Agree design and samples",
          detail: "Confirm materials, trial areas, permissions and any temporary works. Replacement availability and fabrication affect the programme and should be checked before work is scheduled."
        },
        {
          step: "Prepare safe access",
          detail: "Plan any excavation, floor opening or support around the loaded foundation. Removal of masonry and exposure of buried work follow the designed sequence, not a standard trench dimension."
        },
        {
          step: "Repair the agreed areas",
          detail: "Carry out the specified masonry and joint repairs with inspection hold points where required. Refer unexpected voids, unstable material or concealed damage for review before continuing."
        },
        {
          step: "Protect and review",
          detail: "Protect and cure the work to the specification and site conditions. Complete agreed moisture or drainage measures and document inspection, maintenance and any further monitoring needed."
        }
      ]}
      faqs={[
        {
          question: "Why does mortar compatibility matter?",
          answer: "Mortar influences how the wall transfers load and manages moisture. An overly strong or poorly matched mix can damage softer masonry. Assess the original materials and exposure before choosing a repair mortar; age alone does not determine the correct specification."
        },
        {
          question: "Can eroded sandstone blocks be replaced?",
          answer: "Replacement may be possible where assessment shows the block cannot be retained or repaired. The scope must address temporary support and compatible stone. Matching is a considered process, and neither an invisible repair nor a fixed weathering period can be promised."
        },
        {
          question: "How are foundations accessed for repair?",
          answer: "Access may involve planned external excavation or openings through floors, depending on the building. The structural risks, buried services and safe working space must be assessed first. Do not dig alongside the footing or remove stones to investigate it yourself."
        },
        {
          question: "Will a new damp course solve the moisture problem?",
          answer: "Only if the moisture mechanism and wall construction suit the proposed treatment. Leaks, drainage and other sources may need separate attention. Rubble-filled or salt-affected walls require particular care; request an assessment and explanation of the treatment’s limitations."
        },
        {
          question: "How long will the repair take?",
          answer: "The programme depends on investigation, permissions, access, replacement-material availability and the specified curing and protection. Ask for a schedule based on the actual scope. Concealed deterioration can change both the extent of work and the time needed."
        },
        {
          question: "How is heritage foundation repair priced?",
          answer: "A quote should separate investigation and design, access and support, masonry repairs, materials, moisture measures and reinstatement. Cost depends on the assessed extent and conservation requirements. A price per stone or wall area alone does not capture the project."
        }
      ]}
    />
  );
};

export default FoundationStonePage;
