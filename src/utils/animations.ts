import { useScroll, useTransform } from 'framer-motion';
import type { Variants } from 'framer-motion';

// Premium easing: fast start, slow finish — feels intentional
export const premiumEase = [0.22, 1, 0.36, 1] as const;

// Fade up with blur dissolve (headlines)
export const fadeUpBlur: Variants = {
  hidden: { opacity: 0, y: 40, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.9, ease: premiumEase },
  },
};

// Standard fade up (body text, general content)
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: premiumEase },
  },
};

// Slide in from left (images, video containers)
export const slideFromLeft: Variants = {
  hidden: { opacity: 0, x: -80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: premiumEase },
  },
};

// Slide in from right (text blocks, cards)
export const slideFromRight: Variants = {
  hidden: { opacity: 0, x: 80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: premiumEase },
  },
};

// Scale reveal (cards, featured items)
export const scaleReveal: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: premiumEase },
  },
};

// Clip reveal from left (accent lines, phone numbers)
export const clipRevealLeft: Variants = {
  hidden: { clipPath: 'inset(0 100% 0 0)' },
  visible: {
    clipPath: 'inset(0 0% 0 0)',
    transition: { duration: 0.8, ease: premiumEase, delay: 0.2 },
  },
};

// Stagger container (wrap children that should animate sequentially)
export const staggerContainer = (staggerDelay = 0.1, delayChildren = 0): Variants => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: staggerDelay,
      delayChildren,
    },
  },
});

// Parallax hook: element moves at different rate than scroll
export const useParallax = (speed = 0.3) => {
  const { scrollYProgress } = useScroll();
  return useTransform(scrollYProgress, [0, 1], [0, -100 * speed]);
};
