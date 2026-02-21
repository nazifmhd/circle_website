const stats = [
  { value: 'Premium', label: 'Quality grade', sub: 'Consistent every batch' },
  { value: 'Island wide', label: 'Local distribution', sub: 'Retailers & wholesalers' },
  { value: 'Export ready', label: 'Global reach', sub: 'Ready for international buyers' },
];

export default function StatsStrip() {
  return (
    <section className="relative py-14 md:py-18 bg-circle-gold text-white">
      <div className="container-wide px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 text-center">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="border-b border-white/20 md:border-b-0 md:border-r border-white/20 last:border-0 pb-8 md:pb-0 md:pr-12 last:pr-0 md:last:pr-0"
            >
              <p className="font-display text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight">
                {stat.value}
              </p>
              <p className="text-white/95 text-sm md:text-base mt-1 font-semibold uppercase tracking-wider">
                {stat.label}
              </p>
              <p className="text-white/80 text-xs md:text-sm mt-1">{stat.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
