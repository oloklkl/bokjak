import styled from 'styled-components'
import { media } from '../../../styled/media'
import { color, font } from '../../../styled/theme'

//cont
export const ViewHistorySection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 40px 0 80px;
  ${media.tablet} {
    padding: 30px 0 60px;
  }
  ${media.mobile} {
    padding: 20px 0 40px;
  }
`

////////////////////////////////////
//list
export const ViewHistoryContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
  ${media.tablet} {
    gap: 30px;
  }
  ${media.mobile} {
    gap: 20px;
  }
  .viewHeader {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h2 {
      font-size: ${font('title', 'xxlg')};
      ${media.tablet} {
        font-size: ${font('title', 'xlg')};
      }
      ${media.mobile} {
        font-size: ${font('title', 'lg')};
      }
    }
    h3 {
      font-size: ${font('body', 'sm')};
    }
  }
  .viewList {
    width: 100%;
    display: flex;
    flex-direction: row;
    position: relative;

    .swiper {
      width: 100%;
      height: 100%;
      overflow: visible;
    }
    .swiper-slide {
      width: auto;
      height: auto;
      overflow: hidden;
      border-radius: 7px;
    }
  }
`

////////////////////////////////////
//item
export const ViewHistoryItemCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: visible;
  gap: 16px;
  width: 100%;
  height: 100%;

  .thumbnailCont {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .thumbnailBox {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    border-radius: 7px;

    img {
      width: 100%;
      height: 100%;
      border-radius: 7px;
      background: ${color('gray', '70')};
      ${media.mobile} {
        border-radius: 5px;
      }
    }
  }
  .icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 4;
    ${media.mobile} {
      width: 24px;
      height: 24px;
      size: 18px;
    }
    .border {
      cursor: grab;
      &:hover {
        background-color: ${color('gray', '80')};
      }
    }
  }
`

export const StateBar = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: ${color('gray', '50')};
  z-index: 1;
  border-radius: 0 0 7px 7px;
  ${media.mobile} {
    height: 3px;
    border-radius: 0 0 5px 5px;
  }
`
export const InfoCont = styled.div`
  width: 100%;
  display: none;
  /* display: flex; */
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  text-align: left;
  h2 {
    font-size: ${font('body', 'lg')};
    font-weight: bold;
    ${media.tablet} {
      font-size: ${font('body', 'md')};
    }
    ${media.mobile} {
      font-size: ${font('body', 'sm')};
    }
  }
  span {
    font-size: ${font('body', 'md')};
    color: ${color('gray', '40')};
    ${media.tablet} {
      font-size: ${font('body', 'sm')};
    }
    ${media.mobile} {
      font-size: ${font('body', 'xsm')};
    }
  }
`
