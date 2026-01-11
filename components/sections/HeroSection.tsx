import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { heroContent } from '../../constants/content';
import { Button } from '../ui/Button';

export function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #F5E6D3 0%, #FFFFFF 50%, #F5E6D3 100%)',
      }}
    >
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=1920&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#2C3E50] mb-6"
        >
          {heroContent.headline}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl sm:text-2xl text-[#7F8C8D] mb-10"
        >
          {heroContent.subheadline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col items-center gap-3 mb-12"
        >
          {heroContent.trustIndicators.map((indicator, index) => (
            <div
              key={index}
              className="flex items-center gap-2 text-[#2C3E50]"
            >
              <Check className="w-5 h-5 text-[#27AE60]" />
              <span className="text-lg">{indicator}</span>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            size="large"
            onClick={() => scrollToSection('contact')}
          >
            {heroContent.primaryCta}
          </Button>
          <Button
            variant="secondary"
            size="large"
            onClick={() => scrollToSection('solutions')}
          >
            {heroContent.secondaryCta}
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 border-2 border-[#7F8C8D] rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-[#7F8C8D] rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
