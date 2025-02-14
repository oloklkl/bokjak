import styled from 'styled-components'
import { color, font } from '../../../styled/theme'
import { media } from '../../../styled/media'

//cont
export const TopSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background: ${color('gray', '80')};
  padding: 100px 0 50px;
  ${media.tablet} {
    padding: 80px 0;
  }
  ${media.mobile} {
    padding: 40px 0;
  }
`

////////////////////////////////////////////////
//list
export const TopListWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
  ${media.mobile} {
    gap: 20px;
  }
  .topHeader {
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

  .topList {
    width: 100%;
    display: flex;
    flex-direction: row;
    position: relative;
    .swiper {
      width: 100%;
      overflow: visible;
    }
    .swiper-slide {
      width: auto;
      height: auto;
    }
  }
`

/////////////////////////////////////////////
//item
export const TopItemCont = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;

  width: clamp(140px, 20vw, 295px);
  height: clamp(130px, 20vw, 295px);
`

export const TopNumberImg = styled.div`
  width: clamp(50px, 20vw, 80px);
  height: auto;
  img {
    width: 100%;
    height: auto;
  }
`

export const TopThumbnailImg = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${color('gray', '70')};
  border-radius: 7px;
  width: clamp(160px, 20vw, 210px);
  height: 100%;

  img {
    width: 100%;
    height: 100%;
    border-radius: 7px;
    object-fit: cover;
    ${media.mobile} {
      border-radius: 5px;
    }
  }
`
