import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import StatsStrip from '@/components/StatsStrip';
import About from '@/components/About';
import Products from '@/components/Products';
import Distribution from '@/components/Distribution';
import Export from '@/components/Export';
import HealthBenefits from '@/components/HealthBenefits';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StatsStrip />
        <About />
        <Products />
        <Distribution />
        <Export />
        <HealthBenefits />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
