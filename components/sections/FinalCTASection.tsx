import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Check, Clock, Shield, Headphones } from 'lucide-react';
import { finalCtaContent } from '../../constants/content';
import { Button } from '../ui/Button';

export function FinalCTASection() {
  return (
    <section
      id="contact"
      className="py-24 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #87CEEB 0%, #5BB5D8 100%)',
      }}
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            {finalCtaContent.headline}
          </h2>
          <p className="text-xl text-white/90 mb-8">
            {finalCtaContent.subheadline}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
        >
          <Button
            variant="secondary"
            size="large"
            className="bg-white text-[#87CEEB] border-white hover:bg-gray-100"
          >
            {finalCtaContent.primaryCta}
          </Button>
          <a
            href="tel:02-XXXX-XXXX"
            className="inline-flex items-center gap-2 bg-transparent text-white border-2 border-white px-8 py-4 rounded-lg font-medium hover:bg-white/10 transition-colors"
          >
            <Phone className="w-5 h-5" />
            {finalCtaContent.secondaryCta}
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
        >
          <span className="bg-orange-400 text-white px-4 py-2 rounded-full text-sm font-medium">
            {finalCtaContent.urgencyBadge}
          </span>
          <span className="bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium">
            {finalCtaContent.limitedOffer}
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-6 text-white"
        >
          {finalCtaContent.trustIndicators.map((indicator, index) => {
            const icons = [Clock, Shield, Headphones];
            const Icon = icons[index];
            return (
              <div key={index} className="flex items-center gap-2">
                <Icon className="w-5 h-5" />
                <span>{indicator}</span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
