export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-wide">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="font-display text-circle-gold text-sm md:text-base tracking-[0.2em] uppercase font-medium">
            Get in Touch
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-circle-forest mt-2 mb-4 leading-tight">
            Contact Circle Rice
          </h2>
          <p className="text-circle-stone/90 text-lg">
            For local orders, export enquiries, or partnership opportunities—we&apos;d love to hear from you.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          <div className="bg-circle-cream rounded-xl p-6 md:p-8 text-center border border-circle-wheat/50 hover:shadow-circle hover:border-circle-gold/20 transition-all duration-300">
            <div className="w-14 h-14 rounded-full bg-circle-gold/10 flex items-center justify-center mx-auto mb-4">
              <svg className="w-7 h-7 text-circle-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="font-display text-lg font-semibold text-circle-forest mb-2">Address</h3>
            <p className="text-circle-stone/90 text-sm leading-relaxed">
              Circle Rice Mill<br />
              [Your address, city, country]
            </p>
          </div>
          <div className="bg-circle-cream rounded-xl p-6 md:p-8 text-center border border-circle-wheat/50 hover:shadow-circle hover:border-circle-gold/20 transition-all duration-300">
            <div className="w-14 h-14 rounded-full bg-circle-gold/10 flex items-center justify-center mx-auto mb-4">
              <svg className="w-7 h-7 text-circle-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 className="font-display text-lg font-semibold text-circle-forest mb-2">Telephone</h3>
            <p className="text-circle-stone/90 text-sm leading-relaxed">
              (+94) XXX - XXXXXXX<br />
              (+94) XXX - XXXXXXX
            </p>
          </div>
          <div className="bg-circle-cream rounded-xl p-6 md:p-8 text-center border border-circle-wheat/50 hover:shadow-circle hover:border-circle-gold/20 transition-all duration-300">
            <div className="w-14 h-14 rounded-full bg-circle-gold/10 flex items-center justify-center mx-auto mb-4">
              <svg className="w-7 h-7 text-circle-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="font-display text-lg font-semibold text-circle-forest mb-2">Email</h3>
            <p className="text-circle-stone/90 text-sm leading-relaxed">
              info@circlerice.com<br />
              export@circlerice.com
            </p>
          </div>
        </div>
        <p className="text-center mt-10 text-circle-stone/70 text-sm">
          Replace the placeholder address, phone numbers, and emails above with your actual contact details.
        </p>
      </div>
    </section>
  );
}
