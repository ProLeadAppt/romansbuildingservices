import { ServicePageTemplate } from '@/components/ServicePageTemplate';
import { getSiblingServices } from '@/data/serviceHierarchy';
import { ArrowDownToLine, Ruler, Home, FileCheck, Shovel } from 'lucide-react';

const UnderpinningPage = () => {
  const siblings = getSiblingServices('foundation-repairs', 'underpinning');

  return (
    <ServicePageTemplate
      title="Foundation Underpinning"
      metaTitle="Sydney Foundation Underpinning | Romans"
      metaDescription="Sydney foundation underpinning enquiries. Assessment-led repair planning, engineering, access considerations and property-specific approvals."
      heroImage="/gallery/thumbs/romansstone_1570002705_2145660669121556728_2394650725.webp"
      parentService={{ title: 'Foundation Repairs', href: '/services/foundation-repairs' }}
      siblingServices={siblings}
      breadcrumbs={[
        { label: 'Services', href: '/services' },
        { label: 'Foundation Repairs', href: '/services/foundation-repairs' },
        { label: 'Foundation Underpinning', href: '' },
      ]}
      intro={[
        "Underpinning strengthens or extends support beneath existing foundations. It may be considered where assessment identifies inadequate bearing or movement that requires foundation work. Cracking, uneven floors and sticking doors can have several causes; those symptoms alone do not establish that underpinning is needed.",
        "A structural engineer, with geotechnical advice where needed, should investigate the building, ground conditions, drainage and movement history before selecting a repair. Options may include changes to drainage, monitoring or foundation strengthening. The right response depends on the cause rather than a standard solution for the building’s age or suburb.",
        "Contact Romans to discuss an assessed foundation repair scope. Mass concrete underpinning, piles and other systems have different access, installation and design requirements. Confirm which work can be undertaken, any specialist contractor involvement, required approvals and the full written scope before proceeding."
      ]}
      features={[
        {
          icon: ArrowDownToLine,
          title: "Foundation strengthening",
          description: "The design defines how new work transfers loads from the existing foundation to suitable support. Excavation dimensions, sequence and temporary works are site-specific engineering decisions."
        },
        {
          icon: Ruler,
          title: "Pile-based options",
          description: "Piles may be considered where ground and access conditions suit. Method selection needs specialist advice about installation effects, services, neighbouring structures and how loads connect to the existing building."
        },
        {
          icon: Home,
          title: "Occupied properties",
          description: "Noise, access, services and structural safety affect whether people can remain in the building. Occupancy arrangements must be assessed rather than assumed from the repair method."
        },
        {
          icon: FileCheck,
          title: "Engineering and approvals",
          description: "Confirm the investigation, design, inspections and completion documentation required. Ask the council or certifier which approval pathway applies before work begins."
        },
        {
          icon: Shovel,
          title: "Restricted access",
          description: "Subfloor height, ventilation, utilities and safe spoil removal can affect feasibility. Tight access is not a reason to proceed without a safe excavation and temporary support plan."
        }
      ]}
      whatWeUse={[
        {
          title: "Investigation records",
          detail: "Movement history, available drawings, drainage findings and foundation observations help define the investigation. Geotechnical specialists determine any soil testing needed to inform the structural design."
        },
        {
          title: "Designed concrete work",
          detail: "Concrete strength, reinforcement, connections and curing requirements follow the engineer’s specification. A generic concrete mix or pit size is not a substitute for a site-specific design."
        },
        {
          title: "Pile systems",
          detail: "Where a pile solution is proposed, the design and specialist installation requirements determine the system, capacity checks and connection to the existing footing. Availability and responsibilities need confirmation."
        },
        {
          title: "Excavation and temporary support",
          detail: "Excavation can destabilise foundations or affect buried services and neighbours. The sequence, exclusion zones and temporary support are planned before ground is disturbed."
        },
        {
          title: "Inspections and completion records",
          detail: "Agree inspection hold points and the required records before work. Some stages need inspection before they are covered; completion documentation should reflect the actual approved scope."
        }
      ]}
      processSteps={[
        {
          step: "Investigate the cause",
          detail: "Arrange structural assessment and any required ground, drainage or service investigations. Consider whether monitoring or another repair is appropriate before committing to underpinning."
        },
        {
          step: "Confirm design and permissions",
          detail: "Obtain the repair design and check approval requirements with the council or certifier. Heritage controls and neighbouring property constraints may also apply; no standard approval timeframe is promised."
        },
        {
          step: "Agree scope and access",
          detail: "Confirm the quote, specialist responsibilities, safe access, excavation management and occupancy arrangements. Identify concealed-condition allowances and decisions that could change the scope."
        },
        {
          step: "Carry out the designed sequence",
          detail: "Qualified personnel follow the specified excavation, support and installation sequence. Required inspections occur before subsequent stages or covering the work. Unexpected conditions need design review."
        },
        {
          step: "Review and reinstate",
          detail: "Confirm the required inspections and any further movement monitoring. Plan masonry and finish repairs around the assessment findings; foundation work does not automatically close existing cracks."
        }
      ]}
      faqs={[
        {
          question: "How do I know if underpinning is needed?",
          answer: "Cracks, sticking doors and sloping floors warrant investigation, but they do not diagnose foundation failure. An engineer considers the movement pattern, ground conditions and building before recommending underpinning, monitoring or another repair. Sudden movement or instability requires prompt safety advice."
        },
        {
          question: "Can I stay in the house during the work?",
          answer: "That depends on structural risk, excavation, access, service interruptions and the planned sequence. Ask the responsible professionals to confirm occupancy restrictions before work starts. Do not assume the house remains safe to occupy because only part of a footing is being repaired."
        },
        {
          question: "How long does underpinning take?",
          answer: "Investigation, engineering, approvals, access and the chosen method all affect the programme. Ground conditions discovered during work can change it. Ask for a project-specific schedule with inspection and curing requirements rather than relying on a generic number of weeks."
        },
        {
          question: "Will underpinning repair the wall cracks?",
          answer: "Underpinning addresses the foundation issue identified in the design; it does not automatically close or repair cracks. The engineer should advise whether movement monitoring is needed and when masonry or finish repairs can proceed. No fixed waiting period suits every building."
        },
        {
          question: "Should nearby trees be removed?",
          answer: "Do not cut roots or remove a tree based on cracks alone. Tree-related moisture changes and other causes need investigation. Seek engineering and arboricultural advice, and check council protections or approval requirements before changing a tree or its root environment."
        },
        {
          question: "What does underpinning cost?",
          answer: "The cost depends on investigation, design, access, ground conditions, the repair extent, specialist installation and approvals. Request a written scope showing inclusions, exclusions and allowances for concealed conditions. A price per pit or pile alone cannot establish the total project cost."
        }
      ]}
    />
  );
};

export default UnderpinningPage;
