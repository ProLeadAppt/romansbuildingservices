import { ServicePageTemplate } from '@/components/ServicePageTemplate';
import { getSiblingServices } from '@/data/serviceHierarchy';
import { Layers, Ruler, Home, Shield, Wrench } from 'lucide-react';

const BrickBlockWorkPage = () => {
  const siblings = getSiblingServices('masonry', 'brick-block-work');

  return (
    <ServicePageTemplate
      title="Brick & Block Work"
      metaTitle="Sydney Brick & Block Work | Romans"
      metaDescription="Sydney brick and block work by Minas Romanakis. New builds, extensions, boundary walls and repairs across Sydney metro suburbs."
      heroImage="/gallery/thumbs/romansstone_1574104761_2180071211265247711_2394650725.webp"
      parentService={{ title: 'Stonemasonry & Masonry', href: '/services/masonry' }}
      siblingServices={[...siblings, { title: 'Structural Repairs', href: '/services/structural-repairs' }]}
      breadcrumbs={[
        { label: 'Services', href: '/services' },
        { label: 'Stonemasonry & Masonry', href: '/services/masonry' },
        { label: 'Brick & Block Work', href: '' },
      ]}
      intro={[
        "Romans builds and repairs brick and block walls across Sydney, including extensions, boundary walls, garden walls, retaining walls and feature walls. The first decision is whether the existing wall can be repaired locally or whether part needs rebuilding.",
        "We look at brick condition, mortar, movement and water entry before choosing materials. Matching means considering brick size, texture, bond pattern, mortar colour and joint profile. Reclaimed bricks may help on older buildings, but an exact visual match is not always available.",
        "Romans has worked across Sydney since 1995, with Minas Romanakis involved in assessment and work. Send photographs, the property location and a description of what has changed to help us understand the job. Structural concerns may need an engineer before the building scope is settled."
      ]}
      features={[
        {
          icon: Layers,
          title: "New brickwork",
          description: "Boundary walls, garden walls, feature walls, extensions and alfresco surrounds in face brick, common brick or reclaimed brick to suit the agreed design."
        },
        {
          icon: Wrench,
          title: "Brick repairs",
          description: "Replacement of cracked or spalling bricks and rebuilding of damaged sections. The cause of damage matters as much as the appearance of the patch."
        },
        {
          icon: Ruler,
          title: "Block construction",
          description: "Besser block, split-face and reinforced blockwork for walls, garages, sheds and enclosures. Reinforcement and core filling follow the project design."
        },
        {
          icon: Home,
          title: "Homes, strata and commercial sites",
          description: "Access, occupied areas, boundaries and protection of neighbouring property are considered when planning the work."
        },
        {
          icon: Shield,
          title: "Structural work and approvals",
          description: "Structural design belongs with the engineer. Confirm any approval requirements with the relevant council or certifier before construction starts."
        }
      ]}
      whatWeUse={[
        {
          title: "New and reclaimed bricks",
          detail: "Selection depends on the existing size, texture and colour, the intended exposure and supplier availability. Review a sample where appearance is important."
        },
        {
          title: "Besser and split-face block",
          detail: "The wall design determines block type, reinforcement, core filling and connections. Height alone is not enough to select a construction system."
        },
        {
          title: "Compatible mortar",
          detail: "Mortar strength and moisture behaviour need to suit the masonry. A harder mix is not automatically better, particularly beside older soft bricks."
        },
        {
          title: "Damp-proofing and drainage details",
          detail: "Damp-proof courses, cavity drainage and weep holes are detailed for the wall construction. A brick patch alone may not resolve water entry."
        },
        {
          title: "Wall ties and lintels",
          detail: "Ties, lintels and other supports are selected for the loading, exposure and specified repair. Suspected corrosion may need further investigation before a quote can be finalised."
        }
      ]}
      processSteps={[
        {
          step: "Inspect and define the scope",
          detail: "Review the wall, access, existing footings and visible defects. For a boundary wall, confirm the boundary position from appropriate survey information."
        },
        {
          step: "Confirm materials and design",
          detail: "Agree brick or block selection, mortar and finish. Resolve engineering, approvals and any footing requirements before construction."
        },
        {
          step: "Prepare and build",
          detail: "Protect nearby surfaces and establish the required support. Set out the wall and lay masonry to the agreed bond, levels and design."
        },
        {
          step: "Finish and hand over",
          detail: "Tool the joints, clean with a method suited to the masonry and explain curing protection and any follow-up work included in the quote."
        }
      ]}
      faqs={[
        {
          question: "Can you match my existing bricks?",
          answer: "We look for a suitable new or reclaimed brick and match the mortar colour and joint profile as closely as available materials allow. Weathering and discontinued bricks can make an exact match impossible. Samples help agree the finish before work starts."
        },
        {
          question: "Do you do small brick jobs?",
          answer: "Yes. Local repairs can include a damaged wall section, spalled bricks or a letterbox pier. Send photographs and dimensions if you have them. Access, material matching and the cause of damage determine the scope."
        },
        {
          question: "How long does a brick wall take to build?",
          answer: "Length, height, footings, access, material availability and curing affect the programme. Structural design and approvals may be needed before work starts. We discuss the expected sequence and timing for the actual site rather than promise a standard duration."
        },
        {
          question: "Do I need council approval for a brick wall?",
          answer: "Requirements depend on the site, wall design, boundary position, heritage status and local planning controls, not height alone. Check with the relevant council or certifier. A wall retaining soil also needs its loads and drainage considered."
        },
        {
          question: "What does brick and block work cost?",
          answer: "The quote depends on the wall area, footings, matching materials, access, demolition and any engineering or approval requirements. We define inclusions and exclusions after assessing the site, including whether finishes and removal of waste are included."
        },
        {
          question: "What paperwork should I ask for?",
          answer: "Ask for the written scope, contract terms, applicable warranty information and any required inspection records. Statutory rights depend on the type of work and applicable law; this page does not replace the contract or current NSW guidance."
        }
      ]}
    />
  );
};

export default BrickBlockWorkPage;
