import React from 'react';
import { faqs, faqContent } from '../../constants/content';
import { SectionTitle } from '../ui/SectionTitle';
import { Accordion } from '../ui/Accordion';

export function FAQSection() {
  const accordionItems = faqs.map((faq) => ({
    id: faq.id,
    title: faq.question,
    content: faq.answer,
  }));

  const leftItems = accordionItems.filter((_, i) => i % 2 === 0);
  const rightItems = accordionItems.filter((_, i) => i % 2 === 1);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title={faqContent.title} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Accordion items={leftItems} />
          <Accordion items={rightItems} />
        </div>
      </div>
    </section>
  );
}
