
import React from 'react';

const Team: React.FC = () => {
  const members = [
    {
      role: "Founder / CEO",
      name: "김은혜",
      bio: "사회복지학 석사. 15년간 노인 심리와 생애 관리 분야에서 1,000명 이상의 어르신과 동행해온 업계 최고의 전문가입니다.",
      image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&q=80&w=400"
    },
    {
      role: "Chief Medical Officer",
      name: "박준호",
      bio: "전 대형병원 수간호사 출신. 의료 매니지먼트와 응급 대응 시스템의 기틀을 마련하여 안정적인 케어를 보장합니다.",
      image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=400"
    },
    {
      role: "Psychology Director",
      name: "최민아",
      bio: "임상심리전문가. 디지털 자서전 제작과 정서적 케어 프로그램을 총괄하며 어르신의 자존감 회복을 돕습니다.",
      image: "https://images.unsplash.com/photo-1544717297-fa154da09f9b?auto=format&fit=crop&q=80&w=400"
    }
  ];

  return (
    <section id="team" className="py-32 bg-[#F8F9F3]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-24">
          <span className="text-[#C49261] font-black tracking-widest uppercase text-sm mb-4 block">Expert Team</span>
          <h2 className="text-4xl md:text-5xl font-black text-[#1F2937] mb-6">품격 있는 동행을 만드는 <span className="text-[#2D5A27]">전문가들</span></h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">우리는 단순한 직원이 아닌, 당신 가족의 든든한 파트너가 되고자 합니다.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {members.map((member, index) => (
            <div key={index} className="group bg-white rounded-[40px] overflow-hidden shadow-sm hover:shadow-2xl transition-all border border-gray-100">
              <div className="relative overflow-hidden h-96">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2D5A27]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="p-10">
                <p className="text-[#C49261] font-black text-sm mb-2 uppercase tracking-widest">{member.role}</p>
                <h3 className="text-3xl font-black text-[#1F2937] mb-6 group-hover:text-[#2D5A27] transition-colors">{member.name}</h3>
                <p className="text-lg text-gray-600 font-light leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
