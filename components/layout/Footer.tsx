'use client';

import { useState } from 'react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';

export function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubscribe(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    // TODO: connect to a mailing list provider (e.g. Mailchimp, Resend)
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    setSubscribed(true);
    setEmail('');
  }

  return (
    <footer className="bg-charcoal border-t border-gold/10 py-16 text-beige/80">
      <Container className="grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-4">
          <h3 className="font-display text-2xl text-gold">THE INDULGE PLACE</h3>
          <p className="text-sm leading-relaxed">
            Where Luxury Meets Serenity.<br />
            Experience the finest in relaxation, dining, and events.
          </p>
        </div>

        <div>
          <h4 className="font-display text-lg text-gold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-gold transition-colors">Home</Link></li>
            <li><Link href="/restaurant" className="hover:text-gold transition-colors">BkCooks Restaurant</Link></li>
            <li><Link href="/events" className="hover:text-gold transition-colors">Meeting &amp; Events</Link></li>
            <li><Link href="/contact" className="hover:text-gold transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg text-gold mb-4">Contact</h4>
          <ul className="space-y-2 text-sm">
            <li>123 Luxury Avenue</li>
            <li>Sandton, Johannesburg</li>
            <li>
              <a href="tel:+27111234567" className="hover:text-gold transition-colors">+27 11 123 4567</a>
            </li>
            <li>
              <a href="mailto:info@theindulgeplace.com" className="hover:text-gold transition-colors">info@theindulgeplace.com</a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg text-gold mb-4">Join the Inner Circle</h4>
          {subscribed ? (
            <div className="flex items-center gap-2 text-sm text-gold">
              <CheckCircle2 className="w-4 h-4" />
              <span>You&apos;re on the list.</span>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="bg-white/5 border border-white/10 rounded px-4 py-2 text-sm focus:outline-none focus:border-gold transition-colors"
              />
              <Button variant="secondary" size="sm" type="submit" isLoading={loading}>
                {loading ? 'Subscribing...' : 'Subscribe'}
              </Button>
            </form>
          )}
        </div>
      </Container>
      <div className="mt-16 pt-8 border-t border-white/5 text-center text-xs text-beige/40">
        © {new Date().getFullYear()} The Indulge Place. All rights reserved.
      </div>
    </footer>
  );
}
