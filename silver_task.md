# 실버케어 파트너스 홈페이지 구축 Task 목록

## 프로젝트 개요
- **프로젝트명**: 실버케어 파트너스 공식 홈페이지
- **기술 스택**: React 19 + TypeScript + Vite + Tailwind CSS + Framer Motion
- **구현 방식**: PRD 기반 14개 섹션 SPA 새로 구현

---

## Phase 1: 기반 설정

### 1.1 의존성 추가
- [x] `package.json`에 framer-motion 추가
- [x] `npm install` 실행

### 1.2 index.html 업데이트
- [x] Pretendard 폰트 CDN 추가
- [x] CSS 변수 색상 팔레트 변경
  - Primary: #87CEEB (부드러운 블루)
  - Secondary: #F5E6D3 (따뜻한 베이지)
  - Accent: #90EE90 (연한 초록)
  - Text: #2C3E50 (다크 그레이)
- [x] framer-motion importmap 추가
- [x] body 기본 폰트 사이즈 18px 설정

### 1.3 디렉토리 구조 생성
- [x] `components/layout/` 생성
- [x] `components/sections/` 생성
- [x] `components/ui/` 생성
- [x] `hooks/` 생성
- [x] `constants/` 생성
- [x] `types/` 생성

### 1.4 타입 정의
- [x] `types/index.ts` 생성
  - Service, Statistic, CustomerCase, Testimonial 인터페이스
  - Certification, Partner, Package, ProcessStep, FAQ, NavLink 인터페이스

### 1.5 상수 파일 생성
- [x] `constants/colors.ts` - 색상 팔레트 상수
- [x] `constants/content.ts` - PRD 텍스트 콘텐츠 전체

---

## Phase 2: 공통 컴포넌트

### 2.1 커스텀 훅
- [x] `hooks/useScrollAnimation.ts`
  - Intersection Observer 기반 스크롤 감지
  - threshold, rootMargin, triggerOnce 옵션
- [x] `hooks/useCountUp.ts`
  - 숫자 카운트업 애니메이션
  - easeOutQuart 이징 함수 적용
  - 소수점 지원
- [x] `hooks/useCarousel.ts`
  - 캐러셀 상태 관리
  - 자동 재생, 일시정지, 재개 기능

### 2.2 UI 컴포넌트
- [x] `components/ui/Button.tsx`
  - Primary/Secondary 변형
  - Default/Large 사이즈
  - Framer Motion hover/tap 애니메이션
- [x] `components/ui/SectionTitle.tsx`
  - 섹션 제목 + 부제목
  - 중앙/좌측 정렬 옵션
- [x] `components/ui/Card.tsx`
  - 기본 카드 컴포넌트
  - hover 시 그림자 효과
- [x] `components/ui/Accordion.tsx`
  - 열기/닫기 애니메이션
  - 단일/다중 선택 모드
- [x] `components/ui/Carousel.tsx`
  - 자동 재생 슬라이더
  - 좌우 화살표 + 점 네비게이션
- [x] `components/ui/Counter.tsx`
  - 스크롤 트리거 카운트업
  - useCountUp + useScrollAnimation 통합
- [x] `components/ui/PricingCard.tsx`
  - 가격 카드
  - 추천 뱃지 표시

---

## Phase 3: 레이아웃 컴포넌트

### 3.1 Navbar
- [x] `components/layout/Navbar.tsx`
  - 고정 헤더 (스크롤 시 배경 변경)
  - 네비게이션 링크 (섹션 스크롤)
  - 모바일 햄버거 메뉴
  - 전화번호 + 상담 버튼

### 3.2 Footer
- [x] `components/layout/Footer.tsx`
  - 3단 레이아웃
  - 회사 정보, 서비스 목록, 고객 지원
  - SNS 링크
  - 개인정보처리방침/이용약관 링크

---

## Phase 4: 핵심 섹션

### 4.1 HeroSection
- [x] `components/sections/HeroSection.tsx`
  - 100vh 전체 화면
  - 베이지 그라데이션 배경
  - 헤드라인: "어머니, 혼자 괜찮으세요?"
  - 3개 신뢰 지표 (체크 아이콘)
  - Primary/Secondary CTA 버튼
  - 스크롤 유도 애니메이션

### 4.2 SolutionsSection
- [x] `components/sections/SolutionsSection.tsx`
  - 7가지 서비스 2단 그리드
  - 아이콘 + 제목 + 설명 카드
  - 마지막 항목 중앙 정렬
  - stagger 애니메이션

### 4.3 CustomerCasesSection
- [x] `components/sections/CustomerCasesSection.tsx`
  - 3개 고객 사례 아코디언
  - Before (빨강) / After (초록) 비교
  - 화살표 아이콘 변화 강조

