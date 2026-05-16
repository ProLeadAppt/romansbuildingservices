import { SEO } from '@/components/SEO';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin } from 'lucide-react';
import { CollectionPageSchema, FAQSchema } from '@/components/LocalSEO/StructuredData';
import { QuoteCTAButton } from '@/components/quote';

const areas = [
  {
    name: 'Sydney CBD',
    short: 'Heritage and commercial sandstone in the city centre.',
    long: 'Heritage buildings, commercial facades, sandstone restoration and remedial work on the older city stock. The CBD has the highest concentration of listed sandstone in the country and most of it needs work every few decades.',
    href: '/areas/sydney-cbd',
  },
  {
    name: 'Eastern Suburbs',
    short: 'Period homes and harbour walls from Bondi to Rose Bay.',
    long: 'Period homes, sandstone terraces, retaining walls and harbour seawalls from Bondi through Bellevue Hill to Rose Bay. Salt air and the slope of the land mean a lot of the older stonework needs regular attention.',
    href: '/areas/eastern-suburbs',
  },
  {
    name: 'North Shore',
    short: 'Federation homes and heritage masonry across the line.',
    long: 'Federation-era homes, brick masonry repairs and heritage restoration from Crows Nest up to Wahroonga. Big leafy blocks and a lot of original 1910s and 1920s brick that has aged differently to the houses on the south side.',
    href: '/areas/north-shore',
  },
  {
    name: 'Northern Beaches',
    short: 'Coastal repairs and salt damage from Manly to Palm Beach.',
    long: 'Coastal masonry, salt damage remediation and retaining wall work from Manly through Mona Vale to Palm Beach. The salt-laden wind eats mortar twice as fast as the rest of Sydney, so the timeline on repairs out here is different.',
    href: '/areas/northern-beaches',
  },
  {
    name: 'Inner West',
    short: 'Victorian terraces and Federation streets. Our home turf.',
    long: 'Victorian terraces, Federation brick, heritage streetscapes from Newtown to Strathfield. This is where Minas lives and where most of our long-running jobs are. Plenty of original tuck-pointed brick that needs proper repointing.',
    href: '/areas/inner-west',
  },
  {
    name: 'Greater Sydney',
    short: 'Everything outside the inner ring.',
    long: 'All masonry services for commercial and residential properties across the wider metro. From the Sutherland Shire up to the Hills, out west to Penrith. Quotes for outer fringes are case by case so we know we can run the job properly.',
    href: '/areas/greater-sydney',
  },
];

const areasFaqs = [
  {
    question: 'Do you really cover all of Sydney?',
    answer:
      'Greater Sydney, yes. For inner-ring suburbs we are there often. For outer fringes like the Hawkesbury or far western Sydney we quote case by case and the call-out fees scale with travel. The work is always the same standard.',
  },
  {
    question: 'How do I know which area my suburb is in?',
    answer:
      'If you are unsure, the easiest thing is to ring us. Suburb names on this site point to the closest area page. For example, Bondi sits under Eastern Suburbs, Mosman under North Shore, Strathfield under Inner West.',
  },
  {
    question: 'Do you charge call-out fees?',
    answer:
      'No call-out fee for the initial site visit within Greater Sydney. For very far-out jobs we discuss travel before we come out so there are no surprises. Site visit and quote are free.',
  },
  {
    question: 'Are area pages different to service pages?',
    answer:
      'Yes. Area pages explain what is typical around there. Architectural era, common failure modes, the materials and methods that suit local conditions. Service pages explain what we do, no matter where you are. Most homeowners read one of each.',
  },
];

