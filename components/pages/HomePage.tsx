import React from 'react';
import { Navbar } from '../layout/Navbar';
import { Footer } from '../layout/Footer';
import { HeroSection } from '../sections/HeroSection';
import { ProblemSection } from '../sections/ProblemSection';
import { SolutionsSection } from '../sections/SolutionsSection';
import { StatisticsSection } from '../sections/StatisticsSection';
import { CustomerCasesSection } from '../sections/CustomerCasesSection';
import { TestimonialsSection } from '../sections/TestimonialsSection';
import { WhyUsSection } from '../sections/WhyUsSection';
import { CertificationsSection } from '../sections/CertificationsSection';
import { CEOStorySection } from '../sections/CEOStorySection';
import { ServicePackagesSection } from '../sections/ServicePackagesSection';
import { ProcessSection } from '../sections/ProcessSection';
import { FAQSection } from '../sections/FAQSection';
import { FinalCTASection } from '../sections/FinalCTASection';

export function HomePage() {
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
}
