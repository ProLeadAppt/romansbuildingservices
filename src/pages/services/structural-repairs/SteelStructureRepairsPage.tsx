import { ServicePageTemplate } from '@/components/ServicePageTemplate';
import { getSiblingServices } from '@/data/serviceHierarchy';
import { Wrench, ShieldCheck, Paintbrush, Replace, Search } from 'lucide-react';

const SteelStructureRepairsPage = () => {
  const siblings = getSiblingServices('structural-repairs', 'steel-structure-repairs');
  return (
    <ServicePageTemplate
      title="Steel Structure Repairs"
      metaTitle="Steel Lintel & Structural Steel Repairs Sydney | Romans Building Services"
      metaDescription="Sydney steel structure repairs by Minas Romanakis. Corroded lintels, structural beams, brick reinstatement. Hot-dip galvanised and stainless replacements."
      heroImage="/gallery/thumbs/romansstone_1700556302_3240823616257706375_2394650725.webp"
      parentService={{ title: 'Structural Repairs', href: '/services/structural-repairs' }}
      siblingServices={siblings}
      breadcrumbs={[
        { label: 'Services', href: '/services' },
        { label: 'Structural Repairs', href: '/services/structural-repairs' },
        { label: 'Steel Structure Repairs', href: '' },
      ]}
      intro={[
        'Steel inside masonry walls rusts. Always has. Steel lintels above Federation and Victorian windows, structural steel inside the brick walls of inter-war and post-war houses, cavity wall ties on every cavity wall built between the 1940s and the 1990s. Sydney conditions (humid summers, salt air, occasional flooding) accelerate the corrosion. Once steel starts rusting, it expands to about seven times its original volume, and that expansion cracks the surrounding masonry from inside.',
        'The fix is to remove the corroded steel and replace it with hot-dip galvanised or stainless, then repair the damaged brick above. Sometimes the steel can be saved by treating the rust and applying protective coatings. We use whichever approach the steel condition justifies. Most of the time it is replacement, because by the time the rust is visible from outside, the steel inside is well past treatment.',
        'Most of our steel work is residential. Steel lintels above windows on terraces, Federation cottages and post-war houses across the inner suburbs and Eastern Suburbs. We also do commercial structural steel in older industrial buildings being adapted to apartments, and cavity wall tie replacement on multi-storey brick walls.',
      ]}
      features={[
        {
          icon: Search,
          title: 'Corrosion assessment',
          description:
            'On-site inspection. Visible rust staining, horizontal cracks above openings, bowing or stepped cracks in the brick face. For hidden steel we use endoscopes or remove a brick to inspect.',
        },
        {
          icon: Replace,
          title: 'Lintel and beam replacement',
          description:
            'Corroded lintels cut out and replaced. Brick course above propped, new lintel slid in, brick reinstated over. Hot-dip galvanised for hidden, stainless for exposed or coastal.',
        },
        {
          icon: Wrench,
          title: 'Rust treatment (where possible)',
          description:
            'For steel that still has adequate cross-section, rust removed by wire brushing or grit blasting back to bright metal. Rust converter applied. Two-coat protective coating system.',
        },
        {
          icon: Paintbrush,
          title: 'Protective coatings',
          description:
            'Two-pack epoxy primer plus polyurethane topcoat. 25 to 30 year life on new steel. Critical on exposed steel in coastal locations.',
        },
        {
          icon: ShieldCheck,
          title: 'Brick reinstatement',
          description:
            'Brickwork above and around replaced steel rebuilt and pointed to match. Heritage matching where applicable. Damage from the rust is repaired as part of the same job.',
        },
      ]}
      whatWeUse={[
        {
          title: 'Hot-dip galvanised steel angle',
          detail:
            'For hidden interior lintels. Hot-dipped after fabrication so the cut ends are also coated. 40 to 50 year life inside a properly weatherproofed wall.',
        },
        {
          title: 'Marine-grade stainless steel',
          detail:
            'Grade 316 stainless for exposed lintels, coastal locations and any steel in masonry that gets wet regularly. More expensive but lasts the life of the building.',
        },
        {
          title: 'Two-pack epoxy primer and polyurethane topcoat',
          detail:
            'Industrial protective coating system for new or treated steel. Epoxy primer for adhesion and corrosion protection, polyurethane topcoat for UV and weather resistance. 20 to 30 year life.',
        },
        {
          title: 'Stainless cavity wall ties',
          detail:
            'For cavity wall tie failure (very common on 1940s to 1990s brick veneer construction). Grade 316 stainless wall ties drilled and resin-anchored through both leaves of the wall. Replaces failed galvanised ties.',
        },
        {
          title: 'Acrow props for support',
          detail:
            'Adjustable steel props rated to the load above. Set up before the brick course above the lintel comes out. Stay in place until new lintel is installed and brick reinstated.',
        },
        {
          title: 'Lab analysis for hidden steel',
          detail:
            'For commercial and strata jobs where the steel condition is unclear, we send sample material for lab analysis. Cross-section measurement, remaining tensile capacity, recommended action.',
        },
      ]}
      processSteps={[
        {
          step: 'Inspect and diagnose',
          detail:
            'External inspection of cracking patterns, rust staining, brick displacement. For hidden steel we remove a brick to inspect, or use an endoscope through a small hole. Photos taken for the engineer.',
        },
        {
          step: 'Engineer scope (if significant)',
          detail:
            'For structural steel beyond residential lintels, an engineer specifies the replacement steel size and method. For a single residential lintel under a 1.8 metre opening, an engineer is not usually required.',
        },
        {
          step: 'Prop the load above',
          detail:
            'Acrow props installed under the brick course above the lintel. Sized to the load above. Stay in place until the new lintel is in and the brick is back. Without proper propping the brick comes down.',
        },
        {
          step: 'Remove brick and old steel',
          detail:
            'Brick course above lintel carefully removed and stacked for re-use. Old corroded lintel cut out and removed. Brick faces around the opening cleaned of rust staining and old mortar.',
        },
        {
          step: 'Install new lintel',
          detail:
            'New hot-dip galv or stainless lintel slid into position. Bedded on fresh mortar. End bearing checked. Levels confirmed before brick goes back over.',
        },
        {
          step: 'Reinstate brick and finish',
          detail:
            'Brick course rebuilt above the lintel, matched to the surrounding wall. Joints pointed to match. Acrow props removed once new lintel is supporting the load. Rust-stained brick faces cleaned with poultice if needed.',
        },
      ]}
      faqs={[
        {
          question: 'How do I know if my steel lintels are corroding?',
          answer:
            'Rust staining on brickwork below windows or above doorways. Horizontal cracks at the lintel level. Bowing in the bricks above openings. Bricks lifting up from the lintel. All of these are classic signs of lintel rust pushing the surrounding masonry apart. Common on every house built between about 1900 and 1980.',
        },
        {
          question: 'Should I use galvanised or stainless steel for replacements?',
          answer:
            'For internal lintels in residential buildings, hot-dip galvanised is fine and 50 percent cheaper. For external or partly exposed lintels, stainless is the better choice. For anything within 5km of the coast or in known damp locations, stainless is essential. Galvanised will rust again in those conditions within 20 to 30 years.',
        },
        {
          question: 'Can corroded steel be repaired or does it need replacing?',
          answer:
            'Depends on the cross-section loss. Up to about 15 percent loss, we can usually clean back to bright metal, treat and coat. Beyond that the steel has lost too much capacity and replacement is the only safe option. We measure the remaining section before making the call.',
        },
        {
          question: 'How long does steel lintel replacement take?',
          answer:
            'A single window lintel is two to three days. A run of three or four windows on a Federation facade is one to two weeks. A full house re-lintel of every original opening is three to five weeks. The brick reinstatement is most of the time, not the lintel installation itself.',
        },
        {
          question: 'Do I need to worry about cavity wall ties?',
          answer:
            'If your house is brick veneer or cavity brick and was built between 1940 and 1995, the wall ties are galvanised steel and they have a finite life. Look for stepped cracking in the outer brick leaf, bricks bulging outward, or horizontal cracks at regular vertical spacing. Wall tie replacement is a common job we do. Stainless replacement ties get drilled and resin-anchored through both leaves of the wall.',
        },
        {
          question: 'What does steel structure repair cost?',
          answer:
            'A single window lintel replacement is 1500 to 3500 dollars including brick removal and reinstatement. Hot-dip galv is cheaper than stainless. A full facade of lintel replacements on a Federation house is 12,000 to 30,000 dollars. Wall tie replacement is around 80 to 150 dollars per tie. Fixed quote after inspection.',
        },
      ]}
    />
  );
};
export default SteelStructureRepairsPage;
