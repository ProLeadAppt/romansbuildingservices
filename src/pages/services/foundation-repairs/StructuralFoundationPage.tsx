import { ServicePageTemplate } from '@/components/ServicePageTemplate';
import { getSiblingServices } from '@/data/serviceHierarchy';
import { Wrench, Search, Columns3, ShieldCheck, FileCheck } from 'lucide-react';

const StructuralFoundationPage = () => {
  const siblings = getSiblingServices('foundation-repairs', 'structural-foundation');

  return (
    <ServicePageTemplate
      title="Structural Foundation Repairs"
      metaTitle="Sydney Structural Foundation Repairs | Romans"
      metaDescription="Sydney structural foundation repair enquiries. Investigating footing defects, selecting repairs and planning safe access, design and approvals."
      heroImage="/gallery/thumbs/romansstone_1700556302_3240823616257706375_2394650725.webp"
      parentService={{ title: 'Foundation Repairs', href: '/services/foundation-repairs' }}
      siblingServices={siblings}
      breadcrumbs={[
        { label: 'Services', href: '/services' },
        { label: 'Foundation Repairs', href: '/services/foundation-repairs' },
        { label: 'Structural Foundation Repairs', href: '' },
      ]}
      intro={[
        "Foundation defects can involve cracked concrete, deteriorated masonry, corrosion or inadequate support beneath a footing. Damage seen in the wall above does not establish which of these is present. Assess the structure and ground together before deciding whether to repair existing foundations, strengthen them or use another response.",
        "Investigation may require drawings, level records, drainage checks or carefully planned exposure of buried work. Excavation beside or below a loaded footing can destabilise it. Test pits and other intrusive checks need a safe method, service checks and appropriate professional input rather than standard dimensions.",
        "Contact Romans to discuss a foundation repair scope based on the assessment. Possible methods include local concrete or masonry repairs, designed reinforcement, strengthening and associated water-management work. Each option has limits; a sealant or crack injection does not automatically restore structural capacity or address ongoing ground movement."
      ]}
      features={[
        {
          icon: Search,
          title: "Foundation assessment",
          description: "Identify the material, defect, load path and bearing conditions. An engineer determines whether further structural or geotechnical investigation is needed before a repair can be specified."
        },
        {
          icon: Wrench,
          title: "Crack treatment",
          description: "The cause, movement, moisture and required performance determine whether injection or another repair is suitable. Waterproofing a crack and restoring load capacity are different objectives."
        },
        {
          icon: Columns3,
          title: "Designed strengthening",
          description: "Enlarging or reinforcing a footing needs an assessed connection to the existing structure and suitable ground support. Generic reinforcement or concrete details are not a repair design."
        },
        {
          icon: ShieldCheck,
          title: "Water management",
          description: "Assess leaks, drainage and ground levels as possible contributors. Any excavation and discharge arrangements must be designed without undermining the foundation or affecting neighbouring property."
        },
        {
          icon: FileCheck,
          title: "Inspections and approvals",
          description: "Confirm the required design, permissions and inspection hold points with the relevant professionals. Completion records should identify the scope actually inspected and any remaining restrictions."
        }
      ]}
      whatWeUse={[
        {
          title: "Planned investigation",
          detail: "Test pits or exposed sections must be located and sequenced with regard to stability and buried services. The professionals directing the investigation determine safe access and reinstatement."
        },
        {
          title: "Injection materials",
          detail: "Epoxy or other systems may be specified for suitable cracks after assessment. Product strength alone does not establish the capacity of the repaired foundation or suitability for a moving crack."
        },
        {
          title: "Water-sealing systems",
          detail: "Flexible grouts may be considered for some water paths. Moisture control does not replace structural repair where capacity is affected; product selection must account for conditions and compatibility."
        },
        {
          title: "Reinforcement and connections",
          detail: "Bars, anchors and their bonding systems require a design for the existing material and load transfer. Substrate condition, installation and inspection affect performance."
        },
        {
          title: "Concrete strengthening",
          detail: "Concrete mix, reinforcement, connections, curing and loading requirements follow the specification. Work around or beneath existing footings needs an engineered sequence and appropriate support."
        },
        {
          title: "Drainage layout",
          detail: "Drain depth, location and discharge need site-specific design. Installing a drain below a footing without assessment can compromise support; do not excavate alongside foundations as a DIY remedy."
        }
      ]}
      processSteps={[
        {
          step: "Inspect and investigate",
          detail: "Record symptoms and arrange structural assessment. Any intrusive investigation is planned with access, services and foundation stability in mind."
        },
        {
          step: "Specify the repair",
          detail: "Select methods based on the cause, ground conditions and required performance. Confirm structural design and any specialist investigation before agreeing the construction scope."
        },
        {
          step: "Confirm permission and responsibilities",
          detail: "Ask the council or certifier which approval pathway applies. Agree who provides applications, designs, inspections and specialist trades; no single approval route applies to every foundation repair."
        },
        {
          step: "Address contributing conditions",
          detail: "Include relevant drainage or plumbing measures in the plan. Tree or root changes require engineering and arboricultural advice plus any required permission, not an automatic removal instruction."
        },
        {
          step: "Repair and inspect",
          detail: "Qualified personnel follow the specification, temporary works plan and inspection hold points. Unexpected ground or material conditions must be reviewed before affected work continues."
        },
        {
          step: "Reinstate and review",
          detail: "Reinstate disturbed areas as agreed and provide completion records. Any movement monitoring and timing of cosmetic repairs should follow professional advice rather than a fixed calendar interval."
        }
      ]}
      faqs={[
        {
          question: "What causes foundation damage?",
          answer: "Possible contributors include inadequate bearing, ground movement, moisture changes, leaks, erosion and material deterioration. More than one factor can be involved. An investigation should distinguish these rather than assuming a nearby tree or a visible crack explains the cause."
        },
        {
          question: "Can a cracked foundation be repaired?",
          answer: "Repair may be feasible, but the method depends on the crack’s cause, the remaining material and the foundation’s required capacity. Injection alone is not suitable for every defect. The assessment should explain when strengthening, underpinning or replacement is needed instead."
        },
        {
          question: "Who handles approvals?",
          answer: "Confirm the applicable pathway with the council or certifier, then agree who will prepare and lodge any documents. The quote should identify these responsibilities and fees. Neither approval requirements nor processing times can be established from the service name alone."
        },
        {
          question: "How does this differ from underpinning?",
          answer: "Repair addresses defects in the existing foundation, while underpinning extends or strengthens its support. Some projects require both. The boundary depends on the design, so compare the assessed scope and intended load transfer rather than relying on the label."
        },
        {
          question: "How long does foundation repair take?",
          answer: "Access, investigation, design, approvals, the selected method and inspection or curing requirements affect timing. Concealed ground or structural conditions may change the programme. Request a project-specific schedule that identifies dependencies and explains when it will be reviewed."
        },
        {
          question: "How much does foundation repair cost?",
          answer: "The quote depends on the extent of damage, engineering, access, temporary works, specialist trades and reinstatement. Ask for clear inclusions, exclusions and concealed-condition allowances. A per-metre injection or concrete rate is not enough to estimate the full project."
        }
      ]}
    />
  );
};

export default StructuralFoundationPage;
