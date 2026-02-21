export default function StatsStrip() {
  const stats = [
    { value: 'Premium', label: 'Quality Grade' },
    { value: 'Island Wide', label: 'Local Distribution' },
    { value: 'Export Ready', label: 'Global Reach' },
  ];

  return (
    <section className="relative py-12 md:py-16 bg-circle-gold text-white">
      <div className="container-wide px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-center">
          {stats.map((stat) => (
            <div key={stat.label} className="border-b border-white/20 md:border-b-0 md:border-r border-white/20 last:border-0 pb-6 md:pb-0 md:pr-12 last:pr-0">
              <p className="font-display text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight">
                {stat.value}
              </p>
              <p className="text-white/90 text-sm md:text-base mt-1 font-medium uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
