'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Correct hook for App Router
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'BkCooks', href: '/restaurant' },
  { name: 'The Spaces', href: '/events' },
  { name: 'Explore', href: '/explore' },
  { name: 'Contact', href: '/contact' },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <a
        href="#main-content"
        className="fixed top-3 left-3 z-[100] -translate-y-16 focus:translate-y-0 transition-transform duration-200 bg-gold text-charcoal text-sm font-semibold px-4 py-2 rounded-md shadow-lg"
      >
        Skip to main content
      </a>
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'bg-charcoal/90 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'
      )}
    >
      <Container className="flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src="/images/logo-gold.png"
            alt="The Indulge Place"
            width={52}
            height={44}
            priority
            className="transition-transform duration-300 group-hover:scale-105"
          />
          <span className="font-display text-xl font-bold text-gold tracking-wider hidden sm:block">
            THE INDULGE PLACE
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                'text-sm font-medium transition-colors hover:text-gold',
                pathname === link.href ? 'text-gold' : 'text-beige'
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link href="/contact?type=reservation">
            <Button variant="primary" size="sm">Reserve</Button>
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-beige hover:text-gold"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </Container>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-charcoal border-t border-gold/10 md:hidden"
          >
            <Container className="py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-beige hover:text-gold"
                >
                  {link.name}
                </Link>
              ))}
              <Link href="/contact?type=reservation" onClick={() => setIsOpen(false)}>
                <Button className="w-full">Reserve a Table</Button>
              </Link>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
    </>
  );
}
