import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { MessageSquare, PackageCheck, HardHat } from 'lucide-react';
import { PersonSchema, SpeakableSchema, FAQSchema } from '@/components/LocalSEO/StructuredData';
import { QuoteCTAButton } from '@/components/quote';

const values = [
  {
    icon: MessageSquare,
    title: 'Straight Talking',
    description:
      "No jargon. No runaround. You will know what needs doing, what it costs, and when it will be done.",
  },
  {
    icon: PackageCheck,
    title: 'Quality Materials',
    description:
      'We use the right materials for the job. Proper lime mortar for heritage work. Structural-grade for load-bearing. No shortcuts.',
  },
  {
    icon: HardHat,
    title: 'Owner on Site',
    description:
      "Minas does not just quote the job. He does the job. That is why the standard stays the same.",
  },
];

const aboutFaqs = [
  {
    question: 'Is Romans a family business?',
    answer:
      'Yes. Minas runs the trade side and Sandra runs the office. Most of the long-term crew have been with us for years. It is small on purpose so the standards do not slip.',
  },
  {
    question: 'How big are the jobs you take on?',
    answer:
      'From single chimney rebuilds up to multi-storey heritage facade restorations. Most jobs sit between five thousand and one hundred thousand dollars. We have done jobs into the hundreds of thousands when the heritage scope justifies it.',
  },
  {
    question: 'Who does the actual work?',
    answer:
      'Minas is on the tools for anything heritage, structural or stonework. For larger jobs we bring in two or three of the senior crew. We do not subcontract the core masonry. Specialists like engineers, certifiers, and scaffolders are brought in as needed.',
  },
  {
    question: 'Why is the business called Romans?',
    answer:
      'Family name shortened. Romanakis to Romans. The Roman builders also happened to be the people who first nailed the use of lime mortar and arches in the second century, which has held up alright. We will take the association.',
  },
  {
    question: 'Do you have references?',
    answer:
      'Yes. Past clients, architects we work with regularly, and a few heritage consultants who can vouch for the work. Happy to provide on request before any job.',
  },
];

