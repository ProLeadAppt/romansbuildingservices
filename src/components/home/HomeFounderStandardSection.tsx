import { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import founderVideo from '@/assets/videos/romansstone_1702021197_3253111907408599621_2394650725.mp4';

const poster = '/gallery/thumbs/romansstone_1568838386_2135893652470649771_2394650725.webp';

export const HomeFounderStandardSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [loadVideo, setLoadVideo] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updateMotion = () => setReducedMotion(media.matches);
    updateMotion();
    media.addEventListener('change', updateMotion);
    return () => media.removeEventListener('change', updateMotion);
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoadVideo(true);
          observer.disconnect();
        }
      },
      { rootMargin: '320px 0px' },
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} data-p2-section="founder-standard" className="overflow-hidden bg-[#ebe5da] px-5 py-16 sm:px-6 md:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-0">
        <div className="relative min-h-[360px] overflow-hidden bg-slate-300 lg:min-h-[620px]">
          <video
            className="absolute inset-0 h-full w-full object-cover"
            poster={poster}
            autoPlay={loadVideo && !reducedMotion}
            muted
            loop={!reducedMotion}
            playsInline
            controls={reducedMotion}
            preload="none"
            aria-label="Minas Romanakis working with stone on site"
          >
            {loadVideo ? <source src={founderVideo} type="video/mp4" /> : null}
          </video>
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/80 to-transparent p-6 pt-20 text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber">On the tools</p>
            <p className="mt-2 max-w-md font-heading text-2xl">Real work. Real material. The person responsible stays close to the job.</p>
          </div>
        </div>

        <div className="relative bg-white p-7 shadow-[0_24px_70px_rgba(10,46,118,0.12)] sm:p-10 lg:-ml-14 lg:p-14">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-navy/60">The Romans standard</p>
          <h2 className="font-heading text-4xl leading-[1.06] text-navy sm:text-5xl">Good repair work starts with knowing what not to replace.</h2>
          <div className="mt-6 space-y-4 text-base leading-7 text-slate-600">
            <p>Minas Romanakis started Romans Building Services in 1995. The work remains focused on brick, stone, block, concrete and the structures they form.</p>
            <p>On heritage and remedial jobs, the first decision matters: what is actually failing, what is still sound and which material belongs back in the building.</p>
          </div>
          <blockquote className="my-8 border-l-4 border-amber pl-5 font-heading text-2xl leading-snug text-navy">
            Repair the problem. Preserve what is still doing its job.
          </blockquote>
          <Link to="/about" className="inline-flex min-h-11 items-center gap-2 font-semibold text-navy underline decoration-amber decoration-2 underline-offset-8">
            Meet Minas and the team <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
};
