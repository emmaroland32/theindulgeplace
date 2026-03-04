export default function Loading() {
  return (
    <div className="min-h-screen bg-charcoal flex flex-col items-center justify-center gap-6">
      <div className="relative w-16 h-16">
        {/* Outer spinning ring */}
        <div className="absolute inset-0 rounded-full border-2 border-gold/10 animate-spin border-t-gold" />
        {/* Inner pulse */}
        <div className="absolute inset-3 rounded-full bg-gold/10 animate-pulse" />
      </div>
      <p className="text-gold/60 text-sm uppercase tracking-[0.3em] animate-pulse">
        The Indulge Place
      </p>
    </div>
  );
}
