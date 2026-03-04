'use client';

import { Section } from '@/components/ui/Section';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export function ContactSection() {
  return (
    <Section id="contact" className="bg-charcoal text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <span className="text-gold uppercase tracking-widest text-sm font-medium mb-2 block">
          Visit Us
        </span>
        <h2 className="text-4xl md:text-5xl font-display mb-8">
          Find Your Sanctuary
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 text-left">
          <div className="bg-white/5 p-8 rounded-lg">
            <h3 className="text-xl font-display text-gold mb-4">Location</h3>
            <p className="text-beige/80 mb-2">24, Gerrad Street</p>
            <p className="text-beige/80">Ogudu, Lagos</p>
          </div>
          <div className="bg-white/5 p-8 rounded-lg">
            <h3 className="text-xl font-display text-gold mb-4">Hours</h3>
            <p className="text-beige/80 mb-2">Mon – Sun: 10:00 AM – 11:00 PM</p>
            <p className="text-beige/80">BkCooks Kitchen closes at 10:00 PM</p>
          </div>
        </div>

        <div className="w-full h-96 rounded-lg overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.578!2d3.3773!3d6.5881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8d3bc5c53a27%3A0x7c3d5bae4d2c82c6!2sOgudu%2C+Lagos!5e0!3m2!1sen!2sng!4v1645564800000!5m2!1sen!2sng"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            className="opacity-60 hover:opacity-90 transition-opacity"
          />
        </div>

        <div className="mt-10">
          <Link href="/contact">
            <Button size="lg" variant="secondary">Make a Reservation or Inquiry</Button>
          </Link>
        </div>
      </motion.div>
    </Section>
  );
}
