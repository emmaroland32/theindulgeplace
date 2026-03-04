import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-charcoal flex items-center justify-center">
      <Container className="text-center py-24">
        <div className="flex justify-center mb-10 opacity-40">
          <Image
            src="/images/logo-gold.png"
            alt="The Indulge Place"
            width={80}
            height={67}
          />
        </div>
        <p className="text-gold uppercase tracking-widest text-sm font-medium mb-4">404</p>
        <h1 className="text-6xl md:text-8xl font-display text-white mb-6 leading-tight">
          Page Not <span className="italic text-gold">Found</span>
        </h1>
        <p className="text-beige/60 text-lg max-w-md mx-auto mb-10">
          The page you&apos;re looking for seems to have moved or doesn&apos;t exist. Let us guide you back.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <Button size="lg">Return Home</Button>
          </Link>
          <Link href="/contact">
            <Button variant="secondary" size="lg">Contact Us</Button>
          </Link>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-beige/40">
          {[
            { label: 'BkCooks Restaurant', href: '/restaurant' },
            { label: 'The Spaces', href: '/events' },
            { label: 'Interactive Tour', href: '/explore' },
            { label: 'Get In Touch', href: '/contact' },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-gold transition-colors underline underline-offset-4"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
}
