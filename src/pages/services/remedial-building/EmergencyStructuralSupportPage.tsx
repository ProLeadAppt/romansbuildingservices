import { ServicePageTemplate } from '@/components/ServicePageTemplate';
import { getSiblingServices } from '@/data/serviceHierarchy';
import { Columns3, ShieldAlert, Wrench, HardHat, FileCheck } from 'lucide-react';

const EmergencyStructuralSupportPage = () => {
  const siblings = getSiblingServices('remedial-building', 'emergency-structural');

  return (
    <ServicePageTemplate
      title="Emergency Structural Support"
      metaTitle="Sydney Emergency Structural Propping & Shoring | Romans"
      metaDescription="Sydney structural support enquiries. Understand engineer-designed temporary works, safe access, monitoring and permanent repair planning."
      heroImage="/gallery/thumbs/romansstone_1575057672_2188064802893944247_2394650725.webp"
      parentService={{ title: 'Remedial Building', href: '/services/remedial-building' }}
      siblingServices={siblings}
      breadcrumbs={[
        { label: 'Services', href: '/services' },
        { label: 'Remedial Building', href: '/services/remedial-building' },
        { label: 'Emergency Structural Support', href: '' },
      ]}
      intro={[
        "A leaning wall, damaged beam or partial collapse can create a risk beyond the visibly damaged area. Keep people clear and call 000 if anyone is in immediate danger. Do not enter the building to inspect it, install props or adjust existing supports yourself.",
        "Temporary structural support requires a site-specific assessment. A structural engineer needs to establish the load paths, condition of the remaining structure, ground or floor bearing capacity and the safe installation sequence. Propping is not a step to improvise before the structure has been assessed.",
        "Contact Romans to discuss the site and the assessed repair requirements. The temporary works scope, required specialists, equipment availability and timing need confirmation. Support systems must be inspected and maintained for their intended use, and their presence alone does not establish that a building can be occupied."
      ]}
      features={[
        {
          icon: ShieldAlert,
          title: "Control access",
          description: "Keep people outside the affected area until the hazards and safe access arrangements have been assessed. Follow emergency-service and authority directions."
        },
        {
          icon: Columns3,
          title: "Engineer-designed support",
          description: "Prop type, capacity, spacing, bearing and restraint depend on the actual structure and loads. Generic prop sizes or rules of thumb are not a safe specification."
        },
        {
          icon: Wrench,
          title: "Wall stability",
          description: "Leaning or damaged walls may require engineered bracing, controlled dismantling or another response. Assessment must consider adjacent structures and public areas as well as the wall itself."
        },
        {
          icon: HardHat,
          title: "Inspection access",
          description: "Safe access for engineers and trades is planned with the temporary works. Installing props does not automatically remove all collapse, electrical or hazardous-material risks."
        },
        {
          icon: FileCheck,
          title: "Documented responsibilities",
          description: "Agree who designs, installs, inspects, monitors and removes the supports. Changes in loading, access or site conditions must be referred back to the responsible professionals."
        }
      ]}
      whatWeUse={[
        {
          title: "Support system selection",
          detail: "An engineer specifies suitable props, shoring, bracing or other support for the site. Capacity depends on configuration and installation conditions, not just a product’s nominal rating."
        },
        {
          title: "Bearing and load paths",
          detail: "Loads transferred by temporary supports must be carried safely through floors, foundations or ground. Spreader arrangements and supporting structure need assessment rather than assumed dimensions."
        },
        {
          title: "Installation sequence",
          detail: "The design should address how support can be installed without exposing workers to uncontrolled collapse or destabilising the remaining structure. Access restrictions form part of the plan."
        },
        {
          title: "Inspection and monitoring",
          detail: "The engineer defines the inspection regime and any movement or load monitoring needed. Weather, impacts, changed loads or signs of movement can require reassessment."
        },
        {
          title: "Removal plan",
          detail: "Support removal is designed around the permanent structure’s verified capacity and readiness to take load. It is not an owner maintenance task or simply the reverse of installation."
        }
      ]}
      processSteps={[
        {
          step: "Establish the safety response",
          detail: "Keep clear of unstable structure and contact emergency services if there is immediate danger. Confirm site restrictions before arranging contractor access."
        },
        {
          step: "Obtain assessment and design",
          detail: "Arrange qualified structural assessment and a temporary works design appropriate to the damage. Confirm who is responsible for design coordination and any required approvals."
        },
        {
          step: "Agree the work scope",
          detail: "Confirm installation, access controls, inspections, hire, monitoring and removal responsibilities in writing. Check equipment and specialist availability before committing to a programme."
        },
        {
          step: "Install and inspect",
          detail: "Qualified personnel install support to the agreed design and sequence. Required inspections and any restrictions are documented; variations need professional review."
        },
        {
          step: "Maintain and remove safely",
          detail: "Follow the specified inspection regime while permanent repairs are planned and carried out. Remove supports only under the approved sequence once the permanent works are ready to take load."
        }
      ]}
      faqs={[
        {
          question: "How long can temporary supports stay in place?",
          answer: "The permitted duration depends on the design, equipment, exposure and inspection regime. Longer use or a change in conditions may require reassessment. Confirm hire costs, monitoring duties and the review date before assuming support can remain indefinitely."
        },
        {
          question: "Who removes the supports?",
          answer: "Removal should be included in the agreed scope and carried out by qualified personnel following the engineer’s sequence. The permanent structure must be confirmed ready to carry the load before temporary support is released."
        },
        {
          question: "Can a partially collapsed wall be supported?",
          answer: "Sometimes temporary support is feasible, but the remaining wall may be unsafe to approach or retain. A qualified assessment determines the response. Do not push, pull, prop or remove parts of the wall while waiting for advice."
        },
        {
          question: "How quickly can you attend?",
          answer: "Call to check current availability and the required specialist response. No fixed attendance time or after-hours service is promised. For immediate danger, move away and call 000 rather than waiting for a building contractor."
        },
        {
          question: "Is emergency propping different from planned construction support?",
          answer: "A damaged structure may have uncertain loads, hidden defects and unsafe access. Those uncertainties need assessment and a suitable design. The urgency does not remove the need for engineered planning, competent installation and appropriate inspections."
        },
        {
          question: "What does structural support cost?",
          answer: "The quote depends on design, access, equipment, installation, inspections, hire duration and removal. Ask which costs are included and what happens if the programme changes. Confirm any insurance contribution directly with the insurer; coverage cannot be assumed."
        }
      ]}
    />
  );
};

export default EmergencyStructuralSupportPage;
