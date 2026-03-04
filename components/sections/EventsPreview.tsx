'use client';

import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { motion } from 'framer-motion';
import Link from 'next/link';

const spaces = [
  { title: "The Boardroom", desc: "Equipped for executive grandeur.", img: "/images/luxury_boardroom.png", href: "/events" },
  { title: "The Lounge", desc: "Intimate and sophisticated.", img: "/images/intimate_lounge.png", href: "/events" },
];

export function EventsPreview() {
  return (
    <Section className="bg-white/5">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            <span className="text-gold uppercase tracking-widest text-sm font-medium mb-2 block">
            The Spaces
            </span>
            <h2 className="text-4xl md:text-5xl font-display mb-6">
            For Moments That Matter
            </h2>
            <p className="text-beige/70 text-lg">
            Versatile event spaces designed for high-stakes board meetings,
            intimate proposals, and exclusive celebrations.
            </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {spaces.map((item, index) => (
          <Link key={index} href={item.href}>
            <motion.div
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6, delay: index * 0.2 }}
               className="group relative h-96 rounded-lg overflow-hidden cursor-pointer"
            >
               <div
                   className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                   style={{ backgroundImage: `url(${item.img})` }}
               />
               <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors duration-500" />
               <div className="absolute bottom-0 left-0 p-8">
                   <h3 className="text-2xl font-display text-white mb-2">{item.title}</h3>
                   <p className="text-beige/80 mb-4">{item.desc}</p>
                   <span className="text-gold text-sm font-medium hidden group-hover:inline-block transition-all">View Details &rarr;</span>
               </div>
            </motion.div>
          </Link>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link href="/contact?type=event">
          <Button size="lg">Plan Your Event</Button>
        </Link>
      </div>
    </Section>
  );
}