const ServicesAreasPage = () => (
  <>
    <SEO
      title="Sydney Areas We Cover | Masonry & Heritage Restoration | Romans Building Services"
      description="Romans Building Services works across Greater Sydney. CBD, Eastern Suburbs, North Shore, Northern Beaches, Inner West and beyond. 30 years on the tools."
      canonical="/areas"
    />
    <CollectionPageSchema
      name="Areas We Service"
      description="Romans Building Services covers all of Sydney. Pick an area to see the masonry, heritage and remedial work we do there."
      url="https://romansbuildingservices.com/areas"
      items={areas.map((a) => ({
        name: a.name,
        url: `https://romansbuildingservices.com${a.href}`,
        description: a.short,
      }))}
    />
    <FAQSchema faqs={areasFaqs} />

    {/* Hero */}
    <section className="bg-navy texture-grain py-24">
      <div className="container mx-auto px-4 text-center">
        <motion.h1
          className="font-heading text-4xl md:text-5xl text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Areas We Service
        </motion.h1>
        <motion.p
          className="font-body text-white/70 max-w-xl mx-auto text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          We work right across Sydney. Pick your area to see what we do there.
        </motion.p>
      </div>
    </section>

    {/* Lead essay */}
    <section className="bg-white py-16 md:py-20 px-4">
      <div className="max-w-3xl mx-auto font-body text-text-muted space-y-5 text-base md:text-lg leading-relaxed">
        <p>
          Sydney is six or seven different building stocks stacked on top of each other. The
          sandstone in Paddington is not the same as the brick on the North Shore. The salt damage
          on the Northern Beaches is not what we deal with in the Inner West. Even the soil moves
          differently depending on whether you are on shale or clay.
        </p>
        <p>
          The area pages below explain what is normal where you are. What era most of the buildings
          are from, what tends to fail first, what materials we use to fix it. Read the one for
          your area before you call. It will save us five minutes on the phone and you ten minutes
          on the diagnosis.
        </p>
        <p>
          For service questions, pick the area page closest to you. For service questions about a
          specific type of work, see the{' '}
          <Link to="/services" className="text-navy underline underline-offset-4">
            services overview
          </Link>
          . Most jobs need both.
        </p>
      </div>
    </section>

    {/* Area cards grid */}
    <section className="py-16 md:py-20 bg-bg-light">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl md:text-4xl text-navy mb-12 text-center">
          The six areas
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {areas.map((area, i) => (
            <motion.div
              key={area.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <Link
                to={area.href}
                className="block bg-white rounded-2xl p-7 hover:shadow-lg transition-shadow group h-full"
              >
                <div className="flex items-center gap-3 mb-3">
                  <MapPin className="w-5 h-5 text-navy-light" />
                  <h3 className="font-heading text-xl text-navy">{area.name}</h3>
                </div>
                <p className="font-body text-text-secondary text-sm leading-relaxed mb-4">
                  {area.long}
                </p>
                <span className="inline-flex items-center gap-1 text-navy-light font-body text-sm font-semibold group-hover:gap-2 transition-all">
                  View area <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* FAQ */}
    <section className="bg-white py-16 md:py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-heading text-3xl md:text-4xl text-navy mb-3 text-center">
          Common questions about coverage
        </h2>
        <p className="font-body text-text-muted text-center mb-12 max-w-2xl mx-auto">
          The stuff people ask before they book us in.
        </p>
        <div className="space-y-4">
          {areasFaqs.map((faq) => (
            <div key={faq.question} className="bg-bg-light p-6 rounded-md">
              <h3 className="font-heading text-lg text-navy mb-2">{faq.question}</h3>
              <p className="font-body text-text-muted leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="bg-navy py-16">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          className="font-heading text-3xl text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Not sure which area you fall under?
        </motion.h2>
        <motion.p
          className="font-body text-white/70 mb-8 max-w-lg mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Give us a call or send a message. If we can get to you, we will.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <QuoteCTAButton
            className="inline-block bg-amber text-navy font-body font-bold px-8 py-4 rounded-lg hover:bg-amber/90 transition-colors"
          >
            Get in touch
          </QuoteCTAButton>
        </motion.div>
      </div>
    </section>
  </>
);

export default ServicesAreasPage;
