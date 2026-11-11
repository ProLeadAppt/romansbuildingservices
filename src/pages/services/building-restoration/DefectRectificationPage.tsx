import { ServicePageTemplate } from '@/components/ServicePageTemplate';
import { getSiblingServices } from '@/data/serviceHierarchy';
import { Search, ClipboardCheck, Wrench, ShieldCheck, FileCheck } from 'lucide-react';

const DefectRectificationPage = () => {
  const siblings = getSiblingServices('building-restoration', 'defect-rectification');
  return (
    <ServicePageTemplate
      title="Building Defect Rectification"
      metaTitle="Sydney Building Defect Rectification | Romans"
      metaDescription="Sydney building defect rectification enquiries. Clear repair scopes, investigation of causes, staged inspections and records for owners and strata."
      heroImage="/gallery/thumbs/romansstone_1576003161_2195996136622601152_2394650725.webp"
      parentService={{ title: 'Building Restoration', href: '/services/building-restoration' }}
      siblingServices={siblings}
      breadcrumbs={[
        { label: 'Services', href: '/services' },
        { label: 'Building Restoration', href: '/services/building-restoration' },
        { label: 'Building Defect Rectification', href: '' },
      ]}
      intro={[
        "Cracking, water entry, loose render and concrete deterioration can have different causes and levels of urgency. A defect report helps organise the findings, but recommendations may need clarification or further investigation before they become a construction scope.",
        "Romans can discuss masonry and concrete repair work against an existing report. The quote should distinguish the repair work from engineering, waterproofing design and other specialist services. If conditions have changed since the report was prepared, the responsible adviser needs to review the affected recommendations.",
        "Effective rectification considers both visible damage and the contributing conditions. Drainage, movement or corroding embedded metal may need attention before finishes are repaired. The agreed outcome and inspection criteria should be specific enough for the owner and relevant adviser to check."
      ]}
      features={[
        {
          icon: Search,
          title: "Investigate the cause",
          description: "Record the observed defect and identify questions the report has not resolved. Technical diagnosis may require an engineer or another specialist."
        },
        {
          icon: ClipboardCheck,
          title: "Itemised scope",
          description: "Separate repair locations, methods, access and exclusions so owners can compare quotes against the same requirements."
        },
        {
          icon: Wrench,
          title: "Repair selection",
          description: "Crack repairs, masonry replacement and concrete repair have different limits. Select methods from the assessed conditions rather than a general list of products."
        },
        {
          icon: ShieldCheck,
          title: "Contributing conditions",
          description: "Include relevant movement, moisture and detailing issues in the plan. A repaired surface does not guarantee that all causes have been eliminated."
        },
        {
          icon: FileCheck,
          title: "Closeout records",
          description: "Agree inspection points and evidence needed for each item. Photos support the record but do not replace required professional inspections."
        }
      ]}
      whatWeUse={[
        {
          title: "Current defect report",
          detail: "Check the report date, locations, scope and limitations. Clarify design decisions or tests still needed before construction."
        },
        {
          title: "Compatible repair systems",
          detail: "Products must suit the substrate, exposure and intended repair. Manufacturer instructions and any design requirements govern preparation and application. Agree trial areas where needed to check preparation and finish."
        },
        {
          title: "Protective treatments",
          detail: "Coatings may form part of the specified repair but need suitable preparation and maintenance. Confirm actual product warranty terms rather than assuming a fixed life."
        },
        {
          title: "Access and occupancy plan",
          detail: "Coordinate tenant access, work zones, noise and services with the authorised building representative. Set expectations before work starts."
        },
        {
          title: "Completion schedule",
          detail: "List required inspections, documentation and outstanding matters. The responsible consultant or authority determines what their review or certification covers."
        }
      ]}
      processSteps={[
        {
          step: "Review the report",
          detail: "Read the findings and identify missing information or changed conditions. Confirm who has authority to agree the work."
        },
        {
          step: "Inspect and clarify",
          detail: "Check accessible locations and arrange safe access or specialist investigation where needed. Avoid treating every reported symptom as a confirmed cause."
        },
        {
          step: "Quote the scope",
          detail: "Provide or request an itemised scope with methods, exclusions, cost allowances and inspection responsibilities clearly stated."
        },
        {
          step: "Carry out the repairs",
          detail: "Follow the agreed design and product requirements. Refer unexpected conditions and proposed changes for review before affected work continues."
        },
        {
          step: "Review completion",
          detail: "Check each agreed item and record the work performed. Supply the specified maintenance and warranty information without implying resolution of unrelated defects."
        }
      ]}
      faqs={[
        {
          question: "Which defects can be assessed for repair?",
          answer: "Enquiries can include cracking, deteriorated concrete, damaged masonry, loose render and moisture-related damage. Their causes differ, so the initial discussion should identify the right assessment and whether specialist design or trades are needed."
        },
        {
          question: "Can you work from an existing report?",
          answer: "Send the report with your enquiry and explain any changes since it was written. Its recommendations may need site confirmation or further design before quoting. Agree who resolves questions with the report author."
        },
        {
          question: "What should a strata committee provide?",
          answer: "Provide the defect report, available drawings, access restrictions and the authorised contact for decisions. Clarify which approvals the owners corporation needs and what records are required at completion before the repair scope is agreed."
        },
        {
          question: "What warranty applies?",
          answer: "Ask for the actual contract and product warranty terms for the proposed work, including exclusions and maintenance duties. Statutory rights may also apply depending on the work and circumstances; no single warranty period covers every repair."
        },
        {
          question: "How long does rectification take?",
          answer: "The programme depends on defect extent, access, specialist design, permissions and curing or testing requirements. Ask for stages and review points, particularly where opening up the building may reveal additional damage."
        },
        {
          question: "How is rectification priced?",
          answer: "An itemised quote should show repair locations, access, design or specialist costs and reinstatement. Compare inclusions and assumptions as well as the total. Confirm how further investigation and concealed defects would be authorised and priced."
        }
      ]}
    />
  );
};
export default DefectRectificationPage;
