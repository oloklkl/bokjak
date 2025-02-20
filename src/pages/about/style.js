import styled from 'styled-components';

export const AboutWrap = styled.div`
  .no-padding {
    padding: 0 !important;
  }
  width: 100%;
  .inner {
    padding: 100px 0;
  }

  body {
    margin: 0;
    padding: 0;
    overflow-x: hidden; /* 가로 스크롤 방지 */
  }
  section {
    background: #111111;
    width: 100vw;
    overflow-x: hidden;
    margin: 0 auto;
    display: block;
  }

  h1 {
    font-size: 55px; /* 기본 크기 (데스크톱) */
  }

  @media (max-width: 768px) {
    /* 태블릿 크기 */
    h1 {
      font-size: 50px;
    }
  }

  @media (max-width: 390px) {
    /* 모바일 크기 */
    h1 {
      font-size: large;
    }
  }

  h2 {
    font-size: xx-large;
    font-weight: bold;
  }

  @media (max-width: 768px) {
    h2 {
      font-size: x-large;
    }
  }

  @media (max-width: 390px) {
    h2 {
      font-size: large;
    }
  }

  h3 {
    font-size: medium;
  }

  h4 {
    font-size: x-small;
  }
  h5 {
    font-size: large;
  }
  h6 {
    text-align: center;

    font-size: x-large;
  }
  @media (max-width: 768px) {
    h6 {
      text-align: center;
      font-size: large;
    }
  }
  @media (max-width: 390px) {
    h6 {
      font-size: xx-small;
    }
  }

  //무브-비쥬얼 움직이는거

  section::-webkit-scrollbar {
    display: none;
  }

  @keyframes scroll-left {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }

  .scroll-section {
    height: 150px;
    overflow: hidden;
    position: relative;
    margin-bottom: 10px;
    white-space: nowrap;
  }

  .carousel-track {
    display: flex;
    gap: 15px;
    position: absolute;
    width: 200%;
    animation: scroll-left 20s linear infinite;
  }

  .carousel-track .carousel-item {
    width: 250px;
    height: 150px;
    background-size: cover;
    background-position: center;
    border-radius: 8px;
    flex-shrink: 0;
  }

  .hover\:scale-105:hover {
    transform: scale(1.05);
  }
`;
