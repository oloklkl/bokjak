import styled from 'styled-components';

export const AboutWrap = styled.div`
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
  }

  @media (max-width: 768px) {
    h2 {
      font-size: large;
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
    font-size: xx-small;
  }
  h5 {
    font-size: large;
  }
`;
