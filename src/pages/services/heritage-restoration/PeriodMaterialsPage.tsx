import { ServicePageTemplate } from '@/components/ServicePageTemplate';
import { getSiblingServices } from '@/data/serviceHierarchy';
import { Package, Search, Truck, CheckCircle } from 'lucide-react';

const PeriodMaterialsPage = () => {
  const siblings = getSiblingServices('heritage-restoration', 'period-materials');

  return (
    <ServicePageTemplate
      title="Period-Appropriate Materials"
      metaTitle="Period-Appropriate Materials Sourcing Sydney | Romans Building Services"
      metaDescription="Sourcing period-appropriate stone, brick, and mortar for heritage restoration projects across Sydney."
      heroImage="/gallery/thumbs/romansstone_1451942270_1155297957273885284_2394650725.webp"
      parentService={{ title: 'Heritage Restoration', href: '/services/heritage-restoration' }}
      siblingServices={siblings}
      breadcrumbs={[
        { label: 'Services', href: '/services' },
        { label: 'Heritage Restoration', href: '/services/heritage-restoration' },
        { label: 'Period-Appropriate Materials', href: '' },
      ]}
      intro={[
        "Heritage restoration is only as good as the materials you use. The wrong brick, the wrong stone, or the wrong mortar will stick out and can damage the building over time. We source materials that match the originals.",
        "We have spent 30 years building relationships with quarries, salvage yards, lime suppliers, and specialist manufacturers across Australia. When we need a specific brick or stone, we know where to look.",
        "If you are planning a heritage project and need materials sourced, talk to Minas. He has the contacts and the knowledge to find what your building needs."
      ]}
      features={[
        { icon: Search, title: 'Material Matching', description: 'We identify the original materials and find the closest available match. Stone type, brick era, mortar composition. Every detail matters.' },
        { icon: Package, title: 'Salvage Sourcing', description: 'Reclaimed bricks, recycled stone, and salvaged hardware. We have a network of suppliers and our own stockpile of heritage materials.' },
        { icon: Truck, title: 'Supplier Network', description: 'Quarries, kilns, and specialist manufacturers across NSW and beyond. We know who produces what and can get it to site.' },
        { icon: CheckCircle, title: 'Heritage Approval', description: 'Materials documented and specified to meet heritage council requirements. We provide samples for approval before work begins.' },
      ]}
      faqs={[
        { question: 'What if the original stone is no longer quarried?', answer: 'Some quarries have closed, but we can usually find alternative sources with similar characteristics. We also have contacts who hold stockpiles of discontinued stone. For small quantities, salvage is often the best option.' },
        { question: 'Do heritage councils need to approve materials?', answer: 'Usually, yes. We prepare material samples and specifications as part of the approval process. Councils want to see that replacement materials match the originals in appearance and performance.' },
        { question: 'Can you source lime for mortar and render?', answer: 'Yes. We use hydraulic lime, lime putty, and quicklime from specialist Australian and imported suppliers. The type of lime depends on the application and what the original building used.' },
      ]}
    />
  );
};

export default PeriodMaterialsPage;
