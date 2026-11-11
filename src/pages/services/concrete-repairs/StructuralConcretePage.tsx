import { ServicePageTemplate } from '@/components/ServicePageTemplate';
import { getSiblingServices } from '@/data/serviceHierarchy';
import { Columns3, Layers, Wrench, ShieldCheck, FileCheck } from 'lucide-react';

const StructuralConcretePage = () => {
  const siblings = getSiblingServices('concrete-repairs', 'structural-concrete');

  return (
    <ServicePageTemplate
      title="Structural Concrete Restoration"
      metaTitle="Sydney Structural Concrete Restoration | Romans"
      metaDescription="Sydney structural concrete repair enquiries. Engineer-defined beam, column and slab repairs, strengthening options and inspection planning."
      heroImage="/gallery/thumbs/romansstone_1576440613_2199665757989086550_2394650725.webp"
      parentService={{ title: 'Concrete Repairs', href: '/services/concrete-repairs' }}
      siblingServices={siblings}
      breadcrumbs={[
        { label: 'Services', href: '/services' },
        { label: 'Concrete Repairs', href: '/services/concrete-repairs' },
        { label: 'Structural Concrete Restoration', href: '' },
      ]}
      intro={[
        "Structural concrete repairs concern the capacity and durability of load-bearing elements such as beams, columns and slabs. The cause may involve corrosion, damage, construction defects or changed loading. A surface repair alone does not establish that an element can carry the required loads.",
        "A structural engineer assesses the existing condition and defines the intended performance, repair method and inspection requirements. Investigation may include testing and review of drawings. Prestressed or post-tensioned construction needs particular care before drilling or cutting because concealed tendons can be hazardous.",
        "Contact Romans to discuss the building work in an engineer-defined scope. Repair, strengthening and replacement have different access, support and specialist requirements. Confirm design responsibilities, relevant licence scope, approvals and who will install and inspect any specialist system before work is arranged."
      ]}
      features={[
        {
          icon: Columns3,
          title: "Beam and column repairs",
          description: "Assess the remaining section and reinforcement before specifying removal or reinstatement. Temporary support may be required while the element is reduced during repairs."
        },
        {
          icon: Layers,
          title: "Slab repair planning",
          description: "Check construction type, reinforcement and concealed services before cutting. Existing drawings may need verification, particularly around tendons, penetrations and heavily loaded areas."
        },
        {
          icon: Wrench,
          title: "Strengthening options",
          description: "Section enlargement, external steel or bonded systems may suit an assessed element. The design must consider load transfer, connections and the wider structure."
        },
        {
          icon: ShieldCheck,
          title: "Durability",
          description: "Structural capacity and future exposure both inform the repair. A high-strength product does not alone address contamination, water paths or continued corrosion."
        },
        {
          icon: FileCheck,
          title: "Verification",
          description: "Agree inspections, testing and completion documents with the engineer. Covering the work, removing support or reloading the element may require specific checks first."
        }
      ]}
      whatWeUse={[
        {
          title: "Designed repair materials",
          detail: "Strength, stiffness, shrinkage and bond must suit the existing concrete and intended performance. Material selection and placement follow the specification rather than a universal mix."
        },
        {
          title: "Reinforcement and anchors",
          detail: "Connections and reinforcement must transfer the designed loads into sound material. Existing reinforcement location and condition need verification before drilling or cutting."
        },
        {
          title: "Specialist strengthening systems",
          detail: "Bonded fibre, external steel or other systems require designed details and appropriate installation expertise. Confirm preparation, fire protection, exposure and inspection requirements."
        },
        {
          title: "Temporary support",
          detail: "The temporary works must consider the loads during preparation and curing as well as the finished repair. Support bearing and removal sequence are part of the design."
        },
        {
          title: "Inspection and testing",
          detail: "The scope may include material or installation tests. Agree the required method, timing and responsible party; testing a material sample does not verify every aspect of the completed structure."
        }
      ]}
      processSteps={[
        {
          step: "Assess the existing structure",
          detail: "Review loads, construction type and defects, with investigation as required. Establish any immediate safety restrictions and identify concealed-tendon or service risks."
        },
        {
          step: "Design the repair",
          detail: "Specify the intended capacity, materials, connections and temporary works. Confirm approvals and any specialist installer or testing requirements."
        },
        {
          step: "Prepare safely",
          detail: "Locate relevant embedded components before drilling or cutting. Follow the designed removal sequence and protect adjacent structure and occupants."
        },
        {
          step: "Install and inspect",
          detail: "Carry out reinforcement, concrete and strengthening works to the specification. Refer unexpected conditions for review and complete required inspections before concealment."
        },
        {
          step: "Verify before loading",
          detail: "Meet the specified strength, inspection and support-removal requirements. Provide the agreed records and any continuing loading or maintenance restrictions at handover."
        }
      ]}
      faqs={[
        {
          question: "How is structural repair different from patching?",
          answer: "A structural repair has defined performance requirements for the element and its load path. Patching can restore a surface without addressing capacity. The engineer’s scope should explain the required reinforcement, materials, connections and verification for the actual defect."
        },
        {
          question: "Can a slab be drilled to investigate damage?",
          answer: "Do not drill or cut a slab without checking its construction and embedded components. Post-tensioned tendons and services can create serious hazards. Investigation must use a planned method appropriate to the structure and the available records."
        },
        {
          question: "Is carbon fibre always an alternative to replacement?",
          answer: "No. Suitability depends on the element, substrate, required capacity and failure mechanisms. Specialist design and installation may be needed, along with fire and environmental protection. The assessment should compare options rather than assuming a bonded system can repair every defect."
        },
        {
          question: "When can the repaired element carry loads again?",
          answer: "The engineer and specification determine the required strength, inspections and load-transfer sequence. A fixed number of curing days or a hard surface is not enough to confirm readiness. Do not remove props or change loading without the responsible professionals’ direction."
        },
        {
          question: "What documentation should be agreed?",
          answer: "Clarify the design, inspection hold points, material records, test results and completion documents required for the scope. Also identify exclusions and restrictions. A contractor’s handover does not replace a separate statutory approval or professional certificate where one is needed."
        },
        {
          question: "What determines cost and duration?",
          answer: "Investigation, engineering, temporary support, specialist systems, access and testing can all be significant parts of the project. Ask for a scope-specific quote and programme with curing and inspection dependencies and clear arrangements for unforeseen conditions."
        }
      ]}
    />
  );
};

export default StructuralConcretePage;
