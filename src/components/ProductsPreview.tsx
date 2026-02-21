import Link from 'next/link';

const products = [
  { name: 'Keeri Samba', description: 'Aromatic, premium short-grain rice ideal for daily meals and special occasions.' },
  { name: 'Samba Rice', description: 'Classic white samba with consistent texture and clean taste.' },
  { name: 'Nadu Rice', description: 'Medium-grain rice, versatile and widely preferred for curries and biryanis.' },
  { name: 'Red Nadu', description: 'Nutrient-rich red rice with a distinct flavour and natural goodness.' },
];

export default function ProductsPreview() {
  return (
    <section className="section-padding bg-circle-cream">
      <div className="container-wide">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="font-display text-circle-gold text-sm md:text-base tracking-[0.2em] uppercase font-medium">
            Finest Rice, Unmatched Quality
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-circle-forest mt-2 mb-4 leading-tight">
            Premium Rice for Every Home & Business
          </h2>
          <p className="text-circle-stone/90 text-lg">
            Experience export-quality rice, carefully processed for taste, nutrition, and purity.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {products.map((product) => (
            <article
              key={product.name}
              className="group bg-white rounded-xl p-6 shadow-sm border border-circle-wheat/50 hover:shadow-circle hover:border-circle-gold/20 transition-all duration-300"
            >
              <div className="aspect-[4/3] rounded-lg bg-gradient-to-br from-circle-cream to-circle-wheat/30 mb-4 flex items-center justify-center">
                <span className="font-display text-4xl text-circle-gold/40">◉</span>
              </div>
              <h3 className="font-display text-xl font-semibold text-circle-forest mb-2">{product.name}</h3>
              <p className="text-circle-stone/90 text-sm leading-relaxed">{product.description}</p>
            </article>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-8 py-4 bg-circle-forest text-white font-semibold rounded-md hover:bg-circle-stone transition-colors"
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
