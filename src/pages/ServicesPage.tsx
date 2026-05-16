import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SEO } from '@/components/SEO';
import { CollectionPageSchema, FAQSchema } from '@/components/LocalSEO/StructuredData';
import { ProblemsLinksSection } from '@/components/ProblemsLinksSection';
import {
  Hammer,
  Landmark,
  Building2,
  Wrench,
  Construction,
  Shovel,
  ClipboardCheck,
} from 'lucide-react';

const services = [
  {
    icon: Hammer,
    title: 'Masonry',
    slug: 'masonry',
    description:
      'Stone, brick and block. Garden walls, retaining walls, chimneys, feature walls, repointing. New builds and repairs across Sydney.',
    bestFor:
      'Anyone with stonework, brick or block on their place that needs building, repairing or rebuilding.',
  },
  {
    icon: Landmark,
    title: 'Heritage Restoration',
    slug: 'heritage-restoration',
    description:
      'Restoring listed and period buildings using materials and methods matched to the original era. Federation, Victorian, Colonial sandstone, Art Deco, Inter-war.',
    bestFor:
      'Owners of heritage-listed homes, terraces and commercial buildings where the work has to be done to era.',
  },
  {
    icon: Building2,
    title: 'Building Restoration',
    slug: 'building-restoration',
    description:
      'Full facade restoration, render repairs, interior masonry, and complete building refits where the masonry has gone past patching.',
    bestFor:
      'Strata buildings, commercial facades and homes where multiple things have failed at once and you want it all sorted in one job.',
  },
  {
    icon: Wrench,
    title: 'Structural Repairs',
    slug: 'structural-repairs',
    description:
      'Crack stitching, lintel replacement, load-bearing wall repairs, pier rebuilds. Engineered repairs where the wall is carrying weight.',
    bestFor:
      'Cracks in load-bearing walls, doors and windows that have gone out of square, walls that are bulging or moving.',
  },
  {
    icon: Construction,
    title: 'Concrete Repairs',
    slug: 'concrete-repairs',
    description:
      'Concrete cancer treatment, spalling repairs, protective coatings, render replacement. The fix-it work older buildings need.',
    bestFor:
      'Apartment blocks, balconies and any concrete structure where rust spots or chunks of concrete are coming off.',
  },
  {
    icon: Shovel,
    title: 'Foundation Repairs',
    slug: 'foundation-repairs',
    description:
      'Underpinning, restumping, foundation crack repairs, settlement stabilisation. Work below the ground floor to stop further movement.',
    bestFor:
      'Homes that have settled or are still moving, especially older terraces and houses on clay soils.',
  },
  {
    icon: ClipboardCheck,
    title: 'Remedial Building',
    slug: 'remedial-building',
    description:
      'Structural assessments, compliance upgrades, strata defect repairs, emergency stabilisation. The work that gets buildings back to standard.',
    bestFor:
      'Strata managers, building owners and insurance jobs where a defect report needs to turn into completed work.',
  },
];

