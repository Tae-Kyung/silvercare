import React from 'react';
import { motion } from 'framer-motion';
import { processSteps, processContent } from '../../constants/content';
import { SectionTitle } from '../ui/SectionTitle';

export function ProcessSection() {
  return (
    <section id="process" className="py-24 bg-[#87CEEB]/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title={processContent.title} />

        <div className="relative">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-[#87CEEB]/30 -translate-x-1/2" />

          <div className="space-y-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex items-start gap-6 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div
                  className={`hidden md:block flex-1 ${
                    index % 2 === 0 ? 'text-right' : 'text-left'
                  }`}
                >
                  <div
                    className={`bg-white rounded-xl p-6 shadow-sm border border-gray-100 inline-block ${
                      index % 2 === 0 ? 'mr-8' : 'ml-8'
                    }`}
                  >
                    <h3 className="font-bold text-[#2C3E50] mb-2">
                      {step.title}
                    </h3>
                    <p className="text-[#7F8C8D] text-sm whitespace-pre-line">
                      {step.description}
                    </p>
                    {step.duration && (
                      <span className="inline-block mt-2 text-xs bg-[#87CEEB]/20 text-[#87CEEB] px-2 py-1 rounded-full">
                        {step.duration}
                      </span>
                    )}
                  </div>
                </div>

                <div className="relative z-10 flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-[#87CEEB] text-white flex items-center justify-center font-bold text-lg shadow-lg">
                    {step.id}
                  </div>
                </div>

                <div className="md:hidden flex-1">
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                    <h3 className="font-bold text-[#2C3E50] mb-2">
                      {step.title}
                    </h3>
                    <p className="text-[#7F8C8D] text-sm whitespace-pre-line">
                      {step.description}
                    </p>
                    {step.duration && (
                      <span className="inline-block mt-2 text-xs bg-[#87CEEB]/20 text-[#87CEEB] px-2 py-1 rounded-full">
                        {step.duration}
                      </span>
                    )}
                  </div>
                </div>

                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
