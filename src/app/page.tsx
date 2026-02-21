import Link from 'next/link';
import Hero from '@/components/Hero';
import StorySections from '@/components/StorySections';
import Excellence from '@/components/Excellence';
import AboutTeaser from '@/components/AboutTeaser';
import OurProcess from '@/components/OurProcess';
import ProductsPreview from '@/components/ProductsPreview';
import OurValues from '@/components/OurValues';
import ContactCTA from '@/components/ContactCTA';

export default function HomePage() {
  return (
    <>
      <Hero />
      <StorySections />
      <Excellence />
      <AboutTeaser />
      <OurProcess />
      <ProductsPreview />
      <OurValues />
      <ContactCTA />
    </>
  );
}
