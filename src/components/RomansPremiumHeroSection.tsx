import { useEffect, useRef, useState } from 'react';
import heroVideo from '@/assets/videos/romansstone_1705577418_3282943687956227913_2394650725.mp4';
import { QuoteCTAButton } from '@/components/quote';

export const RomansPremiumHeroSection = () => {
  const [loadVideo, setLoadVideo] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let timer: number | undefined;
    const enableVideo = () => {
      if (timer) window.clearTimeout(timer);
      setLoadVideo(true);
    };
    const scheduleVideo = () => {
      timer = window.setTimeout(enableVideo, 3500);
    };

    if (document.readyState === 'complete') scheduleVideo();
    else window.addEventListener('load', scheduleVideo, { once: true });
    window.addEventListener('pointerdown', enableVideo, { once: true, passive: true });
    window.addEventListener('keydown', enableVideo, { once: true });

    return () => {
      if (timer) window.clearTimeout(timer);
      window.removeEventListener('load', scheduleVideo);
      window.removeEventListener('pointerdown', enableVideo);
      window.removeEventListener('keydown', enableVideo);
    };
  }, []);

  useEffect(() => {
    if (!loadVideo || !videoRef.current) return;
    videoRef.current.load();
    void videoRef.current.play().catch(() => {
      // The poster remains visible if a browser blocks autoplay.
    });
  }, [loadVideo]);

  return (
    <section data-p2-section="hero" className="relative min-h-screen flex items-center overflow-hidden bg-navy">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          ref={videoRef}
          autoPlay={loadVideo}
          muted
          loop
          playsInline
          preload="none"
          aria-hidden="true"
          poster="/gallery/thumbs/romansstone_1572378831_2165593056404182319_2394650725.webp"
          fetchPriority="high"
          className="w-full h-full object-cover"
        >
          {loadVideo && <source src={heroVideo} type="video/mp4" />}
        </video>
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy/88 via-navy/68 to-navy/28" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-28 lg:py-32">
        <div className="max-w-2xl lg:max-w-[55%]">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-amber">Sydney masonry and remedial construction since 1995</p>

          <h1 className="font-heading text-4xl leading-[1.06] text-white sm:text-5xl lg:text-6xl">
            Repair the problem. Preserve what is still doing its job.
          </h1>

          <p className="mt-5 max-w-lg text-base leading-7 text-white/70 sm:text-lg">
            Minas Romanakis. Brick, stone, sandstone, block and concrete work across Sydney. Owner-led, straight-talking and built for repairs that last.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <QuoteCTAButton className="inline-flex min-h-12 items-center justify-center rounded-md bg-amber px-7 py-3 font-body font-semibold text-navy transition-colors hover:bg-amber/90">
              Get a Sydney Quote
            </QuoteCTAButton>
            <a href="tel:0414922276" className="inline-flex min-h-12 items-center justify-center rounded-md border-2 border-white/60 px-7 py-3 font-body font-medium text-white transition-colors hover:border-white hover:bg-white/10">
              Call Minas
            </a>
          </div>

          <div className="mt-4 font-body text-sm text-white/50">
            Or browse the <a href="/case-studies" className="underline decoration-white/30 underline-offset-4 hover:decoration-white">case studies</a> and <a href="/problems" className="underline decoration-white/30 underline-offset-4 hover:decoration-white">problem guides</a>.
          </div>
        </div>
      </div>

      {/* Credential strip */}
      <div className="absolute bottom-0 inset-x-0 border-t border-white/10 bg-navy/90 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-x-8 gap-y-1 px-6 py-3 lg:justify-start">
          {['Est. 1995', 'Owner-led', 'Sydney-wide', 'Licenced & insured'].map((item) => (
            <span key={item} className="font-body text-xs uppercase tracking-[0.2em] text-white/55">
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};