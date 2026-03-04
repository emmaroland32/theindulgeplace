import Image from 'next/image';

export default function Loading() {
  return (
    <div className="min-h-screen bg-charcoal flex flex-col items-center justify-center gap-8">
      <div className="relative">
        {/* Spinning gold ring around logo */}
        <div className="absolute -inset-4 rounded-full border border-gold/20 animate-spin border-t-gold/60" />
        <Image
          src="/images/logo-gold.png"
          alt="The Indulge Place"
          width={100}
          height={84}
          className="animate-pulse opacity-70"
        />
      </div>
      <p className="text-gold/40 text-xs uppercase tracking-[0.4em]">
        Loading&hellip;
      </p>
    </div>
  );
}
