
import React from 'react';
import { ShieldCheck, UserCheck, Star, CheckCircle2 } from 'lucide-react';

const WhyUs: React.FC = () => {
  const points = [
    {
      icon: <ShieldCheck className="w-10 h-10 text-[#2D5A27]" />,
      title: '검증된 전문가 집단',
      description: '45명의 라이프 케어 매니저 전원이 국가 자격증 및 당사의 고난도 심리/케어 교육 과정을 이수한 베테랑입니다.'
    },
    {
      icon: <UserCheck className="w-10 h-10 text-[#2D5A27]" />,
      title: '프라이빗 맞춤 서비스',
      description: '천편일률적인 서비스가 아닙니다. 어르신의 건강 상태, 성격, 취향을 고려한 1:1 전담 매니지먼트 시스템입니다.'
    },
    {
      icon: <Star className="w-10 h-10 text-[#2D5A27]" />,
      title: '감동적인 사후 유산',
      description: '디지털 아카이빙 솔루션을 통해 삶의 가치를 데이터로 보존하고, 가족들에게는 따뜻한 기억의 도구를 제공합니다.'
    }
  ];

  return (
    <section id="whyus" className="py-32 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="lg:w-2/5">
            <h2 className="text-4xl md:text-5xl font-black text-[#1F2937] mb-8 leading-tight">
              실버케어 파트너스가 <br /> 
              <span className="text-[#C49261]">선택받는 분명한 이유</span>
            </h2>
            <div className="space-y-6 mb-10">
              <div className="flex items-start space-x-4">
                <CheckCircle2 className="text-[#2D5A27] mt-1 shrink-0" size={24} />
                <p className="text-xl font-bold text-gray-700">업계 유일 디지털 자서전 무료 제작 지원</p>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle2 className="text-[#2D5A27] mt-1 shrink-0" size={24} />
                <p className="text-xl font-bold text-gray-700">24시간 응급 대응 컨시어지 운영</p>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle2 className="text-[#2D5A27] mt-1 shrink-0" size={24} />
                <p className="text-xl font-bold text-gray-700">법률/세무/장례 분야별 전문 네트워킹</p>
              </div>
            </div>
            <button className="bg-[#2D5A27] text-white px-10 py-5 rounded-2xl text-xl font-black shadow-xl hover:bg-[#1f3d1a] transition-all">
              기업 제휴 문의하기
            </button>
          </div>
          
          <div className="lg:w-3/5 grid sm:grid-cols-1 gap-6">
            {points.map((point, index) => (
              <div key={index} className="flex gap-8 p-10 bg-[#F8F9F3] rounded-[32px] border border-gray-100 hover:border-[#C49261] transition-all group">
                <div className="shrink-0">{point.icon}</div>
                <div>
                  <h3 className="text-2xl font-black text-[#1F2937] mb-4 group-hover:text-[#2D5A27] transition-colors">{point.title}</h3>
                  <p className="text-lg text-gray-600 leading-relaxed font-light">{point.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
