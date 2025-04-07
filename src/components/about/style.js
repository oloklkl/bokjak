import styled from 'styled-components'
import { media } from '../../styled/media'
import { color, font } from '../../styled/theme'

export const AboutMemberShipWrap = styled.div`
  position: relative;
  margin-top: 300vh;
  padding: 300px 0;
  ${media.tablet} {
    margin-top: 0;
    padding: 100px 0;
  }
  ${media.mobile} {
    padding: 60px 0;
  }
  .icon-floating {
    /* display: none; */
    ${media.mobile} {
      display: none;
    }
    .icon {
      @keyframes shake {
        0% {
          transform: translate(0, 0) rotate(0deg);
        }
        20% {
          transform: translate(-2px, 2px) rotate(-2deg);
        }
        40% {
          transform: translate(2px, -2px) rotate(2deg);
        }
        60% {
          transform: translate(-2px, 2px) rotate(-2deg);
        }
        80% {
          transform: translate(2px, -2px) rotate(2deg);
        }
        100% {
          transform: translate(0, 0) rotate(0deg);
        }
      }
    }
    .star {
      position: absolute;
      top: 120px;
      left: -300px;
      width: 500px;
      height: 500px;
      ${media.tablet} {
        top: 60px;
        left: -160px;
        width: 270px;
        height: 270px;
      }
    }
    .flower {
      position: absolute;
      top: 270px;
      right: -300px;
      width: 390px;
      height: 370px;
      ${media.tablet} {
        top: 250px;
        right: -140px;
        width: 200px;
        height: 200px;
      }
    }
    .flower-sm {
      position: absolute;
      bottom: 200px;
      left: -100px;
      width: 210px;
      height: 200px;
      ${media.tablet} {
        bottom: 80px;
        left: -90px;
        width: 140px;
        height: 140px;
      }
    }
    .ghost {
      position: absolute;
      bottom: 230px;
      right: 0;
      width: 200px;
      height: 150px;
      transition: transform 0.2s ease;
      ${media.tablet} {
        transition: none;
        bottom: 80px;
        width: 110px;
        height: 80px;
      }
    }
    .ghost:hover {
      animation: shake 0.5s ease-in-out;
      ${media.tablet} {
        animation: none;
      }
    }
    .ghost-text {
      position: absolute;
      bottom: 370px;
      right: 50px;
      transform: translateY(-50%);
      opacity: 0;
      transition: opacity 0.3s ease;
      font-weight: bold;
      color: ${color('gray', 40)};
      font-size: ${font('body', 'md')};
      background: rgba(0, 0, 0, 0.6);
      padding: 6px 10px;
      border-radius: 8px;
      pointer-events: none;
    }
    .ghost:hover + .ghost-text {
      opacity: 1;
      ${media.tablet} {
        opacity: 0;
      }
    }
  }
  .aboutMemberShip-cont {
    padding: 50px 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 80px;
    ${media.tablet} {
      padding: 30px 0;
      gap: 60px;
    }
    ${media.mobile} {
      padding: 20px 0;
    }
  }
  .text-area {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 80px;
    text-align: center;
    gap: 26px;
    width: 100%;
    ${media.tablet} {
      gap: 16px;
      margin-bottom: 60px;
    }
    ${media.tablet} {
      gap: 16px;
      margin-bottom: 40px;
    }
    h1 {
      font-size: ${font('display', 'lg')};
      font-weight: 900;
      background: linear-gradient(to right, #e0c2ff, #8000ff);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      color: transparent;
      ${media.tablet} {
        font-size: ${font('display', 'md')};
      }
      ${media.mobile} {
        font-weight: bold;
        font-size: ${font('heading', 'sm')};
      }
    }
    .subtitle {
      font-size: ${font('heading', 'sm')};
      font-weight: bold;
      color: ${color('gray', 0)};
      ${media.tablet} {
        font-size: ${font('heading', 'xs')};
      }
      ${media.mobile} {
        font-size: ${font('body', 'md')};
      }
    }
    .desc {
      font-weight: normal;
      font-size: ${font('title', 'lg')};
      color: ${color('gray', 30)};
      ${media.tablet} {
        font-size: ${font('body', 'sm')};
      }
      ${media.mobile} {
        word-break: keep-all;
        font-size: ${font('body', 'xsm')};
      }
      .highlight {
        font-weight: bold;
        color: ${color('primary', 70)};
      }
    }
  }
  .stats {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    gap: 60px;
    width: 100%;
    ${media.tablet} {
      gap: 24px;
    }
    ${media.mobile} {
      flex-direction: column;
      text-align: center;
    }

    .stat {
      width: 300px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 16px;
      text-align: center;
      ${media.tablet} {
        width: 200px;
      }
      ${media.mobile} {
        align-items: center;
        width: 100%;
        padding: 10px 0;
      }
      .t-only {
        display: none;
        ${media.tablet} {
          display: block;
        }
      }
      h3 {
        font-size: ${font('title', 'xlg')};
        font-weight: bold;
        color: ${color('gray', 0)};
        ${media.tablet} {
          font-weight: bold;
          font-size: ${font('body', 'lg')};
        }
      }
      p {
        font-size: ${font('body', 'md')};
        font-weight: lighter;
        color: ${color('gray', 30)};
        ${media.tablet} {
          font-size: ${font('body', 'sm')};
          word-break: keep-all;
        }
        ${media.mobile} {
          font-size: ${font('body', 'xsm')};
        }
        .m-only {
          display: none;
          ${media.mobile} {
            display: block;
          }
        }
      }
    }
    .line {
      ${media.mobile} {
        width: 70%;
        height: 1px;
        margin: 0 auto;
      }

      &::before {
        content: '';
        display: block;
        width: 1px;
        height: 100%;
        background-color: ${color('gray', 40)};
        ${media.mobile} {
          width: 100%;
          height: 1px;
        }
      }
    }
  }
  .memberShip-goto {
    background: linear-gradient(90deg, #dd33ff, #8000ff);
    color: white;
    font-weight: bold;
    border-radius: 7px;
    padding: 20px;
    font-size: ${font('body', 'lg')};
    &:hover {
      transition: all 0.3s ease-in-out;
      background: linear-gradient(90deg, #b401cf, #4f01b6);
      color: white;
    }
    ${media.tablet} {
      width: 270px;
      height: 55px;
      font-size: ${font('body', 'md')};
    }
    ${media.mobile} {
      width: 250px;
      height: 42px;
      font-size: ${font('detail', 'md')};
    }
  }
`

