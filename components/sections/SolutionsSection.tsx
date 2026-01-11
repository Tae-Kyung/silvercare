import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { solutionsContent } from '../../constants/content';
import { serviceDetails } from '../../constants/serviceDetails';
import { SectionTitle } from '../ui/SectionTitle';

export function SolutionsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="solutions" className="py-24 bg-[#87CEEB]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title={solutionsContent.title}
          subtitle={solutionsContent.subtitle}
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {serviceDetails.map((service, index) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              whileHover={{ y: -4, boxShadow: '0 4px 16px rgba(0,0,0,0.12)' }}
              className={`bg-white rounded-xl p-6 border border-gray-100 shadow-sm cursor-pointer group ${
                index === serviceDetails.length - 1 && serviceDetails.length % 2 !== 0
                  ? 'md:col-span-2 md:w-1/2 md:mx-auto'
                  : ''
              }`}
            >
              <Link to={`/services/${service.slug}`} className="block">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">{service.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-[#2C3E50] mb-2">
                      {service.title}
                    </h3>
                    <p className="text-[#7F8C8D] mb-3">{service.subtitle}</p>
                    <span className="flex items-center gap-1 text-[#87CEEB] font-medium group-hover:gap-2 transition-all">
                      <span>자세히 보기</span>
                      <ChevronRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
