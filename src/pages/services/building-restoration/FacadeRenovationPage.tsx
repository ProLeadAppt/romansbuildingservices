import { ServicePageTemplate } from '@/components/ServicePageTemplate';
import { getSiblingServices } from '@/data/serviceHierarchy';
import { Building, Paintbrush, Layers, Wrench, ShieldCheck } from 'lucide-react';

const FacadeRenovationPage = () => {
  const siblings = getSiblingServices('building-restoration', 'facade-renovation');
  return (
    <ServicePageTemplate
      title="Facade Renovation & Repair"
      metaTitle="Sydney Building Facade Renovation | Romans"
      metaDescription="Sydney facade repair enquiries. Brick, stone, render and architectural details, with material matching, safe access and assessed repair methods."
      heroImage="/gallery/thumbs/romansstone_1569273163_2139540821744323162_2394650725.webp"
      parentService={{ title: 'Building Restoration', href: '/services/building-restoration' }}
      siblingServices={siblings}
      breadcrumbs={[
        { label: 'Services', href: '/services' },
        { label: 'Building Restoration', href: '/services/building-restoration' },
        { label: 'Facade Renovation & Repair', href: '' },
      ]}
      intro={[
        "Facade repairs need to consider both the surface and what holds it in place. Cracked masonry, loose render, corroded metal or damaged copings may affect areas above entrances and footpaths. Keep clear of falling material and seek prompt safety advice where elements appear unstable.",
        "Brick replacement, repointing, stone repair and render work each call for different materials and preparation. Assess moisture entry and movement before repairing finishes. Sample areas help establish how new work will sit beside weathered original fabric.",
        "Contact Romans about the facade and its access constraints. Building height, public areas and the extent of work determine what access system and specialist involvement are required. Scaffolding, suspended access and rope access are not interchangeable; capability and arrangements must be confirmed for the project."
      ]}
      features={[
        {
          icon: Building,
          title: "Brick repairs",
          description: "Assess damaged units and mortar joints, then select compatible replacements and pointing. Investigate rust staining rather than simply cleaning it away."
        },
        {
          icon: Paintbrush,
          title: "Render repairs",
          description: "Check adhesion, substrate condition and moisture before deciding what to retain or remove. Select the render from the wall’s properties rather than its age alone."
        },
        {
          icon: Layers,
          title: "Stone repairs",
          description: "Consider retention, local repair and replacement for each element. Stone type, condition, structural role and exposure affect the choice."
        },
        {
          icon: Wrench,
          title: "Architectural details",
          description: "Cornices, sills, parapets and copings need suitable support and weathering details. Record surviving profiles before designing repairs."
        },
        {
          icon: ShieldCheck,
          title: "Protection",
          description: "Specify coatings or water-repellent treatments only where suitable. Consider their effect on appearance, moisture movement and future maintenance."
        }
      ]}
      whatWeUse={[
        {
          title: "Matched masonry",
          detail: "Compare samples for physical compatibility, dimensions, texture and colour. Confirm availability and sourcing rather than assuming workshop or quarry stock."
        },
        {
          title: "Repair mortar and render",
          detail: "Assess existing materials and exposure to select an appropriate mix. Samples and curing conditions help establish the finish; a building date does not specify a lime grade."
        },
        {
          title: "Coating system",
          detail: "Check substrate preparation, application conditions and maintenance requirements. Any manufacturer warranty depends on the actual system and its terms."
        },
        {
          title: "Access design",
          detail: "Choose access for the task, loads and site risks. Qualified access specialists and permissions may be required; confirm who supplies and manages the system."
        },
        {
          title: "Inspection records",
          detail: "Agree structural and heritage review points where relevant. Keep records of concealed repairs before finishes cover them."
        }
      ]}
      processSteps={[
        {
          step: "Map defects",
          detail: "Record accessible damage and identify where close inspection or structural advice is needed. Establish safety restrictions first."
        },
        {
          step: "Design and approve",
          detail: "Agree methods, access, samples and any required permissions. Specify temporary support before removing load-bearing or unstable material."
        },
        {
          step: "Set up safely",
          detail: "Install the agreed access and public protection with appropriate checks. Coordinate entrances, neighbours and occupant routes."
        },
        {
          step: "Repair the fabric",
          detail: "Retain sound material and carry out the specified repair sequence. Review unexpected deterioration before extending removal."
        },
        {
          step: "Finish and inspect",
          detail: "Apply only the specified compatible finishes, complete inspections and agree maintenance. Record any remaining limitations or outstanding work."
        }
      ]}
      faqs={[
        {
          question: "How is existing brick or stone matched?",
          answer: "Compare samples for colour, texture, dimensions and physical properties. New and reclaimed materials both need assessment. An exact match may not be available, so agree an acceptable sample before ordering the full quantity."
        },
        {
          question: "Can you consider multi-storey work?",
          answer: "Provide the height, photographs taken safely and known access restrictions. The repair and access scope must be assessed, with specialist capability and responsibilities confirmed. Do not assume a particular suspended or rope-access arrangement is included."
        },
        {
          question: "What causes facade deterioration?",
          answer: "Moisture, salts, movement, corrosion and incompatible previous repairs can contribute. The same visible crack or stain may have several causes. Investigation should guide the repair rather than assuming a coating or repointing alone will resolve it."
        },
        {
          question: "What about heritage facades?",
          answer: "Check the listing and conservation requirements before changing materials or finishes. The scope may need heritage advice, samples and authority approval. Discuss which repairs retain original fabric and which elements require a designed replacement."
        },
        {
          question: "How long will facade work take?",
          answer: "Height, access, material sourcing, permissions and the amount of concealed damage affect timing. Ask for a programme covering protection, inspections and curing as well as repair work, with an explanation of likely dependencies."
        },
        {
          question: "What affects the cost?",
          answer: "Access and public protection can be significant alongside masonry, render or stone repairs. Ask for an itemised quote with design, specialist work and reinstatement clearly identified. A facade-area rate alone may hide important exclusions."
        }
      ]}
    />
  );
};
export default FacadeRenovationPage;
