import { ServicePageTemplate } from '@/components/ServicePageTemplate';
import { getSiblingServices } from '@/data/serviceHierarchy';
import { Search, Wrench, FileCheck, AlertTriangle, CheckCircle } from 'lucide-react';

const StructuralDefectPage = () => {
  const siblings = getSiblingServices('remedial-building', 'structural-defect');

  return (
    <ServicePageTemplate
      title="Structural Defect Repair"
      metaTitle="Structural Defect Repair Sydney | Romans"
      metaDescription="Sydney structural defect rectification by Minas Romanakis. Builder warranty claims, HBI defects, engineer scopes. Crack stitching, lintel replacement, wall."
      heroImage="/gallery/thumbs/romansstone_1579724750_2227215093383768825_2394650725.webp"
      parentService={{ title: 'Remedial Building', href: '/services/remedial-building' }}
      siblingServices={siblings}
      breadcrumbs={[
        { label: 'Services', href: '/services' },
        { label: 'Remedial Building', href: '/services/remedial-building' },
        { label: 'Structural Defect Repair', href: '' },
      ]}
      intro={[
        'Structural defects affect the load-carrying capacity of a building. Cracking in load-bearing walls. Failed steel or timber lintels above openings. Bowing or leaning walls. Foundation movement showing through as diagonal stepped cracking. Inadequate original reinforcement. Each one needs proper diagnosis and engineered repair. Cosmetic patching over structural defects fails fast and can compromise the building further.',
        'We rectify structural defects in residential, commercial and strata buildings across Sydney. Most jobs come from defect reports prepared by engineers, building inspectors or insurance assessors. We work to the engineer scope, executing the repair method specified. Crack stitching with stainless helical rods, structural epoxy injection, steel lintel replacement, wall section rebuilds, helibar reinforcement, full structural reinstatement.',
        'Romans holds a full NSW builders licence for structural work. We work with structural engineers on every significant defect rectification. Engineer signs off on completion, completion certificates issued for the property structural file. Documentation suitable for builder warranty claims, Home Building Insurance (HBI) claims, strata records, or any future buyer or insurer review.',
      ]}
      features={[
        {
          icon: Search,
          title: 'Defect diagnosis',
          description:
            'On-site assessment. Crack pattern analysis, movement monitoring, root cause identification. Engineer involvement on anything significant. Comprehensive defect mapping before repair scope.',
        },
        {
          icon: AlertTriangle,
          title: 'Crack stitching and stabilisation',
          description:
            'Stainless helical rod stitching across structural cracks. Wall anchors for bulging or leaning walls. Stitch plates for severe damage. Concealed under new pointing.',
        },
        {
          icon: Wrench,
          title: 'Lintel and structural element replacement',
          description:
            'Failed steel lintels cut out and replaced with hot-dip galvanised or stainless. Concrete lintel replacement. Timber bearer replacement. Full structural section rebuild where needed.',
        },
        {
          icon: FileCheck,
          title: 'Engineer-certified',
          description:
            'Every structural repair has engineer scope, site inspections, and completion certificate. Documentation for property file, builder warranty claims, HBI, insurance and strata records.',
        },
        {
          icon: CheckCircle,
          title: 'Warranty and insurance claims',
          description:
            'Rectification work for defects identified in building inspection reports, HBI claims, NCAT orders, or builder warranty claims. Clear scope, engineer compliance, documented closeout.',
        },
      ]}
      whatWeUse={[
        {
          title: 'Engineer-specified repair scope',
          detail:
            'For each defect, the engineer specifies the repair method, materials, and acceptance criteria. We quote against that scope. No substitution of cheaper materials, no skipping steps.',
        },
        {
          title: 'Helifix stainless helical rods',
          detail:
            'Industry standard for masonry crack stitching since the 1990s. 6mm to 10mm stainless rod set into bed joints in epoxy grout. Sized and spaced to engineer drawing.',
        },
        {
          title: 'Two-part structural epoxy',
          detail:
            'Sika or BASF structural epoxy for crack injection in concrete. Low-viscosity penetrates fine cracks, cures to higher strength than the surrounding concrete. Standard for stable cracks.',
        },
        {
          title: 'Hot-dip galvanised or stainless lintels',
          detail:
            'Replacement structural steel after corrosion failure. Hot-dip galvanised for hidden interior work, stainless for exposed or coastal. Sized to engineer spec.',
        },
        {
          title: 'Acrow propping during repairs',
          detail:
            'Adjustable steel props rated to the engineer-specified load. Set up before any cutting starts. Stay in place until the new structure has cured and taken load.',
        },
        {
          title: 'Lab testing where required',
          detail:
            'On bigger jobs, cube samples of repair mortar or micro-concrete are sent to a NATA-accredited lab. Results documented for engineer sign-off and for the structural file.',
        },
      ]}
      processSteps={[
        {
          step: 'Review defect report',
          detail:
            'We work from the defect report (engineer, building inspector, NCAT order, HBI assessment, builder warranty inspection). Each defect understood before site visit.',
        },
        {
          step: 'Site verification',
          detail:
            'On-site walk-through of each defect. Confirm location, severity, recommended method. Sometimes scope needs adjustment if defects have progressed since the report was written.',
        },
        {
          step: 'Quote and approval',
          detail:
            'Itemised quote per defect. Method, materials, cost, timeline per line item. For insurance or warranty claims, the assessor or insurer signs off before work proceeds.',
        },
        {
          step: 'Propping and protection',
          detail:
            'Acrow props installed where any structural element is being cut. Adjacent rooms and finishes protected. Dust control set up. Engineer attends pre-start meeting for significant work.',
        },
        {
          step: 'Execute the repair',
          detail:
            'Crack stitching, lintel replacement, wall rebuild, epoxy injection, whatever the scope specifies. Engineer attends at key inspection points. Photos taken throughout for the file.',
        },
        {
          step: 'Engineer certify and close out',
          detail:
            'Engineer inspects on completion and issues completion certificate. Reinstatement finishes (render, paint) applied. Documentation package handed over including engineer certificate, photos and warranty.',
        },
      ]}
      faqs={[
        {
          question: 'What counts as a structural defect?',
          answer:
            'Anything affecting the structural capacity of the building. Cracking in load-bearing walls, failed lintels above openings, bowing or leaning walls beyond tolerance, foundation movement, inadequate concrete cover, missing reinforcement, beam or slab deflection beyond limits. Cosmetic cracks under 0.5mm or that do not penetrate the wall are not structural defects.',
        },
        {
          question: 'Can defects in new buildings be fixed?',
          answer:
            'Yes. Defects in buildings less than 6 years old are covered by the statutory builder warranty under the NSW Home Building Act. Defects in buildings less than 7 years old may be covered by Home Building Insurance (HBI) where the original builder is insolvent. We carry out the rectification work to the engineer specification with full documentation for the warranty or insurance claim.',
        },
        {
          question: 'How do you repair bowing walls?',
          answer:
            'Minor bowing (up to 30mm out of plumb) can be stabilised with stainless steel anchor ties drilled through the wall and anchored to the structure behind. Moderate bowing may need helical rod stitching combined with anchor ties. Severe bowing (over 60mm or with visible cracking) usually requires partial demolition and rebuild of the affected section. Engineer specifies method.',
        },
        {
          question: 'How long does structural defect repair take?',
          answer:
            'Single crack stitching is 1 to 3 days. Single lintel replacement is 2 to 5 days. Multiple defects on a residential building is 2 to 8 weeks. Major structural rectification on a multi-unit or commercial building is 2 to 9 months. Engineer scope adds 2 to 6 weeks at the front.',
        },
        {
          question: 'Do I need an engineer report before quoting?',
          answer:
            'For minor defects (single cracks, one lintel), we can usually proceed without a formal engineer report and bring an engineer in as needed during construction. For significant or multi-element defects, an engineer report is required before we can quote properly. We can recommend engineers we work with or work to a report you already have.',
        },
        {
          question: 'What does structural defect rectification cost?',
          answer:
            'Crack stitching is 250 to 500 dollars per linear metre. Lintel replacement is 1500 to 3500 dollars per opening. Wall section rebuild is 1500 to 3500 dollars per square metre. Major defect rectification on a typical residential building is 25,000 to 100,000 dollars. Engineer fees 2500 to 12,000 dollars on top. Fixed quote per defect.',
        },
      ]}
    />
  );
};

export default StructuralDefectPage;
