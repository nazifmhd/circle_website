import Link from 'next/link';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 md:pt-28 pb-20">
      {/* Background - like Rathna: rich gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-circle-forest via-[#1a3310] to-circle-earth" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(245,222,179,0.08),transparent_60%)]" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto animate-fade-in">
        <p className="font-display text-circle-gold text-sm md:text-base tracking-[0.25em] uppercase mb-4">
          Where Quality Begins
        </p>
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-white mb-6 leading-[1.15] tracking-tight">
          Cultivated with Care
        </h1>
        <p className="text-circle-wheat/95 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Our journey begins in the fertile fields, where dedicated farmers nurture every grain with passion and tradition. From sunrise to harvest, we ensure the finest quality for your table.
        </p>
        <Link
          href="/products"
          className="inline-flex items-center gap-2 px-8 py-4 bg-circle-gold text-white font-semibold rounded-md hover:bg-amber-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
        >
          Our Products
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>

      <a
        href="#story-process"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-circle-wheat/70 hover:text-white transition-colors"
        aria-label="Scroll down"
      >
        <svg className="w-8 h-8 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </a>
    </section>
  );
}
