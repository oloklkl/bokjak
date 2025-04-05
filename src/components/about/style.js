import styled from 'styled-components'
import { media } from '../../styled/media'
import { color, font } from '../../styled/theme'

export const AboutMemberShipWrap = styled.div`
  position: relative;
  margin-top: 300vh;
  padding: 100px 0;
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
      background: #fff;
    }
    .star {
      position: absolute;
      top: 0;
      left: 0;
      width: 300px;
      height: 300px;
    }
    .flower {
      position: absolute;
      top: 0;
      right: 0;
      width: 300px;
      height: 300px;
    }
    .flower-sm {
      position: absolute;
      bottom: 30px;
      left: 0;
      width: 100px;
      height: 100px;
    }
    .ghost {
      position: absolute;
      bottom: 0;
      right: 0;
      width: 200px;
      height: 200px;
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
        min-width: 440px;
        min-height: 300px;
      }
      ${media.mobile} {
        min-width: 260px;
        min-height: 330px;
      }
    }
  }
`
