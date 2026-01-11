
import React from 'react';
import { Target, Heart, Users, MapPin } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { icon: <Target />, label: '설립 연도', value: '2023년' },
    { icon: <Users />, label: '전문 케어 인력', value: '45명' },
    { icon: <MapPin />, label: '서비스 지역', value: '서울, 경기 전역' },
    { icon: <Heart />, label: '전문 분야', value: '생애 토탈 케어' },
  ];

  return (
    <section id="about" className="py-32 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#2D5A27]/5 -skew-x-12 transform translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div>
            <div className="w-20 h-1.5 bg-[#C49261] mb-8 rounded-full"></div>
            <h2 className="text-4xl md:text-5xl font-black mb-10 text-[#1F2937] leading-tight">
              실버케어 파트너스는 <br />
              <span className="text-[#2D5A27]">삶의 깊이를 존중하는</span> <br /> 
              전문 동행 그룹입니다.
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed font-light">
              단순한 돌봄은 누구나 할 수 있습니다. 하지만 한 사람의 일생이 담긴 <b>마지막 장을 품격 있게 장식하는 것</b>은 오직 전문가만이 가능합니다.
            </p>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed font-light">
              우리는 어르신이 주도적으로 자신의 생애를 마무리하실 수 있도록 법률, 의료, 정서적 케어를 아우르는 입체적인 솔루션을 제공합니다.
            </p>
            
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, idx) => (
                <div key={idx} className="group">
                  <div className="flex items-center space-x-4 mb-2">
                    <div className="text-[#2D5A27] bg-[#2D5A27]/10 p-2.5 rounded-lg group-hover:bg-[#2D5A27] group-hover:text-white transition-all">
                      {React.cloneElement(stat.icon as React.ReactElement, { size: 20 })}
                    </div>
                    <p className="text-sm font-bold text-gray-500 uppercase tracking-widest">{stat.label}</p>
                  </div>
                  <p className="text-2xl font-black text-[#1F2937]">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="rounded-[40px] overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&q=80&w=800" 
                alt="따뜻하게 손을 맞잡은 모습" 
                className="w-full object-cover h-[700px] hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 bg-[#C49261] text-white p-12 rounded-[32px] shadow-2xl max-w-sm border-4 border-white">
              <p className="text-3xl font-black mb-4">"존엄은 <br />사라지지 않습니다."</p>
              <p className="text-lg opacity-90 font-medium leading-relaxed">대표 김은혜 올림</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
