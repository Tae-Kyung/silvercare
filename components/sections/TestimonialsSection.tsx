import React from 'react';
import { motion } from 'framer-motion';
import { Quote, MapPin } from 'lucide-react';
import { testimonials, testimonialsContent } from '../../constants/content';
import { SectionTitle } from '../ui/SectionTitle';
import { Carousel } from '../ui/Carousel';
import { Button } from '../ui/Button';

export function TestimonialsSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="testimonials" className="py-24 bg-[#87CEEB]/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title={testimonialsContent.title} />

        <Carousel autoPlayInterval={6000}>
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl p-8 md:p-12 shadow-sm"
            >
              <Quote className="w-12 h-12 text-[#87CEEB]/30 mb-6" />

              <blockquote className="text-lg md:text-xl text-[#2C3E50] leading-relaxed mb-8">
                "{testimonial.quote}"
              </blockquote>

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-[#F5E6D3] flex items-center justify-center text-2xl">
                  {testimonial.role.includes('어르신') ||
                  testimonial.role.includes('고객')
                    ? '👵'
                    : '👨'}
                </div>
                <div>
                  <p className="font-bold text-[#2C3E50]">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-[#7F8C8D]">{testimonial.role}</p>
                  <p className="text-sm text-[#7F8C8D] flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Carousel>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button size="large" onClick={scrollToContact}>
            {testimonialsContent.cta}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