### 4.4 TestimonialsSection
- [x] `components/sections/TestimonialsSection.tsx`
  - 3개 후기 캐러셀
  - 큰 따옴표 아이콘
  - 작성자 정보 (이름, 역할, 지역)
  - 하단 CTA 버튼

### 4.5 FinalCTASection
- [x] `components/sections/FinalCTASection.tsx`
  - 블루 그라데이션 배경
  - 강력한 헤드라인
  - 긴급성 뱃지 (이달 신청 시, 선착순 20명)
  - 신뢰 지표 3개

---

## Phase 5: 신뢰 구축 섹션

### 5.1 StatisticsSection
- [x] `components/sections/StatisticsSection.tsx`
  - 4개 카운터 (1,200명+, 4.8/5.0, 89%, 15시간)
  - 카운트업 애니메이션
  - 보조 지표 3개

### 5.2 CertificationsSection
- [x] `components/sections/CertificationsSection.tsx`
  - 인증/수상 4개
  - 협력기관 (의료 15개, 복지 8개)
  - 미디어 노출 정보

### 5.3 CEOStorySection
- [x] `components/sections/CEOStorySection.tsx`
  - 2단 레이아웃 (사진 + 스토리)
  - 대표 사진 원형 처리
  - 스토리텔링 텍스트
  - 자격 정보 태그

### 5.4 FAQSection
- [x] `components/sections/FAQSection.tsx`
  - 10개 질문 아코디언
  - 2단 그리드 배치

---

## Phase 6: 전환 최적화 섹션

### 6.1 ProblemSection
- [x] `components/sections/ProblemSection.tsx`
  - 3단 그리드 공감 메시지
  - 이모지 아이콘
  - 하단 강조 박스 (15시간 통계)

### 6.2 WhyUsSection
- [x] `components/sections/WhyUsSection.tsx`
  - 3개 차별점
  - 맞춤형 케어, 전문 인력, 24시간 대응

### 6.3 ServicePackagesSection
- [x] `components/sections/ServicePackagesSection.tsx`
  - 3개 가격 카드
  - 추천 패키지 강조 (표준 케어)
  - 환불 보장 안내

### 6.4 ProcessSection
- [x] `components/sections/ProcessSection.tsx`
  - 7단계 타임라인
  - 번호 뱃지 + 설명
  - 소요 시간 표시

---

## Phase 7: 통합 및 마무리

### 7.1 기존 파일 삭제
- [x] `components/About.tsx` 삭제
- [x] `components/Team.tsx` 삭제
- [x] `components/Contact.tsx` 삭제
- [x] `components/Hero.tsx` 삭제
- [x] `components/Services.tsx` 삭제
- [x] `components/Testimonials.tsx` 삭제
- [x] `components/WhyUs.tsx` 삭제
- [x] `components/Navbar.tsx` 삭제
- [x] `components/Footer.tsx` 삭제

### 7.2 App.tsx 업데이트
- [x] 14개 섹션 import
- [x] PRD 순서대로 섹션 배치
  1. HeroSection
  2. ProblemSection
  3. SolutionsSection
  4. StatisticsSection
  5. CustomerCasesSection
  6. TestimonialsSection
  7. WhyUsSection
  8. CertificationsSection
  9. CEOStorySection
  10. ServicePackagesSection
  11. ProcessSection
  12. FAQSection
  13. FinalCTASection
  14. Footer

### 7.3 테스트
- [x] `npm run dev` 개발 서버 실행 확인
- [x] `npm run build` 프로덕션 빌드 성공

### 7.4 Git 커밋 및 푸시
- [x] 변경사항 스테이징
- [x] 커밋 메시지 작성
- [x] origin/main에 푸시

---

## 최종 결과

### 생성된 파일 목록 (37개)

**설정 파일 (2개)**
- `index.html` (수정)
- `package.json` (수정)

**타입/상수 (3개)**
- `types/index.ts`
- `constants/colors.ts`
- `constants/content.ts`

**커스텀 훅 (3개)**
- `hooks/useScrollAnimation.ts`
- `hooks/useCountUp.ts`
- `hooks/useCarousel.ts`

**UI 컴포넌트 (7개)**
- `components/ui/Button.tsx`
- `components/ui/Card.tsx`
- `components/ui/SectionTitle.tsx`
- `components/ui/Accordion.tsx`
- `components/ui/Carousel.tsx`
- `components/ui/Counter.tsx`
- `components/ui/PricingCard.tsx`

