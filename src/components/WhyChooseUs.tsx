const reasons = [
  {
    title: 'Quality assured',
    description: 'Every batch meets strict quality standards. Dealers and customers get consistent, premium-grade rice.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    ),
  },
  {
    title: 'On-time delivery',
    description: 'Reliable supply and delivery across the island. We value your business and your schedule.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    ),
  },
  {
    title: 'Fair pricing',
    description: 'Competitive rates for wholesalers and retailers. Build your margin with a trusted supplier.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    ),
  },
  {
    title: 'Export ready',
    description: 'Documentation, packaging, and logistics for international buyers. Ready when you are.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0h.5a2.5 2.5 0 002.5-2.5V3.935" />
    ),
  },
  {
    title: 'Trusted by many',
    description: 'Retailers, wholesalers, and households choose Circle for quality and service they can rely on.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    ),
  },
  {
    title: 'Health & safety',
    description: 'Clean milling, proper storage, and handling. Safe for your family and your customers.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    ),
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose" className="section-padding bg-white">
      <div className="container-wide">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-display text-circle-gold text-sm md:text-base tracking-[0.2em] uppercase font-medium">
            Why choose us
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-circle-forest mt-2 mb-4 leading-tight">
            Trusted by dealers & customers
          </h2>
          <p className="text-circle-stone/90 text-lg">
            We combine quality, reliability, and fair dealing so your business—and your table—gets the best.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {reasons.map((reason) => (
            <article
              key={reason.title}
              className="group rounded-xl p-6 md:p-8 border border-circle-wheat/50 bg-circle-cream/50 hover:bg-white hover:shadow-circle hover:border-circle-gold/20 transition-all duration-300 hover:-translate-y-0.5"
            >
              <div className="w-12 h-12 rounded-xl bg-circle-gold/10 flex items-center justify-center mb-4 group-hover:bg-circle-gold/20 transition-colors">
                <svg className="w-6 h-6 text-circle-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {reason.icon}
                </svg>
              </div>
              <h3 className="font-display text-xl font-semibold text-circle-forest mb-2">
                {reason.title}
              </h3>
              <p className="text-circle-stone/90 text-sm leading-relaxed">
                {reason.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
