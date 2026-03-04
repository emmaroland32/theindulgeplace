'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { AlertTriangle } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-charcoal flex items-center justify-center">
      <Container className="text-center py-24 max-w-xl">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center">
            <AlertTriangle className="w-7 h-7 text-gold" />
          </div>
        </div>
        <h1 className="text-4xl md:text-5xl font-display text-white mb-4">
          Something Went <span className="italic text-gold">Wrong</span>
        </h1>
        <p className="text-beige/60 text-lg mb-10">
          We apologise for the inconvenience. Our team has been notified. Please try again or contact us directly.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" onClick={reset}>Try Again</Button>
          <Link href="/contact">
            <Button variant="secondary" size="lg">Contact Support</Button>
          </Link>
        </div>
        {error.digest && (
          <p className="mt-8 text-xs text-beige/20 font-mono">Error ID: {error.digest}</p>
        )}
      </Container>
    </div>
  );
}
