import { ServicePageTemplate } from '@/components/ServicePageTemplate';
import { getSiblingServices } from '@/data/serviceHierarchy';
import { Building, ShieldCheck, FileCheck, Wrench, Scale } from 'lucide-react';

const HistoricUpgradesPage = () => {
  const siblings = getSiblingServices('building-restoration', 'historic-upgrades');
  return (
    <ServicePageTemplate
      title="Historic Building Upgrades"
      metaTitle="Sydney Historic Building Upgrades | Romans"
      metaDescription="Sydney historic building upgrade enquiries. Coordinating structural repair, conservation advice and project-specific compliance requirements."
      heroImage="/gallery/thumbs/romansstone_1574278523_2181528827132774103_2394650725.webp"
      parentService={{ title: 'Building Restoration', href: '/services/building-restoration' }}
      siblingServices={siblings}
      breadcrumbs={[
        { label: 'Services', href: '/services' },
        { label: 'Building Restoration', href: '/services/building-restoration' },
        { label: 'Historic Building Upgrades', href: '' },
      ]}
      intro={[
        "A proposed change of use or alteration can raise questions about an older building’s structure, fire safety, access and services. Its age alone does not establish that every part must be upgraded. The applicable requirements depend on the proposal, existing conditions and approval pathway.",
        "Historic upgrades balance required performance with the significance of retained fabric. Structural strengthening, new connections or altered openings may be options, but the design must consider the whole building. Concealing a reinforcement system does not automatically make it compatible with heritage material or sufficient for compliance.",
        "Contact Romans to discuss the building repair work within a professionally designed upgrade. Confirm which specialists are needed, including structural, fire, access or heritage advisers, and who is responsible for design, construction and certification. No particular seismic, fire or accessibility outcome can be promised before that scope is established."
      ]}
      features={[
        {
          icon: Building,
          title: "Structural assessment",
          description: "Establish existing capacity and the demands of the proposed use before selecting reinforcement or alterations."
        },
        {
          icon: ShieldCheck,
          title: "Stability and connections",
          description: "Wall, floor and roof connections may need assessment. Any seismic strengthening must be designed for the building, not reduced to a standard anchor detail."
        },
        {
          icon: Scale,
          title: "Compliance coordination",
          description: "A certifier and relevant specialists identify applicable requirements. A repair contractor cannot establish whole-building compliance from one product or trade scope."
        },
        {
          icon: Wrench,
          title: "Adaptive reuse",
          description: "Changes of use can affect loads, fire safety, access and services. Coordinate these issues before openings or finishes are altered."
        },
        {
          icon: FileCheck,
          title: "Conservation advice",
          description: "Identify significant fabric and consider options with minimal necessary change. Authority approval and consultant advice have different roles."
        }
      ]}
      whatWeUse={[
        {
          title: "Designed reinforcement",
          detail: "Steel, masonry reinforcement or other systems need design for load paths, connections and the existing material. Visibility is only one selection factor."
        },
        {
          title: "Composite strengthening",
          detail: "Fibre-reinforced systems may suit some substrates, but require specialist design, preparation and consideration of fire, moisture and durability. They are not universal heritage solutions."
        },
        {
          title: "Fire protection systems",
          detail: "Fire performance depends on the complete tested or assessed system, including junctions and penetrations. A lining or paint alone does not establish a required fire rating."
        },
        {
          title: "Conservation details",
          detail: "Drawings and samples should show proposed changes and how retained fabric is protected. Document any agreed loss or alteration of significant material."
        },
        {
          title: "Approval and inspection plan",
          detail: "Confirm the required applications, professional appointments and inspection evidence. The relevant authority or certifier determines the approval and certification pathway."
        }
      ]}
      processSteps={[
        {
          step: "Define the proposal",
          detail: "Clarify the intended use and alterations, then assess existing conditions and significance."
        },
        {
          step: "Coordinate design",
          detail: "Resolve structural, fire, access and heritage requirements with the appropriate professionals before agreeing construction methods."
        },
        {
          step: "Confirm approvals",
          detail: "Check the applicable pathway and obtain required permissions. Do not assume a standard consent type or processing period."
        },
        {
          step: "Carry out agreed work",
          detail: "Follow the approved design and protection plan, with specialist installation and inspections where required."
        },
        {
          step: "Review and document",
          detail: "Complete required inspections and provide records for the relevant certifier or authority. Reinstate finishes as agreed and identify any outstanding requirements."
        }
      ]}
      faqs={[
        {
          question: "Can an old building meet new requirements?",
          answer: "Options depend on the existing building, proposed use and applicable rules. Qualified advisers should assess feasible solutions and conservation impacts. Neither full compliance nor an unchanged appearance can be guaranteed before design and approval review."
        },
        {
          question: "Does every upgrade need heritage approval?",
          answer: "The property’s listing, conservation controls and proposed work determine the requirements. Check with the council or relevant heritage authority before proceeding. A consultant’s support does not replace any formal consent or exemption determination needed."
        },
        {
          question: "What does adaptive reuse involve?",
          answer: "Adaptive reuse gives an existing building a different purpose. That may change loading, fire, access and service requirements. Establish the proposed use early so specialists can coordinate the design and identify the work needed."
        },
        {
          question: "Can reinforcement be concealed?",
          answer: "Sometimes, but concealed work can still affect significant fabric, moisture behaviour and future inspection. Compare options with the engineer and heritage adviser. The repair must meet its design purpose rather than simply remain out of sight."
        },
        {
          question: "How long will an upgrade take?",
          answer: "Design coordination, approvals, specialist availability and the construction scope determine timing. Ask for a staged programme that includes investigations and inspections. A small visible alteration may depend on substantial work elsewhere in the building."
        },
        {
          question: "What affects the upgrade cost?",
          answer: "Investigation, design, access, specialist systems and reinstatement all contribute. Request a quote against a coordinated scope, identifying excluded professional fees and approvals. Generic percentages or examples cannot establish the cost of your proposal."
        }
      ]}
    />
  );
};
export default HistoricUpgradesPage;
