import Link from 'next/link';

export default function ContactCTA() {
  return (
    <section className="relative py-20 md:py-28 bg-circle-forest">
      <div className="absolute inset-0 bg-black/20" />
      <div className="relative z-10 container-wide px-6 md:px-12 lg:px-20 text-center">
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-4">
          Experience the richness of Sri Lankan rice with us
        </h2>
        <p className="text-circle-wheat/90 text-lg max-w-2xl mx-auto mb-10">
          For local orders, export enquiries, or partnership opportunities—we&apos;d love to hear from you.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-8 py-4 bg-circle-gold text-white font-semibold rounded-md hover:bg-amber-600 transition-all shadow-lg"
        >
          Contact Us
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
