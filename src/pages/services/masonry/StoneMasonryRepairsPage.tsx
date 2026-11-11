import { ServicePageTemplate } from '@/components/ServicePageTemplate';
import { getSiblingServices } from '@/data/serviceHierarchy';
import { Gem, Hammer, Search, CircleDot } from 'lucide-react';

const StoneMasonryRepairsPage = () => {
  const siblings = getSiblingServices('masonry', 'stone-masonry-repairs');

  return (
    <ServicePageTemplate
      title="Stone Masonry Repairs"
      metaTitle="Sydney Sandstone & Stone Masonry Repairs | Romans"
      metaDescription="Sydney stone masonry repairs by Minas Romanakis. Sandstone, bluestone, limestone and granite repairs with hand-dressed replacement and lime repointing."
      heroImage="/gallery/thumbs/romansstone_1576440613_2199665757989086550_2394650725.webp"
      parentService={{ title: 'Stonemasonry & Masonry', href: '/services/masonry' }}
      siblingServices={[...siblings, { title: 'Heritage Restoration', href: '/services/heritage-restoration' }]}
      breadcrumbs={[
        { label: 'Services', href: '/services' },
        { label: 'Stonemasonry & Masonry', href: '/services/masonry' },
        { label: 'Stone Masonry Repairs', href: '' },
      ]}
      intro={[
        "Romans repairs sandstone and other natural stone masonry across Sydney, including facades, sills, lintels, copings, retaining walls and seawalls. Weathering, cracking and loose stone need different responses, so the condition and cause of damage are assessed first.",
        "Options include compatible stone repair mortar, an inset piece of matching stone known as a dutchman repair, or replacement of a damaged block. The choice depends on the sound material remaining, exposure, structural role and any conservation requirements, not damage depth alone.",
        "Retaining sound original stone is important on older buildings. Colour, grain, bedding orientation and tooling affect both compatibility and appearance. New stone and repairs may remain visible even when carefully matched; natural weathering is not an exact or predictable colour-matching process."
      ]}
      features={[
        {
          icon: Gem,
          title: "Sandstone and natural stone",
          description: "Repairs to sandstone, bluestone, limestone and granite masonry, with the repair method selected for the stone and its position in the building."
        },
        {
          icon: Hammer,
          title: "Hand-dressed replacement",
          description: "Replacement faces can be dressed to suit the original tooling, including pitched, rock-faced, tooth-chiselled, drag and broached finishes."
        },
        {
          icon: Search,
          title: "Material matching",
          description: "Compare available stone with the existing colour, grain and texture. A sample is useful before agreeing replacement material, particularly on visible or heritage work."
        },
        {
          icon: CircleDot,
          title: "Local repairs and replacement",
          description: "Stone repair mortar and inset stone can retain more original material where appropriate. More extensive deterioration or structural concerns may require block replacement and specialist advice."
        }
      ]}
      whatWeUse={[
        {
          title: "Matched sandstone",
          detail: "Hawkesbury, Gosford and other suitable sandstone options depend on compatibility and availability. Reclaimed stone may be an option when its condition and dimensions suit the repair."
        },
        {
          title: "Compatible bedding and pointing mortar",
          detail: "Lime-rich mortar may suit older sandstone. The mix needs to suit the stone, exposure and repair specification; it is not selected on appearance alone."
        },
        {
          title: "Stainless dowels and cramps",
          detail: "Corrosion-resistant fixings may be required for replacement stone. Their type, location and anchorage need to follow the repair design rather than a generic detail."
        },
        {
          title: "Hand-dressing tools",
          detail: "Chisels and dressing tools help reproduce the existing surface. The finish is agreed alongside material samples where matching is important."
        },
        {
          title: "Stone repair mortar",
          detail: "A compatible repair mortar may suit local surface loss. Its strength, moisture behaviour and finish need to work with the host stone and intended exposure."
        },
        {
          title: "Surface treatments only where justified",
          detail: "A sealer is not a substitute for resolving moisture or salt damage. Any coating needs assessment for stone compatibility and, on heritage work, conservation requirements."
        }
      ]}
      processSteps={[
        {
          step: "Inspect the damage and its cause",
          detail: "Review the stone, joints, moisture, salts, fixings and movement. Share any existing engineering or heritage report. Intrusive sampling should be agreed before material is removed."
        },
        {
          step: "Agree material and method",
          detail: "Define what can be retained, repaired or replaced. Review samples and any required heritage advice or approval before cutting begins."
        },
        {
          step: "Prepare the repair safely",
          detail: "Plan access and support for surrounding masonry. Structural stone and unstable areas may require an engineer’s design and temporary works before removal."
        },
        {
          step: "Dress, bed and fix the stone",
          detail: "Form the replacement or inset to the agreed detail, then bed, anchor and point it using the specified compatible materials."
        },
        {
          step: "Protect and review the finish",
          detail: "Allow for curing and protect the new work as specified. Discuss maintenance and inspect the finished repair without promising that it will become invisible."
        }
      ]}
      faqs={[
        {
          question: "Can damaged sandstone be repaired rather than replaced?",
          answer: "Often a local repair is possible, but the remaining stone must be suitable to support it. Surface condition, salt damage, moisture, loading and the location of the damage all matter. A shallow defect is not automatically safe to patch, particularly in a lintel or projecting stone."
        },
        {
          question: "Where does replacement sandstone come from?",
          answer: "Suitable new or reclaimed sandstone is selected for the existing building and availability. Colour is only part of the match; grain, bedding and durability also matter. Supplier availability and any sample approval affect lead time."
        },
        {
          question: "How long do stone repairs last?",
          answer: "Service life varies with the repair method, stone compatibility, exposure, moisture, salts and maintenance. Neither replacement stone nor repair mortar has a universal lifespan. Addressing the cause of deterioration is part of planning a lasting repair."
        },
        {
          question: "What is a dutchman repair?",
          answer: "A dutchman repair inserts a shaped piece of stone into a local damaged area while retaining sound original material. Full replacement removes the whole block. The repair design determines dimensions and fixing requirements; an inset is not suitable for every defect."
        },
        {
          question: "What changes on a heritage-listed building?",
          answer: "The repair may need heritage advice and approval before work starts. Confirm the requirements with council or Heritage NSW as appropriate. Romans can discuss the proposed building scope with your adviser; the relevant authority determines approval and any conditions."
        },
        {
          question: "What does stone masonry repair cost?",
          answer: "Access, stone sourcing, dressing, repair complexity, temporary support and the extent of damaged material affect cost. Samples, engineering or heritage requirements can add stages. We assess the site before defining the repair scope and quote."
        }
      ]}
    />
  );
};

export default StoneMasonryRepairsPage;
