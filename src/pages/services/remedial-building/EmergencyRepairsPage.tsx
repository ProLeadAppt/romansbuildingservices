import { ServicePageTemplate } from '@/components/ServicePageTemplate';
import { getSiblingServices } from '@/data/serviceHierarchy';
import { Siren, Clock, ShieldAlert, Wrench, Phone } from 'lucide-react';

const EmergencyRepairsPage = () => {
  const siblings = getSiblingServices('remedial-building', 'emergency-repairs');

  return (
    <ServicePageTemplate
      title="Emergency Building Repairs"
      metaTitle="Sydney Emergency Building Repairs | Romans"
      metaDescription="Sydney emergency building repair enquiries. Safety precautions, assessment, temporary works and permanent repair planning, subject to availability."
      heroImage="/gallery/thumbs/romansstone_1576003161_2195996136622601152_2394650725.webp"
      parentService={{ title: 'Remedial Building', href: '/services/remedial-building' }}
      siblingServices={siblings}
      breadcrumbs={[
        { label: 'Services', href: '/services' },
        { label: 'Remedial Building', href: '/services/remedial-building' },
        { label: 'Emergency Building Repairs', href: '' },
      ]}
      intro={[
        "If a building is collapsing, masonry is falling or someone is in immediate danger, move away from the hazard and call 000. Do not enter a damaged building, climb onto a roof or try to remove loose material. For storm or flood assistance in NSW, contact the SES on 132 500. A building repair enquiry is not an emergency-service dispatch.",
        "Storm, fire and vehicle damage can affect parts of a structure that are not visible from outside. Before repairs, the immediate risks, safe access and any temporary support need assessment by appropriately qualified professionals. A structural engineer may need to specify temporary works before a contractor can safely enter or start work.",
        "Contact Romans to discuss the damage and whether we can assist with an assessment and repair scope. Attendance, equipment, specialist involvement and timing must be confirmed for the particular site. Where an insurance claim is involved, check the insurer’s instructions and authority to proceed; a repair quote does not establish coverage."
      ]}
      features={[
        {
          icon: Clock,
          title: "Confirm availability",
          description: "Describe the location and damage when calling 0414 922 276. Do not wait for a contractor response where people are in immediate danger. Attendance and after-hours availability are not guaranteed."
        },
        {
          icon: Siren,
          title: "Make-safe planning",
          description: "The response may include exclusion zones, weather protection or engineered temporary support. The safe method depends on the damaged structure and access; owners should not attempt structural make-safe work themselves."
        },
        {
          icon: ShieldAlert,
          title: "Storm and fire damage",
          description: "Assessment should consider unstable elements, live services and possible hazardous materials. Fire or water exposure can affect concealed structure; surface appearance alone cannot establish safety."
        },
        {
          icon: Wrench,
          title: "Structural repair scope",
          description: "Temporary stabilisation and permanent reconstruction are separate decisions. Establish the cause, extent of damage, required design and approvals before agreeing the permanent works."
        },
        {
          icon: Phone,
          title: "Claim records",
          description: "Keep existing correspondence and photographs taken from a safe location. Agree what reports and quotes are needed with the insurer; technical causation and coverage decisions may require independent specialists."
        }
      ]}
      whatWeUse={[
        {
          title: "Temporary works design",
          detail: "A structural engineer determines the support system, load paths, foundation bearing, installation sequence and inspection requirements where structural stabilisation is needed. The repair team must work within that design."
        },
        {
          title: "Site separation",
          detail: "Barriers, hoarding and access controls are selected for the site risks. Public footpaths and neighbouring properties may require authority involvement. A barrier does not make the damaged structure safe to enter."
        },
        {
          title: "Weather protection",
          detail: "Temporary covering may limit further water entry where it can be installed safely. Roof access, wind conditions and unstable materials must be assessed before anyone works above ground."
        },
        {
          title: "Hazardous-material assessment",
          detail: "Damaged older buildings may contain asbestos or other hazardous materials. Do not disturb suspect debris. Assessment and any removal must be handled by appropriately qualified or licensed specialists as required."
        },
        {
          title: "Repair records",
          detail: "Agree the scope of photographs, observations, design documents and completion records before work begins. Record what was observed separately from any unconfirmed explanation of the damage."
        }
      ]}
      processSteps={[
        {
          step: "Immediate safety",
          detail: "Keep people away and contact emergency services where needed. Follow their access restrictions. Do not return for photographs or belongings until the appropriate professionals confirm safe access."
        },
        {
          step: "Assess and plan",
          detail: "Confirm contractor availability and arrange the relevant building and engineering assessment. Identify hazards, services, temporary works requirements and any authority or insurer instructions before starting."
        },
        {
          step: "Authorise temporary works",
          detail: "Agree a written scope, cost basis and responsibilities. Qualified personnel carry out the specified works with required inspections; changes to the support arrangement need professional review."
        },
        {
          step: "Plan permanent repairs",
          detail: "Investigate the damage and agree the repair design, approvals and written quote. Temporary support may need monitoring while these steps are completed."
        },
        {
          step: "Complete and hand over",
          detail: "Agree inspection and handover requirements for the repair. Access and occupancy decisions must account for all relevant hazards and authority requirements, not just completion of masonry work."
        }
      ]}
      faqs={[
        {
          question: "How fast can you respond?",
          answer: "Call to check current availability and explain the site conditions. We cannot promise an attendance window or after-hours service. If anyone is in immediate danger, move clear and call 000 rather than waiting for a repair enquiry response."
        },
        {
          question: "Can you carry out the permanent repair?",
          answer: "Contact us to discuss the assessed scope. Permanent repair work depends on safe access, the required design, specialist trades and approvals. The written quote should explain the work included and any separate services needed."
        },
        {
          question: "Will insurance cover the damage?",
          answer: "Only your insurer can confirm how the policy applies to the event. Ask about emergency works, evidence requirements, excesses and authority to proceed. Do not assume a contractor assessment or quote means the claim will be accepted."
        },
        {
          question: "What does emergency work cost?",
          answer: "Costs depend on access, the damage, engineering, temporary support, equipment and the duration of any hire or monitoring. Ask for the charging basis and exclusions before authorising work where it is safe to do so."
        },
        {
          question: "Can you provide information for my insurer?",
          answer: "Discuss the documents your insurer requests and which ones the contractor can provide. Engineer reports or specialist investigations may be separate appointments. Agree any direct communication and information sharing with the insurer in advance."
        },
        {
          question: "What if the building is heritage-listed?",
          answer: "Emergency safety and heritage requirements both need attention. Follow emergency-service directions and seek advice from the council or relevant heritage authority about the works proposed. An emergency does not establish a blanket exemption for subsequent demolition or permanent repairs."
        }
      ]}
    />
  );
};

export default EmergencyRepairsPage;
