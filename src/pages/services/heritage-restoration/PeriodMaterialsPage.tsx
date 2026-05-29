import { ServicePageTemplate } from '@/components/ServicePageTemplate';
import { getSiblingServices } from '@/data/serviceHierarchy';
import { Package, Search, Truck, CheckCircle } from 'lucide-react';

const PeriodMaterialsPage = () => {
  const siblings = getSiblingServices('heritage-restoration', 'period-materials');

  return (
    <ServicePageTemplate
      title="Period-Appropriate Materials"
      metaTitle="Period Materials Sourcing Sydney | Romans"
      metaDescription="Sydney heritage materials sourced and supplied. Period brick, hand-cut sandstone, hydraulic lime, era-correct fittings. 30 years of supplier relationships."
      heroImage="/gallery/thumbs/romansstone_1451942270_1155297957273885284_2394650725.webp"
      parentService={{ title: 'Heritage Restoration', href: '/services/heritage-restoration' }}
      siblingServices={siblings}
      breadcrumbs={[
        { label: 'Services', href: '/services' },
        { label: 'Heritage Restoration', href: '/services/heritage-restoration' },
        { label: 'Period-Appropriate Materials', href: '' },
      ]}
      intro={[
        'Heritage restoration is only as good as the materials going into the wall. Wrong brick, wrong stone or wrong mortar will read as wrong from across the street, and over time it will damage the surrounding original fabric. Cement render against soft brick blows the brick faces off. Modern brick next to Federation brick reads as a patch forever. Galvanised steel inside a wall rusts and splits stone.',
        'Sourcing the right materials is most of the work. We have spent 30 years building relationships with quarries, brick yards, salvage operators, lime suppliers and specialist manufacturers across Australia. We know which Hawkesbury quarry to call for a particular stone colour, which salvage yard has Federation brick in stock, which UK importer brings in NHL hydraulic lime.',
        'If you are planning a heritage project, we can source materials for you whether or not we are doing the labour. Minas has the contacts and the knowledge to identify what your building used originally and find the closest available match.',
      ]}
      features={[
        {
          icon: Search,
          title: 'Material identification',
          description:
            'On-site identification of original brick era, stone quarry source, mortar composition, and any era-specific hardware. For complex jobs we send mortar samples to a lab.',
        },
        {
          icon: Package,
          title: 'Salvage and reclaim',
          description:
            'Salvage yards across Sydney plus our own workshop stockpile of period brick, stone, hardware and timber. Built up over 30 years.',
        },
        {
          icon: Truck,
          title: 'Active supplier network',
          description:
            'Hawkesbury and Gosford sandstone quarries, Bowral and Brickworks for heritage brick, specialist lime importers, oxide colour suppliers, era-correct fittings.',
        },
        {
          icon: CheckCircle,
          title: 'Heritage-approved',
          description:
            'Material specifications prepared for heritage council and consultant sign-off. Samples brought to site for comparison before any material is ordered in bulk.',
        },
      ]}
      whatWeUse={[
        {
          title: 'Sandstone from active NSW quarries',
          detail:
            'Wondabyne, Gosford and smaller operations cut Hawkesbury and Gosford sandstone to colonial dimensions. Lead time 2 to 4 weeks for hand-cut blocks. We have samples at the workshop from all the active quarries.',
        },
        {
          title: 'Period brick from salvage and heritage manufacturers',
          detail:
            'Reclaimed brick from yards in Marrickville and Wetherill Park. New brick from Bowral and a few heritage manufacturers still firing to old sizes. For convict-era brick we rely on salvage from demolition.',
        },
        {
          title: 'Hydraulic lime (NHL)',
          detail:
            'NHL 2, NHL 3.5 and NHL 5 grades imported from UK and France. Different grades for different applications. Bag stock at the workshop, no shortage.',
        },
        {
          title: 'Quicklime for hot lime mortar',
          detail:
            'Calcium oxide quicklime from Australian and New Zealand suppliers. Used for traditional hot lime mortar mixing on heritage scopes.',
        },
        {
          title: 'Natural oxide pigments',
          detail:
            'Red, yellow, black, brown earth oxides for tinting lime mortar to match original colour. From specialty paint and pigment suppliers. Slow-add for matching, never bulk-coloured.',
        },
        {
          title: 'Stainless steel for any new metalwork',
          detail:
            'Wall ties, cramps, dowels, lintels, fixings. Stainless not galvanised. Galv rusts inside the wall after 30 to 50 years. Stainless is the only choice for heritage work.',
        },
      ]}
      processSteps={[
        {
          step: 'Identify the original materials',
          detail:
            'On-site survey. We look at brick size and texture, stone grain and colour, mortar composition and joint profile. Photos taken and a small mortar sample collected if lab analysis is needed.',
        },
        {
          step: 'Specify replacement materials',
          detail:
            'Written specification produced. Stone source quarry, brick supplier, mortar mix ratio and lime type, oxide pigments for colour matching, fittings spec. Signed off by heritage consultant before sourcing.',
        },
        {
          step: 'Sample procurement',
          detail:
            'For stone, sample blocks brought to site for comparison. For brick, a few sample bricks compared against the wall. For mortar, sample patches mixed on site. Heritage consultant inspects before bulk order.',
        },
        {
          step: 'Bulk sourcing and delivery',
          detail:
            'Stone cut to size at the quarry (2 to 4 weeks lead time). Brick palletised at the salvage yard or supplier. Lime, sand and pigments delivered to site. Stainless fittings ordered from local supplier.',
        },
        {
          step: 'Storage and protection on site',
          detail:
            'Stone stacked on timber bearers, covered. Brick stored on pallets out of weather. Lime kept dry. Materials protected until they go into the wall. Damaged or wrong material rejected and replaced.',
        },
        {
          step: 'Documentation handover',
          detail:
            'Supplier details, batch numbers, mortar mix specs, oxide quantities documented for the heritage file. Future repairs can reproduce the same match.',
        },
      ]}
      faqs={[
        {
          question: 'What if the original stone is no longer quarried?',
          answer:
            'Many original Sydney quarries have closed but the main sandstone sources (Hawkesbury and Gosford) are still operating. For closed quarries we find an alternative with similar grain and colour, or use reclaimed stone from heritage demolitions. We have never failed to find acceptable replacement stone.',
        },
        {
          question: 'Do heritage councils need to approve materials?',
          answer:
            'For state-listed and locally-listed buildings, yes. We prepare material specifications and bring physical samples to site for the heritage consultant or council heritage officer to inspect. Councils want evidence the replacement materials match the original in composition, strength and appearance.',
        },
        {
          question: 'Can you source lime for mortar and render?',
          answer:
            'Yes. Hydraulic lime (NHL 2, 3.5 and 5), lime putty for fine work, and quicklime for hot lime mortar mixing. NHL is imported from the UK and France through Australian distributors. We can supply lime to other contractors as well as use it on our own jobs.',
        },
        {
          question: 'How do I match the mortar colour exactly?',
          answer:
            'Lime mortar colour is determined by the sand and any added oxide pigments. We sample sand from yards across Sydney until we find the closest base colour, then adjust with small amounts of natural oxide pigment if needed. Sample patches are mixed and cured for a week before the final colour is locked in.',
        },
        {
          question: 'What does period material sourcing cost?',
          answer:
            'Material cost varies. Hand-cut sandstone is 800 to 2000 dollars per cubic metre depending on quarry and finish. Reclaimed Federation brick is 5 to 15 dollars per brick. Hydraulic lime is 70 to 120 dollars per bag. We bill materials at cost plus a small handling fee for sourcing time. Quotes itemise materials separately so you can see exactly where the money goes.',
        },
        {
          question: 'Can you source materials only, without the labour?',
          answer:
            'Yes. We supply materials to other contractors, heritage architects and DIY heritage owners. We do not undercut other tradespeople on labour, but if you have a heritage project and need materials sourced, we are happy to help with that part regardless of who does the build.',
        },
      ]}
    />
  );
};

export default PeriodMaterialsPage;
