import React from 'react';
import { motion } from 'framer-motion';
import { Award, Building2, Newspaper } from 'lucide-react';
import { certifications, certificationsContent } from '../../constants/content';
import { SectionTitle } from '../ui/SectionTitle';

export function CertificationsSection() {
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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="certifications" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title={certificationsContent.title} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-[#2C3E50] mb-6 flex items-center gap-2">
              <Award className="w-6 h-6 text-[#87CEEB]" />
              인증 및 수상
            </h3>
            <div className="space-y-4">
              {certifications.map((cert) => (
                <motion.div
                  key={cert.id}
                  variants={itemVariants}
                  className="bg-white rounded-lg p-4 border border-gray-200 flex items-center gap-4"
                >
                  <div className="w-12 h-12 bg-[#87CEEB]/10 rounded-lg flex items-center justify-center">
                    <Award className="w-6 h-6 text-[#87CEEB]" />
                  </div>
                  <div>
                    <p className="font-medium text-[#2C3E50]">{cert.name}</p>
                    {cert.year && (
                      <p className="text-sm text-[#7F8C8D]">{cert.year}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-[#2C3E50] mb-6 flex items-center gap-2">
              <Building2 className="w-6 h-6 text-[#87CEEB]" />
              협력기관
            </h3>
            <div className="space-y-4">
              <motion.div
                variants={itemVariants}
                className="bg-white rounded-lg p-4 border border-gray-200"
              >
                <p className="text-[#2C3E50]">
                  {certificationsContent.medicalPartners}
                </p>
              </motion.div>
              <motion.div
                variants={itemVariants}
                className="bg-white rounded-lg p-4 border border-gray-200"
              >
                <p className="text-[#2C3E50]">
                  {certificationsContent.welfarePartners}
                </p>
              </motion.div>
            </div>

            <h3 className="text-xl font-bold text-[#2C3E50] mt-8 mb-6 flex items-center gap-2">
              <Newspaper className="w-6 h-6 text-[#87CEEB]" />
              미디어
            </h3>
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-lg p-4 border border-gray-200"
            >
              <p className="text-[#2C3E50]">{certificationsContent.media}</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
