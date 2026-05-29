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
      title="Sydney Metro Masonry Services | Romans Building Services"
      description="Masonry, structural repairs and restoration across Sydney metro suburbs from Strathfield to Parramatta, Burwood, Concord, Homebush and nearby areas."
      canonical="/areas/greater-sydney"
    />
    <PlaceSchema
      name="Sydney metro"
      description="Masonry, building restoration and remedial services across Sydney metro suburbs."
      url="https://romansbuildingservices.com/areas/greater-sydney"
    />
    <ServiceSchema
      service="Masonry and Building Services — Sydney metro"
      description="Masonry, concrete repairs, structural crack stitching and retaining wall construction across Strathfield, Burwood, Concord, Homebush, Parramatta and nearby Sydney suburbs."
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
          Sydney Metro Masonry Services
        </motion.h1>
        <motion.p
          className="font-body text-white/70 max-w-xl mx-auto text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Masonry, restoration and structural repairs for commercial and residential properties across the Sydney metro.
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
            Romans Building Services is based in Strathfield and works across the Sydney metro for masonry, restoration and remedial building jobs. This page covers the suburbs around our home base, including Parramatta, Burwood, Concord, Homebush and nearby streets where older brick homes, apartment blocks and retaining walls need proper assessment.
          </p>
          <p className="font-body text-text-secondary mb-6">
            Around Strathfield, Burwood and Concord, we see reactive clay movement, old lime mortar, cracked brickwork and failing retaining walls. Some jobs need structural crack stitching, some need drainage fixed first, and some need underpinning. Minas checks the cause before recommending the repair.
          </p>
          <p className="font-body text-text-secondary mb-10">
            Parramatta and Homebush bring a mix of commercial facade repairs, strata concrete problems and period-home masonry. The work is still Sydney-local: real site visit, clear scope, materials matched to the building, and no promise to travel beyond the metro unless the job genuinely makes sense.
          </p>
        </motion.div>

        {/* Services list */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <h2 className="font-heading text-2xl text-navy mb-6">What we do across Sydney metro suburbs</h2>
          <ul className="space-y-3 mb-12">
            {services.map((s) => (
              <li key={s} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green mt-0.5 shrink-0" />
                <span className="font-body text-text-secondary">{s}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <AreaSuburbsLinks parentAreaHref="/areas/greater-sydney" parentAreaName="Sydney metro" />

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
            Get a Sydney metro quote <ArrowRight className="w-4 h-4" />
          </QuoteCTAButton>
        </motion.div>
      </div>
    </section>

    <AreaProblemLinks areaSlug="greater-sydney" />
    <AreaServiceLinks areaSlug="greater-sydney" />
  </>
);

export default GreaterSydneyPage;
