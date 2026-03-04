'use client';

import { useState } from 'react';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import { Section } from '@/components/ui/Section';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const IMAGES = [
  { src: '/images/fine_dining_interior.png', alt: 'BkCooks fine dining interior', span: 'col-span-2 row-span-2' },
  { src: '/images/luxury_boardroom.png', alt: 'The Boardroom', span: 'col-span-1 row-span-1' },
  { src: '/images/intimate_lounge.png', alt: 'The Lounge', span: 'col-span-1 row-span-1' },
  { src: '/images/exterior.png', alt: 'Venue exterior', span: 'col-span-1 row-span-1' },
  { src: '/images/luxury_exterior_night.png', alt: 'Night exterior', span: 'col-span-1 row-span-1' },
  { src: '/images/restaurant.png', alt: 'BkCooks restaurant', span: 'col-span-1 row-span-1' },
  { src: '/images/meeting-room.png', alt: 'Meeting room', span: 'col-span-1 row-span-1' },
];

export function Gallery() {
  const [selected, setSelected] = useState<number | null>(null);

  function prev() {
    setSelected((s) => (s === null ? null : (s - 1 + IMAGES.length) % IMAGES.length));
  }
  function next() {
    setSelected((s) => (s === null ? null : (s + 1) % IMAGES.length));
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'ArrowLeft') prev();
    if (e.key === 'ArrowRight') next();
    if (e.key === 'Escape') setSelected(null);
  }

  return (
    <Section className="bg-charcoal">
      <div className="text-center mb-12">
        <span className="text-gold uppercase tracking-widest text-sm font-medium mb-2 block">
          The Experience
        </span>
        <h2 className="text-4xl md:text-5xl font-display">A Visual Journey</h2>
      </div>

      <LayoutGroup>
        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-[repeat(3,180px)] gap-3">
          {IMAGES.map((img, i) => (
            <motion.button
              key={img.src}
              layoutId={`gallery-${i}`}
              onClick={() => setSelected(i)}
              className={cn(
                'relative overflow-hidden rounded-lg group',
                i === 0 ? 'col-span-2 row-span-2' : 'col-span-1 row-span-1'
              )}
              whileHover={{ scale: 1.01 }}
              transition={{ type: 'spring', damping: 22, stiffness: 300 }}
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${img.src})` }}
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-sm font-medium tracking-wide px-4 py-2 rounded-full bg-black/40 backdrop-blur-sm">
                  View
                </span>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {selected !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center"
              onClick={() => setSelected(null)}
              onKeyDown={handleKeyDown}
              tabIndex={0}
            >
              {/* Close */}
              <button
                onClick={() => setSelected(null)}
                className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Prev */}
              <button
                onClick={(e) => { e.stopPropagation(); prev(); }}
                className="absolute left-5 w-12 h-12 rounded-full bg-white/10 hover:bg-gold/30 flex items-center justify-center text-white transition-colors z-10"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Image */}
              <motion.div
                layoutId={`gallery-${selected}`}
                className="relative w-[min(900px,90vw)] aspect-[16/10] rounded-xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${IMAGES[selected].src})` }}
                />
                <div className="absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-black/70 to-transparent">
                  <p className="text-white/80 text-sm">{IMAGES[selected].alt}</p>
                  <p className="text-beige/40 text-xs mt-0.5">{selected + 1} / {IMAGES.length}</p>
                </div>
              </motion.div>

              {/* Next */}
              <button
                onClick={(e) => { e.stopPropagation(); next(); }}
                className="absolute right-5 w-12 h-12 rounded-full bg-white/10 hover:bg-gold/30 flex items-center justify-center text-white transition-colors z-10"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </LayoutGroup>
    </Section>
  );
}
