'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { CheckCircle2 } from 'lucide-react';

type InquiryType = 'reservation' | 'event' | 'space' | 'general';

const SPACE_LABELS: Record<string, string> = {
  boardroom: 'The Boardroom',
  lounge: 'The Lounge',
};

export function ContactForm() {
  const searchParams = useSearchParams();

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    type: (searchParams.get('type') as InquiryType) ?? 'general',
    space: searchParams.get('space') ?? '',
    date: '',
    guests: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const type = searchParams.get('type') as InquiryType | null;
    const space = searchParams.get('space');
    if (type) setForm((f) => ({ ...f, type }));
    if (space) setForm((f) => ({ ...f, space }));
  }, [searchParams]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);
    // TODO: connect to a backend / email service (e.g. Resend, Formspree)
    await new Promise((r) => setTimeout(r, 1200));
    setIsLoading(false);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
        <CheckCircle2 className="w-14 h-14 text-gold" />
        <h3 className="text-2xl font-display text-gold">Message Received</h3>
        <p className="text-beige/70 max-w-sm">
          Thank you for reaching out. A member of our team will be in touch within 24 hours.
        </p>
        <button
          className="mt-4 text-sm text-gold underline underline-offset-4 hover:text-gold/70 transition-colors"
          onClick={() => setSubmitted(false)}
        >
          Send another message
        </button>
      </div>
    );
  }

  const showDateGuests = form.type === 'reservation' || form.type === 'event' || form.type === 'space';

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="flex flex-col gap-2">
          <label className="text-sm text-beige/60 uppercase tracking-widest">Full Name *</label>
          <input
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
            className="bg-white/5 border border-white/10 rounded-md px-4 py-3 text-sm text-beige focus:outline-none focus:border-gold transition-colors"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm text-beige/60 uppercase tracking-widest">Email *</label>
          <input
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="your@email.com"
            className="bg-white/5 border border-white/10 rounded-md px-4 py-3 text-sm text-beige focus:outline-none focus:border-gold transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="flex flex-col gap-2">
          <label className="text-sm text-beige/60 uppercase tracking-widest">Phone</label>
          <input
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            placeholder="+27 ..."
            className="bg-white/5 border border-white/10 rounded-md px-4 py-3 text-sm text-beige focus:outline-none focus:border-gold transition-colors"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm text-beige/60 uppercase tracking-widest">Inquiry Type *</label>
          <select
            name="type"
            required
            value={form.type}
            onChange={handleChange}
            className="bg-charcoal border border-white/10 rounded-md px-4 py-3 text-sm text-beige focus:outline-none focus:border-gold transition-colors"
          >
            <option value="reservation">Table Reservation — BkCooks</option>
            <option value="event">Private Event</option>
            <option value="space">Space Inquiry</option>
            <option value="general">General Inquiry</option>
          </select>
        </div>
      </div>

      {form.type === 'space' && (
        <div className="flex flex-col gap-2">
          <label className="text-sm text-beige/60 uppercase tracking-widest">Space</label>
          <select
            name="space"
            value={form.space}
            onChange={handleChange}
            className="bg-charcoal border border-white/10 rounded-md px-4 py-3 text-sm text-beige focus:outline-none focus:border-gold transition-colors"
          >
            <option value="">— Select a space —</option>
            <option value="boardroom">The Boardroom (up to 14 guests)</option>
            <option value="lounge">The Lounge (up to 40 guests)</option>
          </select>
        </div>
      )}

      {showDateGuests && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-sm text-beige/60 uppercase tracking-widest">Preferred Date</label>
            <input
              name="date"
              type="date"
              value={form.date}
              onChange={handleChange}
              className="bg-white/5 border border-white/10 rounded-md px-4 py-3 text-sm text-beige focus:outline-none focus:border-gold transition-colors [color-scheme:dark]"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm text-beige/60 uppercase tracking-widest">Number of Guests</label>
            <input
              name="guests"
              type="number"
              min="1"
              value={form.guests}
              onChange={handleChange}
              placeholder="e.g. 4"
              className="bg-white/5 border border-white/10 rounded-md px-4 py-3 text-sm text-beige focus:outline-none focus:border-gold transition-colors"
            />
          </div>
        </div>
      )}

      <div className="flex flex-col gap-2">
        <label className="text-sm text-beige/60 uppercase tracking-widest">Message</label>
        <textarea
          name="message"
          rows={4}
          value={form.message}
          onChange={handleChange}
          placeholder="Any special requests or details..."
          className="bg-white/5 border border-white/10 rounded-md px-4 py-3 text-sm text-beige focus:outline-none focus:border-gold transition-colors resize-none"
        />
      </div>

      <Button type="submit" size="lg" className="w-full" isLoading={isLoading}>
        {isLoading ? 'Sending...' : 'Send Inquiry'}
      </Button>
    </form>
  );
}
