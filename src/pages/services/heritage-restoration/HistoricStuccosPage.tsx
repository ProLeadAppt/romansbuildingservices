import { ServicePageTemplate } from '@/components/ServicePageTemplate';
import { getSiblingServices } from '@/data/serviceHierarchy';
import { Paintbrush, Layers, History, Droplets } from 'lucide-react';

const HistoricStuccosPage = () => {
  const siblings = getSiblingServices('heritage-restoration', 'historic-stuccos-renders');

  return (
    <ServicePageTemplate
      title="Historic Stuccos & Renders"
      metaTitle="Sydney Historic Lime Render & Stucco | Romans"
      metaDescription="Sydney historic render and stucco repair enquiries. Compatible finishes, retained plasterwork, sample areas and decorative profile repairs."
      heroImage="/gallery/thumbs/romansstone_1574278523_2181528827132774103_2394650725.webp"
      parentService={{ title: 'Heritage Restoration', href: '/services/heritage-restoration' }}
      siblingServices={siblings}
      breadcrumbs={[
        { label: 'Services', href: '/services' },
        { label: 'Heritage Restoration', href: '/services/heritage-restoration' },
        { label: 'Historic Stuccos & Renders', href: '' },
      ]}
      intro={[
        "Historic rendered walls can contain several layers of repairs, paint and decorative work. Cracking or detachment may relate to movement, moisture, salts, substrate condition or incompatible materials. Assess these causes before deciding whether to repair locally or remove larger areas.",
        "Lime-based render can be suitable for some older masonry, but heritage walls do not all share one original mix. Binder, aggregate, strength and permeability should be chosen from the existing fabric and exposure. Removing a hard later render can itself damage a fragile wall.",
        "Contact Romans to discuss flat render, cornices, mouldings and other stucco details. Record surviving profiles and sound original work before choosing the repair. Samples help agree texture and colour, while structural support, hazardous coatings and heritage requirements may need separate assessment."
      ]}
      features={[
        {
          icon: Layers,
          title: "Compatible render system",
          description: "Specify coats and preparation for the substrate and exposure. A standard coat thickness or lime grade does not suit every wall."
        },
        {
          icon: Paintbrush,
          title: "Decorative profiles",
          description: "Templates can help reproduce missing portions of cornices or mouldings. Assess support and retain sound original detail where possible."
        },
        {
          icon: History,
          title: "Period finishes",
          description: "Record texture, tooling and painted layers. Smooth, roughcast or ashlar-marked finishes need different preparation and samples."
        },
        {
          icon: Droplets,
          title: "Moisture behaviour",
          description: "Repair contributing leaks or detailing problems as part of the plan. A vapour-permeable finish does not resolve every damp wall."
        }
      ]}
      whatWeUse={[
        {
          title: "Binder and aggregate",
          detail: "Choose the mix from the existing render, masonry and exposure. Historical analysis or trials may be needed rather than specifying a grade from age alone."
        },
        {
          title: "Reinforcement where specified",
          detail: "Fibre or lath may be appropriate in some systems. Type, compatibility, corrosion resistance and fixing need design; modern substitutes are not automatically equivalent to historic materials."
        },
        {
          title: "Running templates",
          detail: "Templates record a surviving profile for repair. Complex or unsupported decorative work may require specialist fabrication and a designed connection."
        },
        {
          title: "Compatible finishes",
          detail: "Limewash, mineral paint or another finish must suit the substrate and conservation requirements. Test appearance and moisture behaviour before wider application."
        },
        {
          title: "Curing protection",
          detail: "Follow the selected system’s moisture, temperature and protection requirements. Hydraulic and non-hydraulic lime behave differently; a universal weekly schedule cannot establish readiness."
        }
      ]}
      processSteps={[
        {
          step: "Assess and record",
          detail: "Map defects and surviving detail. Check support, moisture and potentially hazardous coatings before disturbing finishes."
        },
        {
          step: "Agree retention and trials",
          detail: "Choose which areas can remain and test removal and replacement methods. Obtain relevant conservation advice and permissions."
        },
        {
          step: "Prepare carefully",
          detail: "Remove only the agreed material using a method that limits damage to the substrate. Review concealed defects and support needs."
        },
        {
          step: "Apply specified repairs",
          detail: "Follow the agreed coat system and profile details, with the required intervals and inspections. Match samples rather than relying on a generic recipe."
        },
        {
          step: "Protect and finish",
          detail: "Allow the specified curing conditions before compatible finishing. Inspect repairs and document maintenance and any unresolved moisture issues."
        }
      ]}
      faqs={[
        {
          question: "Why is the render cracking?",
          answer: "Cracks can reflect movement, poor adhesion, moisture, salts or an incompatible repair, among other causes. Assess the wall before assuming the binder alone is responsible. Loose overhead render needs prompt safety advice and people kept clear."
        },
        {
          question: "How long does lime render work take?",
          answer: "The programme depends on the chosen system, weather, substrate, access and extent of repair. Curing and protection cannot be rushed, but there is no single interval for every coat or building. Ask for a specification-based schedule."
        },
        {
          question: "Can colour and texture be matched?",
          answer: "Samples help compare the proposed finish with the existing work under site conditions. Allow the appropriate drying and curing period before deciding. Weathered surfaces may remain different, so agree the acceptable match rather than an invisible result."
        },
        {
          question: "How are render and stucco different?",
          answer: "The terms vary, but render commonly describes the coating over masonry and stucco often refers to decorative rendered or plastered work. Identify the actual materials, profile and construction rather than choosing a repair from the name alone."
        },
        {
          question: "Can damaged cornices be repaired?",
          answer: "Local repair or a templated replacement may be possible where the remaining material and support allow it. Record the surviving profile and assess fixings before removal. Decorative appearance does not remove the need for structural and safety checks."
        },
        {
          question: "What affects the price?",
          answer: "Access, removal risk, retained detail, substrate repair and profile complexity all matter. The quote should include samples, protection, curing and finishing, plus any specialist advice. A flat wall-area rate may not cover decorative or unstable elements."
        }
      ]}
    />
  );
};

export default HistoricStuccosPage;
