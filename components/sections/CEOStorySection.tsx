import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { ceoStoryContent } from '../../constants/content';
import { SectionTitle } from '../ui/SectionTitle';

export function CEOStorySection() {
  return (
    <section id="ceo-story" className="py-24 bg-[#F5E6D3]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title={ceoStoryContent.title} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop"
                  alt="김은혜 대표"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-[#87CEEB] text-white px-6 py-3 rounded-full font-medium shadow-lg">
                {ceoStoryContent.ceoName}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Quote className="w-12 h-12 text-[#87CEEB]/30 mb-4" />

            <p className="text-xl md:text-2xl font-medium text-[#2C3E50] mb-6">
              "{ceoStoryContent.intro}"
            </p>

            <div className="text-[#7F8C8D] leading-relaxed whitespace-pre-line mb-8">
              {ceoStoryContent.story}
            </div>

            <div className="border-t border-[#2C3E50]/10 pt-6">
              <p className="font-bold text-[#2C3E50] text-lg mb-2">
                {ceoStoryContent.ceoName}
              </p>
              <div className="flex flex-wrap gap-2">
                {ceoStoryContent.credentials.map((credential, index) => (
                  <span
                    key={index}
                    className="bg-white px-3 py-1 rounded-full text-sm text-[#7F8C8D]"
                  >
                    {credential}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
