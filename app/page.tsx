import { Hero } from '@/components/sections/Hero';
import { Stats } from '@/components/sections/Stats';
import { RestaurantPreview } from '@/components/sections/RestaurantPreview';
import { EventsPreview } from '@/components/sections/EventsPreview';
import { Testimonials } from '@/components/sections/Testimonials';
import { Gallery } from '@/components/sections/Gallery';
import { ContactSection as Contact } from '@/components/sections/Contact';
import { SceneWrapper } from '@/components/3d/SceneWrapper';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Hero />

      <Stats />

      <RestaurantPreview />
      
      <div className="relative w-full h-screen">
         <div className="absolute inset-0 z-0">
            <SceneWrapper />
         </div>
         <div className="absolute inset-0 z-10 flex items-end justify-center pb-20 pointer-events-none">
            <div className="bg-charcoal/80 p-6 rounded-lg backdrop-blur text-center max-w-md mx-4 pointer-events-auto">
                <h3 className="text-xl font-display text-gold mb-2">Explore The Architecture</h3>
                <p className="text-sm text-beige/80 mb-4">
                    Rotate and zoom to view our multi-level facility.
                    Visit the interactive tour to explore each floor in detail.
                </p>
                <Link href="/explore" className="text-sm text-gold underline underline-offset-4 hover:text-gold/70 transition-colors">
                    Open Interactive Tour →
                </Link>
            </div>
         </div>
      </div>

      <EventsPreview />

      <Testimonials />

      <Gallery />

      <Contact />
    </>
  );
}
