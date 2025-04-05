import styled from 'styled-components'
import { media } from '../../../styled/media'
import { color, font } from '../../../styled/theme'

export const AboutWhyBokjakWrap = styled.div`
  padding: 200px 0;
  width: 100%;
  height: 100%;
  ${media.tablet} {
    padding: 100px 0;
  }
  ${media.mobile} {
    padding: 60px 0;
  }
  .aboutWhyBokjak-cont {
    padding: 50px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 150px;
    ${media.tablet} {
      padding: 40px 0;
      gap: 100px;
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
    .highlight {
      font-weight: bold;
      color: ${color('primary', 70)};
    }
  }
  .cardBox-cont {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 200px;
    padding: 0 80px;
    ${media.tablet} {
      flex-direction: column;
      gap: 100px;
      padding: 0 100px;
    }
    ${media.mobile} {
      gap: 80px;
      padding: 0;
    }
    .cardBox {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 80px;
      width: 100%;
      height: 380px;
      &.reverse {
        flex-direction: row-reverse;
        ${media.tablet} {
          flex-direction: column;
        }
      }
      ${media.tablet} {
        flex-direction: column-reverse;
        gap: 30px;
        height: auto;
        width: 100%;
      }

      .cardBox-img {
        display: flex;
        flex: 1;
        width: 100%;
        height: 100%;
        ${media.tablet} {
          flex: none;
          width: 100%;
          justify-content: center;
          align-items: center;
        }
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 12px;
          ${media.tablet} {
            max-width: 100%;
            object-fit: contain;
          }
        }
      }
      .cardBox-text {
        display: flex;
        flex: 1;
        ${media.tablet} {
          flex: none;
          width: 100%;
        }
        .text-area {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          gap: 30px;
          width: 100%;
          ${media.tablet} {
            justify-content: center;
            align-items: center;
            text-align: center;
            height: 300px;
          }
          ${media.mobile} {
            height: 250px;
          }
          h3 {
            font-size: ${font('heading', 'sm')};
            font-weight: bold;
            color: ${color('gray', 0)};
            ${media.mobile} {
              font-size: ${font('heading', 'xs')};
            }
          }
          p {
            font-size: ${font('title', 'lg')};
            font-weight: normal;
            color: ${color('gray', 40)};
            ${media.tablet} {
              font-size: ${font('title', 'md')};
            }
            ${media.mobile} {
              font-size: ${font('body', 'sm')};
            }
          }
        }
      }
    }
  }
`
