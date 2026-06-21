import { ServicePageTemplate } from '@/components/ServicePageTemplate';
import { getSiblingServices } from '@/data/serviceHierarchy';
import { Building, Layers, Hammer, ClipboardCheck, Eye } from 'lucide-react';

const CompleteRestorationPage = () => {
  const siblings = getSiblingServices('building-restoration', 'complete-restoration');
  return (
    <ServicePageTemplate
      title="Complete Building Restoration"
      metaTitle="Sydney Complete Building Restoration | Romans"
      metaDescription="Sydney building restoration by Minas Romanakis. Facade, masonry, structural, render and waterproofing work. One team, one contract, heritage and modern."
      heroImage="/gallery/thumbs/romansstone_1451642255_1152781246863726646_2394650725.webp"
      parentService={{ title: 'Building Restoration', href: '/services/building-restoration' }}
      siblingServices={siblings}
      breadcrumbs={[
        { label: 'Services', href: '/services' },
        { label: 'Building Restoration', href: '/services/building-restoration' },
        { label: 'Complete Building Restoration', href: '' },
      ]}
      intro={[
        'Some buildings have multiple things going wrong at once. The facade is cracking, the render is blowing, the lintels are rusted, the rear wall has settled, the chimney is failing. Doing these as separate jobs over five years costs more than doing them all together. A complete restoration brings the building back to a single consistent standard in one go.',
        'We manage the full scope under one contract. Structural repairs to the masonry. Repointing across the facade. Lintel replacements. Render strip and replace where needed. Repairs to chimneys, parapets and copings. Waterproofing and protective coatings. Internal work where the same defects have come through. One team handling everything means fewer surprises, faster timelines, and a result that ages consistently across the whole building.',
        'Most of our complete restoration jobs are Federation and Victorian terraces in the inner suburbs, plus older commercial buildings in the CBD and apartment blocks across the Eastern Suburbs and North Shore. Each one needs a different scope but the management approach is the same. Engineer scope, council approval, sample patches, programmed sequence, single contract, single completion.',
      ]}
      features={[
        {
          icon: Eye,
          title: 'Full building assessment',
          description:
            'Defect survey of every facade element. Drawings annotated with defect type and location. Engineer report on structural items. Heritage consultant report on listed buildings. Itemised scope.',
        },
        {
          icon: Building,
          title: 'Facade restoration',
          description:
            'Brick, stone, render, decorative elements all brought back together. Heritage matching on listed buildings. Modern materials on post-war buildings. Consistent finish across the whole facade.',
        },
        {
          icon: Hammer,
          title: 'Structural repairs',
          description:
            'Load-bearing wall repairs, lintel replacements, crack stitching, pier rebuilds. All structural work signed off by engineer. Documented for the property file.',
        },
        {
          icon: Layers,
          title: 'Waterproofing and protection',
          description:
            'Anti-carbonation coatings, breathable sealers, parapet flashings, gutter outlets, weephole replacement. Stops water entering at every point, breathable so it can leave through the wall.',
        },
        {
          icon: ClipboardCheck,
          title: 'Project management',
          description:
            'One contract, one point of contact, one schedule. Minas runs the job. Trades sequenced so scaffolding goes up once and comes down once. Owner kept informed weekly.',
        },
      ]}
      whatWeUse={[
        {
          title: 'Single engineer scope across all defects',
          detail:
            'Structural engineer assesses every defect on the building and prepares a single scope of works. Avoids the trap of fixing one thing and missing another that was about to fail anyway.',
        },
        {
          title: 'Heritage consultant on listed buildings',
          detail:
            'Heritage consultant signs off on materials, methods and sample patches before any work starts. Their report and the engineer report together form the scope we quote against.',
        },
        {
          title: 'Programmed sequencing',
          detail:
            'Trades sequenced so each step waits for the previous to cure or be inspected. Scaffolding goes up once at the start and comes down at the end. Cost saving is significant on a multi-trade job.',
        },
        {
          title: 'Single contract, fixed price',
          detail:
            'One contract covers all the work. Fixed price after scope. Variations only for unknowns that could not be seen at quote stage (eg buried foundation issues, hidden lintels). Owner knows the total cost before the job starts.',
        },
        {
          title: 'Documentation throughout',
          detail:
            'Before, during and after photos at every stage. Engineer and heritage sign-offs at each milestone. Final completion package for the property file: useful for any future buyer, insurer or strata committee.',
        },
        {
          title: 'Warranties on every element',
          detail:
            'Statutory 6-year warranty on structural work. Manufacturer warranties on protective coatings and waterproofing (typically 10 to 20 years). Lime mortar work warranted at 30 years. All warranties documented and handed over on completion.',
        },
      ]}
      processSteps={[
        {
          step: 'Initial assessment',
          detail:
            'Walk-through inspection by Minas. Photos of every defect. We mark up the building drawings (or take measurements where none exist) so the scope is documented before any quoting.',
        },
        {
          step: 'Engineer and heritage scoping',
          detail:
            'Structural engineer comes out for any masonry or concrete structural issues. Heritage consultant comes out for listed buildings. Their reports inform the full scope. Two to four weeks.',
        },
        {
          step: 'Quote and contract',
          detail:
            'Itemised quote per defect, per facade, per trade. Fixed price for the full scope. Contract signed. Council approval prepared if needed (heritage scopes always need it). Approval two to eight weeks.',
        },
        {
          step: 'Mobilise and sample',
          detail:
            'Scaffolding goes up. Site set up. Sample patches done in priority order so each material can be approved before the full job starts. Heritage consultant inspects samples.',
        },
        {
          step: 'Execute the scope',
          detail:
            'Work proceeds in sequence: structural first, then masonry, then render, then protective coatings, then waterproofing details. Each trade signed off before the next starts. Engineer and consultant inspections throughout.',
        },
        {
          step: 'Completion handover',
          detail:
            'Final inspection with engineer, heritage consultant, and owner. Defects list completed. Scaffolding down. Documentation package handed over: photos, scope, certificates, warranties.',
        },
      ]}
      faqs={[
        {
          question: 'How long does a complete building restoration take?',
          answer:
            'A typical Federation terrace facade restoration is 6 to 12 weeks of on-site work plus 4 to 12 weeks of scoping and approvals at the front. A heritage commercial building or strata block can be 4 to 9 months. We give a programmed timeline with the quote, broken into stages with milestones.',
        },
        {
          question: 'Can the building stay occupied during restoration?',
          answer:
            'Usually yes for residential terraces and apartments. Scaffolding goes outside, work is done externally, residents stay in place. Internal work (if part of scope) is sequenced room by room so the rest of the building remains usable. For commercial buildings we plan around tenant access.',
        },
        {
          question: 'Do you handle council approvals?',
          answer:
            'Yes. For heritage listed buildings we prepare the heritage impact statement, scope of works, methodology and material specifications. For non-heritage scopes we prepare the development application. Council fees are billed at cost. Approval timelines vary by council and scope, typically 4 to 12 weeks.',
        },
        {
          question: 'What happens if you find more damage once the scaffolding is up?',
          answer:
            'On any building over 50 years old, some hidden damage emerges. We agree upfront how variations are priced. Typically we provide a variation quote, get owner approval, and proceed. Variations are usually 5 to 15 percent of total contract value. Major hidden issues (a structural surprise) are rarer but get handled the same way.',
        },
        {
          question: 'Is it cheaper to do everything at once?',
          answer:
            'Significantly. Scaffolding is the largest single line item on most facade jobs. Doing one element at a time means putting scaffolding up and taking it down each time. A combined scope saves typically 25 to 40 percent against doing the same work over multiple visits. Plus the building ages consistently.',
        },
        {
          question: 'What does a complete restoration cost?',
          answer:
            'Varies hugely by scope. A simple Federation terrace facade restoration is 40,000 to 120,000 dollars. A heritage commercial building can be 300,000 to 1.5 million dollars or more. Strata blocks vary by size and defect extent. We provide a budgetary estimate within a week of inspection and a firm fixed quote within four to six weeks once engineer and heritage scopes are complete.',
        },
      ]}
    />
  );
};
export default CompleteRestorationPage;
