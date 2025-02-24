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

  .image-scroll {
    width: 100%;
    overflow: visible; /* 잘린 이미지가 보이도록 변경 */
    white-space: nowrap;
    padding: 5px;
    position: relative;
  }

  .image-container {
    display: flex;
    gap: 10px;
    justify-content: flex-start;
  }

  .image-item img {
    width: 200px;
    height: auto;
    object-fit: cover;
    border-radius: 8px;
  }

  .scroll-1 .image-container {
    transform: translateX(-39%);
  }

  .scroll-2 .image-container {
    transform: translateX(-15%);
  }

  .scroll-3 .image-container {
    transform: translateX(-20%);
  }

  .image-scroll::-webkit-scrollbar {
    display: none;
  }
`;
