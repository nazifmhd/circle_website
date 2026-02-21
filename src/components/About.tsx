import Link from 'next/link';

const highlights = [
  { text: 'Premium raw material selection' },
  { text: 'World-class milling technology' },
  { text: 'Rigorous quality assurance' },
  { text: 'Ready for local & export markets' },
];

export default function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <div>
            <span className="font-display text-circle-gold text-sm md:text-base tracking-[0.2em] uppercase font-medium">
              About Us
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-circle-forest mt-2 mb-6 leading-tight">
              Welcome to Circle Rice
            </h2>
            <p className="text-circle-stone/90 text-lg leading-relaxed mb-4">
              We are a modern rice mill built on tradition and technology. We accept only the best raw rice and use the latest technology in the world for the milling process.
            </p>
            <p className="text-circle-stone/90 text-lg leading-relaxed mb-8">
              From our facility to your table, we maintain strict quality control at every step. Our commitment to excellence has made us a trusted name for local distribution—and we are expanding to serve international markets through reliable export partnerships.
            </p>
            <ul className="space-y-3 mb-8">
              {highlights.map((item) => (
                <li key={item.text} className="flex items-center gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-circle-gold/15 flex items-center justify-center">
                    <span className="w-2 h-2 rounded-full bg-circle-gold" />
                  </span>
                  <span className="text-circle-stone font-medium">{item.text}</span>
                </li>
              ))}
            </ul>
            <Link
              href="#products"
              className="inline-flex items-center gap-2 text-circle-gold font-semibold hover:gap-3 transition-all"
            >
              View our products
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
            <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-xl bg-circle-gold/10 border border-circle-gold/20 hidden lg:block" aria-hidden />
          </div>
        </div>
      </div>
    </section>
  );
}
