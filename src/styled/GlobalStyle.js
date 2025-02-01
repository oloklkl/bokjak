import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { color, font } from './theme';

const GlobalStyle = createGlobalStyle`
  ${reset}
  /* other styles */
  
  body {
    font-size: ${font('body', 'md')};
    line-height: 1.5;
    font-family: 'Noto Sans KR', sans-serif;
    color: ${color('gray', '0')};
    background: ${color('gray', '90')};
  }
  a {
    text-decoration: none;
    color: ${color('gray', '0')}; 
  }
  li { list-style:none }
  img { vertical-align: top; }


  
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}


  
  .inner { width:1400px; margin:auto; box-sizing:border-box; position:relative; padding:120px 0; }
  .main { width: 100%; }

  button { border:none; cursor: pointer; }
  .hide{
     display: none;
     text-indent: 9999px;
     width: 0;
     height: 0;
     line-height: 0;
  }
`;

export default GlobalStyle;
