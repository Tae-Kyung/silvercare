
import React from 'react';
import { ClipboardList, Stethoscope, Home, Users, Video, Gavel, HeartHandshake, ArrowRight } from 'lucide-react';

interface ServiceItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Services: React.FC = () => {
  const services: ServiceItem[] = [
    {
      icon: <ClipboardList size={36} />,
      title: '생애 설계 상담',
      description: '전문 라이프 디자이너가 어르신의 가치관을 담은 커스텀 생애 마무리 계획을 완성합니다.'
    },
    {
      icon: <Stethoscope size={36} />,
      title: '의료 케어 매니지먼트',
      description: '단순 동행을 넘어선 밀착 건강 관리와 전문 의료진 네트워크 연결을 통한 안심 케어.'
    },
    {
      icon: <Home size={36} />,
      title: '프리미엄 생활 지원',
      description: '고품격 식단 관리와 가사 서비스로 어르신이 오직 자신에게 집중할 수 있는 환경을 만듭니다.'
    },
    {
      icon: <Users size={36} />,
      title: '커뮤니티 & 사회 연결',
      description: '지적, 문화적 활동을 통한 세대 간 교류와 활력 넘치는 사회적 관계를 유지시켜 드립니다.'
    },
    {
      icon: <Video size={36} />,
      title: '디지털 자서전 제작',
      description: '삶의 기록을 전문 영상과 출판물로 제작하여 가족들에게 가장 소중한 유산으로 남겨드립니다.'
    },
    {
      icon: <Gavel size={36} />,
      title: '법률·행정 프리미엄',
      description: '유언장, 상속, 세무 절차 등 복잡한 행정 과정을 전문 변호사와 함께 완벽히 마무리합니다.'
    },
    {
      icon: <HeartHandshake size={36} />,
      title: '장례 토탈 컨시어지',
      description: '품격 있는 장례 절차 전반을 총괄하며 유가족의 슬픔까지 세심히 배려하는 동행 서비스.'
    }
  ];

  return (
    <section id="services" className="py-32 bg-[#F8F9F3]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="text-[#C49261] font-black tracking-widest uppercase text-sm mb-4 block">Our Specialities</span>
            <h2 className="text-4xl md:text-5xl font-black text-[#1F2937] leading-tight mb-6">품격 있는 삶을 위한 <br /><span className="text-[#2D5A27]">7가지 맞춤형 솔루션</span></h2>
            <p className="text-xl text-gray-600 font-light">우리는 어르신 한 분 한 분의 삶을 하나의 작품으로 대합니다.</p>
          </div>
          <button className="flex items-center space-x-2 text-[#2D5A27] font-black text-lg border-b-2 border-[#2D5A27] pb-1 hover:opacity-70 transition-opacity">
            <span>전체 서비스 브로슈어 보기</span>
            <ArrowRight size={20} />
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group bg-white p-10 rounded-[32px] shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col h-full"
            >
              <div className="text-[#2D5A27] mb-8 p-5 bg-[#F8F9F3] rounded-2xl w-fit group-hover:bg-[#2D5A27] group-hover:text-white transition-all">
                {service.icon}
              </div>
              <h3 className="text-2xl font-black text-[#1F2937] mb-5 leading-tight">{service.title}</h3>
              <p className="text-lg text-gray-600 leading-relaxed font-normal flex-grow">
                {service.description}
              </p>
            </div>
          ))}
          
          <div className="relative group overflow-hidden bg-[#2D5A27] p-10 rounded-[32px] flex flex-col justify-between text-white shadow-xl">
             <div className="absolute top-0 right-0 p-4 opacity-10">
               <HeartHandshake size={120} />
             </div>
             <div>
               <h3 className="text-2xl font-black mb-4 leading-tight">특별한 맞춤형 케어가 필요하신가요?</h3>
               <p className="text-lg opacity-80 font-light">가족의 상황에 맞춘 프리미엄 플랜을 별도로 설계해 드립니다.</p>
             </div>
             <button className="mt-8 bg-white text-[#2D5A27] px-8 py-4 rounded-2xl font-black text-lg hover:bg-gray-100 transition-all shadow-lg active:scale-95">
               지금 상담 신청
             </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
