import React from 'react';
import { motion } from 'framer-motion';
import { packages, packagesContent } from '../../constants/content';
import { SectionTitle } from '../ui/SectionTitle';
import { PricingCard } from '../ui/PricingCard';

export function ServicePackagesSection() {
  return (
    <section id="packages" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title={packagesContent.title} />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <PricingCard
                name={pkg.name}
                price={pkg.price}
                features={pkg.features}
                isRecommended={pkg.isRecommended}
                ctaText={packagesContent.ctaText}
              />
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-[#7F8C8D]"
        >
          {packagesContent.footer}
        </motion.p>
      </div>
    </section>
  );
}
