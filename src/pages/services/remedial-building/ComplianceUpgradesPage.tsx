import { ServicePageTemplate } from '@/components/ServicePageTemplate';
import { getSiblingServices } from '@/data/serviceHierarchy';
import { ClipboardCheck, ShieldCheck, Ruler, Wrench, FileCheck } from 'lucide-react';

const ComplianceUpgradesPage = () => {
  const siblings = getSiblingServices('remedial-building', 'compliance-upgrades');

  return (
    <ServicePageTemplate
      title="Building Compliance Upgrades"
      metaTitle="Sydney Building Compliance Upgrades | Romans"
      metaDescription="Sydney building upgrade enquiries. Defined compliance scopes, specialist design, approvals and documented construction work for existing buildings."
      heroImage="/gallery/thumbs/romansstone_1576440613_2199665757989086550_2394650725.webp"
      parentService={{ title: 'Remedial Building', href: '/services/remedial-building' }}
      siblingServices={siblings}
      breadcrumbs={[
        { label: 'Services', href: '/services' },
        { label: 'Remedial Building', href: '/services/remedial-building' },
        { label: 'Building Compliance Upgrades', href: '' },
      ]}
      intro={[
        "Building requirements depend on the use, classification, proposed work and applicable approval or order. A change of use, renovation or identified defect may lead to upgrade requirements, but a new code edition does not automatically mean every existing building needs wholesale reconstruction.",
        "Compliance work starts with a clear statement of what must be addressed and who determines acceptance. A certifier, council, engineer, fire specialist or access consultant may have different roles depending on the scope. Their advice should identify the applicable requirements before construction work is priced.",
        "Contact Romans to discuss the building work in a defined upgrade scope. Masonry, structural repairs and associated alterations may require specialist trades or design. Confirm capability, licence requirements, responsibilities and approvals for the particular work rather than assuming one contractor can certify the entire building."
      ]}
      features={[
        {
          icon: ClipboardCheck,
          title: "Defined requirements",
          description: "Provide relevant notices, reports and approved documents. Separate required upgrades from optional improvements so the construction scope and acceptance criteria are clear."
        },
        {
          icon: ShieldCheck,
          title: "Fire-related building work",
          description: "Fire-resisting construction requires a suitable design and complete tested or assessed systems. Product labels alone do not establish the performance of a wall, floor or penetration."
        },
        {
          icon: Ruler,
          title: "Barriers and access",
          description: "Balustrades, stairs and accessible routes need assessment against the applicable requirements. Existing dimensions, loads, clearances and surrounding construction all affect the design."
        },
        {
          icon: Wrench,
          title: "Structural alterations",
          description: "Upgrades may affect loads and connections. Engineering and temporary support requirements should be defined before demolition, strengthening or changes to openings."
        },
        {
          icon: FileCheck,
          title: "Inspection and handover",
          description: "Agree the inspection stages, documents and responsible parties required by the approval or order. A contractor’s completion record is not a universal compliance certificate."
        }
      ]}
      whatWeUse={[
        {
          title: "Specified construction systems",
          detail: "Materials and components must be used as the designed assembly requires. Unreviewed substitutions can change performance even when individual products appear equivalent."
        },
        {
          title: "Fire-stopping details",
          detail: "Penetrations need a system appropriate to the wall or floor, service type and required performance. Specialist installation and records may be required; generic sealant is not a complete specification."
        },
        {
          title: "Barrier components",
          detail: "Posts, fixings, infill and supporting structure work together. The design must establish suitability for the particular location and use rather than rely on a single height or loading rule."
        },
        {
          title: "Waterproofing interfaces",
          detail: "Where work affects membranes or drainage, identify the system and specialist responsibilities. Relevant requirements depend on the location and construction; no universal warranty period is assumed."
        },
        {
          title: "Evidence and records",
          detail: "Keep the approved scope, design changes, inspection records and product information required for acceptance. Confirm who supplies each document and who assesses compliance."
        }
      ]}
      processSteps={[
        {
          step: "Review the requirement",
          detail: "Identify the relevant order, report or proposed change and obtain advice from the appropriate professionals. Clarify what is required before discussing construction options."
        },
        {
          step: "Develop the scope",
          detail: "Coordinate design, specialist work and interfaces with existing fabric. Heritage constraints and occupied areas may need additional consideration."
        },
        {
          step: "Confirm permission and inspection",
          detail: "Agree approvals, appointments and hold points before work. Define access restrictions, staging and the responsibility for resident or tenant communication."
        },
        {
          step: "Construct to the agreed documents",
          detail: "Use the specified systems and sequence. Refer substitutions and concealed issues for review before proceeding with affected work."
        },
        {
          step: "Close out the defined work",
          detail: "Provide the agreed records and arrange required inspections. Confirm any remaining items with the responsible authority or professional rather than assuming completion of trade work closes an order."
        }
      ]}
      faqs={[
        {
          question: "Does every older building need to meet every current requirement?",
          answer: "The applicable obligations depend on the building, proposed work and any relevant order or approval. Seek project-specific advice from the council, certifier or other appropriate professional. The age of a building alone does not define the upgrade scope."
        },
        {
          question: "Who certifies the completed work?",
          answer: "The required role and documents depend on the approval pathway and type of work. Clarify this before construction, including any engineer, fire or access specialist involvement. Do not assume a builder’s invoice or handover establishes whole-building compliance."
        },
        {
          question: "Can you carry out fire safety upgrades?",
          answer: "Provide the relevant report or order so the proposed building work and required specialist appointments can be discussed. Confirm design, licensing, installation and inspection responsibilities for each system. A general construction scope does not cover every fire-safety service."
        },
        {
          question: "Can the building stay open during upgrades?",
          answer: "That depends on the affected systems, access, temporary protection and work stages. Agree restrictions with the responsible professionals and building manager. Some areas or services may need to be taken out of use while safe alternatives or repairs are established."
        },
        {
          question: "What affects the programme?",
          answer: "Design, approvals, specialist appointments, procurement and inspections can be substantial parts of the programme. Occupancy and heritage constraints may also affect staging. Ask for a scope-specific schedule and clarify which dependencies sit outside the construction contractor’s control."
        },
        {
          question: "How should upgrade quotes be compared?",
          answer: "Compare the same design and acceptance requirements, including specialist trades, access, inspections and reinstatement. Ask about exclusions and provisional allowances. A lower construction price may omit the documents or associated work needed to complete the required upgrade."
        }
      ]}
    />
  );
};

export default ComplianceUpgradesPage;
