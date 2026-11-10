import { ServicePageTemplate } from '@/components/ServicePageTemplate';
import { getSiblingServices } from '@/data/serviceHierarchy';
import { Search, Wrench, AlertTriangle, FileCheck, CheckCircle } from 'lucide-react';

const StructuralDefectPage = () => {
  const siblings = getSiblingServices('remedial-building', 'structural-defect');

  return (
    <ServicePageTemplate
      title="Structural Defect Repair"
      metaTitle="Sydney Structural Defect Repair | Romans"
      metaDescription="Sydney structural defect repair enquiries. Engineer-defined repair scopes, safe access, documentation and coordination of required specialist work."
      heroImage="/gallery/thumbs/romansstone_1579724750_2227215093383768825_2394650725.webp"
      parentService={{ title: 'Remedial Building', href: '/services/remedial-building' }}
      siblingServices={siblings}
      breadcrumbs={[
        { label: 'Services', href: '/services' },
        { label: 'Remedial Building', href: '/services/remedial-building' },
        { label: 'Structural Defect Repair', href: '' },
      ]}
      intro={[
        "A structural defect affects how a building carries loads or remains stable. Cracking, distortion or deterioration may indicate a concern, but a crack-width rule cannot distinguish every cosmetic defect from a structural one. Assess the affected element and the wider load path before selecting repairs.",
        "An engineer’s investigation can identify the cause, required performance and repair options. These may include masonry reinforcement, lintel work, concrete repair or rebuilding. The scope must also address temporary support and any foundation, moisture or connection issues that contributed to the defect.",
        "Contact Romans to discuss construction work against an assessed scope. Confirm the relevant licence, specialist roles, inspection points and completion records before authorising work. If a claim or dispute is involved, preserve existing records and seek advice about evidence and deadlines before altering the defect, while addressing immediate safety needs."
      ]}
      features={[
        {
          icon: Search,
          title: "Investigate the defect",
          description: "Review the symptoms, history and available reports. Further structural or ground investigations may be needed; a repair quote alone does not establish the cause."
        },
        {
          icon: Wrench,
          title: "Repair options",
          description: "The engineer selects suitable reinforcement, connection repairs or rebuilding for the defect. Stitching is not a general solution for continuing foundation movement."
        },
        {
          icon: AlertTriangle,
          title: "Safety and support",
          description: "Unstable walls and falling material require access controls and professional assessment. Temporary works must be designed around the loads and safe work sequence."
        },
        {
          icon: FileCheck,
          title: "Clear documentation",
          description: "Agree how observations, design, variations and completed work will be recorded. Distinguish facts observed on site from unconfirmed explanations or conclusions about responsibility."
        },
        {
          icon: CheckCircle,
          title: "Claim-related work",
          description: "A report or quote may help describe the repair, but the insurer, relevant authority or adviser determines claim requirements and eligibility. Construction work does not itself resolve a legal dispute."
        }
      ]}
      whatWeUse={[
        {
          title: "Engineer-defined scope",
          detail: "The specification sets the intended performance, repair method, materials and acceptance requirements. Clarify responsibility for design changes if concealed conditions differ from the report."
        },
        {
          title: "Masonry systems",
          detail: "Bars, anchors, units and mortar must suit the existing wall and required loads. Compatible installation systems and inspection matter more than a generic brand or bar size."
        },
        {
          title: "Concrete repair products",
          detail: "Injection or patch systems are selected for the cause, movement and substrate. Product strength alone does not demonstrate restoration of structural capacity."
        },
        {
          title: "Replacement elements",
          detail: "Lintels, beams or sections of masonry may need replacement where retention is unsuitable. Design the bearings, connections and support sequence before removal."
        },
        {
          title: "Inspection evidence",
          detail: "Agree photographs, hold points and any tests required by the design. Completion records should state the inspected scope and any remaining limitations."
        }
      ]}
      processSteps={[
        {
          step: "Assess immediate risk",
          detail: "Keep people away from unstable or falling material and seek emergency assistance if there is immediate danger. Arrange appropriate structural assessment."
        },
        {
          step: "Define the repair",
          detail: "Review the engineer scope and identify any further investigations, approvals or specialist appointments. Check evidence-preservation requirements where a claim is involved."
        },
        {
          step: "Agree responsibilities",
          detail: "Confirm the written quote, relevant licence details, access restrictions and inspection requirements. Establish how changes and concealed defects will be handled."
        },
        {
          step: "Repair and inspect",
          detail: "Follow the designed sequence and temporary works plan. Inspect required stages before concealment and refer unexpected conditions for review."
        },
        {
          step: "Complete the record",
          detail: "Provide agreed records and identify any further monitoring or maintenance. Obtain separate professional or statutory documents where required for the particular scope."
        }
      ]}
      faqs={[
        {
          question: "What counts as a structural defect?",
          answer: "A defect is structural where it affects the relevant capacity or stability, but that requires assessment in context. Crack width and surface appearance alone cannot establish the classification. Sudden movement, leaning or falling material warrants prompt safety advice."
        },
        {
          question: "Are defects in a new building covered by warranty?",
          answer: "Eligibility and deadlines depend on the contract, work, defect and applicable scheme. Do not rely on a general age cutoff from a repair website. Seek current advice from the relevant authority, insurer or qualified adviser and preserve records before evidence is altered."
        },
        {
          question: "Can a bowing wall be tied back?",
          answer: "Sometimes, but the wall construction, cause, remaining condition and available anchorage determine feasibility. There is no universal amount of bowing that establishes a safe repair. An engineer should assess whether reinforcement, rebuilding or another response is appropriate."
        },
        {
          question: "Do I need an engineer report before requesting a quote?",
          answer: "You can contact Romans to discuss the issue and available reports. A construction quote for structural work may need a defined engineering scope first. Agree which investigations and appointments are needed so prices compare the same repair requirements."
        },
        {
          question: "How long does rectification take?",
          answer: "Investigation, design, approvals, access, temporary support and the repair method affect timing. Claim or dispute processes can add separate dependencies. Ask for a programme based on the agreed scope with inspection and curing stages clearly identified."
        },
        {
          question: "What should be included in the quote?",
          answer: "Look for repair locations, materials, support, access, inspections and reinstatement, together with exclusions and concealed-condition allowances. Clarify whether design, testing and specialist services are separate. A quote should not be treated as confirmation of insurance coverage or legal liability."
        }
      ]}
    />
  );
};

export default StructuralDefectPage;
