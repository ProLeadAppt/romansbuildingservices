import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { Phone, Mail, Clock, MapPin, Instagram } from 'lucide-react';
import { ContactPageSchema, SpeakableSchema } from '@/components/LocalSEO/StructuredData';

export default function ContactPage() {
  return (
    <>
      <SEO
        title="Contact Us | Call 0414 922 276 for a Quote"
        description="Call Minas on 0414 922 276 for a quote. Romans Building Services covers Greater Sydney for masonry, heritage, structural and remedial work. Fast response."
        canonical="/contact"
      />
      <ContactPageSchema />
      <SpeakableSchema url="https://romansbuildingservices.com/contact" cssSelectors={['h1', 'p', 'a[href^="tel:"]', 'a[href^="mailto:"]']} />

      <div className="min-h-screen font-body">
        {/* Hero Banner */}
        <section className="bg-navy py-24">
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
              Call Minas directly, or fill in the form. We'll get back to you within 24 hours.
            </motion.p>
          </div>
        </section>

        {/* Content */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Left: Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <form
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  className="space-y-6"
                >
                  <input type="hidden" name="form-name" value="contact" />

                  <div>
                    <label
                      htmlFor="name"
                      className="block text-text-primary font-semibold mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 font-body text-text-primary focus:outline-none focus:ring-2 focus:ring-navy/50 focus:border-navy transition-colors"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-text-primary font-semibold mb-2"
                    >
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 font-body text-text-primary focus:outline-none focus:ring-2 focus:ring-navy/50 focus:border-navy transition-colors"
                      placeholder="04XX XXX XXX"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-text-primary font-semibold mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 font-body text-text-primary focus:outline-none focus:ring-2 focus:ring-navy/50 focus:border-navy transition-colors"
                      placeholder="you@example.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="service"
                      className="block text-text-primary font-semibold mb-2"
                    >
                      Service
                    </label>
                    <select
                      id="service"
                      name="service"
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 font-body text-text-primary focus:outline-none focus:ring-2 focus:ring-navy/50 focus:border-navy transition-colors bg-white"
                    >
                      <option value="">Select a service</option>
                      <option value="masonry">Masonry</option>
                      <option value="heritage-restoration">Heritage Restoration</option>
                      <option value="building-restoration">Building Restoration</option>
                      <option value="structural-repairs">Structural Repairs</option>
                      <option value="concrete-repairs">Concrete Repairs</option>
                      <option value="foundation-repairs">Foundation Repairs</option>
                      <option value="repointing">Repointing</option>
                      <option value="remedial-building">Remedial Building</option>
                      <option value="other">Something else</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-text-primary font-semibold mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 font-body text-text-primary focus:outline-none focus:ring-2 focus:ring-navy/50 focus:border-navy transition-colors resize-vertical"
                      placeholder="Tell us a bit about what needs doing..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="bg-amber text-white font-body font-semibold px-8 py-4 rounded-lg hover:opacity-90 transition-opacity w-full"
                  >
                    Send Enquiry
                  </button>
                </form>
              </motion.div>

              {/* Right: Info Cards */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                {/* Phone */}
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

                {/* Email */}
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

                {/* Hours */}
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

                {/* Service Area */}
                <div className="bg-bg-light rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <MapPin className="w-5 h-5 text-navy" />
                    <span className="text-text-muted font-semibold text-sm uppercase tracking-wide">
                      Service Area
                    </span>
                  </div>
                  <p className="text-text-primary font-semibold">All of Greater Sydney</p>
                </div>

                {/* Social */}
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
