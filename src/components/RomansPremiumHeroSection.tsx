import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import heroVideo from '@/assets/videos/romansstone_1705577418_3282943687956227913_2394650725.mp4';
import { fadeUpBlur, fadeUp, staggerContainer, clipRevealLeft, premiumEase } from '@/utils/animations';
import { QuoteCTAButton } from '@/components/quote';

export const RomansPremiumHeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  // Parallax: video drifts upward as user scrolls
  const videoY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  // Overlay fades slightly as user scrolls past
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.6]);

  return (
    <>
      <section
        ref={sectionRef}
        className="relative min-h-screen flex items-center overflow-hidden"
      >
        {/* Video Background with parallax */}
        <motion.div
          className="absolute inset-0 w-full h-full"
          style={{ y: videoY }}
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            poster="/gallery/thumbs/romansstone_1572378831_2165593056404182319_2394650725.webp"
            className="w-full h-[120%] object-cover"
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
        </motion.div>

        {/* Diagonal gradient overlay — video breathes on the right */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-navy/90 via-navy/70 to-navy/30"
          style={{ opacity: overlayOpacity }}
        />

        {/* Content — left-aligned on desktop, centred on mobile */}
        <motion.div
          variants={staggerContainer(0.15, 0.3)}
          initial="hidden"
          animate="visible"
          className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-16 py-32
                     flex flex-col items-center text-center
                     lg:items-start lg:text-left lg:max-w-[60%]"
        >
          {/* Accent line */}
          <motion.span
            variants={clipRevealLeft}
            className="accent-line mb-8"
          />

          {/* Heading */}
          <motion.h1
            variants={fadeUpBlur}
            className="font-heading text-3xl md:text-5xl lg:text-6xl text-white leading-[1.1] tracking-tight text-shadow-strong"
          >
            Heritage Restoration
            <br className="hidden md:block" />
            {' '}&amp; Masonry.
            <br />
            Done Properly.
          </motion.h1>

          {/* Subtext */}
          <motion.p
            variants={fadeUp}
            className="font-body text-lg lg:text-xl text-white/75 mt-6 max-w-lg"
          >
            Minas Romanakis. 30 years across Sydney. Stone, brick, block.
            If it's masonry, we've done it.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row items-center gap-4 mt-10"
          >
            <Link
              to="/gallery"
              className="btn-premium border-2 border-white text-white hover:bg-white/10 rounded-md px-8 py-3 font-body font-medium transition-colors"
            >
              See Our Work
            </Link>
            <QuoteCTAButton
              className="btn-premium bg-amber text-white hover:bg-amber/90 rounded-md px-8 py-3 font-body font-medium transition-colors"
            >
              Get a Quote
            </QuoteCTAButton>
          </motion.div>
        </motion.div>

        {/* Scroll indicator — subtle line, not a bouncing chevron */}
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1.2, delay: 1.5, ease: premiumEase }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 w-[1px] h-12 bg-white/40 origin-top"
        />
      </section>

      {/* Credential strip — visual connector to next section */}
      <div className="bg-navy/95 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-3 flex flex-wrap justify-center lg:justify-between gap-x-8 gap-y-1">
          {['Est. 1995', 'Licensed & Insured', 'Sydney-Wide', '30+ Years Experience'].map(
            (item) => (
              <span
                key={item}
                className="font-body text-xs text-white/50 uppercase tracking-[0.2em]"
              >
                {item}
              </span>
            )
          )}
        </div>
      </div>
    </>
  );
};
