import styled from 'styled-components'
import { color, font } from '../../../styled/theme'
import { media } from '../../../styled/media'

//cont
export const SoonSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background: ${color('gray', '80')};
  padding: 80px 30px;
  ${media.tablet} {
    padding: 60px 30px;
  }
  ${media.mobile} {
    padding: 40px 20px;
  }
`

//////////////////////////////////////////
//list
export const SoonListContainer = styled.div`
  width: 100%;
  max-width: 1540px;
  box-sizing: border-box;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 40px;
  ${media.tablet} {
    gap: 30px;
  }
  ${media.mobile} {
    gap: 20px;
  }
`

export const SoonHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h2 {
    font-weight: bold;
    font-size: ${font('title', 'xxlg')};
    ${media.tablet} {
      font-size: ${font('title', 'xlg')};
    }
    ${media.mobile} {
      font-size: ${font('title', 'lg')};
    }
  }
  h3 {
    color: ${color('gray', '40')};
    font-size: ${font('body', 'sm')};
  }
`

export const SoonList = styled.div`
  display: flex;
  flex-direction: row;
  overflow: visible;
  position: relative;

  .swiper {
    width: 100%;
    overflow: visible;
  }
  .swiper-slide {
    display: flex;
    justify-content: flex-start;
    width: auto;
    height: auto;
    overflow: hidden;
  }
`

///////////////////////////////////////////////
//item
export const SoonItemCont = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
  width: 100%;
  height: auto;
  max-width: 1294px;
  max-height: 484px;
  .soonDate {
    width: 100%;
    font-size: ${font('body', 'md')};
    font-weight: bold;
    display: flex;
    margin-bottom: 10px;
    ${media.mobile} {
      font-size: ${font('body', 'sm')};
    }
    ${media.desktop} {
      display: none;
    }
  }
  ${media.tablet} {
    width: auto;
    max-width: 577px;
    height: auto;
  }
  ${media.mobile} {
    width: auto;
    max-width: 450px;
    height: auto;
  }
`
export const SooncardCont = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 7px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  overflow: hidden;

  ${media.tablet} {
    display: flex;
    flex-direction: column;
  }
  ${media.mobile} {
    border-radius: 5px;
  }
`
export const ImageCont = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    border-radius: 7px;
    object-fit: cover;
    background: ${color('gray', '80')};
    display: block;
    &:hover {
      ${media.desktop} {
        transition: transform 0.3s ease;
        transform: scale(1.2);
      }
    }
    ${media.tablet} {
      border-radius: 0px;
      flex: 1;
    }
  }
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 80%;
    height: 100%;
    pointer-events: none;
    border-radius: inherit;
    background: linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
    ${media.tablet} {
      width: 100%;
      background: rgba(0, 0, 0, 0.3);
    }
  }
  .icon {
    ${media.desktop} {
      display: none;
    }
    ${media.tablet} {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`

export const TextCont = styled.div`
  width: 432px;
  height: 396px;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 40px;
  gap: 24px;
  ${media.tablet} {
    background: ${color('gray', '100')};
    width: 100%;
    height: auto;
    position: static;
    flex: 1;
    margin: 0;
    padding: 20px;
    display: flex;
    gap: 10px;
  }
  .soonLogo {
    width: 100%;
    height: 130px;
    ${media.tablet} {
      width: 100%;
      height: 70px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    ${media.mobile} {
      height: 55px;
    }
    img {
      width: 80%;
      height: 100%;
      object-fit: contain;
      object-position: left;
      ${media.tablet} {
        width: 50%;
      }
      ${media.mobile} {
        width: 65%;
      }
    }
  }
  .soonIconTop {
    ${media.desktop} {
      display: none;
    }
  }

  h2,
  p,
  .soonLogo,
  .LabelWrapper,
  .ButtonGroup {
    text-align: left;
    align-self: flex-start;
  }
  .textarea {
    display: flex;
    flex-direction: column;
    align-self: flex-start;
    text-align: left;
    gap: 10px;
    ${media.tablet} {
    }
    h2 {
      font-size: ${font('title', 'xlg')};
      font-weight: bold;
      ${media.tablet} {
        display: none;
      }
    }
    p {
      min-height: 67.5px;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
      font-size: ${font('body', 'sm')};
      font-weight: lighter;
      ${media.mobile} {
        font-size: ${font('body', 'xsm')};
      }
    }
  }
`

export const LabelWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  em {
    font-style: normal;
    color: ${color('gray', '30')};
    font-size: ${font('body', 'sm')};
    margin: 0 5px;
  }

  span {
    font-size: ${font('body', 'sm')};
    color: ${color('gray', '30')};
    ${media.tablet} {
      font-size: ${font('body', 'xsm')};
    }
  }
`
export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 24px;
  ${media.tablet} {
    display: none;
  }
`
