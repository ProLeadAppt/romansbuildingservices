import { useEffect, useRef, useState } from 'react';
import { Pause, Play } from 'lucide-react';
import { QuoteCTAButton } from '@/components/quote';

export const HERO_STILL = '/gallery/full/romansstone_1572378831_2165593056404182319_2394650725.webp';
// Verified authentic-photo camera loop; local review only until owner approval.
const REVIEW_HERO_LOOP = '/videos/minas-sandstone-hero-loop.mp4';

type Connection = EventTarget & { saveData?: boolean };

export const RomansPremiumHeroSection = ({ videoSrc = REVIEW_HERO_LOOP }: { videoSrc?: string } = {}) => {
  const [eligible, setEligible] = useState(false);
  const [requested, setRequested] = useState(false);
  const [playing, setPlaying] = useState(false);
  const mediaRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const connection = (navigator as Navigator & { connection?: Connection }).connection;
    const update = () => setEligible(!motion.matches && !connection?.saveData);
    update();
    motion.addEventListener('change', update);
    connection?.addEventListener('change', update);
    return () => {
      motion.removeEventListener('change', update);
      connection?.removeEventListener('change', update);
    };
  }, []);

  useEffect(() => {
    if (!videoSrc || !eligible || !visible) return;
    const request = () => setRequested(true);
    window.addEventListener('pointerdown', request, { once: true, passive: true });
    window.addEventListener('keydown', request, { once: true });
    return () => {
      window.removeEventListener('pointerdown', request);
      window.removeEventListener('keydown', request);
    };
  }, [videoSrc, eligible, visible]);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setVisible(entry.isIntersecting);
      if (!entry.isIntersecting) videoRef.current?.pause();
    }, { threshold: 0.1 });
    if (mediaRef.current) observer.observe(mediaRef.current);
    return () => observer.disconnect();
  }, []);

  const loadVideo = Boolean(videoSrc && eligible && requested);
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !loadVideo) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting || document.hidden) video.pause();
    });
    if (mediaRef.current) observer.observe(mediaRef.current);
    const visibility = () => { if (document.hidden) video.pause(); };
    document.addEventListener('visibilitychange', visibility);
    return () => {
      observer.disconnect();
      document.removeEventListener('visibilitychange', visibility);
      video.pause();
    };
  }, [loadVideo]);

  const togglePlayback = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) void video.play().catch(() => setPlaying(false));
    else video.pause();
  };

  return (
    <section data-p2-section="hero" aria-labelledby="hero-heading" className="bg-navy text-white">
      <div className="mx-auto grid max-w-7xl lg:grid-cols-[1.08fr_1fr]">
        <div data-hero-copy className="relative z-10 flex flex-col justify-center bg-navy px-6 pb-10 pt-28 sm:px-10 lg:px-12 lg:pb-16 lg:pt-36">
          <p className="mb-5 font-body text-sm font-semibold uppercase tracking-[0.16em] text-amber">Hawkesbury &amp; Western Sydney</p>
          <h1 id="hero-heading" className="max-w-xl font-heading text-[2.5rem] leading-[1.08] tracking-[-0.02em] text-white sm:text-5xl lg:text-[3.6rem]">
            Brick, stone &amp; sandstone repairs.
          </h1>
          <p className="mt-6 max-w-lg font-body text-base leading-7 text-white sm:text-lg">
            Talk directly with Minas Romanakis about masonry repairs, structural work and heritage restoration. Owner-led since 1995.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <QuoteCTAButton className="inline-flex min-h-12 items-center justify-center rounded-md bg-amber px-7 py-3 font-body font-semibold text-navy transition-colors hover:bg-amber-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
              Get a Sydney Quote
            </QuoteCTAButton>
            <a href="tel:0414922276" className="inline-flex min-h-12 items-center justify-center rounded-md border-2 border-white px-6 py-3 font-body font-semibold text-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber">
              Call Minas
            </a>
          </div>
          <p className="mt-6 max-w-md font-body text-sm leading-6 text-white">
            North Richmond, Richmond, Kurmond, Kurrajong, Penrith, Windsor, Blacktown and surrounding areas.
          </p>
          <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 border-t border-white/30 pt-5 font-body text-sm text-white">
            <span>Established 1995</span><span>Owner-led</span><span>Licenced &amp; insured</span>
          </div>
        </div>
        <div ref={mediaRef} data-hero-media className="relative isolate aspect-[720/846] overflow-hidden bg-navy lg:aspect-auto lg:min-h-[680px]">
          <img src={HERO_STILL} alt="Minas Romanakis working sandstone by hand with a mallet and chisel" width="720" height="846" fetchPriority="high" decoding="async" className="absolute inset-0 h-full w-full object-cover object-[50%_58%] lg:object-[50%_50%]" />
          {loadVideo && (
            <video ref={videoRef} src={videoSrc} muted loop playsInline autoPlay preload="none" aria-hidden="true" tabIndex={-1} poster={HERO_STILL} onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)} onError={() => setPlaying(false)} className="absolute inset-0 h-full w-full object-cover object-[50%_58%] lg:object-[50%_50%]" />
          )}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6 sm:p-8">
            <p className="rounded bg-navy px-3 py-2 font-body text-sm leading-5 text-white">Minas Romanakis<br /><span className="font-semibold">Owner &amp; stonemason</span></p>
            {loadVideo && (
              <button type="button" onClick={togglePlayback} aria-label={playing ? 'Pause background video' : 'Play background video'} aria-pressed={!playing} className="inline-flex min-h-12 min-w-12 items-center justify-center rounded-full border-2 border-white bg-navy text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber">
                {playing ? <Pause size={20} aria-hidden="true" /> : <Play size={20} aria-hidden="true" />}
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
