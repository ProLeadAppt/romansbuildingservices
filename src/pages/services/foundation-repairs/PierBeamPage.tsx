import { ServicePageTemplate } from '@/components/ServicePageTemplate';
import { getSiblingServices } from '@/data/serviceHierarchy';
import { Landmark, Wrench, Home, Ruler, CheckCircle } from 'lucide-react';

const PierBeamPage = () => {
  const siblings = getSiblingServices('foundation-repairs', 'pier-beam');

  return (
    <ServicePageTemplate
      title="Pier & Beam Foundation Work"
      metaTitle="Sydney Pier & Beam Foundation | Romans"
      metaDescription="Sydney pier and beam repair enquiries. Subfloor assessment, support repairs, timber selection and carefully planned floor reinstatement."
      heroImage="/gallery/thumbs/romansstone_1569273163_2139540821744323162_2394650725.webp"
      parentService={{ title: 'Foundation Repairs', href: '/services/foundation-repairs' }}
      siblingServices={siblings}
      breadcrumbs={[
        { label: 'Services', href: '/services' },
        { label: 'Foundation Repairs', href: '/services/foundation-repairs' },
        { label: 'Pier & Beam Foundation Work', href: '' },
      ]}
      intro={[
        "Raised timber floors rely on a connected system of foundations, piers, bearers, joists and bracing. Deterioration or movement in one part can affect the floor above. Sloping or springy floors, new gaps and sticking doors are reasons for assessment, but do not establish which component needs repair.",
        "A subfloor assessment should consider moisture, drainage, ventilation, timber condition, pests, connections and ground support. Restricted spaces can contain electrical, structural and other hazards. Do not crawl beneath a suspect floor or try to jack it up to investigate.",
        "Contact Romans to discuss pier, bearer and joist repair requirements. The agreed scope should identify structural design, any pest or plumbing specialists, access arrangements and the extent of floor reinstatement. Restumping and re-levelling need a planned support sequence; a level finish cannot be promised before the building’s condition is understood."
      ]}
      features={[
        {
          icon: Landmark,
          title: "Pier and stump repairs",
          description: "Assess existing support condition and ground bearing before selecting replacement piers or stumps. The chosen system must suit the loads, exposure, connections and required bracing."
        },
        {
          icon: Wrench,
          title: "Bearer and joist repairs",
          description: "Damaged timber may need repair, strengthening or replacement. Investigate moisture and pests, and specify structural grade, treatment, connections and compatibility with retained material."
        },
        {
          icon: Ruler,
          title: "Floor level assessment",
          description: "A level survey helps explain the extent of movement. Lifting an older building can affect walls, glazing and services; the target levels and tolerances need agreement based on the assessment."
        },
        {
          icon: Home,
          title: "Temporary support",
          description: "Plan how loads will be carried while existing supports are repaired or replaced. Props and jacks must not be improvised or adjusted by occupants."
        },
        {
          icon: CheckCircle,
          title: "Subfloor conditions",
          description: "Access, ventilation, water and utilities affect both the repair and future maintenance. Arrange specialist inspections where pests, plumbing faults or electrical hazards are suspected."
        }
      ]}
      whatWeUse={[
        {
          title: "Designed piers and footings",
          detail: "Pier dimensions, reinforcement and foundation bearing follow the structural design. Concrete must reach the specified strength before loading; a fixed number of days alone cannot establish readiness."
        },
        {
          title: "Adjustable support systems",
          detail: "Adjustable steel supports may suit some designs, but their capacity, durability and restraint must be assessed. Adjustments change structural loads and should only be made under professional direction."
        },
        {
          title: "Structural timber selection",
          detail: "Timber species, structural grade and treatment must suit the exposure and design. H3 treatment is for above-ground exposure, not ground contact. Ground-contact applications require an appropriate higher hazard class and suitable detailing."
        },
        {
          title: "Retained heritage timber",
          detail: "Consider repair and retention where feasible. Replacement timber and connection details should be selected for structural performance and compatibility, with heritage advice where the building or work requires it."
        },
        {
          title: "Lifting and monitoring plan",
          detail: "Any lifting requires a site-specific sequence addressing load paths, temporary support and effects on walls and services. Generic jacking increments or a standard bay-per-day rate are not a safe plan."
        },
        {
          title: "Survey and inspection records",
          detail: "Record existing levels and relevant defects before work. Agree inspection stages and final acceptance criteria so the handover distinguishes structural repair from any separate cosmetic reinstatement."
        }
      ]}
      processSteps={[
        {
          step: "Assess the floor system",
          detail: "Arrange a safe inspection and level survey. Identify damaged supports, moisture or pest issues and any services that could be affected. Do not enter an unsafe subfloor for photographs."
        },
        {
          step: "Design and scope the repairs",
          detail: "Obtain the structural advice and any approval checks needed. Agree replacement or strengthening details, temporary support, specialist involvement and the limits of re-levelling."
        },
        {
          step: "Prepare access and services",
          detail: "Confirm access, protection of finishes and occupancy restrictions. Relevant qualified trades assess affected services before lifting or changing support arrangements."
        },
        {
          step: "Repair to the planned sequence",
          detail: "Qualified personnel follow the temporary works and repair design. Inspections and concrete-strength requirements must be satisfied before transferring loads onto new work."
        },
        {
          step: "Inspect and hand over",
          detail: "Check the completed supports, connections and levels against the agreed requirements. Review any movement or damage to finishes, and document maintenance and monitoring recommendations."
        }
      ]}
      faqs={[
        {
          question: "How do I know if piers or stumps need repair?",
          answer: "Sloping or springy floors, gaps and sticking doors can indicate a problem, but several components may be involved. Arrange a safe assessment rather than entering the subfloor yourself. Sudden movement or an unstable floor requires prompt professional safety advice."
        },
        {
          question: "Which type of replacement pier is best?",
          answer: "There is no universal best option. Loads, soil conditions, exposure, bracing and access affect the choice between concrete, steel or another designed support. The assessment should explain the recommended system and any specialist installation or maintenance requirements."
        },
        {
          question: "How long does restumping take?",
          answer: "The programme depends on the number and condition of supports, subfloor access, required design, concrete-strength checks and any concealed timber or service defects. Ask for a site-specific schedule and clarify what could change it during the work."
        },
        {
          question: "Can re-levelling damage walls or services?",
          answer: "Changing floor levels can affect walls, doors, windows, plumbing and other services. The proposed lifting sequence and achievable levels must be assessed beforehand. Agree how existing defects will be recorded and which repairs to finishes are included in the quote."
        },
        {
          question: "Can we stay in the house during the work?",
          answer: "Occupancy depends on the structural condition, work sequence, access and service interruptions. The responsible professionals should confirm restrictions before work starts and review them if conditions change. Do not assume temporary supports make every part of the house safe to use."
        },
        {
          question: "What does pier and beam repair cost?",
          answer: "Cost depends on investigation, design, access, support replacements, timber repairs and any specialist trades. A price per pier excludes many possible project costs. Request a written quote that identifies reinstatement, temporary works and allowances for concealed damage."
        }
      ]}
    />
  );
};

export default PierBeamPage;