export default function AboutPage() {
  return (
    <>
      <SEO
        title="About Romans Building Services | Minas Romanakis, Sydney Stonemason Since 1995"
        description="Romans Building Services is run by Minas Romanakis. 30 years of heritage restoration and masonry across Sydney. Family-run, licensed, owner on every job."
        canonical="/about"
        ogImage="/gallery/thumbs/romansstone_1579724750_2227215093383768825_2394650725.webp"
      />
      <PersonSchema />
      <SpeakableSchema url="https://romansbuildingservices.com/about" cssSelectors={['h1', 'h2', 'p']} />
      <FAQSchema faqs={aboutFaqs} />

      <div className="min-h-screen font-body">
        {/* Hero Banner */}
        <section className="bg-navy texture-grain py-24">
          <div className="container mx-auto px-4 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-heading text-4xl md:text-5xl text-white"
            >
              About Romans Building Services
            </motion.h1>
          </div>
        </section>

        {/* At a glance */}
        <section className="bg-bg-light py-12 border-b border-border">
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-body text-xs font-semibold text-text-muted uppercase tracking-widest mb-6 text-center">
                Romans Building Services at a glance
              </h2>
              <dl className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <dt className="font-body text-xs text-text-muted uppercase tracking-wider mb-1">
                    Founded
                  </dt>
                  <dd className="font-heading text-2xl text-navy">1995</dd>
                  <p className="font-body text-xs text-text-muted mt-1">
                    30+ years trading
                  </p>
                </div>
                <div className="text-center">
                  <dt className="font-body text-xs text-text-muted uppercase tracking-wider mb-1">
                    Owner
                  </dt>
                  <dd className="font-heading text-base text-navy leading-tight">
                    Minas Romanakis
                  </dd>
                  <p className="font-body text-xs text-text-muted mt-1">
                    Master stonemason, on every job
                  </p>
                </div>
                <div className="text-center">
                  <dt className="font-body text-xs text-text-muted uppercase tracking-wider mb-1">
                    Based in
                  </dt>
                  <dd className="font-heading text-base text-navy leading-tight">Strathfield</dd>
                  <p className="font-body text-xs text-text-muted mt-1">
                    Servicing all of Sydney
                  </p>
                </div>
                <div className="text-center">
                  <dt className="font-body text-xs text-text-muted uppercase tracking-wider mb-1">
                    Specialty
                  </dt>
                  <dd className="font-heading text-base text-navy leading-tight">
                    Heritage &amp; Masonry
                  </dd>
                  <p className="font-body text-xs text-text-muted mt-1">
                    Lime mortar, sandstone, concrete
                  </p>
                </div>
              </dl>
            </motion.div>
          </div>
        </section>

        {/* Story Section */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Left: Image */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <img
                  src="/gallery/thumbs/romansstone_1579724750_2227215093383768825_2394650725.webp"
                  alt="Minas Romanakis working on a masonry project"
                  className="rounded-lg w-full object-cover"
                />
              </motion.div>

              {/* Right: Story */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h2 className="font-heading text-3xl text-text-primary">
                  Built on handshakes, not sales pitches
                </h2>
                <p className="text-text-secondary leading-relaxed">
                  Minas Romanakis started Romans Building Services in 1995 with one goal. Do the
                  work properly and let it speak for itself. 30 years later that has not changed.
                </p>
                <p className="text-text-secondary leading-relaxed">
                  He grew up around stone and brick. His heritage gave him a deep respect for
                  old-world craftsmanship, the kind where you take your time, do it right, and stand
                  behind it. The first jobs were small. A retaining wall here, a chimney rebuild
                  there. Word got around because the work held up.
                </p>
                <p className="text-text-secondary leading-relaxed">
                  By the early 2000s the heritage work started picking up. Architects who had seen
                  the brickwork on a renovation started ringing about Federation terraces and
                  Victorian facades. From there it grew into proper heritage restoration. Listed
                  buildings, council scopes of works, lime mortars matched to original samples. That
                  side of the business is now most of what we do.
                </p>
                <p className="text-text-secondary leading-relaxed">
                  Today Romans Building Services handles everything from heritage-listed
                  restorations to residential retaining walls. Minas still works on site. Sandra
                  runs the office. It is a family operation.
                </p>
                <p className="text-text-secondary leading-relaxed">
                  We do not do sales pitches. We show up, look at the job, give you a straight
                  answer, and get to work. Most of our work now comes from past clients, architects
                  we have built up trust with, and word of mouth.
                </p>
                <p className="text-text-secondary leading-relaxed">
                  We work with architects, building companies, strata managers, insurance
                  companies, and homeowners across Greater Sydney. The job size does not matter. The
                  standard does.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why we work this way */}
        <section className="bg-bg-light py-16 md:py-20 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl text-navy mb-6 text-center">
              Why we still do it the old way
            </h2>
            <div className="font-body text-text-muted space-y-5 text-base md:text-lg leading-relaxed">
              <p>
                Modern building is fast. The materials are designed to be quick to install and
                easy to source. For new builds that is mostly fine. For old buildings it is the
                wrong tool. A 120-year-old wall was built with materials that breathe. Modern
                cement mortars do not breathe. Put modern cement against old brick and you trap
                moisture inside the wall. The brick face starts to blow. The wall fails from
                inside.
              </p>
              <p>
                The old methods are slower because they have to be. Lime mortar takes weeks to
                cure properly. Sandstone has to be hand-dressed because no two blocks are the
                same shape. Repointing a single course of a Victorian facade can take a full day.
                There is no shortcut that does not show up later as a problem.
              </p>
              <p>
                We charge a fair price for slow work because the alternative costs more. Cheap
                repointing today is a full rebuild in fifteen years. Cement render over old brick
                is concrete cancer in twenty. Get the materials and the methods right the first
                time and the work lasts longer than the people who did it.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="bg-white py-16 px-4">
          <div className="container mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-heading text-3xl text-text-primary text-center mb-12"
            >
              How we work
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-bg-light rounded-lg p-8"
                >
                  <div className="w-12 h-12 bg-navy/10 rounded-lg flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-navy" />
                  </div>
                  <h3 className="font-heading text-xl text-text-primary mb-3">{value.title}</h3>
                  <p className="text-text-secondary leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-bg-light py-16 md:py-20 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl text-navy mb-3 text-center">
              Questions people ask about us
            </h2>
            <p className="font-body text-text-muted text-center mb-12 max-w-2xl mx-auto">
              The things that come up before someone books a quote.
            </p>
            <div className="space-y-4">
              {aboutFaqs.map((faq) => (
                <div key={faq.question} className="bg-white p-6 rounded-md">
                  <h3 className="font-heading text-lg text-navy mb-2">{faq.question}</h3>
                  <p className="font-body text-text-muted leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-navy py-16">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-3xl text-white mb-6">
                Ready to talk about your project?
              </h2>
              <QuoteCTAButton
                className="inline-block bg-amber text-white font-body font-semibold px-8 py-4 rounded-lg hover:opacity-90 transition-opacity"
              >
                Get in Touch
              </QuoteCTAButton>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
