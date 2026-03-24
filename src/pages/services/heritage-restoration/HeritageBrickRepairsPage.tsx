import { ServicePageTemplate } from '@/components/ServicePageTemplate';
import { getSiblingServices } from '@/data/serviceHierarchy';
import { Layers, Paintbrush, History, ClipboardCheck } from 'lucide-react';

const HeritageBrickRepairsPage = () => {
  const siblings = getSiblingServices('heritage-restoration', 'heritage-brick-repairs');

  return (
    <ServicePageTemplate
      title="Heritage Layers Repairs"
      metaTitle="Heritage Layers Repairs Sydney | Romans Building Services"
      metaDescription="Period-correct brick repairs for heritage buildings. Matching original bricks, mortar, and pointing styles across Sydney."
      heroImage="/gallery/thumbs/romansstone_1451642255_1152781246863726646_2394650725.webp"
      parentService={{ title: 'Heritage Restoration', href: '/services/heritage-restoration' }}
      siblingServices={siblings}
      breadcrumbs={[
        { label: 'Services', href: '/services' },
        { label: 'Heritage Restoration', href: '/services/heritage-restoration' },
        { label: 'Heritage Layers Repairs', href: '' },
      ]}
      intro={[
        "Old bricks are different from modern ones. They are softer, more porous, and come in sizes that are no longer standard. Repairing heritage brickwork means finding the right bricks and using the right mortar. Get either one wrong and the repair stands out.",
        "We source period bricks from salvage yards, reclamation specialists, and our own stockpile built up over decades. Where matching bricks cannot be found, we can tint and age new bricks to blend in.",
        "Our heritage brick repairs are done with lime mortar, pointed to match the original profile. We have repaired convict-era brickwork, Federation terraces, and Victorian warehouses across Sydney."
      ]}
      features={[
        { icon: Layers, title: 'Period Layers Sourcing', description: 'We track down matching bricks from salvage yards, demolition sites, and specialist suppliers across NSW.' },
        { icon: Paintbrush, title: 'Mortar Matching', description: 'Lime mortar mixed on site to match the original colour and texture. We replicate the original pointing profile exactly.' },
        { icon: History, title: 'All Eras Covered', description: 'From convict-era hand-moulded bricks to machine-pressed Federation bricks. We know the differences and how to work with each.' },
        { icon: ClipboardCheck, title: 'Heritage Compliance', description: 'All repairs documented and completed to heritage council standards. We provide before and after photographs for council records.' },
      ]}
      faqs={[
        { question: 'Where do you find old bricks to match my building?', answer: 'We have a network of salvage suppliers and a stockpile we have built up over the years. For common heritage bricks, we can usually find a match. For rare types, it may take some searching but we get there.' },
        { question: 'Why are my old bricks crumbling?', answer: 'Usually it is moisture. If cement mortar was used in past repairs, it traps water inside the softer old bricks. Salt crystallisation then breaks the brick apart from inside. The fix is to remove the cement mortar and repoint with lime.' },
        { question: 'Can you repair just a section of brickwork?', answer: 'Yes. We regularly do patch repairs, replacing only the damaged bricks and repointing the surrounding area. The aim is to make the repair blend in with the existing wall.' },
      ]}
    />
  );
};

export default HeritageBrickRepairsPage;
