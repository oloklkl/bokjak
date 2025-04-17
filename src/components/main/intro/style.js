import styled from 'styled-components';
import { media } from '../../../styled/media';
import { color, font } from '../../../styled/theme';

//cont
export const IntroSection = styled.section`
    display: flex;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

//////////////////////////////////////////
//list
export const IntroSliderCont = styled.div`
    position: relative;
    width: 100%;

    .swiper {
        width: 100%;
        height: 100%;
        overflow: visible;
    }

    .swiper-wrapper {
        display: flex;
        justify-content: flex-start;
    }

    .swiper-slide {
        width: 100%;
        height: 100%;
    }
`;

///////////////////////////////////////
//item
export const IntroBannerCont = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: row;
    border-radius: 7px;
`;

// export const IntroImgCont = styled.div`
//   position: relative;
//   width: 100%;

//   &::before {
//     content: '';
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     background: linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0) 70%);
//     border-radius: 7px;
//   }

//   .introSlideImg {
//     width: 100%;
//     height: 100%;
//     border-radius: 7px;
//     object-fit: cover;
//   }
// `
export const IntroImgCont = styled.div`
    position: relative;
    width: 100%;
    max-height: 700px;
    overflow: hidden;
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0) 70%);
        border-radius: 7px;
    }

    .introSlideImg {
        width: 100%;
        height: 100%;
        border-radius: 7px;
        object-fit: cover;
        ${media.tablet} {
            min-height: 650px;
        }
        ${media.mobile} {
            min-height: 450px;
        }
    }
`;
export const IntroTextCont = styled.div`
    position: absolute;
    bottom: 40px;
    left: 40px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    text-align: left;
    gap: 16px;
    opacity: 0;
    transform: translateY(100px);
    transition: all 0.7s ease;
    .swiper-slide-active & {
        opacity: 1;
        transform: translateY(0);
    }
    ${media.tablet} {
        width: 90%;
        gap: 12px;
        position: absolute;
        bottom: 30px;
        left: 5%;
        transform: translateY(80px);
    }
    ${media.mobile} {
        gap: 10px;
        position: absolute;
        bottom: 15px;
        left: 5%;
        transform: translateY(60px);
    }

    .introSlideLogo {
        width: 80%;
        height: 100px;
        object-fit: contain;
        object-position: left center;
        ${media.tablet} {
            width: 60%;
            height: 110px;
        }
        ${media.mobile} {
            width: 50%;
            height: 70px;
        }
    }

    span {
        width: 500px;
        height: 90px;
        white-space: normal;
        overflow: hidden;
        text-overflow: ellipsis;
        color: ${color('gray', '0')};
        font-size: ${font('title', 'md')};
        ${media.tablet} {
            width: 100%;
            height: 50px;
            font-size: ${font('body', 'md')};
        }
        ${media.mobile} {
            height: 40px;
            font-size: ${font('body', 'sm')};
        }
    }
    .introBtn {
        color: ${color('gray', '0')};
        font-size: ${font('title', 'md')};
        font-weight: bold;
        ${media.tablet} {
            width: auto;
            font-size: ${font('title', 'md')};
        }
        ${media.mobile} {
            height: 50px;
            font-size: ${font('body', 'md')};
        }
    }
`;
