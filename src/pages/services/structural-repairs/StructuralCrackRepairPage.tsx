import { ServicePageTemplate } from '@/components/ServicePageTemplate';
import { getSiblingServices } from '@/data/serviceHierarchy';
import { Search, Wrench, ShieldCheck, Hammer, ClipboardCheck } from 'lucide-react';

const StructuralCrackRepairPage = () => {
  const siblings = getSiblingServices('structural-repairs', 'structural-crack-repair');
  return (
    <ServicePageTemplate
      title="Structural Crack Repair"
      metaTitle="Sydney Structural Crack Repair | Romans"
      metaDescription="Sydney structural crack repair enquiries. Investigating movement and choosing suitable masonry stitching, concrete repair or rebuilding methods."
      heroImage="/gallery/thumbs/romansstone_1575057672_2188064802893944247_2394650725.webp"
      parentService={{ title: 'Structural Repairs', href: '/services/structural-repairs' }}
      siblingServices={siblings}
      breadcrumbs={[
        { label: 'Services', href: '/services' },
        { label: 'Structural Repairs', href: '/services/structural-repairs' },
        { label: 'Structural Crack Repair', href: '' },
      ]}
      intro={[
        "Cracks can arise from movement, corrosion, changes in load, moisture or deterioration in the materials. Width and direction alone cannot establish the cause or whether a wall is safe. New or growing cracks, leaning masonry or changes around openings need assessment; keep people clear of unstable material and seek urgent advice if the condition is changing suddenly.",
        "The repair starts with understanding the cause and how the affected element carries load. Monitoring may help where the assessed risk permits it. Drainage, foundations, lintels and wall connections may need attention before the visible crack is repaired.",
        "Contact Romans about an assessed crack repair scope. Helical stitching, concrete injection, compatible joint repairs and rebuilding can suit different conditions. Stitching does not stop ongoing foundation movement, and a flexible seal is not a substitute for restoring structural capacity where that is required."
      ]}
      features={[
        {
          icon: Search,
          title: "Crack assessment",
          description: "Consider the pattern alongside the building structure, movement history and condition of surrounding materials. Photographs taken safely help describe the issue but cannot establish the repair by themselves."
        },
        {
          icon: Wrench,
          title: "Masonry stitching",
          description: "Designed helical reinforcement may distribute loads across suitable cracks in masonry. Bar layout, bonding material and the underlying movement must be addressed in the specification."
        },
        {
          icon: ShieldCheck,
          title: "Concrete crack repairs",
          description: "Injection systems need selection for the crack condition and intended purpose. Structural bonding, water sealing and allowing movement are different requirements."
        },
        {
          icon: Hammer,
          title: "Local rebuilding",
          description: "Where damaged masonry cannot carry the required loads, a section may need rebuilding. Design the temporary support and work sequence before any material is removed."
        },
        {
          icon: ClipboardCheck,
          title: "Inspection records",
          description: "Agree the engineering, inspection stages and completion documents needed for the repair. Covering a crack with pointing or render does not demonstrate structural performance."
        }
      ]}
      whatWeUse={[
        {
          title: "Helical reinforcement",
          detail: "Bars and grout must form a compatible specified system. Size, embedment, spacing and anchorage depend on the masonry and loads; a generic spacing is not a design."
        },
        {
          title: "Injection resins",
          detail: "Product selection depends on moisture, crack movement, access and the required outcome. A high resin strength alone does not establish the capacity of the repaired element."
        },
        {
          title: "Repair mortar",
          detail: "Select joint and rebuild materials for compatibility with the retained brick or stone. Excessively hard mortar can transfer damage into softer masonry."
        },
        {
          title: "Movement records",
          detail: "Where safe and appropriate, professional monitoring can inform the assessment. The engineer sets the observation period and review triggers rather than assuming every crack can wait."
        },
        {
          title: "Temporary works",
          detail: "Any loss of support during cutting or rebuilding must be addressed in a temporary works plan. Occupants should not prop, pull apart or load-test a cracked wall."
        }
      ]}
      processSteps={[
        {
          step: "Inspect the wider defect",
          detail: "Arrange an assessment of the affected wall or concrete element and related supports. Establish any safety restrictions before investigation or repair."
        },
        {
          step: "Investigate the cause",
          detail: "Check the movement history and arrange engineering, ground or moisture investigations as needed. Agree any monitoring only where the risk allows it."
        },
        {
          step: "Specify the repair",
          detail: "Select the method and compatible materials for the actual defect. Confirm design, approvals, access, temporary support and the written scope before work starts."
        },
        {
          step: "Repair and inspect",
          detail: "Follow the specified sequence and inspection points. Refer unexpected voids, deterioration or movement for review before concealing the work."
        },
        {
          step: "Reinstate and monitor",
          detail: "Complete the agreed pointing or finish repairs and provide the relevant records. Follow any monitoring and maintenance recommendations after handover."
        }
      ]}
      faqs={[
        {
          question: "How can I tell if a crack is structural?",
          answer: "Appearance alone cannot answer that reliably. The assessment considers the whole element, its loads and changes over time. Do not use a crack-width threshold to declare a wall safe, particularly where there is leaning, loose material or sudden movement."
        },
        {
          question: "Does stitching stop cracks coming back?",
          answer: "Stitching may form part of a designed repair, but it does not remove every cause of movement. Foundation, moisture or connection problems may need separate work. The scope should explain the cause being addressed and any continuing monitoring required."
        },
        {
          question: "Can any concrete crack be injected?",
          answer: "No single injection product suits every crack. Movement, moisture, contamination, access and the required structural or waterproofing performance affect selection. An assessment should establish whether injection, another repair or treatment of an underlying defect is appropriate."
        },
        {
          question: "Will the repair be invisible?",
          answer: "Careful material matching and pointing can reduce the visual impact, but differences in weathering, colour and texture may remain. Agree the intended finish and any sample area before the work rather than relying on an invisible result."
        },
        {
          question: "How long does crack repair take?",
          answer: "Investigation, design, access and any monitoring can take longer than the visible repair. Product curing and inspection requirements also matter. Ask for a scope-specific programme that identifies dependencies and the circumstances that could change it."
        },
        {
          question: "What affects the price?",
          answer: "The cause, extent, access, engineering and temporary support can matter more than the crack length. Request a quote covering preparation, repair, inspections and finishes, with clear exclusions for other defects or work that cannot yet be assessed."
        }
      ]}
    />
  );
};
export default StructuralCrackRepairPage;
