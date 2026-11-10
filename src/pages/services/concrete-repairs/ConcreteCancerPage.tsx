import { ServicePageTemplate } from '@/components/ServicePageTemplate';
import { getSiblingServices } from '@/data/serviceHierarchy';
import { Search, Wrench, Layers, ShieldCheck, FileCheck } from 'lucide-react';

const ConcreteCancerPage = () => {
  const siblings = getSiblingServices('concrete-repairs', 'concrete-cancer');

  return (
    <ServicePageTemplate
      title="Concrete Cancer Treatment"
      metaTitle="Sydney Concrete Cancer Treatment | Romans"
      metaDescription="Sydney concrete cancer repair enquiries. Corrosion investigation, reinforcement assessment and designed concrete repairs with maintenance planning."
      heroImage="/gallery/thumbs/romansstone_1574104761_2180071211265247711_2394650725.webp"
      parentService={{ title: 'Concrete Repairs', href: '/services/concrete-repairs' }}
      siblingServices={siblings}
      breadcrumbs={[
        { label: 'Services', href: '/services' },
        { label: 'Concrete Repairs', href: '/services/concrete-repairs' },
        { label: 'Concrete Cancer Treatment', href: '' },
      ]}
      intro={[
        "Concrete cancer is a common name for deterioration associated with corrosion of steel reinforcement. Carbonation can reduce concrete’s protective alkalinity, while chlorides can disrupt the protection around the steel. With moisture and oxygen present, corrosion can contribute to cracking, rust staining and spalling.",
        "The visible damage may not show the full extent of the problem. A repair assessment can require investigation of concrete condition, cover, carbonation, chlorides and reinforcement loss. The engineer or relevant specialist determines which tests are useful and how they inform repair boundaries.",
        "Contact Romans to discuss an assessed repair scope. Repair may involve concrete removal, reinforcement work and a compatible reinstatement system, with a wider durability strategy where needed. Keep clear of loose or overhead concrete; do not tap or chip suspect areas yourself. Immediate danger requires emergency assistance rather than waiting for a quote."
      ]}
      features={[
        {
          icon: Search,
          title: "Investigate corrosion",
          description: "Testing and controlled inspection help distinguish the cause and extent of deterioration. Staining alone does not measure steel loss or establish remaining structural capacity."
        },
        {
          icon: Wrench,
          title: "Reinforcement assessment",
          description: "The design should address section loss, continuity and any replacement or additional steel. Applying a primer does not restore steel that has been lost."
        },
        {
          icon: Layers,
          title: "Concrete reinstatement",
          description: "Repair materials and application methods depend on the substrate, geometry and exposure. Bond, shrinkage, curing and access are important alongside strength."
        },
        {
          icon: ShieldCheck,
          title: "Durability planning",
          description: "Local patching may leave corrosion risks elsewhere. The assessment should consider surrounding concrete, water paths and any protective measures or specialist treatment required."
        },
        {
          icon: FileCheck,
          title: "Inspection records",
          description: "Agree testing, hold points and completion records before work. A newly finished surface does not itself verify structural capacity or eliminate the need for future inspection."
        }
      ]}
      whatWeUse={[
        {
          title: "Investigation methods",
          detail: "Cover surveys, sampling or other testing may be needed. The relevant specialist defines the investigation; service drawings and safe access are checked before drilling or opening the concrete."
        },
        {
          title: "Reinforcement repair",
          detail: "Cleaning, additional reinforcement and connections follow the designed system. Repair boundaries and any temporary support are established before removal reduces the existing section."
        },
        {
          title: "Compatible repair materials",
          detail: "Mortars or concrete systems must suit the element and exposure. Product selection considers stiffness, shrinkage, bond and application limits, not merely a brand name."
        },
        {
          title: "Protection systems",
          detail: "Coatings or specialist corrosion-control measures may be appropriate after assessment. No single coating suits every cause or replaces necessary structural repair."
        },
        {
          title: "Dust and site controls",
          detail: "Concrete preparation can produce hazardous dust and falling debris. The work plan needs suitable containment, extraction, access controls and protection of occupants and neighbouring areas."
        }
      ]}
      processSteps={[
        {
          step: "Assess hazards",
          detail: "Identify loose material and structural concerns and agree access restrictions. Keep occupants away from suspect areas while professional assessment is arranged."
        },
        {
          step: "Investigate and design",
          detail: "Determine the deterioration mechanism and repair extent. Confirm testing, structural design, temporary works and any specialist responsibilities."
        },
        {
          step: "Prepare the repair",
          detail: "Establish protection and support to the agreed plan. Remove material only within the specified sequence, referring unexpected damage for review."
        },
        {
          step: "Reinstate and inspect",
          detail: "Complete reinforcement and concrete work under the specification. Required inspections take place before concealment and before support or load restrictions are released."
        },
        {
          step: "Protect and maintain",
          detail: "Complete specified protection and provide records and maintenance guidance. Agree any further inspection or monitoring of adjacent concrete."
        }
      ]}
      faqs={[
        {
          question: "Is every patch of spalling concrete concrete cancer?",
          answer: "No. Corrosion can cause spalling, but impact, fire, material defects and other mechanisms can also break concrete. The cause needs investigation because a corrosion-focused repair may not address a different form of damage."
        },
        {
          question: "Can I test the area by tapping it?",
          answer: "Do not tap, chip or pull at suspect concrete, particularly overhead or near a public area. Loose pieces may fall without warning. Keep clear and arrange professional assessment; photographs should only be taken from a safe position."
        },
        {
          question: "Is a surface patch enough?",
          answer: "It depends on the cause and extent. A patch can conceal continuing deterioration if reinforcement and surrounding concrete are not assessed. The repair scope should explain the investigation, any steel work and the plan for the wider affected area."
        },
        {
          question: "Does a coating stop corrosion permanently?",
          answer: "A suitable coating may reduce particular exposure pathways, but it cannot replace missing steel or guarantee corrosion will never recur. The design should address existing contamination, moisture and ongoing maintenance as well as the repaired surface."
        },
        {
          question: "How long does treatment take?",
          answer: "Investigation, safe access, temporary support, repair extent and product curing affect the programme. Occupancy restrictions and specialist testing may add stages. Ask for a site-specific schedule with inspection points rather than relying on a standard treatment duration."
        },
        {
          question: "What affects cost?",
          answer: "Access equipment, investigation, reinforcement loss, concrete removal, reinstatement and protection can all change the cost. Request a written scope and clear concealed-condition allowances. Comparing patch areas alone can overlook important differences in the required repair."
        }
      ]}
    />
  );
};

export default ConcreteCancerPage;
