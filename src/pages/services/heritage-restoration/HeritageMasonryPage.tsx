import { ServicePageTemplate } from '@/components/ServicePageTemplate';
import { getSiblingServices } from '@/data/serviceHierarchy';
import { Landmark, ScrollText, Hammer, ShieldCheck } from 'lucide-react';

const HeritageMasonryPage = () => {
  const siblings = getSiblingServices('heritage-restoration', 'heritage-masonry');

  return (
    <ServicePageTemplate
      title="Heritage Masonry Restoration"
      metaTitle="Sydney Heritage Masonry Restoration | Romans"
      metaDescription="Sydney heritage masonry restoration enquiries. Compatible repairs, retained original fabric, material samples and conservation planning."
      heroImage="/gallery/thumbs/romansstone_1570002705_2145660669121556728_2394650725.webp"
      parentService={{ title: 'Heritage Restoration', href: '/services/heritage-restoration' }}
      siblingServices={siblings}
      breadcrumbs={[
        { label: 'Services', href: '/services' },
        { label: 'Heritage Restoration', href: '/services/heritage-restoration' },
        { label: 'Heritage Masonry Restoration', href: '' },
      ]}
      intro={[
        "Heritage masonry repair begins with understanding the existing wall: its stone or brick, mortar, construction, moisture behaviour and previous alterations. Not every old wall uses the same materials, and a modern-looking patch is not enough on its own to diagnose the cause of damage.",
        "The aim is to retain sound fabric and make necessary repairs compatible with what remains. This can involve local masonry replacement, repointing, stone repairs or conservation of decorative details. Traditional methods may be appropriate, but the method should follow the building’s needs and significance rather than a blanket rule.",
        "Contact Romans about the masonry work you are considering. Share available reports and listing information so the assessment can identify material trials, structural input and approval checks. Contractor documents, heritage advice and formal authority consent have different roles in the project."
      ]}
      features={[
        {
          icon: Landmark,
          title: "Condition and significance",
          description: "Identify sound original material, defects and significant details before deciding what to remove or replace."
        },
        {
          icon: ScrollText,
          title: "Repair documentation",
          description: "Agree the scope, materials, methods and records required for the property and any relevant approval process."
        },
        {
          icon: Hammer,
          title: "Compatible craft",
          description: "Match joint profiles, tooling and bond patterns where appropriate, while selecting materials for performance as well as appearance."
        },
        {
          icon: ShieldCheck,
          title: "Permission checks",
          description: "Confirm listing controls and the required pathway with the council or relevant heritage authority before work starts."
        }
      ]}
      whatWeUse={[
        {
          title: "Mortar analysis and samples",
          detail: "Inspect existing mortar and use laboratory advice where needed. Binder and aggregate selection should respond to the wall and exposure, not only its era."
        },
        {
          title: "Matched brick",
          detail: "New or reclaimed units need suitable dimensions, condition and physical properties. Sample approval does not guarantee supply or an invisible repair."
        },
        {
          title: "Replacement stone",
          detail: "Assess grain, bedding, strength and moisture behaviour alongside colour and tooling. Retention or local repair may avoid unnecessary replacement."
        },
        {
          title: "Designed metal connections",
          detail: "Cramps, ties and reinforcement need appropriate material selection and detailing for the exposure. Stainless steel also requires suitable specification and is not a lifetime guarantee."
        },
        {
          title: "Pointing and curing tools",
          detail: "Choose preparation and finishing tools to protect retained fabric. Hydraulic lime can set through hydration as well as carbonation; curing and protection depend on the specified mix."
        }
      ]}
      processSteps={[
        {
          step: "Survey and record",
          detail: "Assess condition, construction and previous work. Identify structural safety concerns and any investigation needed before a conservation scope can be set."
        },
        {
          step: "Define conservation requirements",
          detail: "Check listing and approval needs, then agree the extent of repair and the responsible advisers."
        },
        {
          step: "Trial materials",
          detail: "Review sample mortar, brick or stone in context. Allow the specified trial period before deciding on wider work."
        },
        {
          step: "Repair selectively",
          detail: "Follow the agreed removal and support sequence. Preserve sound material and seek review where concealed conditions differ from the assessment."
        },
        {
          step: "Protect and document",
          detail: "Provide specified curing protection and completion records. Agree maintenance and any further monitoring with the relevant adviser."
        }
      ]}
      faqs={[
        {
          question: "Can I enquire about a listed building?",
          answer: "Yes. Include the listing details, photographs taken safely and any existing consultant report. The proposed scope should establish which masonry work is suitable and what specialist advice or permissions are needed before construction."
        },
        {
          question: "Why does mortar compatibility matter?",
          answer: "Mortar affects moisture movement and how loads and movement are accommodated. A mix that is too strong or otherwise incompatible can damage softer masonry. Assessment should establish an appropriate repair rather than impose a universal cement or lime rule."
        },
        {
          question: "Who prepares the heritage application?",
          answer: "Confirm the authority’s requirements and agree which documents the contractor, architect or heritage adviser will prepare. A methodology statement may support an application, but it does not itself establish approval or replace any required professional report."
        },
        {
          question: "How does conservation differ from a cosmetic patch?",
          answer: "Conservation considers significance, retained material, causes of damage and compatibility, as well as appearance. A small local repair may be the right conservation outcome. The goal is appropriate intervention, not automatically replacing more of the wall."
        },
        {
          question: "How long does heritage masonry work take?",
          answer: "Investigation, permissions, samples, sourcing and curing affect the programme. Ask for a schedule tied to the actual repair and inspection requirements. Uncovering earlier alterations or concealed damage may require the scope to be reviewed."
        },
        {
          question: "How is the work priced?",
          answer: "The quote should identify access, careful preparation, materials, repair extent and any separate specialist fees. Compare the proposed method and retained fabric as well as cost. Generic area rates cannot capture every conservation requirement."
        }
      ]}
    />
  );
};

export default HeritageMasonryPage;
