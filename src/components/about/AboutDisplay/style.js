import styled from 'styled-components'
import { color, font } from '../../../styled/theme'
import { media } from '../../../styled/media'

export const DisplayWrap = styled.div`
  padding: 50px 0 100px 0;
  width: 100%;
  height: 110vh;
  margin-bottom: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  ${media.tablet} {
    padding: 40px 0 100px 0;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    height: auto;
    gap: 80px;
  }
  ${media.mobile} {
    padding: 30px 0 80px 0;
    gap: 50px;
  }
  .text-area {
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: 50px;
    height: 500px;
    ${media.tablet} {
      height: 400px;
      gap: 30px;
    }
    ${media.tablet} {
      height: auto;
      gap: 20px;
    }
    &__headTit {
      display: flex;
      flex-direction: column;
      position: relative;
      h2 {
        font-weight: bold;
        font-size: ${font('display', 'lg')};
        ${media.tablet} {
          font-size: ${font('display', 'sm')};
        }
        ${media.mobile} {
          font-size: ${font('heading', 'sm')};
        }
      }
      .bokjak-eyes {
        position: relative;
        &__icon {
          position: absolute;
          top: -70px;
          left: 290px;
          ${media.tablet} {
            top: -50px;
            left: 175px;
          }
          ${media.mobile} {
            top: -41px;
            left: 135px;
          }
          img {
            width: 64px;
            height: 64px;
            ${media.tablet} {
              width: 40px;
              height: 40px;
            }
            ${media.mobile} {
              width: 32px;
              height: 32px;
            }
          }
        }
      }
    }
    p {
      font-weight: bold;
      font-size: ${font('heading', 'sm')};
      ${media.tablet} {
        font-size: ${font('title', 'lg')};
      }
      ${media.mobile} {
        font-size: ${font('body', 'sm')};
      }
      .highlight {
        color: ${color('primary', '60')};
      }
    }
    .login-goto {
      background-color: ${color('gray', '70')};
      font-size: ${font('body', 'lg')};
      font-weight: bold;
      ${media.tablet} {
        width: 100%;
        height: 60px;
      }
      ${media.mobile} {
        height: 42px;
        font-size: ${font('body', 'sm')};
      }
    }
  }
  .aboutVideo-wrap {
    width: 47%;
    position: relative;
    ${media.tablet} {
      display: flex;
      flex-direction: row-reverse;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      gap: 20px;
    }
    ${media.mobile} {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: stretch;
      width: 100%;
      gap: 20px;
    }
    .video-cont {
      background-color: ${color('gray', '70')};
      width: 100%;
      height: 500px;
      border-radius: 10px;
      transition: all 0.5s ease-in-out;
      ${media.tablet} {
        width: 100%;
        height: 400px;
      }
      ${media.mobile} {
        width: 100%;
        height: 300px;
      }
      video {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .msBtn {
      position: absolute;
      top: 0;
      left: -21.5%;
      width: 17%;
      height: 500px;
      background: linear-gradient(#a100ff, #ff00ff);
      color: white;
      font-weight: bold;
      border-radius: 10px;
      padding: 20px;
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      &:hover {
        background: black;
        transition: all 0.5s ease-in-out;
        ${media.tablet} {
          &:hover {
            background: linear-gradient(#a100ff, #ff00ff);
            transition: none;
          }
        }
      }

      ${media.tablet} {
        position: static;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 400px;
        padding: 20px 10px;
      }

      ${media.mobile} {
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
        height: 80px;
        padding: 16px;
      }

      .ms-title {
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: left;
        gap: 10px;
        writing-mode: vertical-rl;
        text-orientation: mixed;
        line-height: 1.2;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-rendering: optimizeLegibility;
        height: 100%;
        min-height: 200px;
        max-height: 100%;
        min-width: 50px;
        padding: 10px;
        ${media.mobile} {
          writing-mode: horizontal-tb;
          text-orientation: mixed;
        }

        span {
          font-weight: bold;
          font-size: ${font('heading', 'xs')};
          ${media.tablet} {
            font-size: ${font('title', 'lg')};
          }
          ${media.mobile} {
            font-size: ${font('body', 'md')};
          }
        }
      }
      .ms-goto {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;
        ${media.mobile} {
          width: 100%;
          align-items: flex-end;
          gap: 6px;
        }
        &__icon {
          font-weight: bold;
          &:hover {
            background-color: transparent;
          }
          svg {
            width: 100%;
            height: 100%;
          }
        }
        span {
          font-weight: extraBold;
          font-size: ${font('detail', 'md')};

          ${media.tablet} {
            font-size: ${font('body', 'xsm')};
          }

          ${media.mobile} {
            font-size: ${font('label', 'xsm')};
          }
        }
      }
    }
  }
`

export const pinScroll = styled.div`
  height: 100vh;
`
