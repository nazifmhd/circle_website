import Link from 'next/link';

export default function About() {
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
            <p className="text-circle-stone/90 text-lg leading-relaxed mb-4">
              Circle Rice has been a trusted name in Sri Lanka&apos;s rice industry. Our commitment extends beyond production—we work hand in hand with local farmers, supporting them with resources, technology, and fair trade practices.
            </p>
            <p className="text-circle-stone/90 text-lg leading-relaxed mb-4">
              Our distribution network ensures that premium-quality rice reaches every corner of the island, making us a top choice for dealers and households. Beyond borders, we are expanding into international markets, delivering the authentic taste of Sri Lankan rice to the world.
            </p>
            <p className="text-circle-stone/90 text-lg leading-relaxed mb-8">
              At Circle Rice, we take pride in preserving tradition while embracing innovation, ensuring that every grain carries the essence of quality and trust.
            </p>
            <Link
              href="#products"
              className="inline-flex items-center gap-2 px-6 py-3 bg-circle-forest text-white font-semibold rounded-md hover:bg-circle-stone transition-colors"
            >
              Our Products
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-circle-lg bg-gradient-to-br from-circle-forest/10 to-circle-earth/20">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-24 h-24 mx-auto rounded-full bg-circle-gold/10 flex items-center justify-center mb-4">
                    <span className="font-display text-4xl text-circle-gold">◉</span>
                  </div>
                  <p className="font-display text-circle-forest text-2xl">Circle Rice</p>
                  <p className="text-circle-stone/60 text-sm mt-1">Add your mill or field image here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
