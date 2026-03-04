import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { SmoothScroll } from '@/components/layout/SmoothScroll';
import { CustomCursor } from '@/components/ui/CustomCursor';
import { ChatWidget } from '@/components/ui/ChatWidget';
import { PageTransition } from '@/components/layout/PageTransition';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? 'https://theindulgeplace.com';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'The Indulge Place | Luxury Relaxation Hub',
    template: '%s | The Indulge Place',
  },
  description: 'Where Luxury Meets Serenity. Fine dining at BkCooks, exclusive event spaces, and a world-class architectural experience in Sandton, Johannesburg.',
  keywords: ['luxury dining', 'fine dining Johannesburg', 'event venue Sandton', 'BkCooks', 'private dining', 'boardroom hire'],
  authors: [{ name: 'The Indulge Place' }],
  openGraph: {
    type: 'website',
    locale: 'en_ZA',
    url: BASE_URL,
    siteName: 'The Indulge Place',
    title: 'The Indulge Place | Luxury Relaxation Hub',
    description: 'Where Luxury Meets Serenity. Fine dining at BkCooks, exclusive event spaces in Sandton, Johannesburg.',
    images: [
      {
        url: '/images/exterior.png',
        width: 1200,
        height: 630,
        alt: 'The Indulge Place — Luxury Venue, Sandton',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Indulge Place | Luxury Relaxation Hub',
    description: 'Fine dining at BkCooks, exclusive event spaces, and architectural luxury in Sandton, Johannesburg.',
    images: ['/images/exterior.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={cn(
        'min-h-screen bg-charcoal font-sans text-beige antialiased selection:bg-gold selection:text-charcoal',
        playfair.variable,
        inter.variable
      )}>
        <CustomCursor />
        <SmoothScroll>
          <Header />
          <main className="flex-grow min-h-screen">
            <PageTransition>
              {children}
            </PageTransition>
          </main>
          <Footer />
        </SmoothScroll>
        <ChatWidget />
      </body>
    </html>
  );
}
