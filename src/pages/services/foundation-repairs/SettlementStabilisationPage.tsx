import { ServicePageTemplate } from '@/components/ServicePageTemplate';
import { getSiblingServices } from '@/data/serviceHierarchy';
import { ArrowDownToLine, Search, Droplets, ShieldCheck, FileCheck } from 'lucide-react';

const SettlementStabilisationPage = () => {
  const siblings = getSiblingServices('foundation-repairs', 'settlement-stabilisation');

  return (
    <ServicePageTemplate
      title="Settlement Stabilisation"
      metaTitle="Sydney Building Settlement Stabilisation | Romans"
      metaDescription="Sydney settlement investigation and repair enquiries. Movement assessment, ground and drainage considerations, and engineer-led stabilisation planning."
      heroImage="/gallery/thumbs/romansstone_1451942270_1155297957273885284_2394650725.webp"
      parentService={{ title: 'Foundation Repairs', href: '/services/foundation-repairs' }}
      siblingServices={siblings}
      breadcrumbs={[
        { label: 'Services', href: '/services' },
        { label: 'Foundation Repairs', href: '/services/foundation-repairs' },
        { label: 'Settlement Stabilisation', href: '' },
      ]}
      intro={[
        "Ground movement and inadequate support can cause parts of a building to settle unevenly. Cracks, changes in floor level and distorted openings can be signs, but they can also arise from other defects. A visual symptom is a starting point for investigation, not proof of the cause or the required repair.",
        "Assessment may consider the original foundations, soil, drainage, plumbing, trees and nearby work. Monitoring can help explain movement where it is safe to wait, but a period without visible change does not by itself establish that a building is stable. Sudden movement, leaning walls or falling material require prompt safety advice.",
        "Contact Romans to discuss an assessed settlement repair scope. Depending on the findings, the response may involve drainage or plumbing work, monitoring, foundation strengthening or specialist ground treatment. The method and the contractor responsibilities need confirmation before pricing or scheduling the repair."
      ]}
      features={[
        {
          icon: Search,
          title: "Investigate movement",
          description: "Record when symptoms appeared and any known changes to drainage or nearby ground. Structural and geotechnical assessment can identify what further investigation is needed."
        },
        {
          icon: ArrowDownToLine,
          title: "Select the repair",
          description: "Underpinning is one possible response, not an automatic requirement for every crack. The engineer considers the existing structure, ground conditions and cause before recommending a method."
        },
        {
          icon: Droplets,
          title: "Water and services",
          description: "Leaks or poorly managed surface water may affect foundation support. Qualified trades investigate services and design any drainage changes with a suitable lawful discharge route."
        },
        {
          icon: ShieldCheck,
          title: "Plan masonry repairs",
          description: "Repairing visible cracks alone may not address ongoing movement. Agree the foundation response and any monitoring before specifying stitching, rebuilding or cosmetic reinstatement."
        },
        {
          icon: FileCheck,
          title: "Record and monitor",
          description: "Where monitoring is appropriate, the engineer defines locations, frequency, duration and triggers for reassessment. Records support decisions but do not replace structural assessment."
        }
      ]}
      whatWeUse={[
        {
          title: "Level and crack records",
          detail: "Measurements can help show change over time when taken consistently and interpreted professionally. Do not attach monitors to unstable masonry or enter unsafe areas to obtain readings."
        },
        {
          title: "Ground investigation",
          detail: "Geotechnical investigation may be needed to understand fill, soil variability, moisture and bearing conditions. The scope and testing methods depend on the site and proposed repair."
        },
        {
          title: "Foundation strengthening",
          detail: "Mass concrete underpinning, piles or other strengthening may be considered after investigation. Design must address load transfer, temporary works, services and neighbouring structures."
        },
        {
          title: "Specialist ground treatment",
          detail: "Resin injection or other ground treatment may suit some conditions, but requires specialist assessment of the ground, loads and installation effects. No brand affiliation or universal soil-based suitability is assumed."
        },
        {
          title: "Drainage and leak repairs",
          detail: "Investigate the source before installing drainage or replacing pipes. Licensed trades should handle relevant plumbing work, and suspected asbestos-containing pipes require appropriate assessment and controls."
        }
      ]}
      processSteps={[
        {
          step: "Triage and assess",
          detail: "Identify immediate safety concerns before arranging inspection. Keep people away from unstable areas and contact emergency services if anyone is in immediate danger."
        },
        {
          step: "Investigate or monitor",
          detail: "Obtain professional advice on ground, drainage and structural investigations. Monitor only where the assessed risk allows it, using a plan with clear review and escalation points."
        },
        {
          step: "Design the response",
          detail: "Select measures that address the identified cause and structural requirements. Confirm approvals, specialist responsibilities and any implications for trees, neighbours or underground services."
        },
        {
          step: "Carry out agreed works",
          detail: "Use the specified sequence and inspection hold points. Changes in ground conditions or unexpected damage require review rather than automatic continuation with the original method."
        },
        {
          step: "Review before finishes",
          detail: "Assess performance and any further movement under the agreed monitoring plan. Complete masonry and finish repairs when the responsible professionals consider them appropriate; zero future movement cannot be guaranteed."
        }
      ]}
      faqs={[
        {
          question: "Are settlement and subsidence the same thing?",
          answer: "The terms are used differently in building, engineering and insurance contexts. Settlement often describes compression under load, while subsidence can describe other downward ground movement. The investigation should identify the actual mechanism rather than relying on the label alone."
        },
        {
          question: "Can resin injection help?",
          answer: "It may be an option for certain ground or void conditions, but suitability depends on investigation and specialist design. Ask about the evidence supporting the method, installation effects, verification and limitations. It should not be selected solely from a general description of the soil."
        },
        {
          question: "How urgently should movement be assessed?",
          answer: "New or worsening movement warrants professional assessment. Sudden changes, instability or falling material may need immediate safety action. Do not rely on a fixed crack width or a period without visible movement to decide that the building is safe."
        },
        {
          question: "Should trees near the building be removed?",
          answer: "Tree proximity alone does not establish the cause. Seek engineering and arboricultural advice before removing a tree, cutting roots or installing a root barrier. Changes can affect ground moisture and tree stability, and council controls or approvals may apply."
        },
        {
          question: "How long does stabilisation take?",
          answer: "Investigation, monitoring where appropriate, design, approvals and the selected repair all affect the programme. Different buildings need different observation periods. Ask for a staged plan and review points rather than assuming a standard duration proves movement has stopped."
        },
        {
          question: "What will the work cost?",
          answer: "Costs depend on the investigation findings and the selected response. Request separate allowances for design, monitoring, specialist work, approvals and reinstatement. Some problems may need targeted water management while others require extensive foundation work; generic totals cannot distinguish them."
        }
      ]}
    />
  );
};

export default SettlementStabilisationPage;
