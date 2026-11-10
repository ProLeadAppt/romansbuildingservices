import { ServicePageTemplate } from '@/components/ServicePageTemplate';
import { getSiblingServices } from '@/data/serviceHierarchy';
import { Landmark, Hammer, Wrench, ShieldCheck, ClipboardCheck } from 'lucide-react';

const BeamColumnPage = () => {
  const siblings = getSiblingServices('structural-repairs', 'beam-column-restoration');
  return (
    <ServicePageTemplate
      title="Beam & Column Restoration"
      metaTitle="Sydney Beam & Column Repairs | Romans"
      metaDescription="Sydney beam and column repair enquiries. Assessment-led concrete, steel and masonry repair planning with structural design and safe support."
      heroImage="/gallery/thumbs/romansstone_1576440613_2199665757989086550_2394650725.webp"
      parentService={{ title: 'Structural Repairs', href: '/services/structural-repairs' }}
      siblingServices={siblings}
      breadcrumbs={[
        { label: 'Services', href: '/services' },
        { label: 'Structural Repairs', href: '/services/structural-repairs' },
        { label: 'Beam & Column Restoration', href: '' },
      ]}
      intro={[
        "Beams, columns and piers transfer loads through a building. They may be concrete, steel, timber, brick or stone, and they do not all deteriorate in the same way. Cracking, corrosion, crushing, deflection or loss of material needs assessment in relation to the element’s loads and connections.",
        "In reinforced concrete, carbonation or chlorides can reduce the protection around the steel, allowing corrosion where moisture and oxygen are present. Corrosion can contribute to cracking and spalling. Other damage mechanisms are also possible, and surface appearance does not measure remaining structural capacity.",
        "Contact Romans to discuss an engineer-defined repair scope. The assessment may support repair, strengthening or replacement. Required specialist systems, temporary support and inspection stages must be confirmed before removal of damaged material or changes to the load-bearing element."
      ]}
      features={[
        {
          icon: Landmark,
          title: "Concrete element repairs",
          description: "Repair boundaries and reinforcement treatment follow assessment of the concrete and steel. Cutting back a loaded element can reduce its capacity, so temporary support may be needed first."
        },
        {
          icon: Hammer,
          title: "Masonry piers",
          description: "Check the pier, bearing surfaces and connections before removing damaged bricks or stone. Compatible masonry and a designed repair sequence help retain sound original material."
        },
        {
          icon: Wrench,
          title: "Steel and lintels",
          description: "Corrosion, deformation and connections affect whether steel can be repaired or needs replacement. Section choice and protective treatment depend on the design and exposure."
        },
        {
          icon: ShieldCheck,
          title: "Strengthening options",
          description: "External steel, section enlargement or fibre-reinforced systems may be considered by an engineer. Suitability, specialist installation and fire or exposure requirements need confirmation."
        },
        {
          icon: ClipboardCheck,
          title: "Inspection and records",
          description: "Agree hold points, material records and completion documentation. A repaired surface profile alone does not demonstrate that the element carries the required loads."
        }
      ]}
      whatWeUse={[
        {
          title: "Concrete repair materials",
          detail: "Choose materials for the specification, substrate, application orientation and exposure. Bond, shrinkage, stiffness and curing matter alongside compressive strength."
        },
        {
          title: "Reinforcement treatment",
          detail: "The engineer assesses steel loss, continuity and any need for replacement or additional reinforcement. Corrosion treatment must suit the wider repair system and remaining concrete conditions."
        },
        {
          title: "Replacement steel",
          detail: "Steel sections, bearings, connections and corrosion protection are specified for the site. Galvanised and stainless systems have different requirements; neither is a universal replacement rule."
        },
        {
          title: "Strengthening systems",
          detail: "Carbon fibre and other bonded systems need a sound prepared substrate, designed anchorage and suitable protection. Their use and installation responsibilities should be confirmed in the agreed scope."
        },
        {
          title: "Protective finishes",
          detail: "A suitable coating may form part of a durability plan after repairs. It cannot restore lost structural capacity or guarantee a fixed maintenance-free life."
        }
      ]}
      processSteps={[
        {
          step: "Assess condition and loads",
          detail: "Obtain structural assessment and any testing needed to understand the defect. Identify access restrictions and risks from loose material or reduced capacity."
        },
        {
          step: "Design the repair",
          detail: "Confirm repair versus replacement, temporary works and inspection requirements. Check permissions and the required specialist responsibilities before agreeing the construction scope."
        },
        {
          step: "Prepare safe access",
          detail: "Establish the designed support and work area. Protect adjacent structure and services, and arrange any hazardous-material controls before cutting or surface preparation."
        },
        {
          step: "Repair and verify",
          detail: "Follow the specification for removal, reinforcement and reinstatement. Refer unexpected deterioration to the engineer and inspect required stages before covering the work."
        },
        {
          step: "Transfer loads and hand over",
          detail: "Observe specified strength and inspection requirements before releasing support. Provide agreed records and maintenance advice, with any continuing restrictions or monitoring clearly identified."
        }
      ]}
      faqs={[
        {
          question: "Does visible corrosion mean replacement is needed?",
          answer: "Not necessarily. The remaining section, loads, connections and exposure determine the options. A structural assessment should compare repair, strengthening and replacement without relying on a single percentage of visible corrosion or the appearance of the surrounding finish."
        },
        {
          question: "Can concrete beams and columns be repaired?",
          answer: "Repair may be feasible after assessment, but the capacity of the element during and after work must be addressed. Temporary support, reinforcement changes and specialist materials may be required. The proposed scope should explain the intended structural outcome and verification."
        },
        {
          question: "Can you discuss a strata repair scope?",
          answer: "Send the relevant engineer scope, defect locations and access information so the proposed building work can be discussed. Confirm the owners corporation’s authority, contractor responsibilities and required records before work. Resident access and staging need a site-specific plan."
        },
        {
          question: "How long should a repair last?",
          answer: "Durability depends on the original damage, repair design, exposure, workmanship and maintenance. Ask for the proposed inspection and maintenance plan and any written product or workmanship terms. A surface coating does not justify a blanket lifespan promise."
        },
        {
          question: "What affects the programme?",
          answer: "Investigation, design, access equipment, temporary support and material curing can all affect timing. Any specialist system or replacement steel may have procurement requirements. A site-specific programme should identify inspection stages and what happens if concealed damage changes the scope."
        },
        {
          question: "How is beam and column repair priced?",
          answer: "The quote should include access, temporary works, assessment-related requirements, repair materials and reinstatement. Extent of deterioration and specialist involvement can change the cost substantially. Compare written scopes rather than assuming a price per element includes the same work."
        }
      ]}
    />
  );
};
export default BeamColumnPage;
