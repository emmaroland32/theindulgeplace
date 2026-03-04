import { ExploreClient } from '@/components/sections/ExploreView';

export const metadata = {
  title: 'Explore The Architecture',
  description: 'Interactive 3D tour of The Indulge Place — explore every floor of our landmark venue in Ogudu, Lagos.',
  openGraph: {
    title: 'Interactive 3D Tour | The Indulge Place',
    description: 'Explore our multi-level luxury venue in an immersive 3D experience.',
    images: [{ url: '/images/luxury_exterior_night.png', width: 1200, height: 630, alt: 'The Indulge Place at night' }],
  },
};

export default function ExplorePage() {
  return <ExploreClient />;
}
