import Link from 'next/link';

const cards = [
  {
    title: 'Pure & Premium Quality',
    subtitle: 'Harvested with Care, Delivered with Trust',
    description: 'Our rice is cultivated in fertile fields, nurtured by pristine waters and traditional farming methods. Every grain reflects our commitment to purity, ensuring you get the finest quality with every meal.',
  },
  {
    title: 'Unmatched Taste & Aroma',
    subtitle: 'Elevate Your Culinary Experience',
    description: 'From the moment it cooks, our rice releases a rich, natural aroma that enhances any dish. Its soft texture and delicious taste make it the perfect choice for every kitchen, bringing families together around wholesome meals.',
  },
  {
    title: 'Nutrition & Wellness',
    subtitle: 'A Healthy Choice for Every Home',
    description: 'Packed with essential nutrients, our rice is not only delicious but also a source of wholesome energy. Whether for daily meals or special occasions, it supports a balanced diet and a healthier lifestyle for you and your loved ones.',
  },
];

export default function Excellence() {
  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="font-display text-circle-gold text-sm md:text-base tracking-[0.2em] uppercase font-medium">
            The Excellence of Our Rice
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-circle-forest mt-2 mb-4 leading-tight">
            Pure & Premium Quality
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {cards.map((card) => (
            <article
              key={card.title}
              className="rounded-xl border border-circle-wheat/50 bg-circle-cream/50 p-6 md:p-8 hover:shadow-circle hover:border-circle-gold/20 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-circle-gold/10 flex items-center justify-center mb-4">
                <span className="font-display text-2xl text-circle-gold">◉</span>
              </div>
              <h3 className="font-display text-xl md:text-2xl font-semibold text-circle-forest mb-1">
                {card.title}
              </h3>
              <p className="text-circle-gold font-medium text-sm mb-3">{card.subtitle}</p>
              <p className="text-circle-stone/90 text-sm leading-relaxed">
                {card.description}
              </p>
            </article>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-circle-gold font-semibold hover:gap-3 transition-all"
          >
            Explore our full range of products
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
