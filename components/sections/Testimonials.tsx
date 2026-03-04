'use client';

import { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Section } from '@/components/ui/Section';
import { Quote } from 'lucide-react';
import { cn } from '@/lib/utils';

const TESTIMONIALS = [
  {
    quote: "An experience that transcends dining. BkCooks delivered an evening I'll speak of for years — the Jollof-Braised Short Rib alone is worth the visit.",
    name: 'Sipho Mokoena',
    title: 'Executive Director, Lagos',
    rating: 5,
  },
  {
    quote: "We hosted our entire board retreat in The Boardroom. The AV setup, the concierge service, the private dining — it was flawless. Our team is still talking about it.",
    name: 'Amara Okafor',
    title: 'CEO, Lagos',
    rating: 5,
  },
  {
    quote: "The Lounge created the most intimate atmosphere for our anniversary. Every detail was curated to perfection. The Indulge Place is in a class of its own.",
    name: 'Lerato & Ndaba Dlamini',
    title: 'Lagos',
    rating: 5,
  },
  {
    quote: "I've dined at the finest restaurants across three continents. BkCooks' fusion of Nigerian heritage with modern technique is genuinely world-class.",
    name: 'Dr. Farai Ncube',
    title: 'Harare & Lagos',
    rating: 5,
  },
];

const INTERVAL = 5000;

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);

  const next = useCallback((dir = 1) => {
    setDirection(dir);
    setIndex((i) => (i + dir + TESTIMONIALS.length) % TESTIMONIALS.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => next(1), INTERVAL);
    return () => clearInterval(t);
  }, [paused, next]);

  const variants = {
    enter: (d: number) => ({ opacity: 0, x: d > 0 ? 60 : -60 }),
    center: { opacity: 1, x: 0 },
    exit: (d: number) => ({ opacity: 0, x: d > 0 ? -60 : 60 }),
  };

  const t = TESTIMONIALS[index];

  return (
    <Section className="bg-white/[0.02] overflow-hidden">
      <div className="text-center mb-14">
        <span className="text-gold uppercase tracking-widest text-sm font-medium mb-2 block">
          Guest Voices
        </span>
        <h2 className="text-4xl md:text-5xl font-display">Words of Our Guests</h2>
      </div>

      <div
        className="relative max-w-3xl mx-auto"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <Quote className="absolute -top-2 -left-4 w-10 h-10 text-gold/15" />

        <div className="min-h-[200px] flex items-center">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={index}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="w-full text-center"
            >
              <p className="text-xl md:text-2xl text-beige/80 leading-relaxed font-light italic mb-8">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <div className="flex justify-center gap-1 mb-3">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <span key={i} className="text-gold text-sm">★</span>
                  ))}
                </div>
                <p className="font-display text-gold text-lg">{t.name}</p>
                <p className="text-beige/40 text-sm mt-1">{t.title}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation dots */}
        <div className="flex justify-center gap-3 mt-10">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => { setDirection(i > index ? 1 : -1); setIndex(i); }}
              aria-label={`Go to testimonial ${i + 1}`}
              className={cn(
                'rounded-full transition-all duration-300',
                i === index
                  ? 'bg-gold w-6 h-2'
                  : 'bg-white/20 hover:bg-white/40 w-2 h-2'
              )}
            />
          ))}
        </div>

        {/* Arrow controls */}
        <button
          onClick={() => next(-1)}
          aria-label="Previous"
          className="absolute top-1/2 -left-12 -translate-y-1/2 w-9 h-9 rounded-full border border-white/10 hover:border-gold/50 text-beige/40 hover:text-gold transition-all hidden md:flex items-center justify-center"
        >
          ‹
        </button>
        <button
          onClick={() => next(1)}
          aria-label="Next"
          className="absolute top-1/2 -right-12 -translate-y-1/2 w-9 h-9 rounded-full border border-white/10 hover:border-gold/50 text-beige/40 hover:text-gold transition-all hidden md:flex items-center justify-center text-lg"
        >
          ›
        </button>
      </div>
    </Section>
  );
}
