import React from 'react';
import { Phone, Mail, MessageCircle, Clock, MapPin } from 'lucide-react';
import { footerContent, services } from '../../constants/content';

export function Footer() {
  return (
    <footer className="bg-[#2C3E50] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-xl font-bold mb-6 text-[#87CEEB]">
              {footerContent.company.name}
            </h3>
            <div className="space-y-3 text-gray-300">
              <p className="flex items-start gap-2">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>{footerContent.company.address}</span>
              </p>
              <p>사업자등록번호: {footerContent.company.businessNumber}</p>
              <p>대표: {footerContent.company.ceo}</p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 text-[#87CEEB]">서비스</h3>
            <ul className="space-y-2 text-gray-300">
              {services.map((service) => (
                <li key={service.id}>
                  <a
                    href="#solutions"
                    className="hover:text-[#87CEEB] transition-colors"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 text-[#87CEEB]">고객 지원</h3>
            <div className="space-y-3 text-gray-300">
              <a
                href={`tel:${footerContent.contact.phone}`}
                className="flex items-center gap-2 hover:text-[#87CEEB] transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>{footerContent.contact.phone}</span>
              </a>
              <a
                href={`mailto:${footerContent.contact.email}`}
                className="flex items-center gap-2 hover:text-[#87CEEB] transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>{footerContent.contact.email}</span>
              </a>
              <p className="flex items-center gap-2">
                <MessageCircle className="w-5 h-5" />
                <span>카카오톡: {footerContent.contact.kakao}</span>
              </p>
              <p className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>{footerContent.contact.hours}</span>
              </p>
            </div>

            <div className="mt-6 flex gap-4">
              <a
                href="#"
                className="text-gray-400 hover:text-[#87CEEB] transition-colors"
                aria-label="블로그"
              >
                블로그
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#87CEEB] transition-colors"
                aria-label="인스타그램"
              >
                인스타그램
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#87CEEB] transition-colors"
                aria-label="유튜브"
              >
                유튜브
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">{footerContent.copyright}</p>
            <div className="flex gap-6">
              {footerContent.links.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-gray-400 hover:text-[#87CEEB] transition-colors text-sm"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
