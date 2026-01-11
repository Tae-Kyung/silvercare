import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Check, ChevronRight } from 'lucide-react';
import { getServiceBySlug } from '../../constants/serviceDetails';
import { Button } from '../ui/Button';
import { Accordion } from '../ui/Accordion';

export function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? getServiceBySlug(slug) : undefined;

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#2C3E50] mb-4">
            서비스를 찾을 수 없습니다
          </h1>
          <Link to="/" className="text-[#87CEEB] hover:underline">
            홈으로 돌아가기
          </Link>
        </div>
      </div>
    );
  }

  const faqItems = service.faq.map((item, index) => ({
    id: index + 1,
    title: item.question,
    content: item.answer,
  }));

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link
              to="/"
              className="flex items-center gap-2 text-[#7F8C8D] hover:text-[#87CEEB] transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>홈으로</span>
            </Link>
            <Link to="/" className="text-xl font-bold text-[#87CEEB]">
              실버케어 파트너스
            </Link>
            <Button size="default" onClick={() => window.location.href = '/#contact'}>
              상담 신청
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="py-20 relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #87CEEB 0%, #5BB5D8 100%)',
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-6xl mb-6 block">{service.icon}</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {service.title}
            </h1>
            <p className="text-xl text-white/90">{service.subtitle}</p>
          </motion.div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-[#2C3E50] mb-6">
              서비스 소개
            </h2>
            <p className="text-lg text-[#7F8C8D] leading-relaxed mb-8">
              {service.description}
            </p>

            <div className="bg-[#F5E6D3]/30 rounded-xl p-6">
              <h3 className="font-bold text-[#2C3E50] mb-4">이런 분께 추천드려요</h3>
              <ul className="space-y-3">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#27AE60] flex-shrink-0 mt-0.5" />
                    <span className="text-[#2C3E50]">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-[#87CEEB]/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-[#2C3E50] mb-8 text-center">
              주요 서비스
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {service.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-sm"
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-lg font-bold text-[#2C3E50] mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-[#7F8C8D]">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-[#2C3E50] mb-8 text-center">
              이용 절차
            </h2>
            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-[#87CEEB]/30" />
              <div className="space-y-6">
                {service.process.map((step, index) => (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4 relative"
                  >
                    <div className="w-12 h-12 rounded-full bg-[#87CEEB] text-white flex items-center justify-center font-bold z-10 flex-shrink-0">
                      {step.step}
                    </div>
                    <div className="flex-1 bg-gray-50 rounded-lg p-4">
                      <h4 className="font-bold text-[#2C3E50]">{step.title}</h4>
                      <p className="text-sm text-[#7F8C8D]">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-[#F5E6D3]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-[#2C3E50] mb-8 text-center">
              이용 요금
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {service.pricing.map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`bg-white rounded-xl p-6 shadow-sm ${
                    index === 1 ? 'ring-2 ring-[#87CEEB] scale-105' : ''
                  }`}
                >
                  <h3 className="text-lg font-bold text-[#2C3E50] mb-2">
                    {plan.name}
                  </h3>
                  <div className="text-2xl font-bold text-[#87CEEB] mb-4">
                    {plan.price}
                  </div>
                  <ul className="space-y-2 mb-6">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <Check className="w-4 h-4 text-[#27AE60] flex-shrink-0 mt-0.5" />
                        <span className="text-[#7F8C8D]">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant={index === 1 ? 'primary' : 'secondary'}
                    className="w-full"
                    onClick={() => window.location.href = '/#contact'}
                  >
                    상담 신청
                  </Button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-[#2C3E50] mb-8 text-center">
              자주 묻는 질문
            </h2>
            <Accordion items={faqItems} />
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#87CEEB]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              {service.title}에 대해 더 알고 싶으신가요?
            </h2>
            <p className="text-white/90 mb-8">
              전문 상담사가 어르신의 상황에 맞는 맞춤 상담을 제공해 드립니다.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                variant="secondary"
                size="large"
                className="bg-white text-[#87CEEB] border-white hover:bg-gray-100"
                onClick={() => window.location.href = '/#contact'}
              >
                무료 상담 신청하기
              </Button>
              <a
                href="tel:02-XXXX-XXXX"
                className="inline-flex items-center gap-2 text-white font-medium hover:underline"
              >
                02-XXXX-XXXX 전화 상담
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2C3E50] text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link to="/" className="text-xl font-bold text-[#87CEEB] mb-4 block">
            실버케어 파트너스
          </Link>
          <p className="text-gray-400 text-sm">
            © 2023-2026 Silver Care Partners. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
