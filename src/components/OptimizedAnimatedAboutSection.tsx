import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import aboutVideo from '@/assets/videos/romansstone_1702021197_3253111907408599621_2394650725.mp4';
import { slideFromLeft, slideFromRight, fadeUp, staggerContainer } from '@/utils/animations';

const timelineItems = [
  { year: '1995', text: 'Started with a ute and a handshake' },
  { year: '2000s', text: 'Heritage restoration work begins' },
  { year: 'Today', text: '30 years, same standards' },
];

export const OptimizedAnimatedAboutSection = () => {
  return (
    <motion.section
      className="bg-bg-off-white py-28 lg:py-36 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="lg:grid lg:grid-cols-12 lg:gap-0 items-end">
          {/* Video: cols 1-7, extends left beyond boundary */}
          <motion.div
            className="lg:col-span-7 lg:-ml-16 xl:-ml-24 mb-10 lg:mb-0"
            variants={slideFromLeft}
          >
            <video
              className="w-full rounded-lg object-cover aspect-[4/3]"
              src={aboutVideo}
              poster="/gallery/thumbs/romansstone_1568838386_2135893652470649771_2394650725.webp"
              autoPlay
              muted
              loop
              playsInline
            />
          </motion.div>

          {/* Text card: cols 6-12, overlaps video bottom-right */}
          <motion.div
            className="lg:col-span-6 lg:col-start-7 lg:-mt-20 bg-white p-10 lg:p-14 shadow-premium-xl rounded-lg z-10 relative"
            variants={slideFromRight}
            transition={{ delay: 0.3 }}
          >
            <h2 className="font-heading text-3xl lg:text-4xl text-text-primary mb-6">
              30 Years. Same Standards.
            </h2>

            <div className="space-y-4 font-body text-base text-text-secondary mb-8">
              <p>
                Minas Romanakis started Romans Building Services in 1995. Back then it was just him, a ute, and a reputation for doing things properly. 30 years later, not much has changed.
              </p>
              <p>
                We do masonry. Stone, brick, block, concrete. Heritage restoration, structural repairs, repointing. If it needs fixing or building, and it involves masonry, that is what we do.
              </p>
            </div>

            <p className="pull-quote my-8">
              "Minas still does the work himself. That is the difference."
            </p>

            <p className="font-body text-base text-text-secondary mb-10">
              We work with architects, builders, strata managers, insurance companies, and homeowners across Sydney. Big jobs, small jobs. The standard is the same.
            </p>

            {/* Mini timeline */}
            <motion.div
              className="relative pl-6 mb-10"
              variants={staggerContainer(0.15, 0.4)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {/* Vertical line */}
              <div className="absolute left-[3px] top-1 bottom-1 w-[2px] bg-navy/20" />

              {timelineItems.map((item) => (
                <motion.div
                  key={item.year}
                  className="relative flex items-start gap-4 pb-5 last:pb-0"
                  variants={fadeUp}
                >
                  {/* Dot */}
                  <div className="absolute -left-6 top-1.5 w-2 h-2 rounded-full bg-navy/60" />
                  <span className="font-heading text-sm font-semibold text-navy min-w-[52px]">
                    {item.year}
                  </span>
                  <span className="font-body text-sm text-text-muted">
                    {item.text}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            <Link to="/about" className="link-animated font-medium text-navy">
              Learn More
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};
