import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { FadeIn } from '@/components/ui/FadeIn';
import { JsonLd } from '@/components/ui/JsonLd';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'BkCooks Restaurant',
  description: 'BkCooks blends authentic Nigerian flavors with modern culinary technique. Reserve a table at our fine dining restaurant in Ogudu, Lagos.',
  openGraph: {
    title: 'BkCooks Restaurant | The Indulge Place',
    description: 'Fine dining where Nigerian heritage meets modern culinary artistry. Located in Ogudu, Lagos.',
    images: [{ url: '/images/fine_dining_interior.png', width: 1200, height: 630, alt: 'BkCooks Restaurant Interior' }],
  },
};

const menuSections = [
  {
    category: 'Starters',
    items: [
      { name: 'Suya-Spiced Tuna Tartare', price: '₦22,000' },
      { name: 'Puff-Puff & Caviar', price: '₦31,000' },
      { name: 'Palm-Smoked Oxtail Croquettes', price: '₦19,500' },
    ],
  },
  {
    category: 'Mains',
    items: [
      { name: 'Jollof-Braised Short Rib', price: '₦48,500' },
      { name: 'Grilled Sea Bass & Egusi Velouté', price: '₦52,000' },
      { name: 'Black-Truffle Ofada Rice', price: '₦39,000' },
    ],
  },
  {
    category: 'Desserts',
    items: [
      { name: 'Chin-Chin Parfait', price: '₦16,500' },
      { name: 'Plantain Tarte Tatin', price: '₦18,000' },
      { name: 'Dark Chocolate & Kola Mousse', price: '₦19,500' },
    ],
  },
];

export default function RestaurantPage() {
  return (
    <div className="pt-24 pb-16">
      <JsonLd data={{
        '@context': 'https://schema.org',
        '@type': 'Restaurant',
        name: 'BkCooks',
        description: 'Fine dining where Nigerian heritage meets modern culinary artistry.',
        servesCuisine: ['Nigerian', 'Modern African', 'Contemporary'],
        priceRange: '$$$$',
        telephone: '+2348120000000',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '24, Gerrad Street',
          addressLocality: 'Ogudu',
          addressRegion: 'Lagos',
          addressCountry: 'NG',
        },
        openingHoursSpecification: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
          opens: '10:00',
          closes: '22:00',
        },
        hasMenu: '#menu',
        image: '/images/fine_dining_interior.png',
      }} />

      <Section className="relative bg-charcoal">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeIn direction="left">
            <span className="text-gold uppercase tracking-widest text-sm font-medium mb-4 block">
              Fine Dining Excellence
            </span>
            <h1 className="text-5xl md:text-6xl font-display text-white mb-6 leading-tight">
              A Taste of <br/> <span className="text-gold italic">Luxury</span>
            </h1>
            <p className="text-beige/80 text-lg leading-relaxed mb-8">
              BkCooks redefines the fine dining experience by blending authentic Nigerian flavors with modern culinary techniques. Located on the ground floor, our restaurant offers a sophisticated atmosphere perfect for business lunches, romantic dinners, and exclusive celebrations.
            </p>
            <div className="flex gap-4">
              <Link href="/contact?type=reservation">
                <Button>Reserve a Table</Button>
              </Link>
              <Link href="#menu">
                <Button variant="outline">View Menu</Button>
              </Link>
            </div>
          </FadeIn>

          <FadeIn direction="right">
            <div className="relative aspect-[4/5] rounded-xl overflow-hidden shadow-2xl border border-white/5">
              <Image
                src="/images/fine_dining_interior.png"
                alt="BkCooks fine dining interior"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
            </div>
          </FadeIn>
        </div>
      </Section>

      <Section className="bg-white/5 py-24">
        <FadeIn>
          <Container className="text-center max-w-3xl">
            <h2 className="text-4xl font-display text-white mb-6">The Chef&apos;s Vision</h2>
            <p className="text-beige/70 text-lg leading-relaxed mb-8">
              &quot;Our goal is to create more than just a meal. We curate experiences that linger in your memory, using only the finest locally-sourced ingredients and presenting them with unparalleled elegance.&quot;
            </p>
            <span className="text-gold font-display text-xl italic">- Chef Bongani Khumalo</span>
          </Container>
        </FadeIn>
      </Section>

      <Section id="menu">
        <FadeIn>
          <div className="text-center mb-12">
            <span className="text-gold uppercase tracking-widest text-sm font-medium mb-4 block">Our Menu</span>
            <h2 className="text-4xl font-display text-white mb-4">Curated for the Refined Palate</h2>
            <p className="text-beige/60 text-lg max-w-2xl mx-auto">
              Seasonal ingredients, Nigerian heritage, and modern technique — every dish tells a story.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {menuSections.map((section, i) => (
            <FadeIn key={section.category} delay={i * 0.1}>
              <div className="bg-white/5 rounded-xl p-8 border border-white/5 h-full">
                <h3 className="text-xl font-display text-gold mb-6 pb-4 border-b border-white/10">
                  {section.category}
                </h3>
                <ul className="space-y-4">
                  {section.items.map((item) => (
                    <li key={item.name} className="flex justify-between items-baseline gap-4">
                      <span className="text-beige/80 text-sm">{item.name}</span>
                      <span className="text-gold text-sm font-medium shrink-0">{item.price}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3}>
          <div className="text-center mt-12">
            <Link href="/contact?type=reservation">
              <Button size="lg">Reserve Your Table</Button>
            </Link>
          </div>
        </FadeIn>
      </Section>
    </div>
  );
}
