
import React from 'react';
import { Heart, Facebook, Instagram, Youtube, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1F2937] text-white pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-4 gap-16 mb-24">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-3 mb-8">
              <div className="bg-[#2D5A27] p-2 rounded-lg">
                <Heart className="text-white w-6 h-6" fill="currentColor" />
              </div>
              <span className="text-2xl font-black tracking-tight">실버케어 <span className="text-[#C49261]">파트너스</span></span>
            </div>
            <p className="text-gray-400 text-lg font-light leading-relaxed mb-10">
              우리는 어르신들의 삶을 존중하며, 마지막 순간까지 그 가치를 지켜드리는 가장 든든한 가족의 동반자가 되겠습니다.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Instagram, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="p-3 bg-white/5 rounded-xl hover:bg-[#2D5A27] transition-all border border-white/10 group">
                  <Icon size={22} className="group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-xl font-black mb-8 border-l-4 border-[#2D5A27] pl-4">주요 서비스</h4>
            <ul className="space-y-5 text-gray-400 font-medium text-lg">
              <li><a href="#" className="hover:text-white transition-colors">생애 설계 맞춤 상담</a></li>
              <li><a href="#" className="hover:text-white transition-colors">VIP 의료 매니지먼트</a></li>
              <li><a href="#" className="hover:text-white transition-colors">디지털 라이프 아카이빙</a></li>
              <li><a href="#" className="hover:text-white transition-colors">전문 법률 & 상속 컨설팅</a></li>
              <li><a href="#" className="hover:text-white transition-colors">품격 있는 장례 컨시어지</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-black mb-8 border-l-4 border-[#2D5A27] pl-4">회사 정보</h4>
            <ul className="space-y-5 text-gray-400 font-medium text-lg">
              <li><a href="#" className="hover:text-white transition-colors">회사 비전 및 철학</a></li>
              <li><a href="#" className="hover:text-white transition-colors">언론 보도 및 공지</a></li>
              <li><a href="#" className="hover:text-white transition-colors">전문 인력 채용</a></li>
              <li><a href="#" className="hover:text-[#C49261] transition-colors font-black">개인정보 처리방침</a></li>
              <li><a href="#" className="hover:text-white transition-colors">이용약관</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-black mb-8 border-l-4 border-[#2D5A27] pl-4">고객 만족 센터</h4>
            <div className="mb-8">
              <p className="text-4xl font-black text-[#C49261] mb-2 tracking-tighter">1588-0000</p>
              <p className="text-gray-400 font-medium italic">365일 긴급 응급 컨시어지 운영</p>
            </div>
            <div className="space-y-4 text-gray-400 font-light">
              <div className="flex items-center space-x-2">
                <Phone size={16} />
                <span>평일 09:00 - 18:00 (전화 상담)</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} />
                <span>support@silvercare.co.kr</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-gray-500 font-medium text-sm">
          <p>© 2023 실버케어 파트너스. All Rights Reserved. 대표이사 김은혜</p>
          <div className="mt-4 md:mt-0 space-x-6">
            <span>사업자등록번호: 123-45-67890</span>
            <span>통신판매업신고: 제2023-서울강남-0000호</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
