import { ServicePageTemplate } from '@/components/ServicePageTemplate';
import { getSiblingServices } from '@/data/serviceHierarchy';
import { Columns3, Wrench, FileCheck, Shield, Building } from 'lucide-react';

const StructuralConcretePage = () => {
  const siblings = getSiblingServices('concrete-repairs', 'structural-concrete');

  return (
    <ServicePageTemplate
      title="Structural Concrete Restoration"
      metaTitle="Structural Concrete Restoration Sydney | Romans Building Services"
      metaDescription="Structural concrete restoration for residential and commercial buildings across Sydney. Engineered repair solutions."
      heroImage="/gallery/thumbs/romansstone_1576440613_2199665757989086550_2394650725.webp"
      parentService={{ title: 'Concrete Repairs', href: '/services/concrete-repairs' }}
      siblingServices={siblings}
      breadcrumbs={[
        { label: 'Services', href: '/services' },
        { label: 'Concrete Repairs', href: '/services/concrete-repairs' },
        { label: 'Structural Concrete Restoration', href: '' },
      ]}
      intro={[
        "When concrete loses structural capacity, you need more than a surface patch. We restore load-bearing beams, columns, slabs, and walls to their original strength or better. This is proper structural work, not cosmetic.",
        "We work to engineer specifications. That means breaking out damaged concrete, adding new reinforcement where needed, and placing high-strength repair concrete or grout. Every repair is built to carry the load it was designed for.",
        "Romans handles structural concrete restoration on residential homes, apartment blocks, commercial buildings, and industrial sites across Sydney. Minas will coordinate with your engineer if you have one, or recommend one if you need one."
      ]}
      features={[
        { icon: Columns3, title: 'Beam & Column Repairs', description: 'Restoring load-bearing beams and columns to full capacity. We add reinforcement and use structural-grade repair materials.' },
        { icon: Wrench, title: 'Slab Restoration', description: 'Repairing and strengthening concrete slabs. Balconies, suspended floors, and roof slabs.' },
        { icon: FileCheck, title: 'Engineered Solutions', description: 'We work to structural engineer drawings and specifications. Every repair is documented and certified.' },
        { icon: Shield, title: 'Carbon Fibre Strengthening', description: 'Where extra strength is needed, we apply carbon fibre reinforcement to increase load capacity without adding bulk.' },
        { icon: Building, title: 'Multi-Storey Buildings', description: 'We have the gear and the experience for high-rise structural work. Scaffolding, propping, and access sorted.' },
      ]}
      faqs={[
        { question: 'Do I need an engineer for structural concrete repairs?', answer: 'For anything load-bearing, yes. We can recommend a structural engineer who will specify the repair method. We then carry out the work to their design.' },
        { question: 'What is carbon fibre strengthening?', answer: 'Carbon fibre strips or sheets are bonded to the concrete surface to add tensile strength. It is lighter and thinner than steel plate bonding and does not corrode.' },
        { question: 'How long does structural concrete restoration take?', answer: 'It depends on the scope. A single beam might take a week. A full building restoration can take months. We will give you a programme with your quote.' },
        { question: 'Can you work while the building is occupied?', answer: 'Usually yes. We stage the work to minimise disruption and keep access open. We have done plenty of jobs in occupied apartment blocks and commercial buildings.' },
      ]}
    />
  );
};

export default StructuralConcretePage;
