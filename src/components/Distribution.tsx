import Link from 'next/link';

export default function Distribution() {
  return (
    <section id="distribution" className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-circle-forest" />
      <div className="absolute inset-0 bg-white/[0.03]" />
      <div className="relative z-10 container-wide px-6 md:px-12 lg:px-20 text-center">
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-4">
          Island Wide Distribution
        </h2>
        <p className="text-circle-wheat/90 text-lg max-w-2xl mx-auto mb-10">
          Trusted across the island for quality rice. We deliver to retailers, wholesalers, and institutions. Export partnerships welcome.
        </p>
        <Link
          href="#contact"
          className="inline-flex items-center gap-2 px-8 py-4 bg-circle-gold text-white font-semibold rounded-md hover:bg-amber-600 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
        >
          More Info
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
