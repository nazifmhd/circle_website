import Link from 'next/link';

const products = [
  { name: 'Keeri Samba', description: 'Aromatic, premium short-grain rice ideal for daily meals and special occasions.' },
  { name: 'Samba Rice', description: 'Classic white samba with consistent texture and clean taste.' },
  { name: 'Nadu Rice', description: 'Medium-grain rice, versatile and widely preferred for curries and biryanis.' },
  { name: 'Red Nadu', description: 'Nutrient-rich red rice with a distinct flavour and natural goodness.' },
  { name: 'White Raw Rice', description: 'Unpolished white raw rice for health-conscious consumers.' },
  { name: 'Samba Raw Rice', description: 'Unpolished samba retaining more fibre and nutrients.' },
  { name: 'Red Raw Rice', description: 'Unpolished red rice, wholesome and full of natural benefits.' },
];

export default function Products() {
  return (
    <section id="products" className="section-padding bg-circle-cream">
      <div className="container-wide">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-display text-circle-gold text-sm md:text-base tracking-[0.2em] uppercase font-medium">
            Our Range
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-circle-forest mt-2 mb-4 leading-tight">
            Products of Circle
          </h2>
          <p className="text-circle-stone/90 text-lg">
            A large range of premium-grade rice. From aromatic samba to nutritious red and raw varieties—each meets our high standards for quality and taste.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((product) => (
            <article
              key={product.name}
              className="group bg-white rounded-xl p-6 md:p-8 shadow-sm border border-circle-wheat/50 hover:shadow-circle hover:border-circle-gold/20 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="aspect-[4/3] rounded-lg bg-gradient-to-br from-circle-cream to-circle-wheat/30 mb-5 flex items-center justify-center group-hover:from-circle-gold/5 group-hover:to-circle-gold/10 transition-colors">
                <span className="font-display text-4xl text-circle-gold/40 group-hover:text-circle-gold/60 transition-colors">◉</span>
              </div>
              <h3 className="font-display text-xl md:text-2xl font-semibold text-circle-forest mb-2">
                {product.name}
              </h3>
              <p className="text-circle-stone/90 leading-relaxed text-sm md:text-base">
                {product.description}
              </p>
            </article>
          ))}
        </div>
        <div className="text-center mt-12">
          <p className="text-circle-stone/80 mb-4">
            Custom grades and bulk packaging available for wholesale and export.
          </p>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-circle-forest text-white font-semibold rounded-md hover:bg-circle-stone transition-colors"
          >
            More Products & Enquiries
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
