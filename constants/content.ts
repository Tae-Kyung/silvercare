import type { Service, Statistic, CustomerCase, Testimonial, Certification, Partner, Package, ProcessStep, FAQ, NavLink } from '../types';

export const heroContent = {
  headline: '어머니, 혼자 괜찮으세요?',
  subheadline: '가족처럼 돌보는 맞춤 케어, 실버케어 파트너스',
  trustIndicators: [
    '누적 1,200명 어르신께 서비스 제공',
    '만족도 4.8/5.0, 재이용률 89%',
    '보건복지부 인증 돌봄 서비스 기관',
  ],
  primaryCta: '무료 상담 신청하기',
  secondaryCta: '서비스 자세히 보기',
};

export const problemContent = {
  title: '이런 고민, 혼자 안고 계시나요?',
  problems: [
    { emoji: '😰', text: '부모님 혼자 두고 출근하면 불안해요' },
    { emoji: '😔', text: '병원 동행할 시간이 없어 죄책감이 커요' },
    { emoji: '😞', text: '어머니가 점점 외로워 하시는 것 같아요' },
  ],
  emphasis: '매주 15시간, 가족이 부모님 돌봄에 쓰는 시간입니다.\n일과 돌봄 사이에서 지쳐가고 계시지 않나요?',
};

export const services: Service[] = [
  { id: 1, icon: '🏥', title: '생애 설계 상담', description: '1:1 맞춤 생애 마무리 계획' },
  { id: 2, icon: '💊', title: '의료 케어 매니지먼트', description: '병원 동행, 건강 체크, 의료 연결' },
  { id: 3, icon: '🍚', title: '일상생활 지원', description: '식사, 가사, 외출 동행' },
  { id: 4, icon: '👥', title: '사회적 연결', description: '취미 모임, 친구 매칭' },
  { id: 5, icon: '📖', title: '디지털 자서전 제작', description: '인생 이야기 영상 기록' },
  { id: 6, icon: '⚖️', title: '법률·행정 지원', description: '유언장, 상속, 사후 절차' },
  { id: 7, icon: '🕊️', title: '장례 토탈 케어', description: '장례부터 사후까지 원스톱' },
];

export const solutionsContent = {
  title: '어르신 한 분 한 분에게 맞춘 7가지 케어',
  subtitle: '획일적인 프로그램이 아닌, 필요한 서비스만 선택하세요',
};

export const statistics: Statistic[] = [
  { id: 1, value: 1200, suffix: '명+', label: '어르신께 서비스 제공' },
  { id: 2, value: 4.8, suffix: '/5.0', label: '고객 만족도', isDecimal: true },
  { id: 3, value: 89, suffix: '%', label: '재이용률' },
  { id: 4, value: 15, suffix: '시간', label: '가족 돌봄 부담 감소' },
];

export const statisticsSubItems = [
  '협력 의료기관 15개',
  '협력 복지기관 8개',
  '사회복지사 1급 15명',
];

export const statisticsContent = {
  title: '숫자로 증명하는 신뢰',
};

export const customerCases: CustomerCase[] = [
  {
    id: 1,
    name: '박영수',
    age: 78,
    type: '독거',
    before: [
      '병원 가기 어려워 자녀가 월 2회 반차 사용 (월 16시간)',
      '정기 건강 체크 없음',
    ],
    after: [
      '케어매니저가 병원 예약부터 동행까지 전담',
      '가족 부담 월 16시간 → 0시간',
      '조기 질환 발견 2건',
    ],
  },
  {
    id: 2,
    name: '최명희',
    age: 82,
    type: '독거',
    before: [
      '식사 거르는 경우 많음',
      '외출 두려워 우울감 증가',
    ],
    after: [
      '규칙적 식사로 건강 개선',
      '주 2회 외출로 우울감 감소',
      '친구 관계 형성',
    ],
  },
  {
    id: 3,
    name: '이순임',
    age: 75,
    type: '자녀와 동거',
    before: [
      '낮 시간 혼자, 사회적 고립감',
      '자녀의 죄책감과 스트레스',
    ],
    after: [
      '주 3회 케어매니저 방문으로 안정',
      '취미 모임 참여',
      '가족 관계 개선',
    ],
  },
];

export const customerCasesContent = {
  title: '실제 어르신들의 변화',
  subtitle: '케어 전과 후, 어떻게 달라졌을까요?',
};

