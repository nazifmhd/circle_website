import Link from 'next/link';
import { CONTACT } from '@/lib/contact';

export default function Footer() {
  return (
    <footer className="bg-circle-stone text-circle-wheat">
      <div className="container-wide px-6 md:px-12 lg:px-20 py-14 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          <div className="lg:col-span-2">
            <Link href="/" className="font-display text-2xl md:text-3xl font-semibold text-white inline-block mb-3">
              Circle Rice
            </Link>
            <p className="text-circle-wheat/80 text-sm max-w-sm mb-2">
              Premium rice mill. Trusted locally, ready for export. Quality from field to table.
            </p>
            <p className="text-circle-gold/90 text-xs font-semibold uppercase tracking-wider">
              Quality · Trust · Partnership
            </p>
          </div>
          <div>
            <h4 className="font-display font-semibold text-white text-sm uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-2">
              <Link href="/" className="text-circle-wheat/85 hover:text-white text-sm font-medium transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-circle-wheat/85 hover:text-white text-sm font-medium transition-colors">
                About
              </Link>
              <Link href="/products" className="text-circle-wheat/85 hover:text-white text-sm font-medium transition-colors">
                Products
              </Link>
              <Link href="/contact" className="text-circle-wheat/85 hover:text-white text-sm font-medium transition-colors">
                Contact
              </Link>
            </nav>
          </div>
          <div>
            <h4 className="font-display font-semibold text-white text-sm uppercase tracking-wider mb-4">
              Contact
            </h4>
            <p className="text-circle-wheat/85 text-sm leading-relaxed">
              {CONTACT.address}<br />
              Hotline: {CONTACT.phoneDisplay[0]}<br />
              {CONTACT.phoneDisplay[1]}<br />
              email: {CONTACT.email[0]}
            </p>
            <a
              href={CONTACT.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 text-circle-gold hover:text-circle-wheat text-sm font-medium"
            >
              Find us on Google Maps →
            </a>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-circle-wheat/70 text-sm">
            © {new Date().getFullYear()} Circle Rice. All rights reserved.
          </p>
          <p className="text-circle-wheat/60 text-xs">
            Premium Rice Mill · Local & Export
          </p>
        </div>
      </div>
    </footer>
  );
}
