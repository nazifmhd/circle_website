import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Circle Rice | Premium Rice Mill & Global Export',
  description:
    'Circle Rice produces premium-grade rice with world-class milling. Trusted locally, exported globally. Quality rice for your table and your business.',
  keywords: 'rice mill, rice export, premium rice, Sri Lanka rice, wholesale rice',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="font-sans">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Source+Sans+3:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased text-circle-stone bg-circle-cream">
        <header className="fixed top-0 left-0 right-0 z-50 w-full">
          <Navbar />
        </header>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
