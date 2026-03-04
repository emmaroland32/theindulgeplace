import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { FadeIn } from '@/components/ui/FadeIn';
import { JsonLd } from '@/components/ui/JsonLd';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'The Spaces',
  description: 'The Boardroom (14 guests) and The Lounge (40 guests) — exclusive event venues in Ogudu, Lagos for board meetings, private dinners, and celebrations.',
  openGraph: {
    title: 'The Spaces | The Indulge Place',
    description: 'Exclusive boardrooms and event lounges in Ogudu, Lagos. Designed for impact.',
    images: [{ url: '/images/luxury_boardroom.png', width: 1200, height: 630, alt: 'The Boardroom at The Indulge Place' }],
  },
};

export default function EventsPage() {
  return (
    <div className="pt-24 pb-16">
      <JsonLd data={{
        '@context': 'https://schema.org',
        '@type': 'EventVenue',
        name: 'The Indulge Place — Event Spaces',
        description: 'Exclusive boardrooms and event lounges in Ogudu, Lagos for high-stakes meetings and private celebrations.',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '24, Gerrad Street',
          addressLocality: 'Ogudu',
          addressRegion: 'Lagos',
          addressCountry: 'NG',
        },
        maximumAttendeeCapacity: 40,
        image: '/images/luxury_boardroom.png',
      }} />

      <Section className="text-center max-w-4xl mx-auto">
        <FadeIn>
          <span className="text-gold uppercase tracking-widest text-sm font-medium mb-4 block">
            Exclusive Venues
          </span>
          <h1 className="text-5xl md:text-6xl font-display text-white mb-6">
            Spaces Designed for <br/><span className="italic text-gold">Impact</span>
          </h1>
          <p className="text-beige/80 text-lg leading-relaxed">
            Whether you are hosting a high-stakes board meeting, an intimate anniversary, or an exclusive corporate retreat, our versatile spaces provide the perfect backdrop of luxury and sophistication.
          </p>
        </FadeIn>
      </Section>

      <Section className="bg-charcoal border-t border-white/5">
        {/* The Boardroom */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <FadeIn direction="left" className="order-2 lg:order-1">
            <div className="relative aspect-[16/9] lg:aspect-[4/3] rounded-xl overflow-hidden shadow-2xl border border-white/5">
              <Image
                src="/images/luxury_boardroom.png"
                alt="The Boardroom — executive meeting room"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </FadeIn>
          <FadeIn direction="right" className="order-1 lg:order-2">
            <h2 className="text-4xl font-display text-white mb-4">The Boardroom</h2>
            <p className="text-beige/70 text-lg leading-relaxed mb-6">
              Command attention in our state-of-the-art executive boardroom. Featuring panoramic city views, cutting-edge AV technology, and bespoke leather seating, it is engineered for success and absolute privacy.
            </p>
            <ul className="space-y-3 mb-8 text-beige/80 font-light">
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-gold rounded-full"/> Capacity: Up to 14 Guests</li>
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-gold rounded-full"/> 4K Video Conferencing</li>
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-gold rounded-full"/> Private Dining Service Available</li>
            </ul>
            <Link href="/contact?type=space&space=boardroom">
              <Button>Inquire Now</Button>
            </Link>
          </FadeIn>
        </div>

        {/* The Lounge */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeIn direction="left">
            <h2 className="text-4xl font-display text-white mb-4">The Lounge</h2>
            <p className="text-beige/70 text-lg leading-relaxed mb-6">
              An intimate, velvet-draped sanctuary perfect for relaxed networking, cocktail hours, or private celebrations. The Lounge blends exclusivity with a warm, inviting atmosphere, complete with its own dedicated bar staff.
            </p>
            <ul className="space-y-3 mb-8 text-beige/80 font-light">
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-gold rounded-full"/> Capacity: Up to 40 Guests</li>
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-gold rounded-full"/> Custom Ambient Lighting</li>
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-gold rounded-full"/> Premium Sound System</li>
            </ul>
            <Link href="/contact?type=space&space=lounge">
              <Button>Inquire Now</Button>
            </Link>
          </FadeIn>
          <FadeIn direction="right">
            <div className="relative aspect-[16/9] lg:aspect-[4/3] rounded-xl overflow-hidden shadow-2xl border border-white/5">
              <Image
                src="/images/intimate_lounge.png"
                alt="The Lounge — intimate event space"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </FadeIn>
        </div>
      </Section>
    </div>
  );
}
