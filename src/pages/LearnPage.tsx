import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { CollectionPageSchema, FAQSchema, HowToSchema, SpeakableSchema } from '@/components/LocalSEO/StructuredData';
import {
  ArrowRight,
  CheckCircle2,
  MapPinned,
  MessageSquareQuote,
  Shield,
  Wrench,
  Landmark,
  Building2,
} from 'lucide-react';

const contentPillars = [
  {
    icon: Wrench,
    title: 'Masonry & repointing',
    href: '/services/masonry',
    description:
      'Own the core search terms first: masonry Sydney, repointing, brick restoration, sandstone repair, retaining walls.',
  },
  {
    icon: Landmark,
    title: 'Heritage restoration',
    href: '/services/heritage-restoration',
    description:
      'Own the heritage intent layer with era pages, material guides, and clear answers for period homes and listed buildings.',
  },
  {
    icon: Shield,
    title: 'Structural & remedial',
    href: '/services/remedial-building',
    description:
      'Capture the higher-value jobs: defects, concrete cancer, structural movement, and strata remediation.',
  },
  {
    icon: MapPinned,
    title: 'Sydney location pages',
    href: '/areas',
    description:
      'Build local trust with suburb and area pages that match real building stock, council rules, and exposure.',
  },
];

const priorityPages = [
  {
    name: 'Masonry vs remedial building',
    url: 'https://romansbuildingservices.com/learn/masonry-vs-remedial-building',
    description: 'Decision guide for buyers who do not know which service they actually need.',
  },
  {
    name: 'Signs you need repointing',
    url: 'https://romansbuildingservices.com/learn/repointing-signs',
    description: 'Diagnosis guide for powdering mortar, missing joints and water entry.',
  },
  {
    name: 'Concrete cancer in Sydney apartments',
    url: 'https://romansbuildingservices.com/learn/concrete-cancer-sydney',
    description: 'Strata and apartment remediation guide for spalling and corrosion.',
  },
  {
    name: 'Masonry service pillar',
    url: 'https://romansbuildingservices.com/services/masonry',
    description: 'Primary page for masonry, brickwork, repointing, sandstone and retaining walls.',
  },
  {
    name: 'Heritage restoration pillar',
    url: 'https://romansbuildingservices.com/services/heritage-restoration',
    description: 'Use this for heritage-listed homes, terraces and period masonry work.',
  },
  {
    name: 'Structural repairs pillar',
    url: 'https://romansbuildingservices.com/services/structural-repairs',
    description: 'Targets crack repair, load-bearing wall issues and serious structural intent.',
  },
  {
    name: 'Remedial building pillar',
    url: 'https://romansbuildingservices.com/services/remedial-building',
    description: 'Captures strata, defects, compliance and remediation jobs.',
  },
  {
    name: 'Sydney CBD area page',
    url: 'https://romansbuildingservices.com/areas/sydney-cbd',
    description: 'Local authority for sandstone, heritage and commercial masonry in the CBD.',
  },
  {
    name: 'Eastern Suburbs area page',
    url: 'https://romansbuildingservices.com/areas/eastern-suburbs',
    description: 'Strong for terrace restoration, coastal masonry and premium residential intent.',
  },
  {
    name: 'Concrete cancer problem page',
    url: 'https://romansbuildingservices.com/problems/concrete-cancer',
    description: 'High-intent diagnostic page for strata and apartment block searches.',
  },
  {
    name: 'Cracked brick walls problem page',
    url: 'https://romansbuildingservices.com/problems/cracked-brick-walls',
    description: 'Answer-engine friendly page for the common “what does this crack mean?” query.',
  },
];

const faqItems = [
  {
    question: 'What is the fastest way to improve SEO for a masonry company in Sydney?',
    answer:
      'Build a clear service hierarchy, then support it with local area pages, problem pages, FAQs and a proper authority hub. That gives Google, Bing and AI tools a clean path from broad intent to exact answer.',
  },
  {
    question: 'What should rank first: masonry or remedial building?',
    answer:
      'Masonry should usually be the primary category because it is broader and captures the base demand. Remedial building should be the higher-intent specialty layer for structural, strata and defect work.',
  },
  {
    question: 'Why does GEO / AEO need a different page structure?',
    answer:
      'Answer engines prefer pages that give the direct answer first, then supporting detail, then proof. If the site only has sales copy, it is harder for AI tools to quote it confidently.',
  },
  {
    question: 'How do you make a Sydney builder feel like the obvious choice?',
    answer:
      'Use real job language, real suburb language, and real problem language. Back it up with experience, process, and local examples so the site reads like the best subject-matter source rather than generic marketing copy.',
  },
  {
    question: 'What comes after the hub page?',
    answer:
      'Usually: 1) a few diagnostic problem pages, 2) one suburb cluster for the strongest location, 3) era-specific heritage pages, and 4) a tighter internal linking system from the homepage and service pages.',
  },
];

