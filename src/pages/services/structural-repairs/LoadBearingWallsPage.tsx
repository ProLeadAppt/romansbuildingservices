import { ServicePageTemplate } from '@/components/ServicePageTemplate';
import { getSiblingServices } from '@/data/serviceHierarchy';
import { Search, HardHat, Columns, Ruler, ShieldCheck } from 'lucide-react';

const LoadBearingWallsPage = () => {
  const siblings = getSiblingServices('structural-repairs', 'load-bearing-walls');
  return (
    <ServicePageTemplate
      title="Load-Bearing Wall Repairs"
      metaTitle="Sydney Load-Bearing Wall Repairs | Romans"
      metaDescription="Sydney load-bearing wall repair enquiries. Structural assessment, temporary support, masonry repair and engineered rebuilding scopes."
      heroImage="/gallery/thumbs/romansstone_1574104761_2180071211265247711_2394650725.webp"
      parentService={{ title: 'Structural Repairs', href: '/services/structural-repairs' }}
      siblingServices={siblings}
      breadcrumbs={[
        { label: 'Services', href: '/services' },
        { label: 'Structural Repairs', href: '/services/structural-repairs' },
        { label: 'Load-Bearing Wall Repairs', href: '' },
      ]}
      intro={[
        "A load-bearing wall carries weight from other parts of the building as well as its own. Its role cannot be confirmed from thickness or appearance alone. Cracking, crushing, leaning or changes around openings need assessment of the wall and the loads it supports.",
        "Repair options can include masonry reinforcement, connection repairs, lintel work or rebuilding. The cause and remaining capacity determine the method. Active foundation movement needs its own response; installing stitching or anchors without addressing it may leave the underlying problem unresolved.",
        "Contact Romans to discuss the assessed building work. Structural design, temporary works, specialist involvement and required inspections should be agreed before the wall is disturbed. Keep people clear of loose or unstable masonry, and do not remove bricks or install props as a homeowner check."
      ]}
      features={[
        {
          icon: Search,
          title: "Establish the load path",
          description: "Use available drawings and structural assessment to identify what the wall supports. Concealed beams, floor directions and previous alterations may affect the findings."
        },
        {
          icon: HardHat,
          title: "Temporary support",
          description: "A designed sequence must address how loads will be carried during the repair. Safe bearing, restraint, installation and removal are part of the temporary works, not just prop selection."
        },
        {
          icon: Columns,
          title: "Section rebuilding",
          description: "Rebuilding may be needed where masonry cannot be retained. The design specifies support, connections, compatible units and mortar, with inspection before concealed stages."
        },
        {
          icon: Ruler,
          title: "Reinforcement and ties",
          description: "Stitching or anchors may suit some defects. Selection depends on the cause, wall construction and available anchorage; a leaning wall is not automatically suitable for tying back."
        },
        {
          icon: ShieldCheck,
          title: "Completion requirements",
          description: "Agree who designs, inspects and documents the work. A contractor quote does not replace any required professional design, permission or completion assessment."
        }
      ]}
      whatWeUse={[
        {
          title: "Compatible masonry",
          detail: "Replacement bricks or stone should suit the retained wall’s physical properties and structural requirements. Appearance and nominal strength alone are not enough to establish compatibility."
        },
        {
          title: "Mortar and grout",
          detail: "The specification selects mortar and bonding systems for the masonry, exposure and required performance. Avoid applying a universal high-strength mix to softer existing materials."
        },
        {
          title: "Designed anchors",
          detail: "Tie and anchor details need suitable substrate, embedment and connections to a structure capable of taking the loads. Product ratings do not establish capacity in every existing wall."
        },
        {
          title: "Reinforcement systems",
          detail: "Bars, plates or other systems are selected as part of the repair design. Confirm specialist installation requirements and how the work will be checked before it is covered."
        },
        {
          title: "Support and protection",
          detail: "The work plan should include temporary support, exclusion areas and protection of adjacent finishes and services. Access restrictions can remain necessary until the assessed stages are complete."
        }
      ]}
      processSteps={[
        {
          step: "Assess the wall",
          detail: "Investigate the defect, load path and surrounding structure. Identify urgent safety risks and any need for engineering or other specialist investigation."
        },
        {
          step: "Design and approve",
          detail: "Agree the repair and temporary works design and check the required approvals. Confirm the contracting scope and the relevant licence and specialist requirements."
        },
        {
          step: "Prepare the site",
          detail: "Plan access, service protection and occupancy restrictions. Qualified personnel establish support under the specified sequence before disturbing loaded masonry."
        },
        {
          step: "Repair to the specification",
          detail: "Carry out the designed reinforcement, lintel or rebuild works. Required inspections occur before covering work or transferring loads to repaired elements."
        },
        {
          step: "Complete and review",
          detail: "Remove temporary support only under the approved sequence. Document completion and any remaining restrictions or monitoring before reinstating finishes and normal access."
        }
      ]}
      faqs={[
        {
          question: "How do I know whether a wall is load-bearing?",
          answer: "Plans and a structural assessment can establish how loads are carried. Wall thickness, construction material or its location in the house are not reliable tests on their own. Do not cut an opening or remove masonry to find out."
        },
        {
          question: "Can a leaning wall be repaired without rebuilding?",
          answer: "Sometimes, but the cause, condition and available support determine whether reinforcement is suitable. An engineer must assess the wall; there is no universal amount of lean that makes anchoring safe. Keep people away from a wall that appears unstable."
        },
        {
          question: "Is stitching suitable for an active crack?",
          answer: "It depends on the cause and design. Stitching alone does not stop ongoing foundation movement or restore every failed connection. The repair scope should identify the underlying problem and explain whether movement must be addressed before masonry work."
        },
        {
          question: "Can we occupy the building during repairs?",
          answer: "Occupancy depends on structural risk, temporary works, services and safe access. Agree restrictions with the responsible professionals before work begins and review them if conditions change. The presence of props alone does not confirm that affected rooms are safe."
        },
        {
          question: "Do these repairs need approval?",
          answer: "The answer depends on the property and proposed work. Ask the council or certifier which pathway applies, including any heritage controls. Agree responsibility for applications and inspections rather than assuming an engineer’s drawing is itself permission to proceed."
        },
        {
          question: "What determines cost and timing?",
          answer: "Engineering, access, temporary support, the repair extent and compatible materials all affect the quote and programme. Concealed defects can change the scope. Ask for written inclusions, inspection requirements and reinstatement details before comparing prices or arranging occupancy."
        }
      ]}
    />
  );
};
export default LoadBearingWallsPage;
