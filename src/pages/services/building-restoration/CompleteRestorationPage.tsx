import { ServicePageTemplate } from '@/components/ServicePageTemplate';
import { getSiblingServices } from '@/data/serviceHierarchy';
import { Building, Layers, Hammer, ClipboardCheck, Eye } from 'lucide-react';

const CompleteRestorationPage = () => {
  const siblings = getSiblingServices('building-restoration', 'complete-restoration');
  return (
    <ServicePageTemplate
      title="Complete Building Restoration"
      metaTitle="Sydney Complete Building Restoration | Romans"
      metaDescription="Sydney building restoration enquiries. Coordinating masonry, facade and structural repairs with a clear scope, access plan and staged inspections."
      heroImage="/gallery/thumbs/romansstone_1451642255_1152781246863726646_2394650725.webp"
      parentService={{ title: 'Building Restoration', href: '/services/building-restoration' }}
      siblingServices={siblings}
      breadcrumbs={[
        { label: 'Services', href: '/services' },
        { label: 'Building Restoration', href: '/services/building-restoration' },
        { label: 'Complete Building Restoration', href: '' },
      ]}
      intro={[
        "A building can have several related defects: open mortar joints, cracked render, corroded lintels, failing copings or movement in a wall. Looking at these together can help identify shared causes and avoid covering up damage before it has been assessed.",
        "A coordinated restoration scope can bring masonry, structural repair, weatherproofing and finishes into one plan. The order matters: access, temporary support, investigation and inspections need to be considered before finishes are reinstated. Some work will require separate specialist design or licensed trades.",
        "Contact Romans to discuss the building and the repairs you have in mind. Agree which work is included, who manages each part, how occupants are affected and what documentation is needed. A combined project can share access costs, but its value depends on the actual scope rather than an assumed percentage saving."
      ]}
      features={[
        {
          icon: Eye,
          title: "Defect survey",
          description: "Map visible defects and identify where closer access or specialist investigation is needed. A survey should distinguish observations from unconfirmed causes."
        },
        {
          icon: Building,
          title: "Facade and masonry",
          description: "Plan brick, stone, pointing, render and decorative repairs around retained material. Use samples to agree compatibility and appearance."
        },
        {
          icon: Hammer,
          title: "Structural priorities",
          description: "Address unstable elements and structural design before cosmetic repairs. Confirm the temporary works and inspection requirements with the responsible engineer."
        },
        {
          icon: Layers,
          title: "Moisture details",
          description: "Consider roof edges, flashings, copings, drainage and openings as well as wall finishes. Coatings alone do not resolve every source of water entry."
        },
        {
          icon: ClipboardCheck,
          title: "Project coordination",
          description: "Agree the programme, point of contact and update arrangements. Confirm contractor and specialist responsibilities in the written scope."
        }
      ]}
      whatWeUse={[
        {
          title: "Coordinated repair documents",
          detail: "Use the defect survey and relevant specialist reports to define the work. Resolve conflicting recommendations before pricing or construction."
        },
        {
          title: "Material samples",
          detail: "Brick, stone, mortar and render samples help set an achievable finish. Heritage advice may be needed before changing original fabric."
        },
        {
          title: "Access and protection",
          detail: "Select access for the loads, tasks and site constraints. Public protection, neighbouring property and occupant routes may need separate permissions or arrangements."
        },
        {
          title: "Written cost allowances",
          detail: "Identify provisional items, exclusions and how concealed damage will be assessed and priced. A fixed total is only meaningful against a defined scope."
        },
        {
          title: "Handover records",
          detail: "Agree photographs, inspection records, maintenance information and any applicable written warranties. Product guarantees and statutory rights have different terms; do not assume a universal duration."
        }
      ]}
      processSteps={[
        {
          step: "Survey the building",
          detail: "Record defects, access limits and immediate safety concerns. Arrange the investigations needed to understand structural and moisture issues."
        },
        {
          step: "Define the scope",
          detail: "Coordinate design, conservation advice and approval checks. Identify dependencies and work that needs separate specialists."
        },
        {
          step: "Agree the contract",
          detail: "Review scope, costs, payment stages, variation procedures and occupancy arrangements before authorising work."
        },
        {
          step: "Repair in sequence",
          detail: "Complete agreed samples, temporary works and repairs with the required inspection hold points. Review concealed defects before extending the scope."
        },
        {
          step: "Inspect and hand over",
          detail: "Check the agreed work, record outstanding items and provide the specified completion information. Confirm any continuing monitoring or maintenance."
        }
      ]}
      faqs={[
        {
          question: "How long does complete restoration take?",
          answer: "Timing depends on investigation, permissions, material sourcing, access and the mix of repairs. Ask for a staged programme with inspection and curing requirements, and review it if concealed defects change the scope."
        },
        {
          question: "Can the building remain occupied?",
          answer: "Occupancy depends on the work, structural condition, dust controls, services and safe access. Confirm restrictions before starting. External scaffolding or temporary support alone does not establish that all rooms can remain in use."
        },
        {
          question: "Who handles approvals?",
          answer: "Check the requirements with the council, certifier or relevant heritage authority. Then agree who prepares and lodges the documents. A contractor scope or consultant recommendation does not itself grant permission to proceed."
        },
        {
          question: "What happens if more damage is found?",
          answer: "The contract should explain how concealed conditions are reported, investigated and priced. Request a clear variation describing the additional work and programme impact before authorising it, subject to any immediate safety response needed."
        },
        {
          question: "Is a combined scope cheaper?",
          answer: "Shared scaffolding, protection and mobilisation can avoid repeated setup, but combining unrelated work may not suit every budget or building. Compare an itemised combined scope with staged options rather than assuming a standard saving."
        },
        {
          question: "How is the restoration priced?",
          answer: "A useful quote separates access, design, repairs, specialist trades and reinstatement, with clear allowances for unknown conditions. The building survey and agreed scope determine the estimate; generic whole-building figures can be misleading."
        }
      ]}
    />
  );
};
export default CompleteRestorationPage;
