import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star } from 'lucide-react';
import { Button } from './Button';

interface PricingCardProps {
  name: string;
  price: string;
  features: string[];
  isRecommended?: boolean;
  onSelect?: () => void;
  ctaText?: string;
}

export function PricingCard({
  name,
  price,
  features,
  isRecommended = false,
  onSelect,
  ctaText = '선택하기',
}: PricingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8 }}
      className={`relative bg-white rounded-2xl p-8 ${
        isRecommended
          ? 'border-2 border-[#87CEEB] shadow-lg scale-105'
          : 'border border-gray-200 shadow-sm'
      }`}
    >
      {isRecommended && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#87CEEB] text-white px-4 py-1 rounded-full text-sm font-medium flex items-center gap-1">
          <Star className="w-4 h-4" fill="white" />
          추천
        </div>
      )}

      <div className="text-center mb-6">
        <h3 className="text-xl font-bold text-[#2C3E50] mb-2">{name}</h3>
        <div className="text-3xl font-bold text-[#87CEEB]">{price}</div>
      </div>

      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2">
            <Check className="w-5 h-5 text-[#27AE60] flex-shrink-0 mt-0.5" />
            <span className="text-[#7F8C8D]">{feature}</span>
          </li>
        ))}
      </ul>

      <Button
        variant={isRecommended ? 'primary' : 'secondary'}
        size="large"
        onClick={onSelect}
        className="w-full"
      >
        {ctaText}
      </Button>
    </motion.div>
  );
}