export const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: '어머니 혼자 사시면서 병원 가는 것도, 밥 챙기는 것도 힘들어하셨는데, 실버케어 덕분에 이제 안심이에요. 케어매니저님이 매주 방문해서 건강 체크하고 말벗도 되어주시니 어머니 표정이 정말 밝아지셨어요.',
    author: '이지현',
    role: '고객 가족',
    location: '강남구',
  },
  {
    id: 2,
    quote: "처음엔 '남한테 신세 지는 거 아닌가' 싶었는데, 상담사님이 제 이야기를 진심으로 들어주시더라고요. 이제 일주일에 한 번씩 케어매니저님 오시는 날이 제일 기다려져요. 친구 같아요.",
    author: '박순자',
    role: '75세, 서비스 이용 고객',
    location: '송파구',
  },
  {
    id: 3,
    quote: '일 때문에 아버지를 자주 못 뵈어서 늘 마음이 무거웠는데, 실버케어 덕분에 안심하고 일할 수 있게 됐어요. 정기 리포트로 아버지 건강 상태도 파악할 수 있고, 무엇보다 아버지께서 행복해하시는 게 제일 좋습니다.',
    author: '김태현',
    role: '고객 가족',
    location: '분당구',
  },
];

export const testimonialsContent = {
  title: "고객님들의 진심 어린 이야기",
  cta: '나도 상담 받아보기',
};

export const whyUsContent = {
  title: '실버케어 파트너스가 다른 이유',
  differentiators: [
    {
      icon: '💯',
      title: '맞춤형 케어 플랜',
      description: '획일적 프로그램이 아닌, 한 분 한 분의 필요에 맞춘 개별 케어를 제공합니다.',
    },
    {
      icon: '👨‍⚕️',
      title: '전문 케어 인력',
      description: '사회복지사 1급 15명, 간호사 8명 포함 45명의 전문 팀이 함께합니다.',
    },
    {
      icon: '🤝',
      title: '24시간 긴급 대응',
      description: '협력 병원 15개, 24시간 긴급 연락망으로 언제든 안심하실 수 있습니다.',
    },
  ],
};

export const certifications: Certification[] = [
  { id: 1, name: '보건복지부 인증 돌봄 서비스 제공 기관', year: '2024~' },
  { id: 2, name: '한국시니어케어협회 정회원' },
  { id: 3, name: '2025 대한민국 실버산업 우수기업 대상' },
  { id: 4, name: '2024 사회적 기업 혁신상' },
];

export const partners: Partner[] = [
  { id: 1, name: '서울대병원', category: '의료기관' },
  { id: 2, name: '삼성서울병원', category: '의료기관' },
  { id: 3, name: '서울아산병원', category: '의료기관' },
  { id: 4, name: '강남구청', category: '복지기관' },
  { id: 5, name: '송파구청', category: '복지기관' },
];

export const certificationsContent = {
  title: '공식 인증과 신뢰할 수 있는 파트너십',
  medicalPartners: '의료기관: 서울대병원, 삼성서울병원, 서울아산병원 등 15개',
  welfarePartners: '복지기관: 강남구청, 송파구청 등 8개',
  media: '미디어: 조선일보, KBS, SBS 등 12개 매체 소개',
};

export const ceoStoryContent = {
  title: '왜 실버케어를 시작했을까요?',
  intro: '저는 요양원에서 10년간 어르신들을 돌봤습니다.',
  story: `하지만 시설에서는 한 분 한 분의 개별적인 필요를 채워드리기 어려웠습니다. 어떤 분은 병원 동행만 필요하고, 어떤 분은 말벗이 필요한데, 획일적인 프로그램만 제공할 수밖에 없었죠.

"각자의 삶에 맞는 맞춤형 케어를 제공할 수 있다면..." 하고 실버케어 파트너스를 시작했고, 3년 만에 1,200명의 어르신께 맞춤형 서비스를 제공하게 되었습니다.

이웃 어르신들이 "나도 이 서비스 받고 싶어"라는 요청을 주시면서, 지금은 서울·경기 전역으로 서비스를 확대하고 있습니다.`,
  ceoName: '김은혜 대표',
  credentials: ['前 서울시립요양원 원장 10년', '사회복지사 1급'],
};

export const packages: Package[] = [
  {
    id: 1,
    name: '기본 케어',
    price: '월 30만원',
    features: ['상담 + 월 2회 방문', '건강 체크 및 리포트'],
    isRecommended: false,
  },
  {
    id: 2,
    name: '표준 케어',
    price: '월 60만원',
    features: ['상담 + 주 1회 방문', '의료 동행 포함', '정기 건강 리포트'],
    isRecommended: true,
  },
  {
    id: 3,
    name: '프리미엄 케어',
    price: '월 120만원',
    features: ['토탈 케어 서비스', '주 3회 이상 방문', '24시간 긴급 대응', '맞춤형 케어 플랜'],
    isRecommended: false,
  },
];

