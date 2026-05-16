import { ServicePageTemplate } from '@/components/ServicePageTemplate';
import { getSiblingServices } from '@/data/serviceHierarchy';
import { Search, ClipboardCheck, Wrench, ShieldCheck, FileCheck } from 'lucide-react';

const DefectRectificationPage = () => {
  const siblings = getSiblingServices('building-restoration', 'defect-rectification');
  return (
    <ServicePageTemplate
      title="Building Defect Rectification"
      metaTitle="Building Defect Rectification Sydney | Strata, Residential, Commercial | Romans Building Services"
      metaDescription="Sydney building defect rectification by Minas Romanakis. Strata defect reports, engineer scopes, root-cause repair. Documented, warranted, signed off."
      heroImage="/gallery/thumbs/romansstone_1576003161_2195996136622601152_2394650725.webp"
      parentService={{ title: 'Building Restoration', href: '/services/building-restoration' }}
      siblingServices={siblings}
      breadcrumbs={[
        { label: 'Services', href: '/services' },
        { label: 'Building Restoration', href: '/services/building-restoration' },
        { label: 'Building Defect Rectification', href: '' },
      ]}
      intro={[
        'Building defects are not going to fix themselves. Water ingress, cracking, spalling concrete, failed waterproofing, corroded steel, render delamination. Each one gets worse over time. By the time it is obvious to the eye, the underlying damage is well advanced. The fix is always cheaper if it happens early, but most defects only get attention once a strata committee or insurance assessor produces a report.',
        'We work from defect reports and engineer scopes. Strata defect rectification is the bulk of this work. An engineer or building inspector produces a report listing defects with priority and recommended repair method. We quote against that scope. We do the rectification work. We document each defect with before and after photos. The defects list closes out and the strata committee, insurer or homeowner has the evidence they need.',
        'We rectify all the masonry-and-concrete categories: structural cracking, concrete cancer, render failure, masonry failure, waterproofing failure, corroded steel. For each one we address the underlying cause as well as the visible symptom. Treating only the symptom means the defect comes back within a few years. Treating the cause means the repair holds for decades.',
      ]}
      features={[
        {
          icon: Search,
          title: 'Defect investigation',
          description:
            'Site inspection by Minas. Each defect mapped, photographed, categorised. Root cause identified. Where the report does not have enough detail, we add the missing diagnostic information.',
        },
        {
          icon: ClipboardCheck,
          title: 'Itemised scope',
          description:
            'Quote itemised per defect with the repair method, materials, cost and timeline. Easy for strata committees or owners to understand what is being fixed and what it costs.',
        },
        {
          icon: Wrench,
          title: 'Rectification work',
          description:
            'Structural crack stitching, concrete cancer repair, render strip and replace, masonry rebuilding, waterproofing reinstatement, lintel replacement. Whatever the defect requires.',
        },
        {
          icon: ShieldCheck,
          title: 'Address the cause',
          description:
            'Drainage improvements, weatherproofing details, anti-carbonation coatings, stainless replacements for failed galvanised. The repair fixes the visible defect, the cause fix stops it returning.',
        },
        {
          icon: FileCheck,
          title: 'Complete documentation',
          description:
            'Defect-by-defect before, during and after photos. Material specifications. Engineer or consultant sign-offs. Warranty register. Package handed over for strata or property files.',
        },
      ]}
      whatWeUse={[
        {
          title: 'Engineer-specified repair methods',
          detail:
            'Each defect repaired according to the method specified in the engineer or consultant report. We work to the scope rather than substituting cheaper alternatives. Variations only with engineer approval.',
        },
        {
          title: 'Branded structural repair products',
          detail:
            'Sika, Mapei, BASF concrete repair systems. Helifix or equivalent for masonry stitching. Approved manufacturer products with warranties that pass to the building owner.',
        },
        {
          title: 'Anti-carbonation and weatherproofing coatings',
          detail:
            'Long-life coatings applied after structural repair to slow future corrosion and water ingress. 15 to 20 year manufacturer warranties documented for the property file.',
        },
        {
          title: 'Site documentation throughout',
          detail:
            'Before, during and after photos at every defect location. Material batch numbers logged. Engineer site inspection records kept. Daily site diary on bigger jobs.',
        },
        {
          title: 'Strata committee liaison',
          detail:
            'We attend strata committee meetings, present quotes and progress reports, answer owner questions. Strata work is more about communication than the trade work itself.',
        },
        {
          title: 'Warranties on every element',
          detail:
            'Statutory 6-year warranty on structural work. Manufacturer warranties (5 to 25 years) on coatings and waterproofing. Lime mortar work warranted at 30 years. All warranties documented and handed over.',
        },
      ]}
      processSteps={[
        {
          step: 'Review the defect report',
          detail:
            'We work from the engineer or building inspector report. Each defect understood and confirmed on site. Anything ambiguous gets clarified with the report author before we quote.',
        },
        {
          step: 'Site inspection and verification',
          detail:
            'On-site walk-through of each defect. Sometimes the report missed an item or got the location slightly wrong, sometimes the defect has progressed since the report was written. We update the scope as needed.',
        },
        {
          step: 'Itemised quote',
          detail:
            'Quote split out by defect. Each line has the repair method, the materials, the cost and the timeline. Total cost rolled up. Strata committee or owner can see exactly where the money goes.',
        },
        {
          step: 'Strata or owner approval',
          detail:
            'For strata jobs, the quote goes to the committee for approval. Sometimes there is a special levy or insurance claim process. We attend the meeting if needed to answer questions.',
        },
        {
          step: 'Execute defect by defect',
          detail:
            'Work proceeds in priority order. Each defect repaired, documented and signed off before moving to the next. Engineer or consultant inspections at appropriate milestones.',
        },
        {
          step: 'Close out the report',
          detail:
            'Final documentation package: before photos, after photos, methodology used, material specs, engineer certificates, warranties. Defect report closed item by item.',
        },
      ]}
      faqs={[
        {
          question: 'What are the most common building defects you see?',
          answer:
            'Water ingress through failed waterproofing on balconies, planter boxes and parapets. Concrete cancer in apartment carparks and balcony soffits. Cracking from foundation movement on clay soils. Corroded steel lintels above older windows. Render delamination from cement render over soft brick. These five categories make up about 80 percent of rectification work we do.',
        },
        {
          question: 'Can you work from an existing defect report?',
          answer:
            'Yes. This is most of our rectification work. If you have an engineer or building inspector report, we quote against that scope item by item. If you do not have a report, we can carry out our own assessment first or bring an engineer in for the bigger jobs.',
        },
        {
          question: 'Do you work with strata managers?',
          answer:
            'Yes, regularly. We understand the strata process, attend committee meetings when needed, provide itemised quotes that owners corporations can vote on, coordinate access with building managers and tenants, and produce closeout documentation for the strata records. Reference list available from past strata clients on request.',
        },
        {
          question: 'Is there a warranty on rectification work?',
          answer:
            'Yes. Statutory 6-year warranty on structural work under the NSW Home Building Act. Manufacturer warranties on protective coatings and waterproofing systems (typically 10 to 20 years). Lime mortar work warranted at 30 years. All warranties documented and handed over on completion.',
        },
        {
          question: 'How long does defect rectification take?',
          answer:
            'Highly variable by scope. A single localised defect (eg one cracked beam, one rusted lintel) is one to two weeks. A full defect schedule on a strata block can be 2 to 9 months. We provide a programmed timeline with the quote so the strata committee can plan around it.',
        },
        {
          question: 'What does rectification cost?',
          answer:
            'Depends entirely on the defect schedule. A small commercial defect job might be 20,000 to 60,000 dollars. A typical strata defect schedule (apartment carparks, balconies, facade) runs 100,000 to 800,000 dollars. Larger or older buildings can be more. Itemised quote after scope review.',
        },
      ]}
    />
  );
};
export default DefectRectificationPage;
