// Shared motion presets. Pass `revealProps(shouldReduceMotion)` with one of
// the variants below; visitors who prefer reduced motion start in the
// 'visible' state, so nothing moves for them.

export const revealProps = (shouldReduceMotion, amount = 0.15) => ({
  initial: shouldReduceMotion ? 'visible' : 'hidden',
  whileInView: 'visible',
  viewport: { once: true, amount },
});

export const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 1, ease: 'easeOut' } },
};

export const slideInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 1, ease: 'easeOut' } },
};

export const staggerChildren = (stagger = 0.08) => ({
  hidden: {},
  visible: { transition: { staggerChildren: stagger } },
});

// Extra posts revealed by the "show more" button
export const expandVariants = {
  hidden: { opacity: 0, height: 0 },
  visible: {
    opacity: 1,
    height: 'auto',
    transition: { duration: 0.4, ease: 'easeOut' },
  },
  exit: {
    opacity: 0,
    height: 0,
    transition: { duration: 0.3, ease: 'easeIn' },
  },
};
