import Link from 'next/link';

export default function AboutTeaser() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <div>
            <span className="font-display text-circle-gold text-sm md:text-base tracking-[0.2em] uppercase font-medium">
              Welcome to Circle Rice
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-circle-forest mt-2 mb-6 leading-tight">
              From Paddy Fields to Your Table
            </h2>
            <p className="text-circle-stone/90 text-lg leading-relaxed mb-6">
              Circle Rice has been a trusted name in Sri Lanka&apos;s rice industry. We work hand in hand with local farmers and our distribution network ensures premium-quality rice reaches every corner of the island. We are expanding into international markets, delivering the authentic taste of Sri Lankan rice to the world.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-6 py-3 bg-circle-forest text-white font-semibold rounded-md hover:bg-circle-stone transition-colors"
            >
              Read more about us
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
          <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-circle-lg bg-gradient-to-br from-circle-forest/10 to-circle-earth/20 flex items-center justify-center">
            <div className="text-center p-8">
              <span className="font-display text-5xl text-circle-gold/40">◉</span>
              <p className="font-display text-circle-forest text-xl mt-2">Circle Rice</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
