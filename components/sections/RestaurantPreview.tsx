'use client';

import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { motion } from 'framer-motion';
import Link from 'next/link';

export function RestaurantPreview() {
  return (
    <Section className="relative overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-gold uppercase tracking-widest text-sm font-medium mb-2 block">
            Fine Dining
          </span>
          <h2 className="text-4xl md:text-5xl font-display mb-6">
            BkCooks: <span className="italic text-white">Culinary Artistry</span>
          </h2>
          <p className="text-beige/70 text-lg leading-relaxed mb-8">
            Immerse yourself in a culinary journey crafted for the refined palate.
            From our open kitchen to your table, experience flavors that transcend the ordinary.
            Featuring a curated Chef&apos;s Table and premium wine selection.
          </p>
          <Link href="/restaurant">
            <Button variant="secondary">View Full Menu</Button>
          </Link>
        </motion.div>

        {/* Image / Visual */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative aspect-[4/5] bg-white/5 rounded-lg overflow-hidden"
        >
             <div className="absolute inset-0 bg-[url('/images/fine_dining_interior.png')] bg-cover bg-center opacity-80 hover:opacity-100 transition-opacity duration-700" />
             <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent opacity-60" />
        </motion.div>
      </div>
    </Section>
  );
}
