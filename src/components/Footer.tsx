import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-circle-stone text-circle-wheat">
      <div className="container-wide px-6 md:px-12 lg:px-20 py-14 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          <div className="lg:col-span-2">
            <Link href="#home" className="font-display text-2xl md:text-3xl font-semibold text-white inline-block mb-3">
              Circle Rice
            </Link>
            <p className="text-circle-wheat/80 text-sm max-w-sm">
              Premium rice mill. Trusted locally, ready for export. Quality from field to table.
            </p>
          </div>
          <div>
            <h4 className="font-display font-semibold text-white text-sm uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-2">
              <Link href="#about" className="text-circle-wheat/85 hover:text-white text-sm font-medium transition-colors">
                About Us
              </Link>
              <Link href="#products" className="text-circle-wheat/85 hover:text-white text-sm font-medium transition-colors">
                Products
              </Link>
              <Link href="#distribution" className="text-circle-wheat/85 hover:text-white text-sm font-medium transition-colors">
                Distribution
              </Link>
              <Link href="#export" className="text-circle-wheat/85 hover:text-white text-sm font-medium transition-colors">
                Export
              </Link>
              <Link href="#health" className="text-circle-wheat/85 hover:text-white text-sm font-medium transition-colors">
                Health Benefits
              </Link>
              <Link href="#contact" className="text-circle-wheat/85 hover:text-white text-sm font-medium transition-colors">
                Contact Us
              </Link>
            </nav>
          </div>
          <div>
            <h4 className="font-display font-semibold text-white text-sm uppercase tracking-wider mb-4">
              Contact
            </h4>
            <p className="text-circle-wheat/85 text-sm leading-relaxed">
              Circle Rice Mill<br />
              [Your address]<br />
              Tel: (+94) XXX - XXXXXXX<br />
              info@circlerice.com
            </p>
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
