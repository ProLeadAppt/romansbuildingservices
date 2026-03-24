import { ServicePageTemplate } from '@/components/ServicePageTemplate';
import { getSiblingServices } from '@/data/serviceHierarchy';
import { Mountain, Droplets, Layers, Ruler } from 'lucide-react';

const RetainingWallsPage = () => {
  const siblings = getSiblingServices('masonry', 'retaining-walls');

  return (
    <ServicePageTemplate
      title="Retaining Wall Construction"
      metaTitle="Retaining Wall Construction Sydney | Romans Building Services"
      metaDescription="Stone, brick, and block retaining wall construction across Sydney. Engineered designs for residential and commercial properties."
      heroImage="/gallery/thumbs/romansstone_1575057672_2188064802893944247_2394650725.webp"
      parentService={{ title: 'Stonemasonry & Masonry', href: '/services/masonry' }}
      siblingServices={siblings}
      breadcrumbs={[
        { label: 'Services', href: '/services' },
        { label: 'Stonemasonry & Masonry', href: '/services/masonry' },
        { label: 'Retaining Wall Construction', href: '' },
      ]}
      intro={[
        "Sydney is hilly. Retaining walls hold back the earth and stop your property from sliding. We build them from stone, brick, block, and reinforced concrete depending on the height and load.",
        "Drainage is the key to a retaining wall that lasts. We install proper ag drains, weep holes, and waterproofing behind every wall. Get the drainage wrong and the wall will fail.",
        "We build retaining walls from 600mm garden walls right up to engineered walls over 3 metres. Minas will look at the site, work out what is needed, and give you a price."
      ]}
      features={[
        { icon: Mountain, title: 'Stone Retaining Walls', description: 'Natural stone and sandstone retaining walls. Great for heritage areas and properties where appearance matters.' },
        { icon: Layers, title: 'Block & Concrete Walls', description: 'Besser block and reinforced concrete retaining walls for serious earth retention. Core-filled and steel-reinforced.' },
        { icon: Droplets, title: 'Drainage Systems', description: 'Ag pipe, weep holes, and geotextile fabric behind every wall. Proper drainage is not optional.' },
        { icon: Ruler, title: 'Engineered Designs', description: 'Walls over 600mm usually need engineering. We work with engineers and handle council approvals when required.' },
      ]}
      faqs={[
        { question: 'Does my retaining wall need council approval?', answer: 'In most Sydney councils, walls over 600mm need approval. Walls near boundaries or on steep sites may have additional requirements. We can advise on this during the quoting stage.' },
        { question: 'What is the best material for a retaining wall?', answer: 'It depends on height, soil conditions, and how you want it to look. Stone looks great but costs more. Concrete block is practical and strong. We will recommend the right option for your site.' },
        { question: 'My existing retaining wall is leaning. Can it be fixed?', answer: 'Sometimes. Minor leaning can be stabilised with tie-backs or buttresses. If the wall has moved significantly, it is usually safer and cheaper to rebuild it properly with correct drainage.' },
      ]}
    />
  );
};

export default RetainingWallsPage;
