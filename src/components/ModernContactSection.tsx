import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Phone, Calendar, Shield, CheckCircle, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';
import { fadeUpBlur, fadeUp, slideFromRight, clipRevealLeft, staggerContainer, premiumEase } from '@/utils/animations';

const trustBadges = [
  { icon: Calendar, label: '30+ Years Experience' },
  { icon: Shield, label: 'Licensed & Insured' },
  { icon: CheckCircle, label: 'Free Quotes, No Obligation' },
];

const thumbnailImages = [
  '/gallery/thumbs/romansstone_1574104761_2180071211265247711_2394650725.webp',
  '/gallery/thumbs/romansstone_1579724750_2227215093383768825_2394650725.webp',
  '/gallery/thumbs/romansstone_1575057672_2188064802893944247_2394650725.webp',
  '/gallery/thumbs/romansstone_1700556302_3240823616257706375_2394650725.webp',
];

const badgeVariant = {
  hidden: { opacity: 0, x: 40 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: premiumEase, delay: i * 0.1 },
  }),
};

export const ModernContactSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const form = e.currentTarget;
    if (!form.checkValidity()) return;

    e.preventDefault();

    const formData = new FormData(form);
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData as unknown as Record<string, string>).toString(),
    })
      .then(() => setSubmitted(true))
      .catch(() => alert('Something went wrong. Please try calling us instead.'));
  };

  return (
    <section id="contact">
      {/* Phone CTA Strip */}
      <div className="bg-navy texture-grain py-10 text-center">
        <p className="font-body text-lg text-white/60 mb-2">Give us a ring</p>
        <motion.div
          variants={clipRevealLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <a
            href="tel:0414922276"
            className="font-heading text-4xl md:text-5xl text-white tracking-tight hover:text-white/90 transition inline-block"
          >
            0414 922 276
          </a>
        </motion.div>
        <motion.div
          variants={fadeUpBlur}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-4"
        >
          <a
            href="tel:0414922276"
            className="btn-premium bg-amber text-white px-10 py-4 rounded-lg text-lg font-body font-medium inline-flex items-center gap-2 hover:bg-amber/90 transition"
          >
            <Phone className="w-5 h-5" />
            Call Now
          </a>
        </motion.div>
      </div>

      {/* Form + Trust Panel */}
      <div className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto lg:grid lg:grid-cols-5 gap-12">
          {/* Left: Contact Form (col-span-3) */}
          <motion.div
            className="lg:col-span-3"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl text-text-primary mb-3">
              Get in Touch
            </h2>
            <p className="font-body text-sm text-text-muted mb-8">
              Prefer to write? Fill this in and we will call you back within 24 hours.
            </p>

            {submitted ? (
              <div className="bg-bg-light rounded-lg p-8 text-center">
                <p className="font-heading text-xl text-text-primary mb-2">
                  Thanks for reaching out.
                </p>
                <p className="font-body text-text-muted">
                  We will get back to you within one business day.
                </p>
              </div>
            ) : (
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                <input type="hidden" name="form-name" value="contact" />

                <div>
                  <Label htmlFor="name" className="font-body text-sm text-text-primary mb-1.5 block">
                    Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="font-body"
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="font-body text-sm text-text-primary mb-1.5 block">
                    Phone
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    className="font-body"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="font-body text-sm text-text-primary mb-1.5 block">
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="font-body"
                  />
                </div>

                <div>
                  <Label htmlFor="service" className="font-body text-sm text-text-primary mb-1.5 block">
                    Service
                  </Label>
                  <select
                    id="service"
                    name="service"
                    className="w-full rounded-md border border-input bg-background px-3 py-2 font-body text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <option value="general">General Enquiry</option>
                    <option value="heritage">Heritage Restoration</option>
                    <option value="masonry">Masonry</option>
                    <option value="structural">Structural Repairs</option>
                    <option value="repointing">Repointing</option>
                    <option value="concrete">Concrete Repairs</option>
                    <option value="foundation">Foundation Work</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="message" className="font-body text-sm text-text-primary mb-1.5 block">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="font-body"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-premium bg-navy text-white font-body font-medium py-3 px-8 rounded-md hover:bg-navy/90 transition"
                >
                  Send Enquiry
                </button>
              </form>
            )}
          </motion.div>

          {/* Right: Trust Panel (col-span-2) */}
          <motion.div
            className="lg:col-span-2 mt-12 lg:mt-0"
            variants={slideFromRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Trust Badges */}
            <motion.div
              className="space-y-5 mb-8"
              variants={staggerContainer(0.1, 0.2)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {trustBadges.map((badge, index) => (
                <motion.div
                  key={badge.label}
                  className="flex items-center gap-3"
                  custom={index}
                  variants={badgeVariant}
                >
                  <badge.icon className="w-5 h-5 text-green flex-shrink-0" />
                  <span className="font-body text-sm font-medium text-text-primary">
                    {badge.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* Gallery Thumbnails */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              {thumbnailImages.map((src, index) => (
                <Link
                  key={index}
                  to="/gallery"
                  className="rounded-lg overflow-hidden group"
                >
                  <img
                    src={src}
                    alt={`Project showcase ${index + 1}`}
                    className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </Link>
              ))}
            </div>

            {/* Instagram Link */}
            <a
              href="https://www.instagram.com/romansstone/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-body text-sm text-text-muted hover:text-navy-light transition"
            >
              <Instagram className="w-5 h-5" />
              Follow @romansstone
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
