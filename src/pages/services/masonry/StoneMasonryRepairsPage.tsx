import { ServicePageTemplate } from '@/components/ServicePageTemplate';
import { getSiblingServices } from '@/data/serviceHierarchy';
import { Gem, Hammer, Search, CircleDot } from 'lucide-react';

const StoneMasonryRepairsPage = () => {
  const siblings = getSiblingServices('masonry', 'stone-masonry-repairs');

  return (
    <ServicePageTemplate
      title="Stone Masonry Repairs"
      metaTitle="Sydney Sandstone & Stone Masonry Repairs | Romans"
      metaDescription="Sydney stone masonry repairs by Minas Romanakis. Sandstone, bluestone, limestone and granite repairs with hand-dressed replacement and lime repointing."
      heroImage="/gallery/thumbs/romansstone_1576440613_2199665757989086550_2394650725.webp"
      parentService={{ title: 'Stonemasonry & Masonry', href: '/services/masonry' }}
      siblingServices={siblings}
      breadcrumbs={[
        { label: 'Services', href: '/services' },
        { label: 'Stonemasonry & Masonry', href: '/services/masonry' },
        { label: 'Stone Masonry Repairs', href: '' },
      ]}
      intro={[
        'Sydney was built on sandstone. Walk the CBD, the Eastern Suburbs, Mosman or Paddington and you are looking at 19th century sandstone facades, sills, lintels, retaining walls and seawalls. Most of it is now between 100 and 180 years old and parts of it are failing.',
        'We repair stone three ways. Small damage gets stone repair mortar, tinted and textured to match the surrounding face. Medium damage gets a dutchman repair, where a piece of matching stone is cut to shape and let into the original. Large damage means cutting out the failed stone and replacing it with new, hand-dressed to match.',
        'Stone is what Minas trained in. Most of the heritage and harbour-front sandstone we work on now came to us through architects and heritage consultants who saw a previous job. If your building has stone that is weathering, cracking or coming loose, this is what we do.',
      ]}
      features={[
        {
          icon: Gem,
          title: 'Sandstone specialist',
          description:
            'Sydney sandstone is the bulk of the trade. We repair, replace and restore facades, sills, lintels, copings, retaining walls and harbour seawalls in Hawkesbury and Pyrmont stone.',
        },
        {
          icon: Hammer,
          title: 'Hand-dressed on site',
          description:
            'Replacement stone is cut and hand-dressed on site to match the original. Pitched face, rock face, tooth chiseled, drag finish, broached. We match whatever finish the building has.',
        },
        {
          icon: Search,
          title: 'Stone matched from quarries',
          description:
            'Source stone from Wondabyne, Gosford and Hawkesbury for sandstone. Other quarries for bluestone and granite. Sample stones brought to site so you can compare against the existing.',
        },
        {
          icon: CircleDot,
          title: 'Dutchman and mortar repairs',
          description:
            'For damage that does not justify full replacement, we cut a piece of matching stone (a dutchman) into the original, or use stone repair mortar tinted on site. Disappears once the stone weathers in.',
        },
      ]}
      whatWeUse={[
        {
          title: 'Hawkesbury sandstone for matching',
          detail:
            'Most Sydney heritage uses Hawkesbury stone (the warm cream colour) or Gosford stone (slightly more yellow). We source from active quarries north of the city. Lead time on hand-cut blocks is two to four weeks.',
        },
        {
          title: 'Lime mortar bedding',
          detail:
            'Stone gets bedded on lime mortar, not cement. Soft enough that if the wall ever moves, the stone moves with it instead of cracking. Same logic as the era it was built in.',
        },
        {
          title: 'Stainless dowels and cramps',
          detail:
            'Where stone needs anchoring back to the structure, stainless steel rod and cramps. Never mild steel. Mild steel rusts and the rust spalls the stone from inside.',
        },
        {
          title: 'Hand tools for dressing',
          detail:
            'Mallet and chisels for hand-dressing replacement stone. Pitching tool, claw chisel, drag, broach. Power tools cut faster but leave a different surface texture that does not weather to match.',
        },
        {
          title: 'Stone repair mortar',
          detail:
            'For minor chips and spalls. Lithomex, Jahn or similar tinted with natural oxides to match the host stone. Built up in layers so it cures evenly. Done right, weathers like real stone.',
        },
        {
          title: 'Breathable sealers if needed',
          detail:
            'Siloxane or silane-based sealers for stone in high-exposure spots like seawalls. Lets the stone breathe so trapped moisture does not blow the face off. Never standard urethane or epoxy sealers on heritage stone.',
        },
      ]}
      processSteps={[
        {
          step: 'Inspection and stone sampling',
          detail:
            'On site we look at the stone, identify which quarry it likely came from, and take photos for matching. For larger jobs we cut a small unobtrusive sample from a hidden face so the quarry can match colour and grain.',
        },
        {
          step: 'Sourcing the replacement stone',
          detail:
            'Two to four weeks lead time to get hand-cut blocks from the matching quarry. Smaller repairs use stock we keep at the workshop. Heritage consultant signs off on the sample before any cutting starts.',
        },
        {
          step: 'Cutting out the failed stone',
          detail:
            'Failed stone is cut out cleanly with diamond blades and chisels, back to sound material. Edges are kept square so the new stone fits flush. Wall above is propped where needed.',
        },
        {
          step: 'Hand-dressing the new stone',
          detail:
            'New stone is cut to size and the face is hand-dressed to match the original tooling marks. Tooth chiseled, pitched, drag finished, whatever the building has. This is what makes the repair invisible after weathering.',
        },
        {
          step: 'Bedding and anchoring',
          detail:
            'Stone bedded on lime mortar, levelled and packed in. Stainless steel cramps or dowels where the stone needs anchoring back. Joints pointed with matching lime mortar.',
        },
        {
          step: 'Curing and weathering',
          detail:
            'Lime mortar takes a week to fortnight to fully set. New stone takes one to three years to weather down to the colour of the original. The repair gets less visible every winter.',
        },
      ]}
      faqs={[
        {
          question: 'Can damaged sandstone be repaired or does it need replacing?',
          answer:
            'Depends on the damage. Surface spalling under 30mm deep can usually be filled with stone repair mortar. Damage over 30mm or where the stone has structural failure needs a dutchman repair or full replacement. We assess each piece individually rather than batch-replacing everything.',
        },
        {
          question: 'Where do you source replacement sandstone?',
          answer:
            'Active quarries north of Sydney mostly. Wondabyne, Gosford and a few smaller operations in the Hawkesbury. For very specific colour and grain matching on heritage work we sometimes use reclaimed stone from demolition. Lead time is usually two to four weeks for cut blocks.',
        },
        {
          question: 'How long do stone repairs last?',
          answer:
            'A dutchman repair or full stone replacement should last as long as the original surrounding stone, which on Hawkesbury sandstone is hundreds of years. Stone repair mortar is shorter, usually 30 to 50 years before it needs re-doing. Quality of materials and proper anchoring is what determines lifespan.',
        },
        {
          question: 'What is the difference between a dutchman repair and full replacement?',
          answer:
            'A dutchman is when only the damaged face of a stone is cut out and replaced with a thinner piece of matching stone (10 to 50mm thick). Full replacement removes the entire stone block. Dutchman is faster and cheaper but only works if the back of the original stone is still sound. We use whichever the stone condition justifies.',
        },
        {
          question: 'Do you do heritage council approved work?',
          answer:
            'Yes. We work regularly with heritage consultants and council heritage officers. We can prepare the scope of works, sample documentation and method statements that heritage applications require. We work to ICOMOS Burra Charter principles on listed buildings.',
        },
        {
          question: 'What does stone masonry repair cost?',
          answer:
            'Stone repair mortar patching is around 800 to 1500 dollars per square metre. Dutchman repairs are 1500 to 3000 dollars per piece depending on size. Full stone replacement starts around 3000 dollars per block including matched stone, cutting and installation. Fixed quote after a site inspection.',
        },
      ]}
    />
  );
};

export default StoneMasonryRepairsPage;
