const values = [
  { title: 'Purity & Quality', description: 'Commitment to high standards of authenticity and excellence in every grain.' },
  { title: 'Sustainability', description: 'Ethical sourcing, eco-friendly practices, and environmental responsibility.' },
  { title: 'Innovation', description: 'Leveraging technology to enhance efficiency and customer experience.' },
  { title: 'Trust & Transparency', description: 'Honesty, integrity, and reliability in all business interactions.' },
  { title: 'Community & Well-being', description: 'Supporting local communities and prioritizing health and wellness.' },
];

export default function OurValues() {
  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="font-display text-circle-gold text-sm md:text-base tracking-[0.2em] uppercase font-medium">
            What we stand for
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-circle-forest mt-2 mb-4 leading-tight">
            Our Values
          </h2>
          <p className="text-circle-stone/90 text-lg">
            We are committed to excellence, innovation, and sustainability in everything we do.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8">
          {values.map((value) => (
            <article
              key={value.title}
              className="rounded-xl border border-circle-wheat/50 p-6 hover:border-circle-gold/30 hover:bg-circle-cream/50 transition-all duration-300"
            >
              <h3 className="font-display text-lg font-semibold text-circle-forest mb-2">
                {value.title}
              </h3>
              <p className="text-circle-stone/90 text-sm leading-relaxed">
                {value.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
