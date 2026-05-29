import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { Phone, Mail, Clock, MapPin, Instagram } from 'lucide-react';
import { ContactPageSchema, SpeakableSchema } from '@/components/LocalSEO/StructuredData';
import { QuoteSurvey } from '@/components/quote';

export default function ContactPage() {
  return (
    <>
      <SEO
        title="Contact Us | Call 0414 922 276 for a Quote"
        description="Call Minas on 0414 922 276 for a Sydney quote. Romans Building Services covers masonry, heritage, structural and remedial work from Strathfield."
        canonical="/contact"
        noIndex={true}
      />
      <ContactPageSchema />
      <SpeakableSchema url="https://romansbuildingservices.com/contact" cssSelectors={['h1', 'p', 'a[href^="tel:"]', 'a[href^="mailto:"]']} />

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
              Get in Touch
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-white/80 text-lg max-w-2xl mx-auto"
            >
              Call Minas directly, or fill in the quick form. We will get back to you within 24 hours.
            </motion.p>
          </div>
        </section>

        {/* Content */}
        <section className="bg-white py-16 px-4">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
              {/* Left: Survey */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-2"
              >
                <div className="bg-bg-light rounded-lg p-6 md:p-8">
                  <QuoteSurvey variant="inline" />
                </div>
              </motion.div>

              {/* Right: Info Cards */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <div className="bg-bg-light rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Phone className="w-5 h-5 text-navy" />
                    <span className="text-text-muted font-semibold text-sm uppercase tracking-wide">
                      Phone
                    </span>
                  </div>
                  <a
                    href="tel:+61414922276"
                    className="font-heading text-2xl md:text-3xl text-navy hover:text-navy-light transition-colors"
                  >
                    0414 922 276
                  </a>
                </div>

                <div className="bg-bg-light rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Mail className="w-5 h-5 text-navy" />
                    <span className="text-text-muted font-semibold text-sm uppercase tracking-wide">
                      Email
                    </span>
                  </div>
                  <a
                    href="mailto:romanspropertyservices@gmail.com"
                    className="text-navy hover:text-navy-light transition-colors font-semibold break-all"
                  >
                    romanspropertyservices@gmail.com
                  </a>
                </div>

                <div className="bg-bg-light rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Clock className="w-5 h-5 text-navy" />
                    <span className="text-text-muted font-semibold text-sm uppercase tracking-wide">
                      Hours
                    </span>
                  </div>
                  <p className="text-text-primary font-semibold">
                    Monday to Saturday, 7am to 5pm
                  </p>
                </div>

                <div className="bg-bg-light rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <MapPin className="w-5 h-5 text-navy" />
                    <span className="text-text-muted font-semibold text-sm uppercase tracking-wide">
                      Service Area
                    </span>
                  </div>
                  <p className="text-text-primary font-semibold">Sydney metro suburbs</p>
                </div>

                <div className="bg-bg-light rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Instagram className="w-5 h-5 text-navy" />
                    <span className="text-text-muted font-semibold text-sm uppercase tracking-wide">
                      Instagram
                    </span>
                  </div>
                  <a
                    href="https://www.instagram.com/romansstone/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-navy hover:text-navy-light transition-colors font-semibold"
                  >
                    @romansstone
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
