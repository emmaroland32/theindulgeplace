import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export const metadata = {
  title: 'BkCooks Restaurant',
  description: 'BkCooks blends authentic Nigerian flavors with modern culinary technique. Reserve a table at our fine dining restaurant in Sandton, Johannesburg.',
  openGraph: {
    title: 'BkCooks Restaurant | The Indulge Place',
    description: 'Fine dining where Nigerian heritage meets modern culinary artistry. Located in Sandton, Johannesburg.',
    images: [{ url: '/images/fine_dining_interior.png', width: 1200, height: 630, alt: 'BkCooks Restaurant Interior' }],
  },
};

export default function RestaurantPage() {
  return (
    <div className="pt-24 pb-16">
      <Section className="relative bg-charcoal">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
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
          </div>
          <div className="relative aspect-[4/5] rounded-xl overflow-hidden shadow-2xl border border-white/5">
            <div className="absolute inset-0 bg-[url('/images/fine_dining_interior.png')] bg-cover bg-center hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
          </div>
        </div>
      </Section>

      <Section className="bg-white/5 py-24">
        <Container className="text-center max-w-3xl">
          <h2 className="text-4xl font-display text-white mb-6">The Chef&apos;s Vision</h2>
          <p className="text-beige/70 text-lg leading-relaxed mb-8">
            &quot;Our goal is to create more than just a meal. We curate experiences that linger in your memory, using only the finest locally-sourced ingredients and presenting them with unparalleled elegance.&quot;
          </p>
          <span className="text-gold font-display text-xl italic">- Chef Bongani Khumalo</span>
        </Container>
      </Section>

      <Section id="menu">
        <div className="text-center mb-12">
          <span className="text-gold uppercase tracking-widest text-sm font-medium mb-4 block">Our Menu</span>
          <h2 className="text-4xl font-display text-white mb-4">Curated for the Refined Palate</h2>
          <p className="text-beige/60 text-lg max-w-2xl mx-auto">
            Seasonal ingredients, Nigerian heritage, and modern technique — every dish tells a story.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              category: 'Starters',
              items: [
                { name: 'Suya-Spiced Tuna Tartare', price: 'R220' },
                { name: 'Puff-Puff & Caviar', price: 'R310' },
                { name: 'Palm-Smoked Oxtail Croquettes', price: 'R195' },
              ],
            },
            {
              category: 'Mains',
              items: [
                { name: 'Jollof-Braised Short Rib', price: 'R485' },
                { name: 'Grilled Sea Bass & Egusi Velouté', price: 'R520' },
                { name: 'Black-Truffle Ofada Rice', price: 'R390' },
              ],
            },
            {
              category: 'Desserts',
              items: [
                { name: 'Chin-Chin Parfait', price: 'R165' },
                { name: 'Plantain Tarte Tatin', price: 'R180' },
                { name: 'Dark Chocolate & Kola Mousse', price: 'R195' },
              ],
            },
          ].map((section) => (
            <div key={section.category} className="bg-white/5 rounded-xl p-8 border border-white/5">
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
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/contact?type=reservation">
            <Button size="lg">Reserve Your Table</Button>
          </Link>
        </div>
      </Section>
    </div>
  );
}
