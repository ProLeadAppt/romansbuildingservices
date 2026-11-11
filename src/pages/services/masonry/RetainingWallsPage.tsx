import { ServicePageTemplate } from '@/components/ServicePageTemplate';
import { getSiblingServices } from '@/data/serviceHierarchy';
import { Mountain, Droplets, Layers, Ruler } from 'lucide-react';

const RetainingWallsPage = () => {
  const siblings = getSiblingServices('masonry', 'retaining-walls');

  return (
    <ServicePageTemplate
      title="Retaining Wall Construction"
      metaTitle="Sydney Retaining Wall Construction | Romans"
      metaDescription="Retaining wall construction and repairs across Sydney in sandstone, brick, block and concrete. Site-specific scope, drainage and engineering requirements."
      heroImage="/gallery/thumbs/romansstone_1575057672_2188064802893944247_2394650725.webp"
      parentService={{ title: 'Stonemasonry & Masonry', href: '/services/masonry' }}
      siblingServices={[...siblings, { title: 'Foundation Repairs', href: '/services/foundation-repairs' }]}
      breadcrumbs={[
        { label: 'Services', href: '/services' },
        { label: 'Stonemasonry & Masonry', href: '/services/masonry' },
        { label: 'Retaining Wall Construction', href: '' },
      ]}
      intro={[
        "Romans builds, repairs and rebuilds retaining walls in sandstone, brick, block and reinforced concrete across Sydney. A retaining wall supports soil as well as its own weight, so the ground, water and loads above it matter as much as its appearance.",
        "Leaning, bulging, cracking or displaced masonry needs assessment before a repair is chosen. Keep people away from an unstable wall and seek prompt professional advice. Do not excavate behind it or add loads while the cause and stability are uncertain.",
        "Drainage is part of the wall design, not a universal detail applied to every site. The design needs to consider groundwater, surface runoff, suitable outlets, foundations and nearby buildings or boundaries. Structural and, where required, geotechnical advice should guide the construction scope."
      ]}
      features={[
        {
          icon: Mountain,
          title: "Sandstone walls",
          description: "Coursed or random-laid sandstone for gardens, visible walls and heritage settings. Stone selection and repair details need to suit the existing work and site design."
        },
        {
          icon: Layers,
          title: "Block and reinforced concrete",
          description: "Core-filled block and reinforced concrete are options where the design calls for them. Render, paint or stone cladding can form part of the agreed finish."
        },
        {
          icon: Droplets,
          title: "Drainage and water management",
          description: "Subsoil drainage, drainage material, filters and outlets are considered together. Surface water should also be addressed so it does not simply run behind the wall."
        },
        {
          icon: Ruler,
          title: "Design and approval checks",
          description: "Height, ground conditions, nearby loads, boundaries and planning controls affect the requirements. Engineers provide structural design; council or a certifier confirms the relevant approval pathway."
        }
      ]}
      whatWeUse={[
        {
          title: "Sandstone",
          detail: "Stone dimensions, bedding and finish are selected for compatibility with the existing work, the design and available material. On heritage sites, matching and conservation requirements may influence the choice."
        },
        {
          title: "Reinforced blockwork",
          detail: "Block size, reinforcement, core filling and connections follow the engineer’s design where required. Wall height alone does not determine the specification."
        },
        {
          title: "Reinforced concrete",
          detail: "Concrete construction may suit particular loads or site constraints. The design determines foundations, reinforcement and construction details."
        },
        {
          title: "Drainage pipe, gravel and filters",
          detail: "The design sets the pipe, filter material and drainage arrangement. An appropriate lawful outlet needs to be confirmed; water must not simply be diverted onto neighbouring land."
        },
        {
          title: "Footings and backfill",
          detail: "Ground conditions and loads influence footing design and the choice and placement of backfill. Excavation and compaction must also account for adjacent structures."
        }
      ]}
      processSteps={[
        {
          step: "Inspect the site and existing wall",
          detail: "Review the retained height, access, drainage and what sits above or beside the wall. Share any survey, engineering report or history of movement."
        },
        {
          step: "Resolve design and approvals",
          detail: "Confirm the required engineer input and approval pathway with the relevant professionals. Agree who supplies documentation and who obtains approvals before work starts."
        },
        {
          step: "Prepare excavation and foundations",
          detail: "Plan access and any temporary support, then prepare foundations to the design. Required inspections and curing affect the construction sequence."
        },
        {
          step: "Build the wall and drainage",
          detail: "Construct the specified masonry or concrete system and its drainage. Arrange any required inspections before covered work becomes inaccessible."
        },
        {
          step: "Backfill, finish and hand over",
          detail: "Place backfill to the specified method and complete the agreed finish. Explain drainage maintenance and provide the records included in the project scope."
        }
      ]}
      faqs={[
        {
          question: "Does my retaining wall need council approval?",
          answer: "Requirements depend on the location, design, boundaries, nearby structures, heritage status and planning controls, not height alone. Check with the relevant council or certifier before work. Engineering and approval are separate matters; having a design does not itself grant permission to build."
        },
        {
          question: "What is the best material for a retaining wall?",
          answer: "There is no single best material for every site. Sandstone, brick, reinforced block and concrete have different construction and finish options. Ground conditions, retained loads, access, drainage, appearance and budget guide the choice with the project designer."
        },
        {
          question: "Can a leaning retaining wall be repaired?",
          answer: "Sometimes, but the cause and stability must be assessed first. There is no universal amount of lean that makes a wall safe or repairable. An engineer may need to assess the wall and ground before local repair, strengthening or rebuilding is chosen."
        },
        {
          question: "How long does retaining wall work take?",
          answer: "Design, approvals, excavation, access, material supply, inspections and curing all affect timing. The construction programme is discussed once the scope is understood. Council or other third-party turnaround cannot be guaranteed."
        },
        {
          question: "What does a retaining wall cost?",
          answer: "Costs depend on excavation and disposal, foundations, wall materials, drainage, access and finishes. Engineering, survey and approval costs should be identified separately where applicable. A site-specific quote is more useful than a generic wall-face rate."
        },
        {
          question: "How long should a retaining wall last?",
          answer: "Service life depends on the design, materials, ground conditions, loading, drainage and maintenance. No fixed lifespan applies to every wall. Keep drainage outlets maintained and arrange an assessment if movement, cracking or water problems appear."
        }
      ]}
    />
  );
};

export default RetainingWallsPage;
