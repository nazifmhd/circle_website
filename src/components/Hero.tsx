import Link from 'next/link';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-circle-forest via-circle-forest/95 to-circle-earth" />
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(245,222,179,0.15),transparent)]" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p className="font-display text-circle-gold text-base md:text-lg tracking-[0.35em] uppercase mb-4 font-medium">
          Premium Rice Producers
        </p>
        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold text-white mb-5 leading-[1.1] tracking-tight">
          Circle Rice
        </h1>
        <p className="font-display text-circle-wheat text-xl md:text-2xl max-w-2xl mx-auto mb-4 italic">
          &ldquo;Health is wealth,&rdquo; and rice can make you rich in no time.
        </p>
        <p className="text-circle-wheat/90 text-base md:text-lg max-w-xl mx-auto mb-12">
          The health benefits in this much-loved cereal grain are inestimable.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="#products"
            className="inline-flex items-center gap-2 px-8 py-4 bg-circle-gold text-white font-semibold rounded-md hover:bg-amber-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            Our Products
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <Link
            href="#about"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-circle-wheat text-circle-wheat font-semibold rounded-md hover:bg-white/10 transition-all duration-300"
          >
            Read More
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-circle-wheat/70 hover:text-white transition-colors"
        aria-label="Scroll to about"
      >
        <svg className="w-8 h-8 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </a>
    </section>
  );
}
