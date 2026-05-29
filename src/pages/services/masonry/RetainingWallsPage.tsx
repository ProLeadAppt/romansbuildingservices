import { ServicePageTemplate } from '@/components/ServicePageTemplate';
import { getSiblingServices } from '@/data/serviceHierarchy';
import { Mountain, Droplets, Layers, Ruler } from 'lucide-react';

const RetainingWallsPage = () => {
  const siblings = getSiblingServices('masonry', 'retaining-walls');

  return (
    <ServicePageTemplate
      title="Retaining Wall Construction"
      metaTitle="Retaining Wall Construction Sydney | Romans"
      metaDescription="Sydney retaining walls in sandstone, brick, block and reinforced concrete. Proper drainage, engineering and heritage-matched finishes by Minas."
      heroImage="/gallery/thumbs/romansstone_1575057672_2188064802893944247_2394650725.webp"
      parentService={{ title: 'Stonemasonry & Masonry', href: '/services/masonry' }}
      siblingServices={siblings}
      breadcrumbs={[
        { label: 'Services', href: '/services' },
        { label: 'Stonemasonry & Masonry', href: '/services/masonry' },
        { label: 'Retaining Wall Construction', href: '' },
      ]}
      intro={[
        'Sydney is hilly. Most blocks have a slope and most older retaining walls in this city are between 50 and 120 years old. They were built before drainage was understood properly and a lot of them are now bulging, leaning or starting to give. We build new retaining walls and repair or rebuild failed ones.',
        'Drainage is the thing. The wall itself is straightforward. Get the drainage wrong and even an engineered wall fails inside ten years. Get it right and a properly built stone retaining wall lasts a century. Every wall we build has an ag drain at the base, weep holes through the face, and geotextile fabric behind it to stop the drain silting up.',
        'We build in sandstone, brick, besser block and reinforced concrete depending on the height, the soil, the load and the look. For heritage properties we match the existing stone. For modern jobs we usually default to core-filled besser block for engineering and rendered or stone-clad if appearance matters.',
      ]}
      features={[
        {
          icon: Mountain,
          title: 'Sandstone retaining walls',
          description:
            'Hand-laid sandstone retaining walls for heritage properties, harbour-front blocks and gardens where the wall is visible. Coursed or random-laid depending on the look. Slow to build but they last the longest.',
        },
        {
          icon: Layers,
          title: 'Block and reinforced walls',
          description:
            'Core-filled besser block for serious earth retention. Reinforced concrete walls for the heavy stuff. Both can be rendered, painted or stone-clad after they go up.',
        },
        {
          icon: Droplets,
          title: 'Drainage done properly',
          description:
            'Ag drain at the wall base, sock-filtered, sloped to outfall. Weep holes through the face every metre or so. Geotextile fabric against the soil to stop the drain blocking. Not optional.',
        },
        {
          icon: Ruler,
          title: 'Engineered and approved',
          description:
            'Walls over 1 metre or near boundaries need structural engineering and council approval. We arrange both. Engineer scope, certified design, construction inspections, completion certificate.',
        },
      ]}
      whatWeUse={[
        {
          title: 'Sandstone (Hawkesbury or Gosford)',
          detail:
            'Local Sydney sandstone for stone walls. Random or coursed laid. Each piece pitched and bedded individually. For heritage or visible walls. More expensive but the look is unmatched and they last over 100 years.',
        },
        {
          title: 'Besser block core-filled',
          detail:
            'Standard for engineered retaining walls between 1m and 3m. Vertical and horizontal reo cast into the cores. Rendered or stone-clad over the top so it does not look like a block wall.',
        },
        {
          title: 'Reinforced concrete',
          detail:
            'For walls over 3 metres or where load is high. Either poured in place against formwork or precast panels for speed. Always engineered.',
        },
        {
          title: 'Ag pipe and gravel drainage',
          detail:
            '100mm slotted ag pipe in a sock, surrounded by 20mm clean gravel, sloped to an outfall. Geotextile fabric wraps the gravel and the soil face. Stops fines from clogging the drain.',
        },
        {
          title: 'Weep holes through the face',
          detail:
            'PVC weep tubes at the base, one every metre or so. Lets any water that gets past the ag drain escape through the wall instead of building pressure behind it.',
        },
        {
          title: 'Concrete strip footing',
          detail:
            'All walls go on a proper footing. Width and depth sized to the wall height and the soil bearing capacity. Steel reinforcement tied into the wall above.',
        },
      ]}
      processSteps={[
        {
          step: 'Site assessment and engineering',
          detail:
            'On-site visit. We measure the height of fall, check the soil type, look at what is uphill (driveway, pool, building). For walls over 1m or near boundaries an engineer comes out too. Quote within a week.',
        },
        {
          step: 'Council approval if required',
          detail:
            'Sydney councils generally require approval for walls over 600mm or 1m depending on the council. We prepare the application including engineering certificate, plans and erosion control. Typical approval is two to six weeks.',
        },
        {
          step: 'Excavation and footing',
          detail:
            'Excavate the bench for the wall base. Pour the strip footing with reinforcement to engineer spec. Let cure for at least three days before any wall goes up.',
        },
        {
          step: 'Drainage installed first',
          detail:
            'Ag pipe goes in behind the footing line, in a sock, surrounded by clean gravel and wrapped in geofabric. Sloped to a stormwater outfall. This goes in before the wall does, not after.',
        },
        {
          step: 'Wall built course by course',
          detail:
            'Stone walls hand-laid, each course levelled and bedded. Block walls reo-tied vertically every block and horizontally every second course, then core-filled with concrete. Weep tubes set at base.',
        },
        {
          step: 'Backfill and finish',
          detail:
            'Backfilled with clean granular fill, compacted in 200mm lifts. Topsoil dressed over the top. Wall face cleaned. Render and paint or stone cladding applied if specified. Engineer signs off.',
        },
      ]}
      faqs={[
        {
          question: 'Does my retaining wall need council approval?',
          answer:
            'Depends on the council and the height. Most Sydney councils need approval for walls over 600mm or 1m. Walls near boundaries, near pools, or on steep sites usually need approval at any height. We check your specific council requirements as part of the quote.',
        },
        {
          question: 'What is the best material for a retaining wall?',
          answer:
            'Depends on height, soil, load and budget. Sandstone is the best looking and the longest lasting but slowest and most expensive. Core-filled besser is the workhorse for engineered walls and can be clad later. Reinforced concrete is the strongest. We recommend whichever fits the site.',
        },
        {
          question: 'My existing retaining wall is leaning. Can it be fixed?',
          answer:
            'Sometimes. Minor leaning (under 30mm out of plumb) can sometimes be stabilised with soil nails or buttresses. Serious leaning, bulging or cracking usually means the wall needs to come down and be rebuilt with proper footings and drainage. Repair costs are often close to rebuild costs on failed walls.',
        },
        {
          question: 'How long does a retaining wall take to build?',
          answer:
            'A 5 metre long, 1 metre tall block wall is about a week including drainage and backfill. A 10 metre sandstone wall is two to three weeks. Longer walls or higher walls scale up from there. Council approval adds two to six weeks before any work starts.',
        },
        {
          question: 'What does a retaining wall cost?',
          answer:
            'Block walls run around 800 to 1500 dollars per square metre of wall face, including drainage and engineering. Sandstone walls are 1800 to 3500 dollars per square metre. Reinforced concrete walls vary widely. Fixed quote after the site visit.',
        },
        {
          question: 'How long should a retaining wall last?',
          answer:
            'Sandstone properly built lasts 100 plus years. Engineered block walls with proper drainage last 50 to 80 years. The thing that determines lifespan is drainage. Walls that fail in 10 to 15 years almost always fail because water pressure built up behind a wall with no working drain.',
        },
      ]}
    />
  );
};

export default RetainingWallsPage;
