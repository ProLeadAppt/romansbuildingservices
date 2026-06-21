import { Link } from 'react-router-dom';
import heroVideo from '@/assets/videos/romansstone_1705577418_3282943687956227913_2394650725.mp4';
import { QuoteCTAButton } from '@/components/quote';

export const RomansPremiumHeroSection = () => {
  return (
    <>
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/gallery/thumbs/romansstone_1572378831_2165593056404182319_2394650725.webp"
            fetchPriority="high"
            className="w-full h-[120%] object-cover"
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
        </div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy/90 via-navy/70 to-navy/30" />

        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-16 py-32 flex flex-col items-center text-center lg:items-start lg:text-left lg:max-w-[60%]">
          <span className="accent-line mb-8" />

          <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl text-white leading-[1.1] tracking-tight text-shadow-strong">
            Sydney Masonry &
            <br className="hidden md:block" />
            Remedial Construction
            <br />
            Done Properly.
          </h1>

          <p className="font-body text-lg lg:text-xl text-white/75 mt-6 max-w-lg">
            Minas Romanakis. 30+ years across Sydney. Stone, brick, sandstone and concrete work.
            Owner-led, straight-talking, and built for repairs that last.
          </p>
          <p className="font-body text-sm text-white/60 mt-4 max-w-lg">
            Strathfield-based with real jobs across Sydney&apos;s heritage, strata and residential stock.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 mt-10">
            <Link
              to="/gallery"
              className="btn-premium border-2 border-white text-white hover:bg-white/10 rounded-md px-8 py-3 font-body font-medium transition-colors"
            >
              Browse Projects
            </Link>
            <QuoteCTAButton className="btn-premium bg-amber text-white hover:bg-amber/90 rounded-md px-8 py-3 font-body font-medium transition-colors">
              Get a Sydney Quote
            </QuoteCTAButton>
          </div>
          <p className="mt-5 font-body text-sm text-white/70 max-w-lg">
            Prefer to read first? Start with the <Link to="/services" className="underline decoration-white/30 underline-offset-4 hover:decoration-white">services</Link> page or the <Link to="/learn" className="underline decoration-white/30 underline-offset-4 hover:decoration-white">learn hub</Link>.
          </p>
        </div>
      </section>

      {/* Credential strip */}
      <div className="bg-navy/95 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-3 flex flex-wrap justify-center lg:justify-between gap-x-8 gap-y-1">
          {['Est. 1995', 'Owner-led', 'Sydney-wide', 'Licenced & insured'].map((item) => (
            <span key={item} className="font-body text-xs text-white/50 uppercase tracking-[0.2em]">
              {item}
            </span>
          ))}
        </div>
      </div>
    </>
  );
};
