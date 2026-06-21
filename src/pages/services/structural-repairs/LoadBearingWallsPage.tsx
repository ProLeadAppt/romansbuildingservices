import { ServicePageTemplate } from '@/components/ServicePageTemplate';
import { getSiblingServices } from '@/data/serviceHierarchy';
import { Columns, ShieldCheck, Ruler, HardHat, Search } from 'lucide-react';

const LoadBearingWallsPage = () => {
  const siblings = getSiblingServices('structural-repairs', 'load-bearing-walls');
  return (
    <ServicePageTemplate
      title="Load-Bearing Wall Repairs"
      metaTitle="Sydney Load-Bearing Wall Repairs | Romans"
      metaDescription="Sydney load-bearing wall repairs by Minas Romanakis. Crack stitching, pier rebuilds, lintel replacement and helibar reinforcement. Engineer-certified."
      heroImage="/gallery/thumbs/romansstone_1574104761_2180071211265247711_2394650725.webp"
      parentService={{ title: 'Structural Repairs', href: '/services/structural-repairs' }}
      siblingServices={siblings}
      breadcrumbs={[
        { label: 'Services', href: '/services' },
        { label: 'Structural Repairs', href: '/services/structural-repairs' },
        { label: 'Load-Bearing Wall Repairs', href: '' },
      ]}
      intro={[
        'Load-bearing walls hold the building up. The roof, the upper floors, the things sitting on the upper floors. When a load-bearing wall cracks, leans or settles, everything above it moves with it. Doors stop closing, ceilings sag, render starts cracking the same way every winter. Catch it early and the repair is straightforward. Leave it and it gets expensive.',
        'We repair load-bearing walls three ways depending on what is wrong. Active cracking gets stitched with stainless helical rods set into the bed joints across the crack. Bulging or leaning walls get tied back to the structure with stainless wall anchors. Walls that have crushed or collapsed get cut out and rebuilt section by section with engineered propping above.',
        'Romans holds a full NSW builders licence for structural masonry. We coordinate with structural engineers on every load-bearing repair, and all work is signed off and to AS 3700. Minas is on site for any structural job. Most of our work is residential terraces and houses in Sydney, plus commercial buildings and strata blocks where load-bearing repair is part of remedial works.',
      ]}
      features={[
        {
          icon: Search,
          title: 'Structural diagnosis',
          description:
            'On-site inspection, crack pattern analysis, identification of the underlying cause (foundation movement, lintel failure, overloading, wall tie failure). We coordinate engineer involvement for anything significant.',
        },
        {
          icon: Columns,
          title: 'Temporary propping',
          description:
            'Adjustable steel acrow props sized to the load above. Set up before any cutting starts. Remains in place until the new structure is taking load. No exceptions.',
        },
        {
          icon: HardHat,
          title: 'Section rebuild',
          description:
            'Failed wall sections cut out cleanly and rebuilt course by course. Bonded into the surrounding wall with stainless wall ties. Type S structural mortar to engineered strength spec.',
        },
        {
          icon: ShieldCheck,
          title: 'Helical and carbon reinforcement',
          description:
            'Stainless helical rod stitching for active cracks. Carbon fibre wrap for higher-load applications. Engineered stitch plates for the heavier stuff. All concealed under new pointing.',
        },
        {
          icon: Ruler,
          title: 'Engineer signed off',
          description:
            'Structural engineer scope, design certificate, site inspections during construction, and completion certificate. Paperwork stays with the property for any future buyer or insurer.',
        },
      ]}
      whatWeUse={[
        {
          title: 'Stainless helical rod (Helifix or similar)',
          detail:
            '6mm to 10mm stainless steel helical rod, set into bed joints in epoxy or polyester grout. Stitches across active cracks to redistribute load. Industry standard for structural masonry repair since the 1990s.',
        },
        {
          title: 'Type S structural mortar',
          detail:
            'High-strength cement mortar (M3 or M4 to AS 3700 depending on engineer spec). Mixed on site in measured batches. Cube samples taken on bigger jobs for the engineer to test.',
        },
        {
          title: 'Stainless steel wall anchors',
          detail:
            'For tying bulging or leaning walls back to interior structure. Drilled through the wall and anchored into floor joists or back-up masonry. Tightened to engineer-specified torque.',
        },
        {
          title: 'Acrow props for temporary support',
          detail:
            'Adjustable steel props rated for the load above. Sized and positioned to engineer drawings. Stay in place from before cutting starts until the new structure has cured and taken load.',
        },
        {
          title: 'Carbon fibre fabric (where required)',
          detail:
            'For high-load reinforcement where helical rods alone are not enough. Epoxy-bonded carbon fibre fabric applied to the wall and covered with new render. Adds significant tensile strength.',
        },
        {
          title: 'Engineered stitch plates',
          detail:
            'Stainless plate stitches across the most serious cracks. Engineered and signed off. Fully concealed under the next coat of mortar or render. Used where the wall has actively moved and needs to be locked together.',
        },
      ]}
      processSteps={[
        {
          step: 'Inspection and engineer report',
          detail:
            'On-site visit. We map the crack pattern, photograph each defect, check the wall plumb with a level, and look at what is above and below. For significant cracking the engineer comes out and writes a report before we quote.',
        },
        {
          step: 'Engineer scope and design',
          detail:
            'Engineer writes a repair specification. Helical rod spacing, wall anchor positions, mortar mix, any propping required. We quote to that scope. Council approval is usually needed for any work that changes the load path.',
        },
        {
          step: 'Propping and protection',
          detail:
            'Acrow props installed to the engineer drawing. Adjacent rooms and finishes protected with sheeting. Dust extraction set up if we are working inside. Site secured.',
        },
        {
          step: 'Cutting and reinforcement',
          detail:
            'For crack stitching, bed joints are raked out to the depth specified by the engineer (usually 30 to 60mm). Helical rods set in grout. For section rebuilds, failed brick cut out, new brick laid up bonded into the surrounding wall.',
        },
        {
          step: 'Engineer inspection',
          detail:
            'Before any work is covered up, the engineer inspects on site and signs off that the repair matches the design. Photos taken for the structural certificate. Without this sign-off the repair is not certifiable.',
        },
        {
          step: 'Reinstate finishes and remove props',
          detail:
            'Mortar joints pointed to match surrounding wall. Render and paint reinstated. Acrow props removed in sequence as the new structure takes load. Completion certificate issued for the property file.',
        },
      ]}
      faqs={[
        {
          question: 'How do I know if a wall is load-bearing?',
          answer:
            'Walls running perpendicular to ceiling joists are usually load-bearing. Walls running underneath a beam or wall above are load-bearing. Walls that go from foundation to roof are load-bearing. Walls between rooms that only support the ceiling on one side are usually non-bearing. We always confirm with a structural assessment before any work starts, never by assumption.',
        },
        {
          question: 'Can you remove part of a load-bearing wall?',
          answer:
            'Yes, but it needs proper engineering. We install a steel beam or concrete lintel to take the load before cutting out the wall below. Beam size is engineered to the span and the load above. Council approval is required. Typical scope is two to three weeks including engineering, propping, beam installation and reinstatement.',
        },
        {
          question: 'How long does a load-bearing wall repair take?',
          answer:
            'Crack stitching is one to three days depending on length and number of rods. A pier or section rebuild is one to two weeks. A wall removal with new beam is two to four weeks including engineering. Council approval (if needed) adds two to six weeks at the front.',
        },
        {
          question: 'What causes load-bearing walls to crack?',
          answer:
            'Most common in Sydney is foundation movement on clay soils, especially after dry summers. Other causes: rusted steel lintels above doors and windows expanding and pushing brick up, failed cavity wall ties letting the outer skin sag away from the inner, overloading where additional weight has been added above the wall (new floor, heavy roof tiles, second storey). The crack pattern tells you which cause.',
        },
        {
          question: 'Do I need to vacate the property during repairs?',
          answer:
            'For minor crack stitching, no. The work is contained and we can keep dust under control. For section rebuilds or wall removals, the room is unusable for the duration but the rest of the house is fine. For commercial properties we plan around tenant access.',
        },
        {
          question: 'What does load-bearing wall repair cost?',
          answer:
            'Crack stitching is 250 to 500 dollars per linear metre of crack including helical rod and pointing. Section rebuild is 1500 to 3500 dollars per square metre depending on what comes out and what goes back. Beam installation for wall removal starts around 8000 to 15,000 dollars all up. Engineering fee is usually 1500 to 4000 dollars on top.',
        },
      ]}
    />
  );
};
export default LoadBearingWallsPage;