export const packagesContent = {
  title: '어르신께 맞는 케어 패키지를 선택하세요',
  footer: '모든 패키지에 무료 상담 30분 + 첫 달 만족 보장 환불 포함',
  ctaText: '선택하기',
};

export const processSteps: ProcessStep[] = [
  { id: 1, title: '무료 상담', description: '전화 또는 홈페이지로 신청\n현재 상황 및 필요 파악', duration: '30분' },
  { id: 2, title: '제안서 발송', description: '맞춤형 패키지 제안\n담당 케어매니저 프로필', duration: '1일' },
  { id: 3, title: '계약 및 킥오프', description: '서비스 계약\n상세 케어 플랜 수립', duration: '1시간' },
  { id: 4, title: '서비스 시작', description: '케어매니저 첫 방문\n초기 평가 및 관계 형성', duration: '즉시' },
  { id: 5, title: '정기 모니터링', description: '주간/월간 케어 리포트\n가족과 정기 소통' },
  { id: 6, title: '만족도 평가', description: '서비스 개선 반영', duration: '매월' },
  { id: 7, title: '사후 관리', description: '평생 고객 관리', duration: '지속' },
];

export const processContent = {
  title: '간단한 7단계로 시작하세요',
};

export const faqs: FAQ[] = [
  { id: 1, question: '어떤 분들이 서비스를 이용하시나요?', answer: '독거 어르신, 맞벌이 가정의 어르신, 맞춤형 케어가 필요하신 분들이 주로 이용하십니다.' },
  { id: 2, question: '서비스 지역은 어디까지인가요?', answer: '서울과 경기 전역, 향후 전국 확대 예정입니다.' },
  { id: 3, question: '비용은 얼마나 드나요?', answer: '기본 패키지 월 30만원부터 시작합니다. 무료 상담에서 맞춤형 견적을 제공해드립니다.' },
  { id: 4, question: '케어매니저는 어떤 분들인가요?', answer: '간호사 또는 요양보호사 자격 보유, 응급처치 교육 이수 전문가입니다.' },
  { id: 5, question: '긴급 상황 발생 시 어떻게 대응하나요?', answer: '24시간 긴급 연락망 및 협력 병원 네트워크로 즉시 대응합니다.' },
  { id: 6, question: '단기간만 이용할 수도 있나요?', answer: '네, 최소 1개월부터 가능하며 월 단위 계약입니다.' },
  { id: 7, question: '서비스가 마음에 들지 않으면?', answer: '첫 달 이용 후 만족하지 못하시면 전액 환불해드립니다.' },
  { id: 8, question: '케어매니저는 얼마나 자주 방문하나요?', answer: '패키지에 따라 주 1~5회 방문, 개인 맞춤 조정 가능합니다.' },
  { id: 9, question: '개인정보는 안전한가요?', answer: '모든 정보 암호화, 의료법 및 개인정보보호법 준수합니다.' },
  { id: 10, question: '어떻게 시작하나요?', answer: '전화 또는 홈페이지에서 무료 상담을 신청하세요.' },
];

export const faqContent = {
  title: '자주 묻는 질문',
};

export const finalCtaContent = {
  headline: '어르신의 행복한 내일을 위해',
  subheadline: '지금 무료 상담을 신청하세요',
  primaryCta: '무료 상담 신청하기',
  secondaryCta: '02-XXXX-XXXX 전화 상담',
  urgencyBadge: '이달 상담 신청 시 건강 체크 리포트 무료 제공',
  limitedOffer: '선착순 20명 한정',
  trustIndicators: [
    '무료 상담 30분',
    '첫 달 만족 보장 환불',
    '24시간 긴급 대응',
  ],
};

export const footerContent = {
  company: {
    name: '실버케어 파트너스',
    address: '서울시 강남구 XX동 XX빌딩',
    businessNumber: 'XXX-XX-XXXXX',
    ceo: '김은혜',
  },
  contact: {
    phone: '02-XXXX-XXXX',
    email: 'contact@silvercarepartners.co.kr',
    kakao: '@실버케어파트너스',
    hours: '평일 09:00-18:00',
  },
  copyright: '© 2023-2026 Silver Care Partners. All rights reserved.',
  links: ['개인정보처리방침', '이용약관'],
};

export const navLinks: NavLink[] = [
  { id: 'hero', label: '홈' },
  { id: 'solutions', label: '서비스' },
  { id: 'statistics', label: '실적' },
  { id: 'testimonials', label: '후기' },
  { id: 'packages', label: '요금' },
  { id: 'faq', label: 'FAQ' },
  { id: 'contact', label: '상담신청' },
];