**레이아웃 컴포넌트 (2개)**
- `components/layout/Navbar.tsx`
- `components/layout/Footer.tsx`

**섹션 컴포넌트 (13개)**
- `components/sections/HeroSection.tsx`
- `components/sections/ProblemSection.tsx`
- `components/sections/SolutionsSection.tsx`
- `components/sections/StatisticsSection.tsx`
- `components/sections/CustomerCasesSection.tsx`
- `components/sections/TestimonialsSection.tsx`
- `components/sections/WhyUsSection.tsx`
- `components/sections/CertificationsSection.tsx`
- `components/sections/CEOStorySection.tsx`
- `components/sections/ServicePackagesSection.tsx`
- `components/sections/ProcessSection.tsx`
- `components/sections/FAQSection.tsx`
- `components/sections/FinalCTASection.tsx`

**삭제된 파일 (9개)**
- `components/About.tsx`
- `components/Team.tsx`
- `components/Contact.tsx`
- `components/Hero.tsx`
- `components/Services.tsx`
- `components/Testimonials.tsx`
- `components/WhyUs.tsx`
- `components/Navbar.tsx`
- `components/Footer.tsx`

---

## Phase 8: 서비스 상세 페이지 추가

### 8.1 라우팅 설정
- [x] `package.json`에 react-router-dom 추가
- [x] `index.html` importmap에 react-router-dom 추가
- [x] `npm install` 실행

### 8.2 서비스 상세 콘텐츠 정의
- [x] `constants/serviceDetails.ts` 생성
  - ServiceDetail 인터페이스 정의
  - 7개 서비스별 상세 콘텐츠:
    1. 생애 설계 상담 (life-planning)
    2. 의료 케어 매니지먼트 (medical-care)
    3. 일상생활 지원 (daily-support)
    4. 사회적 연결 (social-connection)
    5. 디지털 자서전 제작 (digital-biography)
    6. 법률·행정 지원 (legal-support)
    7. 장례 토탈 케어 (funeral-care)
  - 각 서비스별 포함 내용:
    - 서비스 소개 및 설명
    - 추천 대상 (benefits)
    - 주요 서비스 기능 4개
    - 이용 절차 5~6단계
    - 가격 패키지 2~3개
    - FAQ 3개

### 8.3 페이지 컴포넌트 생성
- [x] `components/pages/` 디렉토리 생성
- [x] `components/pages/HomePage.tsx` - 메인 홈페이지 래퍼
- [x] `components/pages/ServiceDetailPage.tsx` - 서비스 상세 페이지
  - 헤더 (뒤로가기, 로고, 상담 버튼)
  - 히어로 섹션 (아이콘, 제목, 부제목)
  - 서비스 소개 섹션
  - 주요 서비스 그리드 (4개)
  - 이용 절차 타임라인
  - 가격 카드 (3개)
  - FAQ 아코디언
  - CTA 섹션
  - 푸터

### 8.4 라우팅 통합
- [x] `App.tsx` 업데이트
  - BrowserRouter 적용
  - Routes 설정
    - `/` → HomePage
    - `/services/:slug` → ServiceDetailPage
- [x] `SolutionsSection.tsx` 수정
  - Link 컴포넌트로 상세 페이지 연결
  - serviceDetails 데이터 사용

### 8.5 테스트
- [x] `npm run build` 프로덕션 빌드 성공

---

## 서비스 상세 페이지 URL 목록

| 서비스 | URL |
|--------|-----|
| 생애 설계 상담 | `/services/life-planning` |
| 의료 케어 매니지먼트 | `/services/medical-care` |
| 일상생활 지원 | `/services/daily-support` |
| 사회적 연결 | `/services/social-connection` |
| 디지털 자서전 제작 | `/services/digital-biography` |
| 법률·행정 지원 | `/services/legal-support` |
| 장례 토탈 케어 | `/services/funeral-care` |

---

## 최종 파일 목록 업데이트

**추가된 파일 (4개)**
- `constants/serviceDetails.ts` - 7개 서비스 상세 콘텐츠
- `components/pages/HomePage.tsx` - 메인 홈페이지
- `components/pages/ServiceDetailPage.tsx` - 서비스 상세 페이지

**수정된 파일 (4개)**
- `package.json` - react-router-dom 추가
- `index.html` - react-router-dom importmap
- `App.tsx` - 라우팅 설정
- `components/sections/SolutionsSection.tsx` - 상세 페이지 링크

---

## 커밋 정보

```
1차 커밋:
커밋 해시: b54d5a7
브랜치: main
변경사항: 37 files changed, 2122 insertions(+), 699 deletions(-)

2차 커밋 (서비스 상세 페이지):
대기 중
```
