'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Section } from '@/components/ui/Section';

const STATS = [
  { value: 2014, suffix: '', label: 'Est. Year', prefix: '' },
  { value: 4800, suffix: '+', label: 'Events Hosted', prefix: '' },
  { value: 98, suffix: '%', label: 'Guest Satisfaction', prefix: '' },
  { value: 12, suffix: '', label: 'Culinary Awards', prefix: '' },
];

function CountUp({ target, duration = 1800 }: { target: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, target, duration]);

  return <span ref={ref}>{count.toLocaleString()}</span>;
}

export function Stats() {
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { once: true, margin: '-60px' });

  return (
    <Section className="bg-charcoal border-y border-gold/10 py-16 md:py-20">
      <div ref={containerRef} className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0">
        {STATS.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: i * 0.12 }}
            className="text-center md:border-r md:last:border-r-0 border-gold/10 px-4"
          >
            <div className="text-5xl md:text-6xl font-display text-gold mb-2 tabular-nums">
              {stat.prefix}
              {inView ? <CountUp target={stat.value} /> : 0}
              {stat.suffix}
            </div>
            <p className="text-beige/50 text-sm uppercase tracking-widest">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
