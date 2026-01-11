import React from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './components/sections/HeroSection';
import { ProblemSection } from './components/sections/ProblemSection';
import { SolutionsSection } from './components/sections/SolutionsSection';
import { StatisticsSection } from './components/sections/StatisticsSection';
import { CustomerCasesSection } from './components/sections/CustomerCasesSection';
import { TestimonialsSection } from './components/sections/TestimonialsSection';
import { WhyUsSection } from './components/sections/WhyUsSection';
import { CertificationsSection } from './components/sections/CertificationsSection';
import { CEOStorySection } from './components/sections/CEOStorySection';
import { ServicePackagesSection } from './components/sections/ServicePackagesSection';
import { ProcessSection } from './components/sections/ProcessSection';
import { FAQSection } from './components/sections/FAQSection';
import { FinalCTASection } from './components/sections/FinalCTASection';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionsSection />
        <StatisticsSection />
        <CustomerCasesSection />
        <TestimonialsSection />
        <WhyUsSection />
        <CertificationsSection />
        <CEOStorySection />
        <ServicePackagesSection />
        <ProcessSection />
        <FAQSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
