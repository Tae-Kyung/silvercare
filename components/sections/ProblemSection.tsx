import React from 'react';
import { motion } from 'framer-motion';
import { problemContent } from '../../constants/content';
import { SectionTitle } from '../ui/SectionTitle';

export function ProblemSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="problem" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title={problemContent.title} />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          {problemContent.problems.map((problem, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-[#F5E6D3]/30 rounded-xl p-8 text-center"
            >
              <div className="text-5xl mb-4">{problem.emoji}</div>
              <p className="text-lg text-[#2C3E50] font-medium">
                "{problem.text}"
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center bg-[#2C3E50] text-white rounded-2xl p-8 md:p-12"
        >
          <p className="text-lg md:text-xl leading-relaxed whitespace-pre-line">
            {problemContent.emphasis}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
