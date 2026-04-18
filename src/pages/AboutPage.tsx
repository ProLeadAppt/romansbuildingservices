import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SEO } from '@/components/SEO';
import { MessageSquare, PackageCheck, HardHat } from 'lucide-react';

const values = [
  {
    icon: MessageSquare,
    title: 'Straight Talking',
    description:
      "No jargon. No runaround. You'll know what needs doing, what it costs, and when it'll be done.",
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
      "Minas doesn't just quote the job. He does the job. That's why the standard stays the same.",
  },
];

export default function AboutPage() {
  return (
    <>
      <SEO
        title="About Romans Building Services | 30 Years of Masonry Across Sydney"
        description="Meet Minas Romanakis, founder of Romans Building Services. 30 years of masonry and heritage restoration across Sydney since 1995. Family-run, licensed, and proud of every job."
        canonical="/about"
        ogImage="/gallery/thumbs/romansstone_1579724750_2227215093383768825_2394650725.webp"
      />

      <div className="min-h-screen font-body">
        {/* Hero Banner */}
        <section className="bg-navy py-24">
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
                  Built on Handshakes, Not Sales Pitches
                </h2>
                <p className="text-text-secondary leading-relaxed">
                  Minas Romanakis started Romans Building Services in 1995 with one goal: do the
                  work properly and let it speak for itself. 30 years later, that hasn't changed.
                </p>
                <p className="text-text-secondary leading-relaxed">
                  He grew up around stone and brick. His Greek-Italian heritage gave him a deep
                  respect for old-world craftsmanship, the kind where you take your time, do it
                  right, and stand behind it.
                </p>
                <p className="text-text-secondary leading-relaxed">
                  Today, Romans Building Services handles everything from heritage-listed
                  restorations to residential retaining walls. Minas still works on site. Sandra
                  runs the office. It's a family operation.
                </p>
                <p className="text-text-secondary leading-relaxed">
                  We don't do sales pitches. We show up, look at the job, give you a straight
                  answer, and get to work. Our clients come back because the work lasts.
                </p>
                <p className="text-text-secondary leading-relaxed">
                  We work with architects, building companies, strata managers, insurance
                  companies, and homeowners across Greater Sydney. The job size doesn't matter. The
                  standard does.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="bg-bg-light py-16">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-heading text-3xl text-text-primary text-center mb-12"
            >
              How We Work
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-lg p-8 shadow-sm"
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
