import type { Metadata } from 'next';
import { CONTACT } from '@/lib/contact';

export const metadata: Metadata = {
  title: 'Contact | Circle Rice',
  description: 'Contact Circle Rice for local orders, export enquiries, or partnership opportunities.',
};

export default function ContactPage() {
  return (
    <div className="pt-24 md:pt-28">
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <span className="font-display text-circle-gold text-sm md:text-base tracking-[0.2em] uppercase font-medium">
              Get in Touch
            </span>
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-circle-forest mt-2 mb-4 leading-tight">
              Contact Circle Rice
            </h1>
            <p className="text-circle-stone/90 text-lg">
              For local orders, export enquiries, or partnership opportunities—we&apos;d love to hear from you. Dealers and customers: we respond quickly and work with you professionally.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto mb-14">
            <div className="bg-circle-cream rounded-xl p-6 md:p-8 text-center border border-circle-wheat/50 hover:shadow-circle hover:border-circle-gold/20 transition-all duration-300">
              <div className="w-14 h-14 rounded-full bg-circle-gold/10 flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-circle-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h2 className="font-display text-lg font-semibold text-circle-forest mb-2">Address</h2>
              <p className="text-circle-stone/90 text-sm leading-relaxed">
                {CONTACT.address}
              </p>
            </div>
            <div className="bg-circle-cream rounded-xl p-6 md:p-8 text-center border border-circle-wheat/50 hover:shadow-circle hover:border-circle-gold/20 transition-all duration-300">
              <div className="w-14 h-14 rounded-full bg-circle-gold/10 flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-circle-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h2 className="font-display text-lg font-semibold text-circle-forest mb-2">Telephone / Hotline</h2>
              <p className="text-circle-stone/90 text-sm leading-relaxed">
                <a href={`tel:${CONTACT.phone[0]}`} className="hover:text-circle-gold transition-colors">{CONTACT.phoneDisplay[0]}</a>
                <br />
                <a href={`tel:${CONTACT.phone[1]}`} className="hover:text-circle-gold transition-colors">{CONTACT.phoneDisplay[1]}</a>
              </p>
            </div>
            <div className="bg-circle-cream rounded-xl p-6 md:p-8 text-center border border-circle-wheat/50 hover:shadow-circle hover:border-circle-gold/20 transition-all duration-300">
              <div className="w-14 h-14 rounded-full bg-circle-gold/10 flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-circle-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h2 className="font-display text-lg font-semibold text-circle-forest mb-2">Email</h2>
              <p className="text-circle-stone/90 text-sm leading-relaxed">
                <a href={`mailto:${CONTACT.email[0]}`} className="hover:text-circle-gold transition-colors">{CONTACT.email[0]}</a>
                <br />
                <a href={`mailto:${CONTACT.email[1]}`} className="hover:text-circle-gold transition-colors">{CONTACT.email[1]}</a>
              </p>
            </div>
          </div>

          <div className="max-w-5xl mx-auto">
            <h2 className="font-display text-xl font-semibold text-circle-forest mb-4 text-center">
              Find us on the map
            </h2>
            <div className="rounded-xl overflow-hidden border border-circle-wheat/50 shadow-circle bg-circle-cream">
              <div className="aspect-[16/9] min-h-[320px] w-full">
                <iframe
                  title="Circle Rice Mill location"
                  src={
                    CONTACT.mapEmbedUrl
                      ? CONTACT.mapEmbedUrl
                      : `https://www.google.com/maps?q=${encodeURIComponent(CONTACT.address)}&output=embed`
                  }
                  className="w-full h-full min-h-[320px] border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
            <p className="text-center mt-4">
              <a
                href={CONTACT.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-circle-forest font-semibold hover:text-circle-gold transition-colors"
              >
                Open exact location in Google Maps
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
