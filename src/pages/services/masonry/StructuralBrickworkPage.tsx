import { ServicePageTemplate } from '@/components/ServicePageTemplate';
import { getSiblingServices } from '@/data/serviceHierarchy';
import { Building2, ArrowUpFromLine, Columns3, ShieldCheck } from 'lucide-react';

const StructuralBrickworkPage = () => {
  const siblings = getSiblingServices('masonry', 'structural-brickwork');

  return (
    <ServicePageTemplate
      title="Structural Brickwork"
      metaTitle="Sydney Structural Brickwork | Romans"
      metaDescription="Structural brickwork repairs across Sydney, including walls, piers, arches and lintels. Building work to an agreed scope with engineer input where required."
      heroImage="/gallery/thumbs/romansstone_1576003161_2195996136622601152_2394650725.webp"
      parentService={{ title: 'Stonemasonry & Masonry', href: '/services/masonry' }}
      siblingServices={[...siblings, { title: 'Structural Repairs', href: '/services/structural-repairs' }, { title: 'Foundation Repairs', href: '/services/foundation-repairs' }]}
      breadcrumbs={[
        { label: 'Services', href: '/services' },
        { label: 'Stonemasonry & Masonry', href: '/services/masonry' },
        { label: 'Structural Brickwork', href: '' },
      ]}
      intro={[
        "Structural brickwork supports loads through walls, piers, columns, arches and lintels. Cracking, leaning masonry or changes around openings deserve assessment, but a crack pattern alone cannot establish the cause or whether a wall is safe.",
        "Romans carries out structural brickwork repairs and rebuilds across Sydney. Options can include helical-rod crack stitching, pier rebuilding, lintel replacement and wall reconstruction. The repair must address the cause of the damage rather than simply hide the crack.",
        "A structural engineer assesses the load path and specifies structural repairs where required. Romans carries out the agreed building work and coordinates around that design. Keep people clear of loose or unstable masonry and seek prompt professional advice if there is movement or a risk of falling material."
      ]}
      features={[
        {
          icon: Building2,
          title: "Load-bearing walls",
          description: "Repairs and rebuilding of brick walls, including double-brick, cavity and shared walls. Loads, connections and neighbouring property need consideration in the repair design."
        },
        {
          icon: Columns3,
          title: "Piers and columns",
          description: "Repair or rebuilding of damaged masonry supports for verandahs, balconies and floors. Temporary support and the sequence of work require planning before removal."
        },
        {
          icon: ArrowUpFromLine,
          title: "Arches and lintels",
          description: "Brick arch repair and lintel replacement with attention to bearing, loading, corrosion and the masonry above the opening."
        },
        {
          icon: ShieldCheck,
          title: "Repairs to an agreed design",
          description: "Crack stitching or reinforcement may be appropriate when specified for the diagnosed defect. Engineer inspections and required records should be agreed in the project scope."
        }
      ]}
      whatWeUse={[
        {
          title: "Stainless helical rods",
          detail: "Helical rods can be used for specified crack-stitching repairs. Rod layout, anchorage and compatible grout follow the design and system requirements."
        },
        {
          title: "Mortar suited to the masonry",
          detail: "The repair mortar must suit the existing brickwork as well as the structural specification. High strength alone does not make a mix appropriate for older masonry."
        },
        {
          title: "Lintels and supports",
          detail: "Material, size, bearing and corrosion protection depend on loads, span and exposure. These details should be specified for the opening, not selected by a generic span rule."
        },
        {
          title: "Designed reinforcement",
          detail: "Ties, rods or stitch plates may form part of a repair where the engineer specifies them. They are not interchangeable solutions for unexplained movement."
        },
        {
          title: "Temporary support",
          detail: "Props and other temporary works must suit the load, ground support and construction sequence. Their installation and removal require a planned method."
        },
        {
          title: "Engineering documents",
          detail: "The engineer determines design and inspection requirements within their appointment. Confirm what reports, inspection records and completion documentation are included."
        }
      ]}
      processSteps={[
        {
          step: "Inspect and gather information",
          detail: "Review visible damage and any previous repairs, drawings or reports. A building inspection may identify the need for structural investigation before the work can be priced."
        },
        {
          step: "Establish the cause and repair scope",
          detail: "An engineer may need to assess movement, foundations, lintels or wall ties and specify a repair. Do not assume that a narrow crack needs only cosmetic work."
        },
        {
          step: "Plan support and access",
          detail: "Agree temporary support, protection, access and any required approval before disturbing load-bearing masonry."
        },
        {
          step: "Carry out the specified repair",
          detail: "Rebuild or reinforce the agreed sections using the design and compatible materials. Unexpected concealed defects may require review before proceeding."
        },
        {
          step: "Inspect before covering and complete",
          detail: "Arrange the inspections required by the design or approval before work is concealed. Remove temporary support only in accordance with the planned sequence, then reinstate the agreed finishes."
        }
      ]}
      faqs={[
        {
          question: "How do I know if a wall is load-bearing?",
          answer: "Appearance and wall thickness alone are not enough. Drawings and investigation of what the wall supports may be needed. Do not remove or cut an opening in a wall until its role and any required design and approvals have been established."
        },
        {
          question: "Can cracked structural brickwork be repaired?",
          answer: "Often it can, but the cause and extent of movement determine the method. Crack stitching is not a general remedy for ongoing foundation movement or unstable masonry. The engineer may specify further investigation, monitoring, support work or rebuilding before a repair is chosen."
        },
        {
          question: "Do I need an engineer for structural brickwork?",
          answer: "Structural concerns should be assessed by a suitably qualified engineer. The need for a design, inspections and certification depends on the proposed work and approval requirements. Confirm the engineer’s appointment and fees separately from the building quote where applicable."
        },
        {
          question: "What causes structural cracking in brick walls?",
          answer: "Possible causes include foundation movement, corroding lintels or ties, changes in loading and thermal or moisture movement. Similar cracks can have different causes. Crack pattern, history and investigation must be considered together rather than diagnosing from a photograph alone."
        },
        {
          question: "How long does structural brickwork repair take?",
          answer: "Investigation, design, approvals, access, temporary support, material supply and curing affect the programme. Inspections may be needed before work is covered. A construction estimate is discussed after the scope is clear, with third-party stages identified separately."
        },
        {
          question: "What documentation should I receive?",
          answer: "Agree the written building scope, applicable warranty information and any required engineering or inspection records before work. An engineering report or certificate covers the scope stated in it; it is not a guarantee of every part of the property. Refer to current NSW guidance and the contract for statutory rights."
        }
      ]}
    />
  );
};

export default StructuralBrickworkPage;
