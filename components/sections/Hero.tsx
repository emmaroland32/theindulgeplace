'use client';

import { useRef } from 'react';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div ref={ref} className="relative h-screen w-full overflow-hidden">
      {/* Background (Video Placeholder) */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 bg-black"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-charcoal z-10" />
        <div
            className="w-full h-full bg-[url('/images/exterior.png')] bg-cover bg-center"
        />
      </motion.div>

      {/* Content */}
      <Container className="relative z-20 h-full flex flex-col justify-center items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-medium text-beige mb-6 drop-shadow-xl">
            Where Luxury <br />
            <span className="text-gold italic">Meets Serenity</span>
          </h1>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-xl mx-auto mb-10"
        >
          <p className="text-lg md:text-xl text-beige/90 font-light">
             Refined dining at BkCooks, exclusive event spaces, and an architectural masterpiece designed for the elite.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link href="/explore">
            <Button size="lg" className="rounded-full px-10">
                Explore the Space
            </Button>
          </Link>
          <Link href="/contact?type=reservation">
            <Button variant="outline" size="lg" className="rounded-full px-10 bg-black/20 backdrop-blur-sm hover:bg-gold/20">
              Reserve a Table
            </Button>
          </Link>
        </motion.div>
      </Container>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-beige/50 text-sm flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <span>Scroll to Explore</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-gold to-transparent" />
      </motion.div>
    </div>
  );
}
