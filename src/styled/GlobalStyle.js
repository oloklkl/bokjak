import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { color, font } from './theme';
import { media } from './media';

const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    width: 100%;
    height: 100%;
  }
  
  body {
    overflow-x: hidden;
    font-size: ${font('body', 'md')};
    line-height: 1.5;
    font-family: 'Noto Sans', sans-serif;
    font-weight: 400;
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
  height: auto;
  
}



.swiper-slide {
  height: auto;
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


  
  .inner { 
  width:100%; 
  box-sizing:border-box; 
  /* position:relative; */
  margin: 0 auto; 
  
  ${media.desktop}{
max-width: 1600px;
padding: 0 30px;
  }
  
  ${media.tablet}{
  padding: 0 30px;
  }

  ${media.mobile}{
    padding: 0 20px;
    }
  }

  .main { width: 100%; }

  button { border:none; cursor: pointer; &:focus {
outline:none !important;
box-shadow:none !important;}}


  .hide{
     display: none;
     text-indent: 9999px;
     width: 0;
     height: 0;
     line-height: 0;
  }
`;

export default GlobalStyle;
