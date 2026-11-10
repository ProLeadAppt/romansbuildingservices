import { ServicePageTemplate } from '@/components/ServicePageTemplate';
import { getSiblingServices } from '@/data/serviceHierarchy';
import { Flame, Layers, Hammer, Paintbrush, ShieldCheck } from 'lucide-react';

const InteriorRestorationPage = () => {
  const siblings = getSiblingServices('building-restoration', 'interior-restoration');
  return (
    <ServicePageTemplate
      title="Interior Restoration"
      metaTitle="Sydney Interior Masonry Restoration | Romans"
      metaDescription="Sydney interior masonry restoration enquiries. Fireplaces, exposed brick and stone features with material assessment and a planned protection scope."
      heroImage="/gallery/thumbs/romansstone_1451942270_1155297957273885284_2394650725.webp"
      parentService={{ title: 'Building Restoration', href: '/services/building-restoration' }}
      siblingServices={siblings}
      breadcrumbs={[
        { label: 'Services', href: '/services' },
        { label: 'Building Restoration', href: '/services/building-restoration' },
        { label: 'Interior Restoration', href: '' },
      ]}
      intro={[
        "Interior brick, stone and plaster can reveal a building’s history, but removing a later finish is not always the right conservation choice. Paint or plaster may be significant, conceal damaged material or help the wall perform. Assess the feature and proposed finish before stripping it.",
        "Romans can discuss repairs to interior masonry, fireplace surrounds, stone features and exposed brick. The scope may involve compatible pointing, local replacement or structural advice. Restoring the appearance of a fireplace does not confirm that its flue, hearth or appliance is safe to use.",
        "Work inside occupied buildings needs careful planning for dust, fumes, noise, services and room access. Older coatings or materials may contain lead or asbestos. Agree any testing, specialist removal, containment and occupancy restrictions before work begins; simple dust sheets do not control every hazard."
      ]}
      features={[
        {
          icon: Flame,
          title: "Fireplace surrounds",
          description: "Assess stone, joints and support before repair. Operational fire safety and flue or appliance work require the appropriate separate assessment."
        },
        {
          icon: Layers,
          title: "Exposed brick",
          description: "Test whether finishes can be removed without unacceptable damage. Retain sound original brick and select compatible pointing."
        },
        {
          icon: Hammer,
          title: "Internal structural work",
          description: "Load-bearing walls and chimney breasts need structural assessment before removal or alteration. Temporary support may be required."
        },
        {
          icon: Paintbrush,
          title: "Stone features",
          description: "Record tooling, profiles and defects in arches, columns or decorative work. Select repair methods for the material and its role."
        },
        {
          icon: ShieldCheck,
          title: "Surface protection",
          description: "A sealer can change colour, sheen and moisture behaviour. Test compatibility and decide whether treatment is needed at all."
        }
      ]}
      whatWeUse={[
        {
          title: "Protection and access plan",
          detail: "Separate the work zone, protect retained finishes and plan safe access. Dust and fume controls must suit the actual task and identified hazards."
        },
        {
          title: "Cleaning and stripping trials",
          detail: "Select products after identifying the coating and substrate. Follow product instructions, including any neutralisation requirements; avoid a universal chemical recipe."
        },
        {
          title: "Compatible mortar",
          detail: "Assess the existing masonry and mortar before selecting a replacement. Match performance as well as colour and joint profile."
        },
        {
          title: "Replacement stone",
          detail: "Select sound material with compatible physical properties and an agreed finish. Availability and matching limits should be checked before fabrication."
        },
        {
          title: "Hazard controls",
          detail: "Assess silica dust, lead paint, asbestos and other risks before disturbance. Qualified specialists may be needed; an extractor class alone is not a complete control plan."
        }
      ]}
      processSteps={[
        {
          step: "Assess the feature",
          detail: "Record condition, significance and intended use. Identify structural questions and potentially hazardous materials before testing or opening up."
        },
        {
          step: "Agree samples and scope",
          detail: "Trial the proposed cleaning or finish where appropriate. Confirm what can be retained, matching limits and any specialist appointments."
        },
        {
          step: "Prepare the work area",
          detail: "Put the assessed protection and controls in place. Confirm room closures, service restrictions and safe occupant routes."
        },
        {
          step: "Carry out repairs",
          detail: "Follow the selected product and repair specifications. Stop affected work for review if concealed damage or suspect material is uncovered."
        },
        {
          step: "Clean and hand over",
          detail: "Complete the required cleanup and checks before releasing the work area. Record maintenance advice and any separate fireplace or structural assessment still needed."
        }
      ]}
      faqs={[
        {
          question: "Can a stone fireplace be restored?",
          answer: "Discuss the damaged surround, hearth and intended use with the assessment. Local stone repair or replacement may be possible. Masonry restoration alone does not certify the chimney, flue or heating appliance for operation."
        },
        {
          question: "How is disruption managed?",
          answer: "Agree work zones, protection, dust and fume controls, access and cleanup before starting. Occupancy depends on the assessed hazards and task. Do not assume adjacent rooms can be used each evening or that the work is dust-free."
        },
        {
          question: "Can painted brick be exposed?",
          answer: "A trial can show whether the coating can be removed without damaging the brick. Check for hazardous paint and conservation requirements first. Some finishes or fragile surfaces are better retained rather than stripped for appearance."
        },
        {
          question: "Should exposed brick be sealed?",
          answer: "Not always. Investigate dusting or moisture before choosing a treatment. Any proposed product should be tested for colour, sheen, vapour behaviour and compatibility; a breathable label does not guarantee an unchanged appearance or suitability."
        },
        {
          question: "How long will interior work take?",
          answer: "Access, protection, material sourcing, stripping trials and curing affect timing. Hazardous-material findings or concealed structural damage can change the programme. Request a scope-specific schedule and agree when rooms can be returned to use."
        },
        {
          question: "What affects the price?",
          answer: "Repair extent, surface preparation, containment, specialist work and reinstatement all affect cost. Ask for a written quote separating these items and identifying exclusions. A fireplace or wall-area price alone does not describe the whole job."
        }
      ]}
    />
  );
};
export default InteriorRestorationPage;
