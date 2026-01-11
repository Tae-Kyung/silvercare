import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { customerCases, customerCasesContent } from '../../constants/content';
import { SectionTitle } from '../ui/SectionTitle';

export function CustomerCasesSection() {
  const [openCase, setOpenCase] = useState<number | null>(1);

  return (
    <section id="cases" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title={customerCasesContent.title}
          subtitle={customerCasesContent.subtitle}
        />

        <div className="space-y-4">
          {customerCases.map((caseItem) => (
            <motion.div
              key={caseItem.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() =>
                  setOpenCase(openCase === caseItem.id ? null : caseItem.id)
                }
                className="w-full px-6 py-5 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#F5E6D3] flex items-center justify-center text-2xl">
                    👴
                  </div>
                  <div className="text-left">
                    <h3 className="font-bold text-[#2C3E50]">
                      {caseItem.age}세 {caseItem.name} 어르신
                    </h3>
                    <p className="text-sm text-[#7F8C8D]">{caseItem.type}</p>
                  </div>
                </div>
                <motion.div
                  animate={{ rotate: openCase === caseItem.id ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="w-5 h-5 text-[#7F8C8D]" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openCase === caseItem.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-[#E74C3C]/10 rounded-xl p-5">
                          <h4 className="font-bold text-[#E74C3C] mb-3 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-[#E74C3C]" />
                            Before
                          </h4>
                          <ul className="space-y-2">
                            {caseItem.before.map((item, idx) => (
                              <li
                                key={idx}
                                className="text-[#7F8C8D] flex items-start gap-2"
                              >
                                <span className="text-[#E74C3C]">•</span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="relative">
                          <div className="hidden md:block absolute -left-3 top-1/2 -translate-y-1/2 -translate-x-full">
                            <ArrowRight className="w-6 h-6 text-[#27AE60]" />
                          </div>
                          <div className="bg-[#27AE60]/10 rounded-xl p-5">
                            <h4 className="font-bold text-[#27AE60] mb-3 flex items-center gap-2">
                              <span className="w-2 h-2 rounded-full bg-[#27AE60]" />
                              After
                            </h4>
                            <ul className="space-y-2">
                              {caseItem.after.map((item, idx) => (
                                <li
                                  key={idx}
                                  className="text-[#7F8C8D] flex items-start gap-2"
                                >
                                  <span className="text-[#27AE60]">✓</span>
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
