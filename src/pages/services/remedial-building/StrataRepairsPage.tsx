import { ServicePageTemplate } from '@/components/ServicePageTemplate';
import { getSiblingServices } from '@/data/serviceHierarchy';
import { Building, Users, FileCheck, Wrench, ClipboardList } from 'lucide-react';

const StrataRepairsPage = () => {
  const siblings = getSiblingServices('remedial-building', 'strata-repairs');

  return (
    <ServicePageTemplate
      title="Strata Building Repairs"
      metaTitle="Sydney Strata Building Repairs | Romans"
      metaDescription="Sydney strata building repair enquiries. Clear scopes, access planning, resident communication and documentation for masonry and concrete repairs."
      heroImage="/gallery/thumbs/romansstone_1574104761_2180071211265247711_2394650725.webp"
      parentService={{ title: 'Remedial Building', href: '/services/remedial-building' }}
      siblingServices={siblings}
      breadcrumbs={[
        { label: 'Services', href: '/services' },
        { label: 'Remedial Building', href: '/services/remedial-building' },
        { label: 'Strata Building Repairs', href: '' },
      ]}
      intro={[
        "Strata repairs need a clear scope and agreement about who can authorise the work. Common property boundaries, access through lots and responsibility for particular defects should be checked against the scheme’s records and relevant advice rather than assumed from the visible location.",
        "Masonry, concrete, balcony and facade work can affect residents, parking and shared routes. Engineering, temporary support, dust controls and service interruptions need to be considered alongside the construction method. Staging helps only where the assessed risks and available access allow it.",
        "Contact Romans with the engineer report, repair locations and building access information to discuss the proposed scope. Agree contractor and specialist responsibilities, quote inclusions, communication and required handover records before work is approved. No particular management-company relationship or uninterrupted building use is assumed."
      ]}
      features={[
        {
          icon: Building,
          title: "Defined repair locations",
          description: "Identify defects by area or drawing reference so quotations can be compared. Clarify whether investigation, design and associated trades are included or separate."
        },
        {
          icon: Users,
          title: "Resident access",
          description: "Plan affected routes, balconies, parking and service interruptions. Safety restrictions may limit normal use; any alternative arrangements need agreement with the building manager."
        },
        {
          icon: FileCheck,
          title: "Decision-ready quotes",
          description: "A written quote should show the scope, exclusions, allowances and programme assumptions. The scheme determines the required approval process and authority to instruct the contractor."
        },
        {
          icon: Wrench,
          title: "Coordinated trades",
          description: "Concrete and masonry repairs may connect with waterproofing, plumbing, electrical or painting work. Confirm the appointed specialists and responsibility for interfaces before scheduling."
        },
        {
          icon: ClipboardList,
          title: "Maintenance records",
          description: "Inspection and repair records can help future maintenance planning. A construction quote is not itself a complete capital works plan or a professional condition assessment of the whole building."
        }
      ]}
      whatWeUse={[
        {
          title: "Engineer-defined scope",
          detail: "Use the relevant repair specification and clarify gaps before pricing. Confirm who provides design, temporary works and required inspections for the particular building."
        },
        {
          title: "Compatible repair systems",
          detail: "Materials must suit the substrate, exposure and specification. Any warranty is governed by its written terms and installation conditions; no automatic transferable duration is promised."
        },
        {
          title: "Staging plan",
          detail: "Sequence work around safe access and structural requirements. Parking, balconies or shared areas may need closure; do not assume all residents can retain normal access throughout."
        },
        {
          title: "Communication plan",
          detail: "Agree who sends notices, required lead times, contacts and how changes are communicated. Access permissions and residents’ needs should be addressed before entering affected areas."
        },
        {
          title: "Handover records",
          detail: "Define the photographs, inspection documents, maintenance information and applicable warranty records required. Confirm which documents come from the contractor and which from separate professionals."
        }
      ]}
      processSteps={[
        {
          step: "Review scope and authority",
          detail: "Confirm the proposed repair and the party authorised to instruct work. Review available reports, access constraints and any urgent safety issues."
        },
        {
          step: "Clarify quote inclusions",
          detail: "Identify investigation, design, specialist trades and reinstatement. Make provisional items and possible concealed-condition changes clear for decision-makers."
        },
        {
          step: "Plan access and communication",
          detail: "Agree staging, restrictions, notices and service interruptions with the responsible building representative. Arrange any permissions or professional inspections required."
        },
        {
          step: "Carry out and record repairs",
          detail: "Follow the specification and inspection hold points. Keep the authorised contact informed of material changes and obtain the required agreement before varying the scope."
        },
        {
          step: "Complete and hand over",
          detail: "Review the agreed works, documents and remaining items. Provide maintenance information and clarify any ongoing inspection, warranty or access restrictions."
        }
      ]}
      faqs={[
        {
          question: "Can a strata manager request a quote?",
          answer: "Yes, contact Romans with the available report, location and access details to discuss the repair scope. Confirm who can authorise investigations and construction, and whether the scheme needs separate engineering or other advice before obtaining comparable quotes."
        },
        {
          question: "What information helps an owners corporation compare quotes?",
          answer: "Provide the same defect schedule, design and access assumptions to each contractor. Compare exclusions, specialist appointments, inspections and reinstatement as well as price. Ask how concealed damage and variations will be assessed and approved during the work."
        },
        {
          question: "Will residents keep access to balconies and parking?",
          answer: "Access depends on safety, temporary works and the repair sequence. Some areas may need closure, including spaces below overhead work. Agree restrictions and alternatives before starting rather than assuming staged work guarantees continuous use of every space."
        },
        {
          question: "Can all associated trades be included?",
          answer: "Discuss the required scope and confirm which work Romans can undertake and which specialists must be appointed. The quote should identify responsibility for waterproofing, services and finishes, including coordination and any separate design or inspection requirements."
        },
        {
          question: "How are budget and approval decisions handled?",
          answer: "The owners corporation and its authorised advisers determine their approval and funding arrangements. The construction quote should make scope, allowances and payment terms clear. Do not rely on a contractor webpage to establish voting, levy or legal requirements."
        },
        {
          question: "What records should we receive?",
          answer: "Agree records before appointment: repair locations, relevant photographs, inspections, materials, maintenance advice and applicable written warranty terms. Some certificates must come from separate professionals. The handover should identify unresolved items rather than imply that the whole building has been certified."
        }
      ]}
    />
  );
};

export default StrataRepairsPage;