const servicesFaqs = [
  {
    question: 'Which service do I need?',
    answer:
      "Easiest way is to tell us what you are seeing and let us work it out. A cracked wall could be structural, foundation, or just cosmetic depending on what is causing it. Send a couple of photos through or give Minas a ring and we will tell you straight.",
  },
  {
    question: 'Do you do residential and commercial?',
    answer:
      'Both. About 60 percent of our work is residential, 40 percent commercial and strata. Same standards either way. The paperwork is different on commercial jobs but the work is the same.',
  },
  {
    question: 'Can you handle a job that needs more than one of these services?',
    answer:
      'Yes. Most heritage jobs do. A Federation terrace might need repointing, structural crack repair, foundation work and concrete repair to the front porch all on the one job. We quote it as one job and run it as one job.',
  },
  {
    question: 'Are you licensed for structural work?',
    answer:
      'Yes. Romans holds a full NSW builders licence covering structural masonry. For engineered work we coordinate with structural engineers and certifiers as part of the job.',
  },
  {
    question: 'What if my problem is not on this list?',
    answer:
      "Ring us anyway. After 30 years there is not much we have not seen. If we cannot do it we will tell you and usually point you to someone who can.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <SEO
        title="Masonry, Heritage & Structural Repair Services Sydney | Romans Building Services"
        description="Sydney masonry, heritage restoration, structural and concrete repairs by Minas Romanakis. 30 years on the tools. Licensed, insured, work to AS 3700."
        canonical="/services"
      />
      <CollectionPageSchema
        name="Our Services"
        description="All masonry, heritage, structural, concrete, foundation and remedial building services offered by Romans Building Services across Sydney."
        url="https://romansbuildingservices.com/services"
        items={services.map((s) => ({
          name: s.title,
          url: `https://romansbuildingservices.com/services/${s.slug}`,
          description: s.description,
        }))}
      />
      <FAQSchema faqs={servicesFaqs} />

      <div className="min-h-screen font-body">
        {/* Hero Banner */}
        <section className="bg-navy texture-grain py-24">
          <div className="container mx-auto px-4 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-heading text-4xl md:text-5xl text-white mb-4"
            >
              Our Services
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-white/80 text-lg max-w-2xl mx-auto"
            >
              Masonry, restoration, and structural repairs. Whatever the job, the standard is the
              same.
            </motion.p>
          </div>
        </section>

        {/* Lead essay */}
        <section className="bg-white py-16 md:py-20 px-4">
          <div className="max-w-3xl mx-auto font-body text-text-muted space-y-5 text-base md:text-lg leading-relaxed">
            <p>
              Romans does seven things. They overlap. Most of our jobs touch two or three of them.
              We list them out so you can find what you are looking for, but in practice they all
              run together. A heritage facade restoration usually involves stonework, structural
              repair, concrete patching and repointing. We quote and run it as one job, not four
              separate trades.
            </p>
            <p>
              Underneath all of it is masonry. That is what Minas trained in and that is what the
              business has been doing since 1995. Everything else is masonry support work. Concrete
              repair so the brickwork above it stops moving. Foundation work so the wall stops
              cracking. Remedial work so a strata block can get its certification back. The trade is
              the trade, the names just change with what got damaged.
            </p>
            <p>
              Pick whichever heading below sounds closest to what you have. If you are not sure,
              skip to the questions further down the page or give us a ring.
            </p>
          </div>
        </section>

        {/* Services List */}
        <section className="bg-bg-light py-16 md:py-20 px-4">
          <div className="container mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl text-navy mb-12 text-center">
              The seven services
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={service.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white rounded-lg p-7 flex flex-col"
                >
                  <div className="w-12 h-12 bg-navy/10 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-navy" />
                  </div>
                  <h3 className="font-heading text-xl text-text-primary mb-3">{service.title}</h3>
                  <p className="text-text-secondary leading-relaxed mb-4">{service.description}</p>
                  <p className="text-text-muted text-sm leading-relaxed mb-5">
                    <span className="font-semibold text-navy">Best for: </span>
                    {service.bestFor}
                  </p>
                  <Link
                    to={`/services/${service.slug}`}
                    className="mt-auto text-navy font-semibold hover:text-navy-light transition-colors"
                  >
                    Learn more &rarr;
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <ProblemsLinksSection
          heading="Got a problem? Here's what it might be."
          intro="Plain-English diagnosis of the most common masonry, concrete and structural issues we see across Sydney. Pick what matches what you are seeing."
          background="off-white"
        />

        {/* FAQ */}
        <section className="bg-white py-16 md:py-20 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl text-navy mb-3 text-center">
              Questions before you call
            </h2>
            <p className="font-body text-text-muted text-center mb-12 max-w-2xl mx-auto">
              The stuff homeowners and strata managers ask before they pick up the phone.
            </p>
            <div className="space-y-4">
              {servicesFaqs.map((faq) => (
                <div key={faq.question} className="bg-bg-light p-6 rounded-md">
                  <h3 className="font-heading text-lg text-navy mb-2">{faq.question}</h3>
                  <p className="font-body text-text-muted leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-bg-light py-16">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-3xl text-text-primary mb-6">Need a quote?</h2>
              <Link
                to="/contact"
                className="inline-block bg-amber text-white font-body font-semibold px-8 py-4 rounded-lg hover:opacity-90 transition-opacity"
              >
                Get in Touch
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
