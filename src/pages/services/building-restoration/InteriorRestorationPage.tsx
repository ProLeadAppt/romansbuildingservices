import { ServicePageTemplate } from '@/components/ServicePageTemplate';
import { getSiblingServices } from '@/data/serviceHierarchy';
import { Flame, Layers, Hammer, Paintbrush, ShieldCheck } from 'lucide-react';

const InteriorRestorationPage = () => {
  const siblings = getSiblingServices('building-restoration', 'interior-restoration');
  return (
    <ServicePageTemplate
      title="Interior Restoration"
      metaTitle="Sydney Interior Masonry Restoration | Romans"
      metaDescription="Sydney interior masonry restoration by Minas Romanakis. Sandstone fireplaces, exposed brick walls and internal stone features with minimal dust and disruption."
      heroImage="/gallery/thumbs/romansstone_1451942270_1155297957273885284_2394650725.webp"
      parentService={{ title: 'Building Restoration', href: '/services/building-restoration' }}
      siblingServices={siblings}
      breadcrumbs={[
        { label: 'Services', href: '/services' },
        { label: 'Building Restoration', href: '/services/building-restoration' },
        { label: 'Interior Restoration', href: '' },
      ]}
      intro={[
        'Interior masonry is what gives a building character. Sandstone fireplaces in 1890s terraces. Exposed brick walls in converted warehouses. Original lime plaster in heritage homes. Stone archways, hearths, chimney breasts, and feature walls. Most of these elements were painted over at some point in the 20th century, and modern owners are stripping them back to the original. Some of them just need restoration because age, paint stripping or modern renovation has damaged the underlying material.',
        'We restore interior brick walls, sandstone fireplaces, stone archways and masonry features. We strip paint from heritage brick when the owner wants the original face back. We rebuild crumbled hearths and chimney breasts. We repair internal structural masonry where load-bearing walls need work from the inside. All with minimal dust and disruption, because most of this work happens in occupied homes and businesses.',
        'Most of our interior work is in residential terraces and converted warehouses in the inner suburbs. Paddington, Surry Hills, Redfern, Newtown, Alexandria, Marrickville. We also do commercial fit-outs and apartment conversions where heritage features are being exposed. Dust control, sequencing and clean handover matter as much as the masonry work itself.',
      ]}
      features={[
        {
          icon: Flame,
          title: 'Fireplace restoration',
          description:
            'Sandstone, brick and marble fireplaces. Cracked stone repaired, missing pieces re-cut, hearths rebuilt, joints repointed. Soot and paint stripped from the face.',
        },
        {
          icon: Layers,
          title: 'Exposed brick walls',
          description:
            'Internal brick walls cleaned, repointed, sealed if specified. Damaged bricks replaced to match. Paint stripped where the owner wants the face exposed.',
        },
        {
          icon: Hammer,
          title: 'Internal structural repairs',
          description:
            'Load-bearing wall repairs from the inside. Crack stitching, lintel replacement, helibar reinforcement where the work cannot be done externally.',
        },
        {
          icon: Paintbrush,
          title: 'Stone feature restoration',
          description:
            'Internal sandstone arches, columns, stair treads, decorative panels. Cleaned, repaired and finished to match the original tooling.',
        },
        {
          icon: ShieldCheck,
          title: 'Sealing and protection',
          description:
            'Interior masonry sealed where appropriate. Breathable matt sealers that preserve the original look while stopping dust shedding and limiting staining.',
        },
      ]}
      whatWeUse={[
        {
          title: 'Dust sheeting and plastic protection',
          detail:
            'Heavy-duty plastic sheeting over floors, furniture and adjacent surfaces. Zip-walls to seal off work areas. Negative-pressure extraction for paint stripping or render removal. Daily cleanup.',
        },
        {
          title: 'Paint strippers for brick exposure',
          detail:
            'Specialist masonry paint strippers (chemical strippers like Peel Away, Soy Gel or similar). Layered application, neutralised between coats. Never grit blasting on interior brick (destroys the face).',
        },
        {
          title: 'Lime mortar for heritage pointing',
          detail:
            'Hydraulic lime mortar tinted to match the original interior pointing colour. Most period homes used lime mortar internally and externally. Modern cement mortar against soft heritage brick traps moisture internally too.',
        },
        {
          title: 'Matched sandstone for fireplace repairs',
          detail:
            'Hawkesbury sandstone for matching most Sydney heritage fireplaces. Hand-cut to size and dressed to match the original tooling. Bedded in lime mortar.',
        },
        {
          title: 'Breathable interior sealers',
          detail:
            'Matt-finish silicate sealers (eg Keim, mineral-based) that lock dust into the masonry surface without changing the appearance. Lets the wall breathe so moisture does not get trapped.',
        },
        {
          title: 'Low-dust diamond cutting',
          detail:
            'For internal cutting (joint raking, brick removal) we use dust-extracted diamond blades on hand tools. M-class dust extractor running continuously. Critical for interior work where dust contamination is a problem.',
        },
      ]}
      processSteps={[
        {
          step: 'Initial visit and protection plan',
          detail:
            'On site to assess the scope and the access constraints. Discuss with the owner where and when work will happen. Plan dust control, protection of adjacent rooms and finishes, and daily cleanup.',
        },
        {
          step: 'Sample patches',
          detail:
            'For paint stripping, repointing colour, fireplace repair, sample patches done in a small area first. Owner signs off on the look before bulk work proceeds.',
        },
        {
          step: 'Set up protection',
          detail:
            'Dust sheets and plastic over floors and furniture. Zip-walls to seal off the work area from the rest of the house. Dust extraction set up. Footwear protection at the work area boundary.',
        },
        {
          step: 'Execute the work',
          detail:
            'Paint stripping in stages with chemical neutralisation between coats. Brick replacement and repointing. Fireplace stone repair. Structural repairs where in scope. Dust control running throughout.',
        },
        {
          step: 'Daily cleanup',
          detail:
            'At the end of every working day, work area cleaned and tools removed. Dust extractor runs for the last hour. Adjacent rooms remain useable each evening.',
        },
        {
          step: 'Final clean and handover',
          detail:
            'Full clean once the work is complete. Plastic and sheeting removed. Finishes wiped down. Walk-through with the owner. Any small defects on the punch list addressed before sign-off.',
        },
      ]}
      faqs={[
        {
          question: 'Can you restore a sandstone fireplace?',
          answer:
            'Yes. Common scope: chip out failed mortar, replace cracked or missing stone pieces with hand-cut Hawkesbury sandstone, repoint joints in lime mortar matching the original. Soot and paint stripped from the face using chemical methods that do not damage the stone. Original tooling marks preserved or matched on new pieces.',
        },
        {
          question: 'How do you minimise mess during interior work?',
          answer:
            'Plastic dust sheets over floors, furniture and adjacent surfaces. Zip-walls to seal off the work zone. Dust-extracted diamond blades on any cutting. M-class dust extractor running continuously. Daily cleanup at end of each working day so the rest of the house stays useable. Most owners find interior work less disruptive than they expect.',
        },
        {
          question: 'Can painted brick be restored to exposed brick?',
          answer:
            'In most cases, yes. We use chemical paint strippers (Peel Away, Soy Gel or similar) applied in layers and neutralised between coats. Sample patch first to confirm the brick underneath is in good enough condition to expose. Grit blasting is not used on interior brick because it destroys the original brick face.',
        },
        {
          question: 'Should I seal interior brick after exposing it?',
          answer:
            'Optional. Unsealed exposed brick has a slightly chalky look and sheds a small amount of dust over time. A breathable matt silicate sealer (mineral-based, not acrylic) locks the dust into the surface without changing the appearance and lets the wall breathe. We recommend sealing if dust shedding will be a problem (kitchen, near electronics).',
        },
        {
          question: 'How long does interior restoration take?',
          answer:
            'A single sandstone fireplace restoration is one to two weeks. A full exposed brick wall in a living room is one to three weeks including paint stripping, repair and repointing. A whole-house interior restoration scope (multiple rooms, multiple features) can be four to twelve weeks. We sequence around occupancy.',
        },
        {
          question: 'What does interior restoration cost?',
          answer:
            'Fireplace restoration is 3500 to 12,000 dollars depending on stone repair extent. Exposed brick wall restoration is 350 to 700 dollars per square metre including paint stripping. Internal repointing is 200 to 400 dollars per square metre. Structural repairs are quoted per element. Fixed quote after site visit.',
        },
      ]}
    />
  );
};
export default InteriorRestorationPage;
