'use client';

import { motion } from 'framer-motion';

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'left' | 'right';
  className?: string;
}

const vectors = {
  up:    { initial: { opacity: 0, y: 28 },  animate: { opacity: 1, y: 0 } },
  left:  { initial: { opacity: 0, x: -48 }, animate: { opacity: 1, x: 0 } },
  right: { initial: { opacity: 0, x: 48 },  animate: { opacity: 1, x: 0 } },
};

export function FadeIn({ children, delay = 0, direction = 'up', className }: FadeInProps) {
  const v = vectors[direction];
  return (
    <motion.div
      initial={v.initial}
      whileInView={v.animate}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
