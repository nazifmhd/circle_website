import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About | Circle Rice',
  description: 'From paddy fields to your table. Learn about Circle Rice, our farmers, and our commitment to quality and community.',
};

export default function AboutPage() {
  return (
    <div className="pt-24 md:pt-28">
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            <div>
              <span className="font-display text-circle-gold text-sm md:text-base tracking-[0.2em] uppercase font-medium">
                Welcome to Circle Rice
              </span>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-circle-forest mt-2 mb-6 leading-tight">
                From Paddy Fields to Your Table
              </h1>
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
                href="/products"
                className="inline-flex items-center gap-2 px-6 py-3 bg-circle-forest text-white font-semibold rounded-md hover:bg-circle-stone transition-colors"
              >
                Our Products
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-circle-lg bg-gradient-to-br from-circle-forest/10 to-circle-earth/20 flex items-center justify-center">
              <div className="text-center p-8">
                <span className="font-display text-5xl text-circle-gold/40">◉</span>
                <p className="font-display text-circle-forest text-2xl mt-2">Circle Rice</p>
                <p className="text-circle-stone/60 text-sm mt-1">Add your mill or field image here</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-circle-cream">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <span className="font-display text-circle-gold text-sm md:text-base tracking-[0.2em] uppercase font-medium">
              Our commitment
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-circle-forest mt-2 mb-6">
              Strengthening Communities, Empowering Lives
            </h2>
            <p className="text-circle-stone/90 text-lg leading-relaxed mb-4">
              Our success is deeply rooted in the dedication of farmers and factory workers who bring our premium rice to the world. We empower farmers with fair prices and modern techniques, and we ensure a safe, respectful work environment for our team. From the paddy fields to our processing plants, we are committed to creating a sustainable and prosperous future for all.
            </p>
            <Link href="/contact" className="text-circle-gold font-semibold hover:underline">
              Get in touch →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
