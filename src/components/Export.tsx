import Link from 'next/link';

const points = [
  { text: 'Competitive FOB/CIF pricing for international buyers' },
  { text: 'Flexible container and bag packaging options' },
  { text: 'Documentation and certifications as required by destination countries' },
  { text: 'Reliable logistics and shipping coordination' },
  { text: 'Consistent quality suitable for retail and food service' },
];

export default function Export() {
  return (
    <section id="export" className="section-padding bg-white">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <div>
            <span className="font-display text-circle-gold text-sm md:text-base tracking-[0.2em] uppercase font-medium">
              Global Trade
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-circle-forest mt-2 mb-6 leading-tight">
              Export & International Business
            </h2>
            <p className="text-circle-stone/90 text-lg leading-relaxed mb-8">
              Circle Rice is ready to supply premium rice to markets worldwide. We work with importers, distributors, and retailers who value quality, consistency, and professional partnership.
            </p>
            <ul className="space-y-4 mb-8">
              {points.map((point) => (
                <li key={point.text} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-circle-gold/15 flex items-center justify-center mt-0.5">
                    <span className="w-2 h-2 rounded-full bg-circle-gold" />
                  </span>
                  <span className="text-circle-stone font-medium">{point.text}</span>
                </li>
              ))}
            </ul>
            <p className="text-circle-stone/80 mb-6">
              Interested in importing Circle rice? Contact our export team for product sheets, samples, and terms.
            </p>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-circle-gold text-white font-semibold rounded-md hover:bg-amber-600 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Contact Export Team
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
          <div className="relative">
            <div className="aspect-square max-w-md mx-auto lg:mx-0 rounded-2xl overflow-hidden shadow-circle-lg bg-gradient-to-br from-circle-forest to-circle-earth flex items-center justify-center">
              <div className="text-center p-10">
                <svg className="w-20 h-20 mx-auto text-circle-wheat/50 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0h.5a2.5 2.5 0 002.5-2.5V3.935M12 12v.5a2.5 2.5 0 002.5 2.5h.5a2 2 0 012 2 2 2 0 104 0h.5a2.5 2.5 0 002.5-2.5V12M3.055 12H5a2 2 0 012 2v2.945" />
                </svg>
                <p className="font-display text-white text-xl md:text-2xl">Worldwide distribution</p>
                <p className="text-circle-wheat/70 text-sm mt-1">Ready to ship to your country</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
