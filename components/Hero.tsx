
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#F8F9F3]">
      {/* Visual background with better gradient mask for text focus */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1573497620053-ea5300f94f21?auto=format&fit=crop&q=80&w=1920')` }}
        role="img"
        aria-label="평화로운 분위기 속의 따뜻한 상담 현장"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full pt-20">
        <div className="max-w-4xl">
          <div className="inline-flex items-center space-x-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-100 shadow-sm mb-8 animate-fade-in">
            <span className="w-2 h-2 bg-[#2D5A27] rounded-full animate-pulse"></span>
            <span className="text-[#2D5A27] font-bold text-sm tracking-widest uppercase">Premium Life Care</span>
          </div>
          
          <h1 className="text-5xl md:text-8xl font-black text-[#1F2937] leading-[1.1] mb-8 drop-shadow-sm">
            모든 어르신이 <br />
            <span className="text-[#2D5A27]">존엄하고 행복한</span> <br />
            생애 마무리를.
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 mb-12 leading-relaxed max-w-2xl font-medium opacity-90">
            삶의 마지막 장이 가장 아름다운 유산으로 남을 수 있도록,<br /> 
            실버케어 파트너스가 품격 있는 동행을 약속합니다.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6">
            <a 
              href="#contact" 
              className="group bg-[#2D5A27] text-white px-10 py-5 rounded-2xl text-xl font-black hover:bg-[#1f3d1a] transition-all shadow-xl hover:shadow-2xl flex items-center justify-center gap-2"
            >
              전문가 상담 예약
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
            <a 
              href="#services" 
              className="bg-white/80 backdrop-blur-sm text-[#1F2937] border-2 border-gray-200 px-10 py-5 rounded-2xl text-xl font-black hover:bg-white hover:border-[#2D5A27] transition-all text-center shadow-lg"
            >
              서비스 더 알아보기
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
