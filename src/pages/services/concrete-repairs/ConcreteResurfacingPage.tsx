import { ServicePageTemplate } from '@/components/ServicePageTemplate';
import { getSiblingServices } from '@/data/serviceHierarchy';
import { PaintBucket, Layers, Footprints, Timer, ThumbsUp } from 'lucide-react';

const ConcreteResurfacingPage = () => {
  const siblings = getSiblingServices('concrete-repairs', 'concrete-resurfacing');

  return (
    <ServicePageTemplate
      title="Concrete Resurfacing"
      metaTitle="Concrete Resurfacing Sydney | Romans Building Services"
      metaDescription="Concrete resurfacing and overlay systems across Sydney. Restoring worn and damaged concrete surfaces."
      heroImage="/gallery/thumbs/romansstone_1576003161_2195996136622601152_2394650725.webp"
      parentService={{ title: 'Concrete Repairs', href: '/services/concrete-repairs' }}
      siblingServices={siblings}
      breadcrumbs={[
        { label: 'Services', href: '/services' },
        { label: 'Concrete Repairs', href: '/services/concrete-repairs' },
        { label: 'Concrete Resurfacing', href: '' },
      ]}
      intro={[
        "If your concrete is sound but the surface is worn, pitted, or rough, resurfacing brings it back without ripping the whole lot out. We apply polymer-modified overlays that bond to the existing slab and give you a fresh, durable finish.",
        "We resurface driveways, paths, pool surrounds, carpark decks, balconies, and commercial floors. The overlay can be trowelled smooth, textured for grip, or finished to match surrounding surfaces.",
        "Resurfacing is quicker and cheaper than full replacement. If the base concrete is still in good shape, there is no point demolishing it. We will tell you straight whether resurfacing is the right option or not."
      ]}
      features={[
        { icon: PaintBucket, title: 'Overlay Systems', description: 'Polymer-modified cement overlays from 5mm to 50mm thick. We match the finish to your needs, whether that is smooth, textured, or non-slip.' },
        { icon: Layers, title: 'Surface Preparation', description: 'We grind, scarify, or shot-blast the existing surface to get a proper bond. No shortcuts. A bad prep means a failed overlay.' },
        { icon: Footprints, title: 'Non-Slip Finishes', description: 'Textured and non-slip finishes for pool surrounds, ramps, and high-traffic areas. Meets Australian slip resistance standards.' },
        { icon: Timer, title: 'Fast Turnaround', description: 'Most resurfacing jobs are done in a day or two. Rapid-set options available if you need the area back in service quickly.' },
        { icon: ThumbsUp, title: 'Cost Effective', description: 'Resurfacing costs a fraction of full replacement and avoids the mess and disruption of demolition.' },
      ]}
      faqs={[
        { question: 'How thick is a concrete overlay?', answer: 'Typically between 10mm and 50mm depending on the product and how uneven the existing surface is. We will assess the slab and recommend the right system.' },
        { question: 'Will the overlay crack?', answer: 'If the base slab moves, the overlay can crack with it. We assess the slab condition first. If there are active cracks or movement, we address those before resurfacing.' },
        { question: 'How long does concrete resurfacing last?', answer: 'A quality overlay on a well-prepared surface will last 15 to 25 years. We use commercial-grade products, not hardware store paint.' },
      ]}
    />
  );
};

export default ConcreteResurfacingPage;