export const AboutHotContentsWrap = styled.div`
  padding: 200px 0;
  width: 100%;
  height: 100%;
  ${media.tablet} {
    padding: 100px 0;
  }
  ${media.mobile} {
    padding: 60px 0;
  }
  .aboutHotContents-cont {
    padding: 50px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 100px;
    ${media.tablet} {
      padding: 40px 0;
      gap: 80px;
    }
    ${media.mobile} {
      padding: 30px 0;
      gap: 60px;
    }
  }
  h2 {
    font-size: ${font('display', 'md')};
    font-weight: bold;
    color: ${color('gray', 0)};
    text-align: center;
    ${media.tablet} {
      font-size: ${font('display', 'sm')};
    }
    ${media.mobile} {
      font-size: ${font('title', 'exlg')};
    }
  }
  .trending-swiper {
    .swiper-slide {
      transition: transform 0.3s ease, filter 0.3s ease;
      transform: scale(0.8);
      z-index: 1;
      transform-origin: center center;
    }

    .swiper-slide-prev,
    .swiper-slide-next {
      z-index: 2;
    }

    .swiper-slide-active {
      transform: scale(1);
      z-index: 3;
    }
    .swiper-slide-active .overlay {
      opacity: 0;
      pointer-events: none;
    }
  }

  .content-card {
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.7);
    background: ${color('gray', 40)};
    width: 100%;
    min-width: 800px;
    height: 100%;
    min-height: 460px;
    border-radius: 12px;
    ${media.tablet} {
      min-width: 440px;
      min-height: 300px;
    }
    ${media.mobile} {
      min-width: 260px;
      min-height: 330px;
    }
    img {
      width: 100%;
      height: 100%;
    }
    .overlay {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      min-width: 800px;
      height: 100%;
      min-height: 460px;
      border-radius: 12px;
      background: rgba(0, 0, 0, 0.4);
      ${media.tablet} {
        max-width: 440px;
        min-height: 300px;
        overflow: hidden;
      }
      ${media.mobile} {
        min-width: 260px;
        min-height: 330px;
      }
    }
  }
`

