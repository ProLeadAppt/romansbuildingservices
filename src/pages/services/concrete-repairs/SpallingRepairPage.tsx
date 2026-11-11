import { ServicePageTemplate } from '@/components/ServicePageTemplate';
import { getSiblingServices } from '@/data/serviceHierarchy';
import { Layers, Wrench, ShieldCheck, Hammer, FileCheck } from 'lucide-react';

const SpallingRepairPage = () => {
  const siblings = getSiblingServices('concrete-repairs', 'spalling-repair');

  return (
    <ServicePageTemplate
      title="Spalling Concrete Repair"
      metaTitle="Sydney Spalling Concrete Repair | Romans"
      metaDescription="Sydney spalling concrete repair enquiries. Falling-material precautions, assessment of the cause, repair planning and safe access arrangements."
      heroImage="/gallery/thumbs/romansstone_1579724750_2227215093383768825_2394650725.webp"
      parentService={{ title: 'Concrete Repairs', href: '/services/concrete-repairs' }}
      siblingServices={siblings}
      breadcrumbs={[
        { label: 'Services', href: '/services' },
        { label: 'Concrete Repairs', href: '/services/concrete-repairs' },
        { label: 'Spalling Concrete Repair', href: '' },
      ]}
      intro={[
        "Spalling is the breaking away of concrete from a surface. Corroding reinforcement is one possible cause, but impact, fire, material defects and other mechanisms can also be involved. The visible loss of concrete needs assessment before choosing a repair system.",
        "Loose concrete can endanger people beside walls and below slabs, balconies or parapets. Keep people away from the affected area, including the space below it. Do not stand underneath to inspect, tap the surface or remove pieces yourself. Call emergency services where there is immediate danger.",
        "Contact Romans about an assessed spalling repair scope. The work may require safe access, exclusion zones, structural advice and temporary support before controlled removal. The design should address the cause, remaining capacity, repair boundaries and any protection needed after reinstatement."
      ]}
      features={[
        {
          icon: Layers,
          title: "Map the damage",
          description: "Qualified inspection can identify visible and concealed areas of separation. Survey methods must account for falling material and the safety of occupants and public areas."
        },
        {
          icon: Wrench,
          title: "Address the cause",
          description: "Where corrosion is involved, assess steel and surrounding concrete. Other causes need their own repair response; spalling is a symptom rather than a complete diagnosis."
        },
        {
          icon: ShieldCheck,
          title: "Control falling material",
          description: "The work plan may require exclusion areas, containment or other protection. Removing loose material from a loaded element still needs assessment and a safe sequence."
        },
        {
          icon: Hammer,
          title: "Rebuild the section",
          description: "Select suitable concrete repair material and application methods for the geometry and exposure. Overhead and deep repairs can have different support and inspection needs."
        },
        {
          icon: FileCheck,
          title: "Record the repair",
          description: "Agree repair locations, inspections and material records. Include any restrictions or follow-up work so the completion record does not imply unrelated defects were repaired."
        }
      ]}
      whatWeUse={[
        {
          title: "Access and containment",
          detail: "Scaffolds, platforms or other access systems must suit the location and work. Protect routes used by residents and the public rather than relying on a warning sign alone."
        },
        {
          title: "Controlled preparation",
          detail: "Removal limits and equipment depend on the element and design. Avoid damaging retained reinforcement or reducing capacity without the required temporary support."
        },
        {
          title: "Reinforcement works",
          detail: "If corrosion or damage affects steel, the engineer determines what treatment or replacement is needed. A surface patch cannot compensate for unassessed loss of reinforcement."
        },
        {
          title: "Repair mortar or concrete",
          detail: "The specification considers bond, shrinkage, strength, exposure and application orientation. Follow the system’s preparation and curing requirements without assuming one material fits every patch."
        },
        {
          title: "Protective detailing",
          detail: "Water paths, joints and coatings may need attention as part of the repair. Protective finishes should be selected for the diagnosed mechanism and existing substrate."
        }
      ]}
      processSteps={[
        {
          step: "Make the area inaccessible",
          detail: "Keep people clear of loose or overhead material and seek urgent assistance when necessary. Confirm who controls the affected public or shared space."
        },
        {
          step: "Assess the element",
          detail: "Arrange investigation of the cause, extent and structural implications. Confirm access, temporary works and any permissions before the repair starts."
        },
        {
          step: "Prepare under control",
          detail: "Establish the specified containment and support. Qualified personnel remove material under the agreed sequence and refer unexpected deterioration for design review."
        },
        {
          step: "Repair and inspect",
          detail: "Carry out steel and concrete work to the specification, with inspections before concealment. Observe strength and curing requirements before releasing restrictions."
        },
        {
          step: "Finish and review",
          detail: "Complete any specified protection and hand over records and maintenance advice. Arrange further checks where adjacent concrete remains under investigation."
        }
      ]}
      faqs={[
        {
          question: "Is spalling always a structural problem?",
          answer: "The implications depend on the location, depth, cause and role of the affected concrete. Falling pieces can create a safety hazard even where load capacity is not significantly affected. Professional assessment is needed to distinguish those risks."
        },
        {
          question: "Should I remove loose pieces before someone arrives?",
          answer: "Do not chip, pull or tap suspect concrete yourself. Pieces may fall unpredictably or removal may affect the element. Keep people away and arrange appropriate professional help; call emergency services if someone is in immediate danger."
        },
        {
          question: "Can the surface simply be rendered over?",
          answer: "Covering the surface can hide unsound concrete and leave the cause untreated. The scope needs to establish what can safely remain, what requires repair and whether reinforcement is affected before a finish is selected."
        },
        {
          question: "Do balconies need to be closed during repairs?",
          answer: "Access restrictions depend on the assessed condition, loads and work area, including spaces below. Agree restrictions with the responsible professionals and building manager. Do not assume a balcony is safe because damage is only visible on its underside."
        },
        {
          question: "How long does spalling repair take?",
          answer: "Access, extent, support, investigation and curing affect the programme. The visible patching may be only one stage. Ask for a schedule showing inspection points and when affected areas can be reassessed for safe use."
        },
        {
          question: "How is the repair quoted?",
          answer: "The quote should identify access and containment, assessment-related requirements, repair areas, reinforcement work and finishes. Concealed damage can alter the scope. Ask how variations will be agreed rather than relying on a simple area rate."
        }
      ]}
    />
  );
};

export default SpallingRepairPage;
