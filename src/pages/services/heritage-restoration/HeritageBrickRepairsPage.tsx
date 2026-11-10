import { ServicePageTemplate } from '@/components/ServicePageTemplate';
import { getSiblingServices } from '@/data/serviceHierarchy';
import { Layers, Paintbrush, History, ClipboardCheck } from 'lucide-react';

const HeritageBrickRepairsPage = () => {
  const siblings = getSiblingServices('heritage-restoration', 'heritage-brick-repairs');

  return (
    <ServicePageTemplate
      title="Heritage Brick Repairs"
      metaTitle="Sydney Heritage Brick Repairs | Romans"
      metaDescription="Sydney heritage brick repair enquiries. Compatible brick and mortar, careful retention and matching for older masonry."
      heroImage="/gallery/thumbs/romansstone_1451642255_1152781246863726646_2394650725.webp"
      parentService={{ title: 'Heritage Restoration', href: '/services/heritage-restoration' }}
      siblingServices={siblings}
      breadcrumbs={[
        { label: 'Services', href: '/services' },
        { label: 'Heritage Restoration', href: '/services/heritage-restoration' },
        { label: 'Heritage Brick Repairs', href: '' },
      ]}
      intro={[
        "Older brickwork varies in size, firing, texture and strength, even within the same building. Repairs should start with the material present rather than assumptions about its era. Sound original bricks and distinctive bond patterns are worth retaining wherever the assessed repair allows.",
        "Replacement bricks need to suit the original physically as well as visually. Reclaimed stock or new manufacture may be options, but availability and condition need checking. A colour match alone does not establish compatibility, and a repaired area may remain visible.",
        "Mortar selection is equally important. An overly hard or poorly matched repair can contribute to damage in softer masonry, but crumbling brick can also involve salts, moisture or other causes. Contact Romans to discuss the wall, its condition and a repair scope based on assessment rather than a fixed mortar grade by date."
      ]}
      features={[
        {
          icon: Layers,
          title: "Replacement brick",
          description: "Compare dimensions, texture, colour and physical properties. Check reclaimed units for damage and legitimate provenance before selecting them."
        },
        {
          icon: Paintbrush,
          title: "Mortar and joints",
          description: "Assess the existing mix and exposure, then trial a compatible repair mortar and joint profile."
        },
        {
          icon: History,
          title: "Retain original fabric",
          description: "Record bond patterns, finishes and earlier changes. Building age can inform investigation but does not reliably identify every brick."
        },
        {
          icon: ClipboardCheck,
          title: "Conservation records",
          description: "Agree photographs, material specifications and any heritage review or permission needed before removing original masonry."
        }
      ]}
      whatWeUse={[
        {
          title: "Brick samples",
          detail: "Samples allow comparison in the actual wall and light. Confirm quantities and availability before assuming a complete match can be supplied."
        },
        {
          title: "Mortar specification",
          detail: "Binder, aggregate and strength should suit the masonry and exposure. A universal natural hydraulic lime grade is not appropriate for every historic wall."
        },
        {
          title: "Controlled joint preparation",
          detail: "Choose tools and removal depth to protect the brick arrises and retained mortar. Trial areas help assess damage risk before wider work."
        },
        {
          title: "Tuckpointing details",
          detail: "Where evidence supports reinstatement, record the backing colour, fine line and joint profile. Tuckpointing is a distinct finish rather than a requirement for all Victorian brickwork."
        },
        {
          title: "Curing and protection",
          detail: "Non-hydraulic lime hardens mainly by carbonation; hydraulic lime also sets through hydration. Protection and moisture management follow the chosen mix and weather, not a fixed calendar rule."
        }
      ]}
      processSteps={[
        {
          step: "Record the wall",
          detail: "Assess bricks, mortar, movement and moisture. Identify listing controls and whether structural or conservation advice is needed."
        },
        {
          step: "Agree materials",
          detail: "Compare replacement units and mortar samples, then document the accepted match and limitations."
        },
        {
          step: "Plan removal",
          detail: "Assess support and safe sequence before taking out masonry or embedded metal. Lintels and ties must not be removed as routine cleaning."
        },
        {
          step: "Repair the agreed areas",
          detail: "Retain sound units and follow the specified bond, bedding and connections. Refer concealed instability or corrosion for review."
        },
        {
          step: "Point and protect",
          detail: "Finish the agreed joint profile and protect the work according to the specification. Record any ongoing moisture or maintenance issues."
        }
      ]}
      faqs={[
        {
          question: "Where can matching bricks come from?",
          answer: "New manufacture and reclaimed stock may both be considered. Compare samples for dimensions, condition and compatibility, not just colour. Availability changes, so agree a suitable match and quantity before ordering or removing original bricks."
        },
        {
          question: "Why are old bricks crumbling?",
          answer: "Moisture, salts, weathering, incompatible mortar and material defects can contribute. Investigate the cause before removing joints or coating the wall. Taking out every cement repair without assessment can damage fragile bricks or disturb otherwise sound work."
        },
        {
          question: "Can only the damaged section be repaired?",
          answer: "Local repair may be appropriate where the surrounding wall is sound. The assessment must consider movement, support and the extent of hidden damage. Agree how the new work will connect and how visible the repair may be."
        },
        {
          question: "Can a photograph identify the brick’s age?",
          answer: "Photographs can help with an initial discussion, but size and colour alone cannot establish age or source. Reused bricks and later alterations can complicate the picture. Building records and close material assessment provide better evidence."
        },
        {
          question: "Will replacements blend in?",
          answer: "Samples help set a realistic match, but weathered original and replacement bricks may remain different. There is no reliable weathering period that guarantees blending. Any tinting or surface treatment needs compatibility testing and conservation consideration."
        },
        {
          question: "What affects heritage brick repair cost?",
          answer: "Access, brick availability, support, careful removal, mortar preparation and the amount of adjoining pointing all matter. Ask for a scope-specific quote with matching assumptions and exclusions rather than relying on a standard price per brick."
        }
      ]}
    />
  );
};

export default HeritageBrickRepairsPage;
