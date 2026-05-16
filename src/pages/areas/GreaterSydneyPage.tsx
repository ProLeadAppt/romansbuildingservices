import { SEO } from '@/components/SEO';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { PlaceSchema, ServiceSchema } from '@/components/LocalSEO/StructuredData';
import { AreaSuburbsLinks } from '@/components/AreaSuburbsLinks';
import { AreaProblemLinks } from '@/components/AreaProblemLinks';
import { AreaServiceLinks } from '@/components/AreaServiceLinks';
import { QuoteCTAButton } from '@/components/quote';

const services = [
  'Commercial and residential masonry',
  'Concrete cancer repairs',
  'Structural crack stitching',
  'Retaining wall construction',
  'Brick and block laying',
  'Repointing and mortar repairs',
];

const GreaterSydneyPage = () => (
  <>
    <SEO
      title="Greater Sydney Masonry and Building Services | Romans Building Services"
      description="Masonry and building services across Greater Sydney. From the CBD to Parramatta and the Hills District. Romans Building Services handles it all."
      canonical="/areas/greater-sydney"
    />
    <PlaceSchema
      name="Greater Sydney"
      description="Masonry, building restoration and remedial services across Greater Sydney."
      url="https://romansbuildingservices.com/areas/greater-sydney"
    />
    <ServiceSchema
      service="Masonry and Building Services — Greater Sydney"
      description="Commercial and residential masonry, concrete cancer repairs, structural crack stitching and retaining wall construction across Parramatta, Liverpool, Penrith, Blacktown and the Hills District."
      url="https://romansbuildingservices.com/areas/greater-sydney"
    />

    {/* Hero */}
    <section className="bg-navy py-24">
      <div className="container mx-auto px-4 text-center">
        <motion.h1
          className="font-heading text-4xl md:text-5xl text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Greater Sydney
        </motion.h1>
        <motion.p
          className="font-body text-white/70 max-w-xl mx-auto text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          All masonry services for commercial and residential properties across the wider Sydney metro.
        </motion.p>
      </div>
    </section>

    {/* Content */}
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-body text-text-secondary mb-6">
            We are not just an inner-city operation. We travel right across Greater Sydney for the right job. From Parramatta and Liverpool to Penrith and the Hills District, we bring the same quality of work no matter where you are.
          </p>
          <p className="font-body text-text-secondary mb-6">
            Out in Blacktown and Penrith, we handle a lot of residential masonry work. Cracked walls, damaged retaining walls and concrete repairs are common across the western suburbs. The clay soils in these areas cause movement and we know how to deal with it properly.
          </p>
          <p className="font-body text-text-secondary mb-10">
            For commercial properties around Parramatta and Liverpool, we do everything from facade repairs to full remedial building work. If your building has structural issues or water damage, give us a call. We will come out and give you an honest assessment.
          </p>
        </motion.div>

        {/* Services list */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <h2 className="font-heading text-2xl text-navy mb-6">What we do across Greater Sydney</h2>
          <ul className="space-y-3 mb-12">
            {services.map((s) => (
              <li key={s} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green mt-0.5 shrink-0" />
                <span className="font-body text-text-secondary">{s}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <AreaSuburbsLinks parentAreaHref="/areas/greater-sydney" parentAreaName="Greater Sydney" />

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <QuoteCTAButton
            className="inline-flex items-center gap-2 bg-amber text-navy font-body font-bold px-8 py-4 rounded-lg hover:bg-amber/90 transition-colors"
          >
            Get a quote for Greater Sydney <ArrowRight className="w-4 h-4" />
          </QuoteCTAButton>
        </motion.div>
      </div>
    </section>

    <AreaProblemLinks areaSlug="greater-sydney" />
    <AreaServiceLinks areaSlug="greater-sydney" />
  </>
);

export default GreaterSydneyPage;
