import { ServicePageTemplate } from '@/components/ServicePageTemplate';
import { getSiblingServices } from '@/data/serviceHierarchy';
import { ArrowDownToLine, Search, Droplets, ShieldCheck, FileCheck } from 'lucide-react';

const SettlementStabilisationPage = () => {
  const siblings = getSiblingServices('foundation-repairs', 'settlement-stabilisation');

  return (
    <ServicePageTemplate
      title="Settlement Stabilisation"
      metaTitle="Sydney Building Settlement Stabilisation | Romans"
      metaDescription="Sydney settlement stabilisation by Minas Romanakis. Underpinning, resin injection, screw piles, drainage. Stop the movement, fix the cause, repair the cracks."
      heroImage="/gallery/thumbs/romansstone_1451942270_1155297957273885284_2394650725.webp"
      parentService={{ title: 'Foundation Repairs', href: '/services/foundation-repairs' }}
      siblingServices={siblings}
      breadcrumbs={[
        { label: 'Services', href: '/services' },
        { label: 'Foundation Repairs', href: '/services/foundation-repairs' },
        { label: 'Settlement Stabilisation', href: '' },
      ]}
      intro={[
        'Settlement is when the soil under the building compresses, washes out, shrinks, or shifts. The building drops or tilts because the foundation is no longer evenly supported. You see it as diagonal stepped cracks in brick walls, doors going out of square, floors that slope, render fracturing the same way every winter. Active settlement gets worse every season until the cause is dealt with.',
        'In Sydney the most common causes are reactive clay soils (shrinking in dry summers and swelling in wet winters), large eucalypt or paperbark roots within 5 to 10 metres of the building drawing moisture out of the soil, plumbing leaks under or alongside the building washing out fines, and poor surface drainage delivering rainwater straight to the footing line. Most settlement jobs involve a combination.',
        'We stabilise settled buildings with underpinning (extending the foundation to deeper, more stable ground), resin injection (geopolymer or polyurethane expanding resin injected under the footing to fill voids and stabilise the soil), screw piles (driven to stable strata), or drainage improvements depending on the cause and soil type. Engineer involvement on every stabilisation job. Most jobs also need crack repair above once the building is stable.',
      ]}
      features={[
        {
          icon: Search,
          title: 'Settlement investigation',
          description:
            'Crack monitors installed for 3 to 6 months to confirm whether movement is active or stable. Level surveys, soil sampling, drainage and plumbing investigation. Engineer report on findings.',
        },
        {
          icon: ArrowDownToLine,
          title: 'Foundation stabilisation',
          description:
            'Underpinning, resin injection, screw piles or mini piles depending on soil and access. Each method engineered for the specific site. Foundation locked in place against further movement.',
        },
        {
          icon: Droplets,
          title: 'Drainage and water control',
          description:
            'Subsoil ag drainage, surface stormwater diversion, leaking plumbing fixes. Removing the water that caused the settlement so it does not happen again.',
        },
        {
          icon: ShieldCheck,
          title: 'Crack repair after stabilisation',
          description:
            'Once foundation movement has stopped, structural cracks are stitched with helical rods and cosmetic cracks are repointed or filled. We wait 3 to 6 months after stabilisation to confirm movement has stopped.',
        },
        {
          icon: FileCheck,
          title: 'Monitoring and documentation',
          description:
            'Crack monitors before and after work, level surveys at each stage, photos throughout. Documentation handed over for the property file. Useful for any future buyer or insurer.',
        },
      ]}
      whatWeUse={[
        {
          title: 'Avongard crack monitors',
          detail:
            'Two-piece transparent plastic monitors mounted across cracks. Calibrated grid shows movement to within 0.1mm. We read monthly and produce a movement chart. Three to six months establishes whether settlement is ongoing.',
        },
        {
          title: 'Soil sampling and borehole investigation',
          detail:
            'Hand auger or test pit excavation by geotechnical engineer. Soil identification (clay, sand, fill), moisture content, bearing capacity, depth to stable strata. Informs the choice of stabilisation method.',
        },
        {
          title: 'Mass concrete or screw pile underpinning',
          detail:
            'Standard stabilisation method where existing footings have settled. See underpinning page for detail. Method chosen to suit soil and access.',
        },
        {
          title: 'Expanding resin injection (Uretek, Geobear)',
          detail:
            'Polyurethane or geopolymer resin injected through small holes drilled through the slab or footing. Expands to fill voids and stabilise soil. Works well on sand and gravel. Limited effect on heavy clay.',
        },
        {
          title: 'Stormwater and subsoil drainage',
          detail:
            'Ag pipe in gravel and geofabric along foundations. Surface stormwater outlets and diversion. Connected to street stormwater. Often the most cost-effective intervention if the cause is water.',
        },
        {
          title: 'Plumbing leak detection and repair',
          detail:
            'Acoustic leak detection or video inspection of underfloor plumbing. Failed cast iron, copper or AC pipes replaced before any structural work. Surprisingly common cause of settlement and easy to miss.',
        },
      ]}
      processSteps={[
        {
          step: 'Initial assessment and monitoring',
          detail:
            'Site visit. Crack pattern photographed and measured. Crack monitors installed. Level survey done. Drainage and plumbing inspected. Initial cause hypothesis formed.',
        },
        {
          step: 'Monitor for 3 to 6 months',
          detail:
            'Movement read monthly. If active, the cause needs to be addressed before stabilisation. If now stable, just the structural repair is needed without major foundation work. This step saves money on the right cases.',
        },
        {
          step: 'Engineer scope',
          detail:
            'Engineer specifies the stabilisation method based on soil conditions, settlement extent, cause, and access. Soil testing done where needed. Repair method documented.',
        },
        {
          step: 'Address the cause first',
          detail:
            'Plumbing leaks fixed, drainage installed, trees removed or root barriers installed. Failing to address the cause means the new foundation work will be undermined too.',
        },
        {
          step: 'Execute stabilisation',
          detail:
            'Underpinning or resin injection or piles, per engineer scope. Engineer inspects at key stages. Building is now structurally locked in place against further movement.',
        },
        {
          step: 'Continued monitoring then crack repair',
          detail:
            'Crack monitors stay in place for a further 3 to 6 months after stabilisation. Once readings confirm zero movement, structural cracks are stitched and cosmetic repairs completed. Building handed over fully repaired.',
        },
      ]}
      faqs={[
        {
          question: 'What is the difference between settlement and subsidence?',
          answer:
            'Both refer to ground movement under a building, but settlement usually means compression of the soil under the weight of the building over time. Subsidence usually means ground movement from external causes like erosion, tree roots, undermining or mining. The repairs are similar but the cause investigation is different. In practice we use the terms fairly interchangeably.',
        },
        {
          question: 'Can resin injection fix settlement?',
          answer:
            'In some cases, yes. Expanding polyurethane or geopolymer resin is injected under the slab or footing through small drilled holes. It expands, fills voids, and compresses the surrounding soil. Works well on sandy and gravelly soils where the resin can spread and densify. Limited effect on heavy reactive clay. Engineer specifies whether resin is appropriate for the soil.',
        },
        {
          question: 'How quickly does settlement need to be fixed?',
          answer:
            'Active settlement (ongoing movement) needs prompt attention because it usually gets worse. Each season of movement opens cracks further and damages more wall connections. Settlement that has stabilised (no movement for 6+ months) is less urgent but still worth repairing before any future event reactivates it. We use crack monitors to distinguish active from stable.',
        },
        {
          question: 'What about the trees nearby?',
          answer:
            'Large eucalypts and paperbarks within 5 to 10 metres of the building are a major cause of settlement on reactive clay soils. Tree removal is one option but it can cause heave (the opposite problem) when the clay rehydrates. Root barriers (vertical HDPE membrane installed in a trench between the tree and the building) are usually a better solution. Engineer guides the decision.',
        },
        {
          question: 'How long does settlement stabilisation take?',
          answer:
            'Investigation and monitoring: 3 to 6 months. Engineer scope and council approval: 4 to 12 weeks. Underpinning or other stabilisation work: 2 to 12 weeks depending on method and extent. Post-work monitoring before crack repair: 3 to 6 months. Total project from first assessment to final repair: 9 to 18 months for a thorough job.',
        },
        {
          question: 'What does settlement stabilisation cost?',
          answer:
            'Investigation and monitoring: 3000 to 8000 dollars. Engineer scope: 2500 to 6000 dollars. Mass concrete underpinning: 30,000 to 120,000 dollars depending on extent. Resin injection: 15,000 to 60,000 dollars. Screw piles: 25,000 to 90,000 dollars. Drainage improvements: 5,000 to 30,000 dollars. Crack repair after stabilisation: 5,000 to 30,000 dollars. Total project costs typically 40,000 to 200,000 dollars for a residential settlement scope.',
        },
      ]}
    />
  );
};

export default SettlementStabilisationPage;
