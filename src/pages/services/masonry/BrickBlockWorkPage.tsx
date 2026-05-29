import { ServicePageTemplate } from '@/components/ServicePageTemplate';
import { getSiblingServices } from '@/data/serviceHierarchy';
import { Layers, Ruler, Home, Shield, Wrench } from 'lucide-react';

const BrickBlockWorkPage = () => {
  const siblings = getSiblingServices('masonry', 'brick-block-work');

  return (
    <ServicePageTemplate
      title="Brick & Block Work"
      metaTitle="Brick & Block Work Sydney | Romans Building Services"
      metaDescription="Sydney brick and block work by Minas Romanakis. New builds, extensions, boundary walls and repairs across Sydney metro suburbs."
      heroImage="/gallery/thumbs/romansstone_1574104761_2180071211265247711_2394650725.webp"
      parentService={{ title: 'Stonemasonry & Masonry', href: '/services/masonry' }}
      siblingServices={siblings}
      breadcrumbs={[
        { label: 'Services', href: '/services' },
        { label: 'Stonemasonry & Masonry', href: '/services/masonry' },
        { label: 'Brick & Block Work', href: '' },
      ]}
      intro={[
        'We build and repair brick and block walls across Sydney. New construction, house extensions, boundary walls, garden walls, retaining walls, feature walls. If the wall is brick or block, we do it.',
        'For new work we match the bond pattern, the brick size and the mortar colour to whatever is already on the property. For repairs we find matching bricks or have them tinted to blend in. A patched wall should not look patched once we are finished with it.',
        'Romans has been laying brick and block across Sydney metro suburbs since 1995. Minas does the assessment himself and is on the tools for any structural or heritage work. For straight boundary walls and garden builds, the senior crew runs the job under his sign-off.',
      ]}
      features={[
        {
          icon: Layers,
          title: 'New brickwork',
          description:
            'Boundary walls, garden walls, feature walls, single-storey extensions, alfresco surrounds. We work in face brick, common brick and reclaimed brick depending on the look you want.',
        },
        {
          icon: Wrench,
          title: 'Brick repairs',
          description:
            'Replacing cracked, spalling or shifted bricks. We source matching bricks from yards across Sydney and use the same mortar as the existing wall so the patch disappears.',
        },
        {
          icon: Ruler,
          title: 'Block construction',
          description:
            'Besser block, split-face block, hollow core, reinforced concrete block. Used for retaining walls, garages, sheds, structural walls, fence walls and bin enclosures.',
        },
        {
          icon: Home,
          title: 'Residential and commercial',
          description:
            'Single garden wall, full extension, multi-unit boundary, commercial fit-out. Same standard at any scale. Different paperwork on commercial jobs, same work.',
        },
        {
          icon: Shield,
          title: 'Licensed and to standard',
          description:
            'Full NSW builder licence covering structural brickwork. Work meets AS 3700 masonry standards. Engineer-signed where the job calls for it.',
        },
      ]}
      whatWeUse={[
        {
          title: 'Face brick from local yards',
          detail:
            'Austral, PGH, Bowral, Brickworks. Most colour and texture matches are available within a week. Reclaimed and recycled brick when matching older homes.',
        },
        {
          title: 'Besser and split-face block',
          detail:
            'For retaining walls, garages, fence walls. Reinforced with vertical and horizontal steel as the engineering requires. Core-filled where the wall is structural.',
        },
        {
          title: 'Mortar mixed on site',
          detail:
            'Type N for general work, Type S where the wall carries weight. Mixed in small batches so it is fresh going on the wall. Sand sourced to match the colour of existing mortar.',
        },
        {
          title: 'DPC and weep holes',
          detail:
            'Damp proof course at every wall base. Weep holes every fifth perp on cavity work. Stops moisture climbing the wall and rotting plaster on the inside.',
        },
        {
          title: 'Wall ties to AS 3700',
          detail:
            'Stainless steel ties at the right spacing for cavity walls. We use stainless rather than galvanised on coastal jobs because galv ties rust through in 30 to 40 years and the cavity collapses.',
        },
        {
          title: 'Lintels and bearers',
          detail:
            'Steel angle lintels for openings, hot-dip galvanised. Concrete lintels for heavier spans. Sized to suit the load above plus margin.',
        },
      ]}
      processSteps={[
        {
          step: 'We come and look',
          detail:
            'Site visit, measure up, check what is already there, look at footings if it is a new wall. For boundary walls we check the survey or get a surveyor in if the line is unclear. Quote within a few days.',
        },
        {
          step: 'Footings and prep',
          detail:
            'New walls get proper footings. Concrete strip footing for boundary walls, mass concrete pad for piers, reinforced footing for retaining walls. Existing walls being extended get the joint cleaned and tied in with stainless steel.',
        },
        {
          step: 'Laying brick',
          detail:
            'Set out with string lines and a story rod. Bedded on fresh mortar, joints kept consistent, each course checked level and plumb. Around eight to twelve square metres per bricklayer per day depending on the brick and the pattern.',
        },
        {
          step: 'Pointing and finishing',
          detail:
            'Joints tooled to the same profile as the existing wall or whatever the design calls for. Brick faces brushed clean while the mortar is still green so dried mortar does not pull off the face later.',
        },
        {
          step: 'Cleanup and handover',
          detail:
            'Excess brick taken off site or stacked for future repair patches. Wall checked one last time with a level. We give you a few spare bricks for any future damage matching.',
        },
      ]}
      faqs={[
        {
          question: 'Can you match my existing bricks?',
          answer:
            'Almost always. We source from suppliers across Sydney and for older buildings we use reclaimed brickyards. For discontinued bricks we can sometimes tint new bricks to match. The mortar colour matters more than people realise. We mix to match that too.',
        },
        {
          question: 'Do you do small brick jobs or only big ones?',
          answer:
            'Both. We will rebuild a single damaged section, replace a handful of spalled bricks, fix a wonky letterbox pier. There is no minimum job size. Smaller jobs just have shorter lead times.',
        },
        {
          question: 'How long does a brick wall take to build?',
          answer:
            'A 10 metre garden wall is two to three days. A boundary wall the length of a typical block is one to two weeks. A full extension wall is two to four weeks once the slab is in. We give you a real timeframe with the quote, not a vague window.',
        },
        {
          question: 'Do I need council approval for a brick wall?',
          answer:
            'Garden walls under one metre usually do not. Boundary walls over 1.8 metres need approval in most Sydney councils. Retaining walls over one metre need engineering and approval. We can tell you what your specific council requires when we quote.',
        },
        {
          question: 'What does a brick wall cost?',
          answer:
            'Standard boundary wall in face brick is around 600 to 900 dollars per square metre, supplied and built. Heritage match brick or special bonds run higher. Block walls in besser are cheaper around 300 to 500 dollars per square metre. Fixed quote after a site visit.',
        },
        {
          question: 'Do you give a warranty?',
          answer:
            'Yes. Six years on structural brickwork under the NSW Home Building Act. Two years on minor defects. We register the job with the relevant authority on anything that needs it.',
        },
      ]}
    />
  );
};

export default BrickBlockWorkPage;
