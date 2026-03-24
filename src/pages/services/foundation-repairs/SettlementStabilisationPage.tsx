import { ServicePageTemplate } from '@/components/ServicePageTemplate';
import { getSiblingServices } from '@/data/serviceHierarchy';
import { ArrowDownToLine, Search, Droplets, ShieldCheck, FileCheck } from 'lucide-react';

const SettlementStabilisationPage = () => {
  const siblings = getSiblingServices('foundation-repairs', 'settlement-stabilisation');

  return (
    <ServicePageTemplate
      title="Settlement Stabilisation"
      metaTitle="Settlement Stabilisation Sydney | Romans Building Services"
      metaDescription="Building settlement stabilisation across Sydney. Stopping further movement and restoring structural integrity."
      heroImage="/gallery/thumbs/romansstone_1451942270_1155297957273885284_2394650725.webp"
      parentService={{ title: 'Foundation Repairs', href: '/services/foundation-repairs' }}
      siblingServices={siblings}
      breadcrumbs={[
        { label: 'Services', href: '/services' },
        { label: 'Foundation Repairs', href: '/services/foundation-repairs' },
        { label: 'Settlement Stabilisation', href: '' },
      ]}
      intro={[
        "Settlement happens when the ground under your building compresses or shifts. The building drops unevenly, walls crack, and things stop lining up. We stabilise the building and stop the movement.",
        "We use underpinning, resin injection, screw piles, and drainage improvements depending on what is causing the settlement. Reactive clay, poor compaction, leaking pipes, and tree roots are the usual suspects in Sydney.",
        "The key is finding the cause and fixing that first. Then we stabilise the foundations. Romans has sorted settlement problems on hundreds of Sydney properties. Minas will come out and give you an honest assessment."
      ]}
      features={[
        { icon: Search, title: 'Settlement Investigation', description: 'We monitor cracks, check levels, and investigate the soil to work out why the building is moving. Proper diagnosis before any work.' },
        { icon: ArrowDownToLine, title: 'Foundation Stabilisation', description: 'Underpinning, screw piles, or resin injection to lock the foundation in place and stop further movement.' },
        { icon: Droplets, title: 'Drainage Solutions', description: 'Poor drainage is a major cause of settlement in Sydney clay soils. We install ag drains, pits, and diversion systems.' },
        { icon: ShieldCheck, title: 'Crack Repair', description: 'Once the building is stable, we repair the structural and cosmetic cracks. Stitching, injection, and patching.' },
        { icon: FileCheck, title: 'Monitoring & Reporting', description: 'We install crack monitors and level surveys to track movement before and after the work. Full documentation provided.' },
      ]}
      faqs={[
        { question: 'What is the difference between settlement and subsidence?', answer: 'Settlement is the ground compacting under the weight of the building. Subsidence is the ground moving for other reasons like erosion, tree roots, or mining. The repairs are similar but the causes are different.' },
        { question: 'Can resin injection fix settlement?', answer: 'In some cases, yes. Expanding resin is injected under the foundation to fill voids and stabilise the soil. It works well on sandy and gravelly soils. Not always suitable for heavy clay.' },
        { question: 'How quickly does settlement need to be fixed?', answer: 'The sooner the better. Settlement tends to get worse over time, especially if the cause is ongoing like a leaking pipe or poor drainage. Early intervention saves money.' },
      ]}
    />
  );
};

export default SettlementStabilisationPage;
