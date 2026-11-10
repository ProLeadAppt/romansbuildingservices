import { ServicePageTemplate } from '@/components/ServicePageTemplate';
import { Hammer, Layers, Shield, Home, Wrench, Building } from 'lucide-react';
import { getSubServiceRoutes } from '@/data/serviceHierarchy';

const MasonryPage = () => {
  const childServices = getSubServiceRoutes('masonry');

  return (
    <ServicePageTemplate
      title="Stone & Masonry"
      metaTitle="Sydney Masonry Services | Romans"
      metaDescription="Brick, stone, block and repointing work across Sydney for homes, strata and commercial sites by Minas Romanakis. Repairs, rebuilding and new masonry."
      heroImage="/gallery/thumbs/romansstone_1574104761_2180071211265247711_2394650725.webp"
      parentService={{ title: 'Services', href: '/services' }}
      siblingServices={[
        { title: 'Heritage Restoration', href: '/services/heritage-restoration' },
        { title: 'Structural Repairs', href: '/services/structural-repairs' },
        { title: 'Concrete Repairs', href: '/services/concrete-repairs' },
        { title: 'Remedial Building', href: '/services/remedial-building' },
      ]}
      intro={[
      "Romans repairs and builds brick, block and stone masonry for homes, strata and commercial properties. Based in the Hawkesbury and working across Western Sydney and wider Sydney, we handle retaining walls, chimneys, sandstone, tuckpointing, repointing and brick rebuilds.",
      "Loose mortar, cracked bricks and damaged stone can have different causes. We inspect the masonry, water entry, movement and previous repairs before recommending repointing, local repairs or rebuilding. Structural concerns may need assessment and a repair design from an engineer.",
      "For older and heritage buildings, the repair needs to suit the existing brick, stone and mortar. We consider material compatibility as well as colour and joint profile, with heritage advice and approvals checked where required."
    ]}
      features={[
        { icon: Hammer, title: 'Brick & Block Work', description: 'New brickwork, blockwork, and brick repairs for residential and commercial buildings. Clean lines, correct bonding and a proper finish.' },
        { icon: Layers, title: 'Stone Masonry', description: 'Sandstone, bluestone and natural stone work. Feature walls, cladding and stone restoration using traditional techniques.' },
        { icon: Home, title: 'Retaining Walls', description: 'Stone, brick and block retaining walls, built to the project design with drainage and engineer input where required.' },
        { icon: Wrench, title: 'Repointing & Repairs', description: 'Mortar joint replacement and brick repairs. We match existing mortar colour and profile so the repair blends in.' },
        { icon: Building, title: 'Chimneys & Fireplaces', description: 'Chimney rebuilds, repairs and new fireplace surrounds. Proper flashing and weatherproofing included.' },
        { icon: Shield, title: 'Heritage Masonry', description: 'Period-accurate stonework and brickwork for heritage-listed buildings. Traditional lime mortars and matched materials.' }
      ]}
      whatWeUse={[
        { title: 'Lime mortar', detail: 'Lime-rich mortar may suit older brick and sandstone where its strength and moisture behaviour are compatible with the existing wall.' },
        { title: 'Matched reclaimed brick', detail: 'When the original bricks are soft or no longer made, reclaimed handmade brick keeps the facade looking right.' },
        { title: 'Matched sandstone', detail: 'Hawkesbury and Pyrmont stone replacements are selected to blend grain, colour and weathering with the original wall.' },
        { title: 'Stainless fixings and ties', detail: 'Corrosion-resistant fixings and ties selected to suit the masonry, exposure and specified repair.' },
      ]}
      processSteps={[
        { step: 'Inspect the wall and find the cause', detail: 'We look at movement, mortar condition, water entry, salt damage and any previous patch repairs before we quote.' },
        { step: 'Match materials before work starts', detail: 'We choose the right brick, stone and mortar mix so the finished job belongs with the existing wall.' },
        { step: 'Set out the repair and protect the site', detail: 'Access, protection and staging are handled first so the work can be done cleanly and safely.' },
        { step: 'Repair, repoint or rebuild', detail: 'The damaged section is rebuilt properly — not skimmed over — with the correct bond and mortar profile.' },
        { step: 'Clean down and hand over', detail: 'We clean the finished work, check the lines and leave you with a repair that looks like it was always meant to be there.' },
      ]}
      faqs={[
      { question: "What types of stone do you work with?", answer: "We work with sandstone, including Sydney Hawkesbury and Pyrmont stone, as well as bluestone, limestone, granite and natural fieldstone. Stone selection depends on the existing building, exposure, intended use and availability. We discuss suitable options after reviewing the work." },
      { question: "Can you match existing brickwork on older buildings?", answer: "We source reclaimed bricks and match mortar colour and joint profiles to suit the existing work. An exact match is not always available, particularly with weathered or discontinued materials. For heritage masonry, compatibility and any conservation requirements guide the selection." },
      { question: "How long does a masonry retaining wall last?", answer: "Service life depends on the design, ground conditions, drainage, materials and maintenance. A fixed lifespan cannot be promised from a general description. Bulging, leaning, displaced masonry or failed drainage should be assessed before deciding whether to repair or rebuild." },
      { question: "Do you handle council approvals for masonry work?", answer: "Approval requirements depend on the site, wall design, boundaries, heritage status and local planning controls, not height alone. Check the requirements with the relevant council or certifier before work starts. We can provide the proposed building scope and work with your engineer or heritage adviser on supporting information." },
      { question: "What is the difference between lime mortar and cement mortar?", answer: "Lime-rich mortars can suit softer historic brick and stone because their strength and moisture behaviour can be more compatible. Cement-rich mortar may be too hard for some older masonry. The right mix depends on the existing materials and exposure, not simply the age of the building." },
      { question: "How much does masonry work cost?", answer: "Cost depends on the area and depth of repairs, brick or stone selection, mortar matching, access, scaffolding, drainage and any engineering or approval requirements. We quote after inspecting the site so the scope, assumptions and exclusions are clear." },
      { question: "Do you work on heritage-listed properties?", answer: "Yes. We carry out heritage masonry repairs using materials and methods suited to the building. The owner should confirm the applicable approvals with council or Heritage NSW and seek heritage advice where needed. We work to the agreed repair methodology and approval conditions." }
    ]}
      galleryImages={[
        '/gallery/thumbs/romansstone_1574104761_2180071211265247711_2394650725.webp',
        '/gallery/thumbs/romansstone_1576440613_2199665757989086550_2394650725.webp',
        '/gallery/thumbs/romansstone_1576003161_2195996136622601152_2394650725.webp',
        '/gallery/thumbs/romansstone_1575057672_2188064802893944247_2394650725.webp'
      ]}
      childServices={childServices}
      breadcrumbs={[
        { label: 'Services', href: '/services' },
        { label: 'Stone & Masonry', href: '' },
      ]}
    />
  );
};

export default MasonryPage;
