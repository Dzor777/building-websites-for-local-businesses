import { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { QuoteCalculator } from './components/QuoteCalculator';
import { Testimonials } from './components/Testimonials';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { injectSEOHead } from './lib/seo';
import type { ServiceItem } from './config/site';

export function App() {

  const [selectedServiceId, setSelectedServiceId] = useState<string | undefined>(undefined);

  useEffect(() => {

    // Inject dynamic LocalBusiness schema & update SEO meta title for active client
    injectSEOHead();
  }, []);


  const handleOpenQuoteModal = (service?: ServiceItem) => {
    if (service) {
      setSelectedServiceId(service.id);
    }
    const calcElement = document.getElementById('calculator');
    if (calcElement) {
      calcElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-sky-500 selection:text-white">
      {/* Top Navbar */}
      <Navbar onOpenQuoteModal={() => handleOpenQuoteModal()} />

      {/* Main Content Sections */}
      <main>
        <Hero onOpenQuoteModal={() => handleOpenQuoteModal()} />
        <Services onSelectService={(service) => handleOpenQuoteModal(service)} />
        <QuoteCalculator initialServiceId={selectedServiceId} />
        <Testimonials />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