const howToSteps = [
  {
    title: 'Answer the query in the first paragraph',
    body: 'Start with the exact service or problem in plain English. Do not make people hunt for the answer.',
  },
  {
    title: 'Add the Sydney-specific context',
    body: 'Mention the suburb, building type, council or material issue that changes the job.',
  },
  {
    title: 'Link to the right supporting page',
    body: 'Send readers to the service, area or problem page that matches their intent instead of stuffing everything onto one page.',
  },
  {
    title: 'Finish with a low-friction next step',
    body: 'Give them a call, quote request or assessment option so the site turns attention into leads.',
  },
];

const LearnPage = () => {
  return (
    <>
      <SEO
        title="Sydney Masonry & Remedial Construction SEO Hub | Romans Building Services"
        description="A practical hub for improving SEO, GEO and AEO for Romans Building Services. Use this to own masonry, heritage restoration and remedial construction in Sydney."
        canonical="/learn"
      />
      <SpeakableSchema url="https://romansbuildingservices.com/learn" cssSelectors={['h1', 'h2', 'p']} />
      <CollectionPageSchema
        name="Romans Building Services Learn Hub"
        description="Authority hub for masonry, heritage restoration, remedial construction, Sydney area pages and problem pages."
        url="https://romansbuildingservices.com/learn"
        items={priorityPages}
      />
      <FAQSchema faqs={faqItems} />
      <HowToSchema name="How to build authority for masonry and remedial construction in Sydney" steps={howToSteps} />

      <div className="min-h-screen bg-white font-body">
        <section className="bg-navy texture-grain py-24 px-4">
          <div className="max-w-5xl mx-auto text-center">
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-amber font-semibold uppercase tracking-[0.22em] text-sm mb-4"
            >
              SEO / GEO / AEO playbook
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-heading text-4xl md:text-6xl text-white mb-6"
            >
              How to own masonry and remedial construction in Sydney
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-white/80 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
            >
              If the goal is to make Romans the obvious answer for masonry, heritage restoration and
              remedial building in Sydney, this is the structure: one strong service pillar, one
              answer-first hub, suburb pages, problem pages, and proof that sounds like the actual
              job.
            </motion.p>
          </div>
        </section>

        <section className="bg-bg-light py-16 md:py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
              {contentPillars.map((pillar, index) => (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06 }}
                  className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
                >
                  <div className="w-12 h-12 rounded-lg bg-navy/10 flex items-center justify-center mb-4">
                    <pillar.icon className="w-6 h-6 text-navy" />
                  </div>
                  <h2 className="font-heading text-2xl text-text-primary mb-3">{pillar.title}</h2>
                  <p className="text-text-secondary leading-relaxed mb-5">{pillar.description}</p>
                  <Link
                    to={pillar.href}
                    className="inline-flex items-center gap-2 text-navy font-semibold hover:text-navy-light transition-colors"
                  >
                    Use this pillar <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 px-4">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-5 gap-8 items-start">
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-5"
              >
                <h2 className="font-heading text-3xl md:text-4xl text-navy">What to do next</h2>
                <p className="text-text-muted leading-relaxed text-lg">
                  If the site wants to dominate category terms, the next wins are not more fluffy
                  homepage copy. They are pages that answer specific buying questions and specific
                  problem questions better than anyone else in Sydney.
                </p>
                <div className="grid gap-4">
                  <div className="rounded-xl border border-gray-200 p-5 bg-white">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-1 shrink-0" />
                      <div>
                        <h3 className="font-heading text-xl text-text-primary mb-2">Build the answer stack</h3>
                        <p className="text-text-muted leading-relaxed">
                          Keep the current service pages, then support them with problem pages,
                          suburb pages, and a learn hub that explains the difference between
                          masonry, heritage restoration, structural repair and remedial work.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-xl border border-gray-200 p-5 bg-white">
                    <div className="flex items-start gap-3">
                      <Building2 className="w-5 h-5 text-navy mt-1 shrink-0" />
                      <div>
                        <h3 className="font-heading text-xl text-text-primary mb-2">Write like a specialist, not a brochure</h3>
                        <p className="text-text-muted leading-relaxed">
                          Use materials, failure modes, suburbs, and building eras. That is what both
                          people and AI systems use to judge whether the page actually knows the job.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-xl border border-gray-200 p-5 bg-white">
                    <div className="flex items-start gap-3">
                      <MessageSquareQuote className="w-5 h-5 text-navy mt-1 shrink-0" />
                      <div>
                        <h3 className="font-heading text-xl text-text-primary mb-2">Lead with direct answers</h3>
                        <p className="text-text-muted leading-relaxed">
                          The first paragraph should answer the question in plain English. The rest of
                          the page can then prove it with detail, examples and next steps.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            <aside className="lg:col-span-2 bg-navy text-white rounded-2xl p-6 md:p-7">
              <h2 className="font-heading text-2xl md:text-3xl mb-4">The short version</h2>
              <ul className="space-y-4 text-white/85 leading-relaxed">
                <li>1. Own the main service pages first.</li>
                <li>2. Add pages that answer real problems and buying questions.</li>
                <li>3. Split Sydney by area and building stock, not by vague suburbs.</li>
                <li>4. Keep the copy human, local and technical.</li>
                <li>5. Give AI tools a page that looks like the best source in the category.</li>
              </ul>
              <div className="mt-6 pt-6 border-t border-white/15">
                <p className="text-white/75 text-sm leading-relaxed">
                  That is the quickest path to becoming the obvious Sydney result for masonry and
                  remedial construction.
                </p>
              </div>
            </aside>
          </div>
        </section>

        <section className="bg-bg-light py-16 md:py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="font-heading text-3xl md:text-4xl text-navy mb-4">
                Priority pages to build and strengthen
              </h2>
              <p className="text-text-muted leading-relaxed">
                These are the pages that should sit under the hub and carry most of the ranking and
                answer-engine weight.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {priorityPages.map((page) => (
                <a
                  key={page.url}
                  href={page.url.replace('https://romansbuildingservices.com', '')}
                  className="group bg-white rounded-xl border border-gray-200 p-5 hover:border-navy/30 hover:shadow-sm transition-all"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-heading text-xl text-text-primary mb-2 group-hover:text-navy transition-colors">
                        {page.name}
                      </h3>
                      <p className="text-text-muted leading-relaxed">{page.description}</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-navy shrink-0 mt-1" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="font-heading text-3xl md:text-4xl text-navy mb-4">
                Build the suburb cluster next
              </h2>
              <p className="text-text-muted leading-relaxed">
                Sydney authority grows faster when the site speaks to the strongest building stock by
                area — not just by suburb name. These are the clusters that already match the work.
              </p>
            </div>
            <div className="grid md:grid-cols-2 xl:grid-cols-5 gap-4">
              {[
                { name: 'Sydney CBD', href: '/areas/sydney-cbd', note: 'Heritage sandstone, commercial masonry, strict access.' },
                { name: 'Eastern Suburbs', href: '/areas/eastern-suburbs', note: 'Terraces, coastal exposure, concrete cancer.' },
                { name: 'Inner West', href: '/areas/inner-west', note: 'Terraces, lime mortar, settlement cracks.' },
                { name: 'North Shore', href: '/areas/north-shore', note: 'Federation homes, retaining walls, balconies.' },
                { name: 'Northern Beaches', href: '/areas/northern-beaches', note: 'Salt exposure, spalling, balcony remediation.' },
              ].map((area) => (
                <Link
                  key={area.href}
                  to={area.href}
                  className="group bg-bg-light rounded-xl border border-gray-200 p-5 hover:border-navy/30 hover:shadow-sm transition-all"
                >
                  <h3 className="font-heading text-xl text-text-primary mb-2 group-hover:text-navy transition-colors">
                    {area.name}
                  </h3>
                  <p className="text-text-muted leading-relaxed text-sm">{area.note}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl text-navy mb-4">
                Questions the page should answer instantly
              </h2>
              <p className="text-text-muted leading-relaxed">
                These are the kinds of questions answer engines pull. The site should answer them
                without forcing a click around the whole place.
              </p>
            </div>
            <div className="space-y-4">
              {faqItems.map((faq) => (
                <div key={faq.question} className="bg-bg-light rounded-xl p-6">
                  <h3 className="font-heading text-xl text-navy mb-2">{faq.question}</h3>
                  <p className="text-text-muted leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-navy py-16 px-4 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl mb-4">Next move</h2>
            <p className="text-white/80 text-lg leading-relaxed mb-8">
              Turn this hub into a content cluster: more problem pages, more suburb-specific
              supporting pages, and one or two era guides that speak directly to how Sydney actually
              builds.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-amber text-white font-semibold px-7 py-3 rounded-lg hover:opacity-90 transition-opacity"
            >
              Build the next layer <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default LearnPage;
