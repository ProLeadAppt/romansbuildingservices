import { ServicePageTemplate } from '@/components/ServicePageTemplate';
import { getSiblingServices } from '@/data/serviceHierarchy';
import { PaintBucket, Layers, Footprints, Timer, ThumbsUp } from 'lucide-react';

const ConcreteResurfacingPage = () => {
  const siblings = getSiblingServices('concrete-repairs', 'concrete-resurfacing');

  return (
    <ServicePageTemplate
      title="Concrete Resurfacing"
      metaTitle="Sydney Concrete Resurfacing | Romans"
      metaDescription="Sydney concrete resurfacing by Minas Romanakis. Polymer-modified overlays, non-slip finishes, decorative coatings. Driveways, pool surrounds, balconies."
      heroImage="/gallery/thumbs/romansstone_1576003161_2195996136622601152_2394650725.webp"
      parentService={{ title: 'Concrete Repairs', href: '/services/concrete-repairs' }}
      siblingServices={siblings}
      breadcrumbs={[
        { label: 'Services', href: '/services' },
        { label: 'Concrete Repairs', href: '/services/concrete-repairs' },
        { label: 'Concrete Resurfacing', href: '' },
      ]}
      intro={[
        'If the underlying concrete is structurally sound but the surface is worn, pitted, stained or rough, resurfacing brings it back without ripping out the whole slab. We apply polymer-modified overlay systems that bond to the prepared substrate and give you a new top layer. Driveways, pool surrounds, paths, balconies, carpark decks, commercial floors. Resurfacing is significantly faster and cheaper than full replacement.',
        'The technique is straightforward but the substrate prep is what makes or breaks the job. The existing concrete has to be ground, scarified or shot-blasted to remove laitance and create a mechanical key. Existing cracks have to be assessed (active cracks come back through any overlay, stable cracks can be sealed). Old coatings have to be stripped. The substrate has to be primed for bonding. Get any of this wrong and the overlay delaminates within a year.',
        'Most of our resurfacing work is residential driveways and pool surrounds, plus commercial floors and carpark decks. Pool surrounds usually want a non-slip textured finish for safety. Driveways and commercial floors usually want a smooth or lightly textured finish for cleanability. We work with both polymer-modified cementitious overlay systems and acrylic-modified spray-on systems depending on what suits the job.',
      ]}
      features={[
        {
          icon: PaintBucket,
          title: 'Overlay systems',
          description:
            'Polymer-modified cementitious overlays from 5mm to 50mm thick. Branded systems from manufacturers like Sika, Mapei and BASF. Trowelled, sprayed or stamped depending on the desired finish.',
        },
        {
          icon: Layers,
          title: 'Surface preparation',
          description:
            'Grinding, scarifying or shot-blasting to remove laitance and create mechanical key. Existing coatings stripped. Cracks repaired. Substrate primed. Done properly because bad prep equals failed overlay.',
        },
        {
          icon: Footprints,
          title: 'Non-slip finishes',
          description:
            'Textured or grit-broadcast finishes for pool surrounds, ramps and high-traffic areas. Meets AS 4586 slip resistance standards. Critical for wet areas.',
        },
        {
          icon: Timer,
          title: 'Fast turnaround',
          description:
            'Most residential overlay jobs are done in two to four days. Rapid-cure options available for commercial spaces that need to be back in service the next morning.',
        },
        {
          icon: ThumbsUp,
          title: 'Cost-effective vs replacement',
          description:
            'Typically 30 to 60 percent of the cost of full removal and replacement. Avoids demolition, dust, dumping fees and several weeks of disruption.',
        },
      ]}
      whatWeUse={[
        {
          title: 'Polymer-modified cementitious overlays',
          detail:
            'Sika Sikafloor, Mapei Mapefloor, BASF MasterTop or equivalent. 5 to 25mm trowelled or sprayed. Bonds strongly to prepared concrete. Smooth or stamped finish.',
        },
        {
          title: 'Acrylic-modified spray-on systems',
          detail:
            'For thinner decorative overlays (1 to 5mm). Spray-applied with hopper gun, textured by knockdown or release paper. Common for pool surrounds with stencilled patterns.',
        },
        {
          title: 'Shot blast or grinding for prep',
          detail:
            'Shot blasting (metal beads thrown at the surface and recovered) for large areas. Diamond grinding for smaller jobs. Removes laitance and creates the CSP (concrete surface profile) needed for proper bonding.',
        },
        {
          title: 'Crack repair before overlay',
          detail:
            'Active cracks repaired before overlay goes on, otherwise they reflect through the new surface. Static cracks bridged with fibreglass or geotextile membrane embedded in the overlay.',
        },
        {
          title: 'Penetrating bonding primer',
          detail:
            'Manufacturer-specified primer applied to prepared substrate before overlay. Penetrates into the prepared surface and provides the chemical key between old concrete and new overlay.',
        },
        {
          title: 'Sealers and topcoats',
          detail:
            'Penetrating silane or siloxane sealers for stone-look finishes. Polyurethane or epoxy topcoats for commercial floors needing chemical resistance. UV-stable acrylic for exterior decorative work.',
        },
      ]}
      processSteps={[
        {
          step: 'Substrate assessment',
          detail:
            'On-site inspection of the existing slab. Sound testing for delamination. Crack mapping to identify active vs static cracks. Cover meter for any structural concerns. Photos and measurements.',
        },
        {
          step: 'Substrate preparation',
          detail:
            'Existing coatings stripped. Shot blasting or diamond grinding to remove laitance and create CSP 3 or CSP 4 (concrete surface profile) per ICRI guidelines. Substrate vacuumed clean of dust.',
        },
        {
          step: 'Crack repair and detailing',
          detail:
            'Active cracks chased out and filled with structural epoxy. Static cracks treated with flexible sealant and bridged with reinforcement. Control joints reinstated in the overlay design.',
        },
        {
          step: 'Prime the substrate',
          detail:
            'Manufacturer-specified bonding primer applied to prepared substrate. Penetrating type that soaks into the prepared concrete. Allowed to tack-cure to a specified state before overlay goes on.',
        },
        {
          step: 'Apply the overlay',
          detail:
            'Overlay trowelled, sprayed or screeded to design thickness. For decorative work, textured while still wet (stamped, broom-finished, knockdown). For commercial floors, screeded and trowelled to spec.',
        },
        {
          step: 'Cure and finish',
          detail:
            'Cured under wet curing membrane or sealed early per manufacturer instruction. Sealer applied after the overlay reaches required strength (typically 7 days). UV-stable topcoat for exterior, traffic-grade for commercial.',
        },
      ]}
      faqs={[
        {
          question: 'How thick is a concrete overlay?',
          answer:
            'Spray-applied decorative overlays are 1 to 5mm. Trowelled cementitious overlays are 5 to 25mm. Self-levelling industrial overlays are 5 to 15mm. Thickness depends on the system, the desired finish, and how uneven the existing substrate is. We recommend based on the job conditions.',
        },
        {
          question: 'Will the overlay crack?',
          answer:
            'If the base slab moves, an overlay can reflect that movement. Active cracks in the substrate are addressed before overlay goes on, otherwise they will come through within a year. Static cracks can be bridged with reinforcement embedded in the overlay. We assess the substrate carefully before quoting because crack reflection is the most common cause of overlay failure.',
        },
        {
          question: 'How long does concrete resurfacing last?',
          answer:
            'A properly prepared and applied overlay lasts 15 to 30 years on residential surfaces, 10 to 20 years on commercial floors with heavy traffic, 8 to 15 years on pool surrounds (UV and chlorine accelerate wear). The surface prep is the most important factor in lifespan.',
        },
        {
          question: 'Can you match an existing finish or pattern?',
          answer:
            'Yes. Decorative overlays can be stamped, textured, stencilled or coloured to match existing surrounds. Sample patches done before bulk work so the colour and texture match is signed off. Concrete-look, sandstone-look, paver-look patterns all possible.',
        },
        {
          question: 'How long does the work take?',
          answer:
            'A typical residential driveway resurfacing is 2 to 4 days including prep, overlay and curing. A pool surround is 3 to 5 days. Commercial floors depend on area. Rapid-cure systems available where the area needs to be back in service within 24 hours.',
        },
        {
          question: 'What does concrete resurfacing cost?',
          answer:
            'Standard cementitious overlay is around 70 to 150 dollars per square metre installed. Decorative stamped overlays are 120 to 250 dollars per square metre. Commercial epoxy or polyurethane systems are 80 to 200 dollars per square metre depending on thickness and topcoat. Fixed quote after site inspection.',
        },
      ]}
    />
  );
};

export default ConcreteResurfacingPage;
