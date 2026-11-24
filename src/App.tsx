import { useState } from 'react';
import { PACKAGE_SELECT_OPTIONS } from './data/agencyData';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { StrategySection } from './components/StrategySection';
import { WorkGallerySection } from './components/WorkGallerySection';
import { ClientsSection } from './components/ClientsSection';
import { PackagesSection } from './components/PackagesSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsAppButton } from './components/FloatingWhatsAppButton';

export default function App() {
  const [selectedPackage, setSelectedPackage] = useState<string>(
    PACKAGE_SELECT_OPTIONS[1] ?? PACKAGE_SELECT_OPTIONS[0],
  );

  function handleSelectPackage(packageOptionValue: string) {
    setSelectedPackage(packageOptionValue);
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  return (
    <div className="min-h-screen bg-[#0E1116] text-[#F8F7F4]">
      <Navbar />
      <main>
        <HeroSection />
        <StrategySection />
        <WorkGallerySection />
        <ClientsSection />
        <PackagesSection onSelectPackage={handleSelectPackage} />
        <ContactSection
          selectedPackage={selectedPackage}
          onSelectedPackageChange={setSelectedPackage}
        />
      </main>
      <Footer />
      <FloatingWhatsAppButton />
    </div>
  );
}
