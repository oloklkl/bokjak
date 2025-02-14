import styled from 'styled-components'
import { color, font } from '../../styled/theme'
import { media } from '../../styled/media'

export const IntroSection = styled.section`
  display: flex;
  width: 100%;
  height: 100%;
`
export const IntroSliderCont = styled.div`
  width: 100%;
  .swiper {
    overflow: visible;
    width: 100%;
    border-radius: 12px;
  }
  .swiper-slide {
    width: 100%;
    height: auto;
  }
`
export const IntroBannerCont = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
`

export const IntroImgCont = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.8),
      rgba(0, 0, 0, 0) 54%
    );
    border-radius: 12px;
  }

  .introSlideImg {
    width: 100%;
    height: 100%;
    border-radius: 12px;
    object-fit: cover;
  }
`

export const IntroTextCont = styled.div`
  position: absolute;
  bottom: 40px;
  left: 40px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: left;
  gap: 16px;
  white-space: pre-line;
  ${media.tablet} {
    width: 90%;
    /* height: 100%; */
    gap: 10px;
    position: absolute;
    bottom: 50%;
    left: 50%;
    transform: translate(-50%, 95%);
  }

  .introSlideLogo {
    width: 95%;
    height: 160px;
    object-fit: contain;
    object-position: left center;
    ${media.tablet} {
      width: 90%;
      height: 90px;
    }
    ${media.mobile} {
      width: 80%;
      height: 60px;
    }
  }

  span {
    width: 100%;
    color: ${color('gray', '0')};
    font-size: ${font('title', 'lg')};
    ${media.tablet} {
      font-size: ${font('title', 'md')};
    }
    ${media.mobile} {
      font-size: ${font('body', 'md')};
    }
  }
  .introBtn {
    color: ${color('gray', '0')};
    font-size: ${font('title', 'md')};
    font-weight: bold;
    ${media.tablet} {
      width: 100%;
      max-width: 600px;
      height: 60px;
      font-size: ${font('title', 'md')};
    }
    ${media.mobile} {
      width: 100%;
      max-width: 310px;
      height: 42px;
      font-size: ${font('title', 'sm')};
    }
  }
`

/////////////////////////////
