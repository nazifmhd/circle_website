const points = [
  {
    title: 'Massive Production',
    description: 'Our production capacity places us among the leading suppliers, meeting local and export demand.',
  },
  {
    title: 'Advanced Milling & Sorting',
    description: 'Our facility ensures top quality with automated milling with automated milling and sorting for consistency.',
  },
  {
    title: 'Stringent Quality Control',
    description: 'Each grain is inspected to guarantee consistency, purity, and freshness.',
  },
  {
    title: 'Hygienic & Eco-Friendly',
    description: 'We follow strict food safety and sustainability standards in every step.',
  },
];

export default function OurProcess() {
  return (
    <section id="process" className="section-padding bg-circle-cream">
      <div className="container-wide">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="font-display text-circle-gold text-sm md:text-base tracking-[0.2em] uppercase font-medium">
            Precision in Every Grain
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-circle-forest mt-2 mb-4 leading-tight">
            Our State-of-the-Art Rice Processing
          </h2>
          <p className="text-circle-stone/90 text-lg">
            At Circle Rice, we operate with advanced technology to ensure the highest standards of quality, hygiene, and efficiency.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {points.map((point) => (
            <article
              key={point.title}
              className="bg-white rounded-xl p-6 md:p-8 border border-circle-wheat/50 hover:shadow-circle hover:border-circle-gold/20 transition-all duration-300 text-center"
            >
              <div className="w-14 h-14 rounded-xl bg-circle-gold/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-circle-gold">◇</span>
              </div>
              <h3 className="font-display text-lg font-semibold text-circle-forest mb-2">
                {point.title}
              </h3>
              <p className="text-circle-stone/90 text-sm leading-relaxed">
                {point.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
