# 📺 BOKJAK (복작)

OTT 콘텐츠 큐레이션 웹사이트

## 📖 소개  

![bokjak-meta](https://github.com/user-attachments/assets/f2a1fee0-9bca-4650-acd2-8aa71a33ed8e)
**복작(BOKJAK)**은 최신 영화와 인기 드라마를 한 곳에서 쉽게 확인하고, 카테고리별로 콘텐츠를 탐색할 수 있는 OTT 콘텐츠 큐레이션 웹사이트입니다.

최근 '스크리나', '치지직' 등 콘텐츠를 함께 즐기는 트렌드에서 착안하여, 실시간 소통이 가능한 "모여보기" 기능과 편안하고 세련된 UI/UX를 제공하는 것이 특징입니다.

---

## 🛠️ 사용 기술 (Tech Stack)
- **React.js** + **Vite**
- **Redux Toolkit**
- **Styled-components / CSS 파일 관리**
- **React Router**
- **TMDB API**
- **GSAP (애니메이션)**
- **Netlify (배포)**

---

## 🔗 링크

**링크:** (https://bokjak-project.netlify.app/)

---

## 📣 슬로건  
**"연결된 순간, 즐거움은 배가 된다"**

---

## 📌 폰트 & 컬러 가이드
- 폰트: **Noto Sans**
- 폰트 사이즈: KRDS 기준
- 프라이머리 컬러: 차분한 **보라색**
- 그레이스케일 및 컬러 값 변수로 관리

---

## 👩‍💻 팀 작업 분배

| 이름   | 담당 업무 |
|:--------|:-----------------------------------|
| **조현경** | 메인페이지, About 페이지, 컴포넌트 디자인, 스타일 가이드 제작 |
| **이승은** | 상세페이지, API 연결, 필모그래피, 비디오 페이지, 종합적으로 오류+스타일+데이터 수정 |
| **조성주** | 헤더, 푸터, 로그인, 회원가입, 마이페이지, 알림페이지, 서브페이지, 멤버십 페이지,plans 페이지 |

---

## 💌 Open Graph

![bokjak](https://github.com/user-attachments/assets/7ebf3c3b-e956-4b3b-926d-2f2ba8e692ef)

- meta tags를 통해 Facebook, twitter, linkedin, discord, kakao talk 등 링크를 전달 했을 때 링크에 대한 정보를 볼 수 있도록 구현
  
```html
<!-- index.html -->

<meta property="og:type" content="website" />
<meta property="og:title" content="조성주 • BOKJAK" />
<meta property="og:description" content="복작 팀 프로젝트" />
<meta property="og:image" content="https://bokjak-project.netlify.app/meta/bokjak-meta.jpg" />
<meta property="og:url" content="https://bokjak-project.netlify.app/" />
```
---

## 🗂️ 주요 기능

### 🏠 메인 페이지
- 프로모션 콘텐츠 슬라이더
- 트렌딩 콘텐츠 인기 순위 표시
- 테마별 추천 콘텐츠 섹션
- 모여보기 방 리스트 및 알림 예약 기능
- 콘텐츠 카드 호버 시 간단 정보 표시
- 공개 예정 작품 미리보기 및 알림 설정

### ℹ️ About 페이지
- 복작 서비스 소개 및 멤버십 구독 정보
- 콘텐츠 보유량, 디바이스 지원, 모여보기 설명
- FAQ(자주 묻는 질문) 섹션
- 구독 및 더 알아보기 버튼 제공

### 🎬 콘텐츠 디테일 페이지
- 콘텐츠 미리보기 영상 및 기본 정보
- 장르, 감독, 출연진, 관련 콘텐츠 표시
- TV쇼의 경우 에피소드 정보 제공
- 비로그인 시 기능 클릭 시 로그인 안내 메시지

### 🔍 검색 페이지
- 콘텐츠 제목 기반 검색
- 실시간 인기 검색어 제공
- 최근 검색어 저장 및 삭제 가능

### ❤️ 로그인 & 마이페이지
- 회원가입 및 로그인 기능
- 좋아요, 북마크, 시청 중 콘텐츠 관리
- 알림 페이지에서 모여보기 및 공개 예정 콘텐츠 관리
- 로그아웃 기능

### 🗨️ 모여보기
- 콘텐츠별 모여보기 방 개설 및 URL 공유
- 영상 재생 중 채팅창 및 감정 표현 이모티콘
- 방 공개 여부 및 비밀번호 설정 가능

---


## 📂 프로젝트 구조

- **node_modules/** : 프로젝트 의존성 패키지
- **public/** : 정적 파일 (favicon, 이미지 등)
- **src/**
  - **assets/** : 이미지, 폰트 등 정적 리소스
  - **common/** : 공통으로 사용되는 유틸리티 함수 및 상수
  - **components/** : 페이지에서 공통으로 사용하는 컴포넌트
  - **pages/** : 각 페이지별 컴포넌트 (메인, 디테일, 검색, 로그인 등)
  - **store/** : 상태 관리를 위한 저장소 및 슬라이스 파일
  - **styles/** : 전역 스타일 및 스타일 관련 파일
  - **ui/** : 재사용 가능한 UI 컴포넌트
  - **App.jsx** : 전체 페이지 라우터 및 전역 레이아웃 정의 파일
  - **main.jsx** : React 애플리케이션 엔트리 파일
- **gitignore** : Git 버전 관리에서 제외할 파일 목록
- **eslint.config.js** : ESLint 설정 파일
- **index.html** : 애플리케이션의 HTML 템플릿
- **netlify.toml** : Netlify 배포 설정
- **package.json** : 프로젝트 의존성 및 스크립트 설정 파일
- **README.md** : 프로젝트 문서
- **vite.config.js** : Vite 설정 파일
- **yarn.lock** : Yarn 의존성 잠금 파일

### 📑 디렉토리 구조

```
bokjak/
├── node_modules/
├── public/
├── src/
│   ├── assets/
│   ├── common/
│   ├── components/
│   ├── pages/
│   ├── store/
│   ├── styles/
│   ├── ui/
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── netlify.toml
├── package.json
├── README.md
├── vite.config.js
└── yarn.lock
```

## ⏰ 커밋 히스토리

[내 커밋 히스토리 보러가기](https://github.com/oloklkl/bokjak/commits/main/)
<br/>
<br/>
<br/>

