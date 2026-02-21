const benefits = [
  {
    title: 'Free from Cholesterol',
    description: 'One of the many reasons the majority of the world finds rice a comforting, heart-friendly staple for balanced diets.',
  },
  {
    title: 'Instant Source of Energy',
    description: 'The grains of rice are rich in one of the most fundamental nutrients—carbohydrate—for quick and sustained energy.',
  },
  {
    title: 'Rich in Vitamins & Minerals',
    description: 'Rice is abundantly gifted with vitamins and minerals; these are especially found in brown and red varieties.',
  },
  {
    title: 'Dietary Fibre & Wellness',
    description: 'Unpolished and wholegrain rice support digestion and can act as a protective shield as part of a fibre-rich diet.',
  },
];

export default function HealthBenefits() {
  return (
    <section id="health" className="section-padding bg-circle-cream">
      <div className="container-wide">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-display text-circle-gold text-sm md:text-base tracking-[0.2em] uppercase font-medium">
            Why Rice
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-circle-forest mt-2 mb-4 leading-tight">
            Health Benefits of Rice
          </h2>
          <p className="text-circle-stone/90 text-lg">
            &ldquo;Health is wealth,&rdquo; and quality rice is a simple, wholesome way to nourish your family and customers.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {benefits.map((benefit) => (
            <article
              key={benefit.title}
              className="group bg-white rounded-xl p-6 md:p-8 text-center shadow-sm border border-circle-wheat/50 hover:shadow-circle hover:border-circle-gold/20 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-full bg-circle-gold/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-circle-gold/20 transition-colors">
                <span className="text-2xl text-circle-gold">◇</span>
              </div>
              <h3 className="font-display text-xl font-semibold text-circle-forest mb-2">
                {benefit.title}
              </h3>
              <p className="text-circle-stone/90 text-sm leading-relaxed">
                {benefit.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
