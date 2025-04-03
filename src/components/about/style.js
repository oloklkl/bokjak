import styled from 'styled-components'
import { media } from '../../styled/media'
import { color, font } from '../../styled/theme'

export const DisplayWrap = styled.div`
  padding: 50px 0 100px 0;
  width: 100%;
  height: 110vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  .text-area {
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: 40px;
    &__headTit {
      position: relative;
      h2 {
        font-weight: bold;
        font-size: ${font('display', 'md')};
      }
      .bokjak-eyes {
        &__icon {
          position: absolute;
          top: 74%;
          left: 46%;
          img {
            width: 53px;
            height: 53px;
          }
        }
      }
    }
    p {
      font-weight: bold;
      font-size: ${font('title', 'lg')};
      .highlight {
        color: ${color('primary', '60')};
      }
    }
    .login-goto {
      background-color: ${color('gray', '70')};
      font-size: ${font('body', 'lg')};
      font-weight: bold;
    }
  }
  .aboutVideo-wrap {
    width: 50%;
    position: relative;
    .video-cont {
      background-color: ${color('gray', '70')};
      width: 100%;
      height: 400px;
      border-radius: 10px;
      transition: all 0.5s ease-in-out;
      /* position: relative; */

      video {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .msBtn {
      position: absolute;
      left: -21.5%;
      top: 22.5%;
      transform: translateY(-50%);
      width: 17%;
      height: 400px;
      background: linear-gradient(#a100ff, #ff00ff);
      color: white;
      font-weight: bold;
      border-radius: 10px;
      padding: 20px;
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .ms-title {
        display: flex;
        flex-direction: column;
        gap: 10px;
        transform: rotate(90deg);
      }
      .ms-goto {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 6px;
        &__icon {
          font-weight: bold;
          &:hover {
            background-color: transparent;
            scale: 0.8;
          }
          svg {
            width: 100px;
            height: 100px;
          }
        }
        span {
          font-weight: bold;
          font-size: ${font('label', 'xsm')};
        }
      }
    }
  }
`
