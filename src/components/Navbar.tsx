'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/products', label: 'Products' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isHome = pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const useTransparentNav = isHome && !scrolled;

  return (
    <div
      className={`transition-all duration-300 ${
        useTransparentNav ? 'bg-transparent py-4' : 'bg-white/98 shadow-circle py-2'
      }`}
    >
      <nav className="container-wide px-6 md:px-12 lg:px-20 flex items-center justify-between">
        <Link
          href="/"
          className={`font-display text-2xl md:text-3xl font-semibold transition-colors ${
            useTransparentNav ? 'text-white' : 'text-circle-forest'
          }`}
        >
          Circle Rice
        </Link>
        <ul className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`font-medium transition-colors ${
                  useTransparentNav
                    ? 'text-white/95 hover:text-circle-wheat'
                    : 'text-circle-stone hover:text-circle-gold'
                } ${pathname === link.href ? 'font-semibold text-circle-gold' : ''}`}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/contact"
              className={`inline-block px-5 py-2.5 rounded-lg font-semibold transition-all ${
                useTransparentNav
                  ? 'bg-white/20 text-white hover:bg-white/30 border border-white/40'
                  : 'bg-circle-gold text-white hover:bg-amber-600'
              }`}
            >
              Get in Touch
            </Link>
          </li>
        </ul>
        <button
          type="button"
          aria-label="Toggle menu"
          className={`lg:hidden p-2 rounded-md ${useTransparentNav ? 'text-white' : 'text-circle-stone'}`}
          onClick={() => setOpen(!open)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>
      {open && (
        <div className="lg:hidden border-t border-circle-wheat/30 bg-white shadow-circle px-6 py-4">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`block py-3 font-medium border-b border-circle-cream last:border-0 ${
                    pathname === link.href ? 'text-circle-gold' : 'text-circle-stone hover:text-circle-gold'
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/contact"
                className="block py-3 text-circle-gold font-semibold"
                onClick={() => setOpen(false)}
              >
                Get in Touch
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
