import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { statistics, statisticsSubItems, statisticsContent } from '../../constants/content';
import { SectionTitle } from '../ui/SectionTitle';
import { Counter } from '../ui/Counter';

export function StatisticsSection() {
  return (
    <section id="statistics" className="py-24 bg-[#F5E6D3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title={statisticsContent.title} />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {statistics.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Counter
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                isDecimal={stat.isDecimal}
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-6 text-[#7F8C8D]"
        >
          {statisticsSubItems.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <Check className="w-5 h-5 text-[#27AE60]" />
              <span>{item}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
