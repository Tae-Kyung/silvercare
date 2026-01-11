
import React from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="bg-[#2D5A27] rounded-[60px] overflow-hidden shadow-2xl flex flex-col lg:flex-row border-[10px] border-[#F8F9F3]">
          {/* Info Side */}
          <div className="lg:w-2/5 p-16 text-white relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mt-10 -mr-10"></div>
            <h2 className="text-4xl md:text-5xl font-black mb-10 leading-tight">가장 소중한 분을 위한 상담</h2>
            <p className="text-xl opacity-90 mb-16 leading-relaxed font-light">
              망설이지 마세요. <br />
              따뜻한 차 한 잔과 함께 정성을 다해 이야기를 듣겠습니다.
            </p>
            
            <div className="space-y-12">
              <div className="flex items-center space-x-6 group">
                <div className="bg-white/10 p-5 rounded-2xl group-hover:bg-white group-hover:text-[#2D5A27] transition-all">
                  <Phone size={28} />
                </div>
                <div>
                  <p className="text-sm opacity-60 font-bold uppercase tracking-widest">상담 전화</p>
                  <p className="text-2xl font-black">1588-0000</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-6 group">
                <div className="bg-white/10 p-5 rounded-2xl group-hover:bg-white group-hover:text-[#2D5A27] transition-all">
                  <Mail size={28} />
                </div>
                <div>
                  <p className="text-sm opacity-60 font-bold uppercase tracking-widest">공식 이메일</p>
                  <p className="text-2xl font-black">help@silvercare.co.kr</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-6 group">
                <div className="bg-white/10 p-5 rounded-2xl group-hover:bg-white group-hover:text-[#2D5A27] transition-all">
                  <MapPin size={28} />
                </div>
                <div>
                  <p className="text-sm opacity-60 font-bold uppercase tracking-widest">방문 장소</p>
                  <p className="text-2xl font-black">서울시 강남구 테헤란로 123 <br /> 실버케어 파트너스 본동</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:w-3/5 bg-white p-16">
            <form className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-sm font-black text-gray-900 mb-3 uppercase tracking-wider">신청인 성함</label>
                  <input 
                    type="text" 
                    placeholder="성함을 입력해주세요" 
                    className="w-full px-6 py-5 bg-gray-50 border-2 border-transparent rounded-2xl focus:border-[#2D5A27] focus:bg-white outline-none transition-all text-lg font-bold" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-black text-gray-900 mb-3 uppercase tracking-wider">연락처</label>
                  <input 
                    type="tel" 
                    placeholder="010-0000-0000" 
                    className="w-full px-6 py-5 bg-gray-50 border-2 border-transparent rounded-2xl focus:border-[#2D5A27] focus:bg-white outline-none transition-all text-lg font-bold" 
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-black text-gray-900 mb-3 uppercase tracking-wider">문의 서비스 선택</label>
                <div className="relative">
                  <select className="w-full px-6 py-5 bg-gray-50 border-2 border-transparent rounded-2xl focus:border-[#2D5A27] focus:bg-white outline-none transition-all appearance-none text-lg font-bold">
                    <option>선택해주세요</option>
                    <option>생애 설계 상담 (커스텀 디자인)</option>
                    <option>의료 케어 (프리미엄 동행)</option>
                    <option>디지털 자서전 (유산 기록)</option>
                    <option>법률/행정 (상속 및 유언)</option>
                    <option>장례 토탈 케어</option>
                  </select>
                  <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none">▼</div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-black text-gray-900 mb-3 uppercase tracking-wider">문의 상세 내용</label>
                <textarea 
                  rows={4} 
                  placeholder="구체적인 상황을 남겨주시면 더욱 정교한 상담이 가능합니다." 
                  className="w-full px-6 py-5 bg-gray-50 border-2 border-transparent rounded-2xl focus:border-[#2D5A27] focus:bg-white outline-none transition-all text-lg font-bold"
                ></textarea>
              </div>

              <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-xl">
                <input type="checkbox" id="privacy" className="w-6 h-6 accent-[#2D5A27] cursor-pointer" />
                <label htmlFor="privacy" className="text-base text-gray-700 font-medium cursor-pointer">개인정보 수집 및 상담 목적 이용에 동의합니다.</label>
              </div>

              <button 
                type="submit" 
                className="w-full bg-[#2D5A27] text-white py-6 rounded-2xl text-2xl font-black hover:bg-[#1f3d1a] transition-all shadow-xl hover:shadow-2xl flex items-center justify-center gap-4 group"
              >
                전문 상담 신청하기
                <Send size={24} className="group-hover:translate-x-2 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
