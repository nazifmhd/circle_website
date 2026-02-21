import Link from 'next/link';

const sections = [
  {
    id: 'story-process',
    label: 'Precision in Every Grain',
    title: 'Advanced Processing & Quality Control',
    body: 'State-of-the-art milling technology and strict quality control ensure that every grain of rice meets the highest standards. We blend tradition with innovation to bring you the best.',
    cta: 'Our Products',
    href: '/products',
    gradient: 'from-circle-earth/95 via-circle-forest/90 to-circle-stone/90',
  },
  {
    id: 'story-taste',
    label: 'A Taste of Perfection',
    title: 'Naturally Sri Lankan',
    body: 'Experience the rich aroma, texture, and purity of our premium rice. Carefully cultivated and expertly processed, our rice delivers unmatched taste in every meal.',
    cta: 'Our Products',
    href: '/products',
    gradient: 'from-circle-stone/90 via-circle-forest/85 to-circle-forest/95',
  },
  {
    id: 'story-export',
    label: 'Global Quality, Local Roots',
    title: "Taking Sri Lanka's Finest to the World",
    body: "From local kitchens to international markets, we are committed to sharing Sri Lanka's finest rice with the world. Our export-grade packaging ensures quality and freshness in every shipment.",
    cta: 'Contact Us',
    href: '/contact',
    gradient: 'from-circle-forest/95 via-[#1a3310] to-circle-earth/95',
  },
];

export default function StorySections() {
  return (
    <>
      {sections.map((section) => (
        <section
          key={section.id}
          id={section.id}
          className={`relative min-h-[85vh] flex items-center justify-center py-20 md:py-28 bg-gradient-to-b ${section.gradient}`}
        >
          <div className="absolute inset-0 bg-black/20" />
          <div className="relative z-10 container-wide px-6 md:px-12 lg:px-20 text-center max-w-3xl mx-auto">
            <p className="font-display text-circle-gold text-sm md:text-base tracking-[0.2em] uppercase mb-3">
              {section.label}
            </p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-6 leading-tight">
              {section.title}
            </h2>
            <p className="text-circle-wheat/95 text-lg md:text-xl leading-relaxed mb-10">
              {section.body}
            </p>
            <Link
              href={section.href}
              className="inline-flex items-center gap-2 px-8 py-4 bg-circle-gold text-white font-semibold rounded-md hover:bg-amber-600 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              {section.cta}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </section>
      ))}
    </>
  );
}
