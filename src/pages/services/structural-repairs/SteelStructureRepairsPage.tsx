import { ServicePageTemplate } from '@/components/ServicePageTemplate';
import { getSiblingServices } from '@/data/serviceHierarchy';
import { Search, Wrench, Hammer, ShieldCheck, ClipboardCheck } from 'lucide-react';

const SteelStructureRepairsPage = () => {
  const siblings = getSiblingServices('structural-repairs', 'steel-structure-repairs');
  return (
    <ServicePageTemplate
      title="Steel Structure Repairs"
      metaTitle="Sydney Steel Lintel & Structural Steel Repairs | Romans"
      metaDescription="Sydney steel and lintel repair enquiries. Corrosion assessment, designed replacement or repair, masonry reinstatement and protective detailing."
      heroImage="/gallery/thumbs/romansstone_1700556302_3240823616257706375_2394650725.webp"
      parentService={{ title: 'Structural Repairs', href: '/services/structural-repairs' }}
      siblingServices={siblings}
      breadcrumbs={[
        { label: 'Services', href: '/services' },
        { label: 'Structural Repairs', href: '/services/structural-repairs' },
        { label: 'Steel Structure Repairs', href: '' },
      ]}
      intro={[
        "Steel lintels, beams, connections and wall ties can deteriorate where their protection is compromised. Corrosion may expand and crack surrounding masonry or reduce the steel section. Not every crack near an opening is caused by steel, and visible rust does not establish the full extent of concealed damage.",
        "The assessment considers remaining section, bearings, fixings, load paths and the source of moisture. Some steel may be suitable for treatment or strengthening; other elements need replacement. The repair also needs to address surrounding masonry and any drainage or flashing defects that contributed to deterioration.",
        "Contact Romans to discuss the assessed steel and masonry repair scope. Structural design, specialist fabrication or welding, temporary support and access requirements should be confirmed before work. A wall tie repair and a load-bearing beam replacement require different investigations and methods."
      ]}
      features={[
        {
          icon: Search,
          title: "Condition assessment",
          description: "Inspect the affected element and surrounding structure, with controlled exposure or testing where required. Concealed section loss cannot be measured from external stains alone."
        },
        {
          icon: Wrench,
          title: "Lintel repairs",
          description: "Replacement or strengthening must address the opening, loads, bearings and masonry above. Plan temporary support before disturbing a lintel or its supports."
        },
        {
          icon: Hammer,
          title: "Masonry reinstatement",
          description: "Damaged brick or stone may need local rebuilding after steel work. Match physical properties and mortar compatibility as well as appearance."
        },
        {
          icon: ShieldCheck,
          title: "Corrosion protection",
          description: "Select a protection system for the exposure and detailing. Drainage, flashings and interfaces also matter; painting visible steel alone may leave the moisture source unresolved."
        },
        {
          icon: ClipboardCheck,
          title: "Connections and records",
          description: "Agree engineering and specialist responsibilities, inspection hold points and completion records. Wall ties, anchors and structural connections need verification appropriate to their role."
        }
      ]}
      whatWeUse={[
        {
          title: "Replacement sections",
          detail: "The engineer specifies the steel section, bearing and connections. Galvanised or stainless steel may be considered according to exposure, compatibility and the design rather than a simple indoor/coastal rule."
        },
        {
          title: "Surface treatment",
          detail: "Where retention is feasible, preparation and coatings follow the specified system and condition. Suspect existing coatings and dust hazards require assessment before abrasive work."
        },
        {
          title: "Fixings and wall ties",
          detail: "Tie and anchor materials, embedment and substrate suitability need assessment. Installation should avoid concealed services and damage to retained masonry."
        },
        {
          title: "Flashings and drainage",
          detail: "Water-shedding details should be reviewed where moisture contributed to corrosion. Connections to cavities and existing damp-proof courses depend on the wall construction."
        },
        {
          title: "Temporary works",
          detail: "The repair plan must maintain the required support while steel or masonry is removed. Props and access controls are installed and removed under the agreed designed sequence."
        }
      ]}
      processSteps={[
        {
          step: "Investigate the defect",
          detail: "Assess steel, masonry and moisture paths. Arrange structural advice and any controlled exposure needed to understand the element and its connections."
        },
        {
          step: "Choose repair or replacement",
          detail: "Compare options against required capacity and durability. Confirm fabrication, specialist work, approvals and temporary support in the agreed scope."
        },
        {
          step: "Prepare safe access",
          detail: "Establish the specified support and exclusion areas. Check services and hazards in old coatings or adjacent materials before cutting or preparation."
        },
        {
          step: "Carry out the work",
          detail: "Follow the design for steel, connections and masonry reinstatement. Inspect required stages and refer unexpected section loss or damaged bearings for review."
        },
        {
          step: "Complete protection and records",
          detail: "Finish specified coatings and moisture detailing. Release temporary support only when permitted and provide the agreed inspection and maintenance information."
        }
      ]}
      faqs={[
        {
          question: "Must a rusty lintel be replaced?",
          answer: "Not always. The remaining section, loads, bearing condition and extent of corrosion determine whether treatment, strengthening or replacement is appropriate. Assessment may require controlled exposure. Do not remove surrounding bricks or scrape deeply into the steel to investigate it yourself."
        },
        {
          question: "Why is the brickwork cracking above an opening?",
          answer: "Corrosion expansion is one possible cause, but foundation movement, loading or other defects may produce similar symptoms. Assess the opening and wider structure before choosing the repair. Filling the crack alone may leave an underlying structural or moisture problem untreated."
        },
        {
          question: "Is stainless steel always the best replacement?",
          answer: "Material selection depends on exposure, design, compatibility and available detailing. Stainless and galvanised steel have different uses and limitations. The engineer’s specification should address the whole assembly, including fixings, bearings and moisture control rather than the steel label alone."
        },
        {
          question: "Can cavity wall ties be replaced?",
          answer: "Remedial tie systems may be suitable after assessing the wall construction, substrate and existing ties. The design determines placement and testing requirements. Bulging or unstable masonry may need other work, so tie installation is not an automatic remedy for every wall."
        },
        {
          question: "Can the building remain occupied?",
          answer: "Access and occupancy depend on the affected loads, temporary works, services and work areas. Agree restrictions before installation starts and review them if concealed damage changes the plan. Temporary support does not establish that every nearby room or opening can be used."
        },
        {
          question: "What affects the quote and programme?",
          answer: "Access, controlled exposure, engineering, fabrication, specialist installation and masonry reinstatement affect cost and time. Ask which protection and moisture details are included, and allow for inspection hold points and possible scope changes where concealed steel cannot yet be assessed."
        }
      ]}
    />
  );
};
export default SteelStructureRepairsPage;