export const AboutUpdateContentsWrap = styled.div`
  padding: 200px 0;
  width: 100%;
  height: 100%;
  ${media.tablet} {
    padding: 100px 0;
  }
  ${media.mobile} {
    padding: 60px 0;
  }
  .aboutUpdateContents-cont {
    padding: 50px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 120px;
    ${media.tablet} {
      padding: 40px 0;
      gap: 80px;
    }
    ${media.mobile} {
      padding: 30px 0;
      gap: 60px;
    }
  }
  h2 {
    font-size: ${font('display', 'md')};
    font-weight: bold;
    color: ${color('gray', 0)};
    text-align: center;
    ${media.tablet} {
      font-size: ${font('display', 'sm')};
    }
    ${media.mobile} {
      font-size: ${font('title', 'exlg')};
    }
    .tM-only {
      display: none;
      ${media.tablet} {
        display: block;
      }
    }
  }

  .updateCont-swiper {
    position: relative;

    .swiper-slide {
      width: 100%;
      max-width: 480px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      ${media.tablet} {
        max-width: none;
      }
    }

    .swiper-pagination {
      margin-top: 40px;
      text-align: center;
      position: static;
      ${media.tablet} {
        margin-top: 30px;
      }
      ${media.mobile} {
        margin-top: 20px;
      }
    }

    .swiper-pagination-bullet {
      width: 16px;
      height: 16px;
      background-color: ${color('gray', 30)};
      opacity: 1;
      margin: 0 8px;
      border-radius: 50%;
      transition: background-color 0.3s;
      ${media.tablet} {
        width: 14px;
        height: 14px;
      }
      ${media.mobile} {
        width: 12px;
        height: 12px;
        margin: 0 6px;
      }
    }

    .swiper-pagination-bullet-active {
      background-color: ${color('primary', 70)};
    }

    .updateCont-card {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 550px;
      border-radius: 16px;
      ${media.tablet} {
        height: 370px;
      }
      ${media.mobile} {
        height: 330px;
        border-radius: 14px;
      }
      img {
        width: 100%;
        height: 100%;
        border-radius: 16px;
        object-position: center center;
      }
      .text-area {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: flex-start;
        gap: 10px;
        width: 100%;
        height: 100%;
        padding: 30px;
        ${media.mobile} {
          gap: 6px;
        }
        h3 {
          font-size: ${font('heading', 'xs')};
          font-weight: bold;
          color: ${color('gray', 0)};

          ${media.mobile} {
            font-size: ${font('body', 'lg')};
          }
        }
        p {
          text-align: left;
          font-size: ${font('body', 'md')};
          font-weight: normal;
          color: ${color('gray', 0)};
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
          /* ${media.tablet} {
            font-size: ${font('detail', 'sm')};
          } */
          ${media.mobile} {
            font-size: ${font('detail', 'md')};
          }
        }
      }
      .overlay {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        max-width: 480px;
        height: 100%;
        max-height: 550px;
        border-radius: 16px;
        background: rgba(0, 0, 0, 0.2);
        ${media.tablet} {
          max-width: none;
          max-height: 370px;
        }
        ${media.mobile} {
          max-height: 330px;
          border-radius: 14px;
        }
      }
    }
  }
`

export const AboutFaqWrap = styled.div`
  padding: 200px 0 0 0;
  width: 100%;
  height: 100%;
  ${media.tablet} {
    padding: 100px 0;
  }
  ${media.mobile} {
    padding: 60px 0;
  }
  .aboutFaq-cont {
    padding: 50px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 120px;
    ${media.tablet} {
      padding: 40px 0;
      gap: 80px;
    }
    ${media.mobile} {
      padding: 30px 0;
      gap: 60px;
    }
  }
  .aboutFaq-cont {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 100px;
    ${media.tablet} {
      padding: 40px 0;
      gap: 80px;
    }
    ${media.mobile} {
      padding: 30px 0;
      gap: 60px;
    }
  }
  h2 {
    font-size: ${font('display', 'sm')};
    font-weight: bold;
    color: ${color('gray', 0)};
    text-align: center;
    ${media.tablet} {
      font-size: ${font('heading', 'sm')};
    }
    ${media.mobile} {
      font-size: ${font('heading', 'xs')};
    }
  }
  .faqBox-cont {
    display: flex;
    flex-direction: column;
    gap: 20px;
    ${media.tablet} {
      gap: 16px;
    }
    ${media.mobile} {
      gap: 10px;
    }

    .fqpItem {
      width: 100%;
      background-color: ${color('gray', 80)};
      border-radius: 7px;
      .fqpItem__icon {
        .dropDown {
          background: transparent;
          svg {
            width: 32px;
            height: 32px;
            ${media.mobile} {
              width: 28px;
              height: 28px;
            }
          }
        }
      }

      &__question {
        padding: 20px 30px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        font-weight: bold;
        font-size: ${font('title', 'md')};
        background-color: ${color('gray', 80)};
        cursor: pointer;
        border-radius: 7px;
        ${media.tablet} {
          padding: 20px;
          font-size: ${font('body', 'md')};
        }
        ${media.mobile} {
          gap: 20px;
          font-size: ${font('body', 'sm')};
        }

        &.active {
          border-radius: 7px 7px 0px 0px;
          background-color: ${color('primary', 70)};
        }
      }
      &__answer {
        font-weight: lighter;
        font-size: ${font('body', 'md')};
        background-color: ${color('gray', 80)};
        color: ${color('gray', 30)};
        max-height: 0;
        overflow: hidden;
        transition: all 0.3s ease-in-out;
        line-height: 1.5;
        padding: 0 30px;
        ${media.tablet} {
          font-size: ${font('body', 'sm')};
          padding: 0 20px;
        }
        ${media.mobile} {
          font-size: ${font('body', 'xsm')};
        }
        &.show {
          width: 100%;
          background-color: ${color('gray', 70)};
          max-height: 500px;
          padding: 30px;
          border-radius: 0px 0px 7px 7px;
          ${media.tablet} {
            padding: 20px;
          }
        }
      }
    }
  }
`
