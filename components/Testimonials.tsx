
import React from 'react';
import { Quote, Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const reviews = [
    {
      text: "아버지의 마지막 몇 달을 실버케어 파트너스와 함께한 것은 우리 가족의 가장 큰 행운이었습니다. 자서전을 찍으시며 예전 이야기를 들려주시는 아버지의 미소가 아직도 선명합니다. 정성 가득한 보살핌에 진심으로 감사드려요.",
      author: "이영수 님 (서울 잠실)",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150"
    },
    {
      text: "어머니께서 혼자 계시는 시간이 많아 걱정이었는데, 사회적 연결 프로그램을 통해 친구분들을 만나고 다시 활력을 찾으셨어요. 법률적인 상속 준비도 매니저님이 차분히 도와주셔서 형제들 간 갈등 없이 잘 마무리되었습니다.",
      author: "최지혜 님 (경기 판교)",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150"
    }
  ];

  return (
    <section id="testimonials" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-24">
          <span className="text-[#2D5A27] font-black tracking-widest uppercase text-sm mb-4 block">Success Stories</span>
          <h2 className="text-4xl md:text-6xl font-black text-[#1F2937] mb-6">함께한 가족들이 전하는 <span className="text-[#C49261]">진심</span></h2>
          <div className="flex justify-center space-x-1">
            {[...Array(5)].map((_, i) => <Star key={i} className="text-[#C49261] fill-current" size={24} />)}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {reviews.map((review, index) => (
            <div key={index} className="relative group p-12 bg-[#FCFAFA] rounded-[40px] border border-gray-100 hover:border-[#2D5A27]/20 transition-all duration-500 shadow-sm hover:shadow-2xl">
              <Quote className="absolute top-12 right-12 text-[#2D5A27]/5 w-32 h-32 pointer-events-none group-hover:text-[#2D5A27]/10 transition-colors" />
              <div className="relative z-10">
                <p className="text-2xl text-gray-700 italic mb-12 leading-[1.6] font-light">
                  "{review.text}"
                </p>
                <div className="flex items-center space-x-6">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-md">
                    <img src={review.image} alt={review.author} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="text-xl font-black text-[#1F2937]">{review.author}</p>
                    <p className="text-sm text-[#2D5A27] font-bold">실제 서비스 이용 고객</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
