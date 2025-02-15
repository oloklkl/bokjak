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
  gap: 4rem;
  ${media.mobile} {
    gap: 2rem;
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
  width: 100%;
  height: auto;

  /* width: clamp(14rem, 20vw, 29.5rem);
  height: clamp(13rem, 20vw, 29.5rem); */
`

export const TopNumberImg = styled.div`
  width: 30%;
  /* width: clamp(5rem, 20vw, 8rem); */
  height: auto;
  img {
    width: 100%;
    height: 100%;
  }
`

export const TopThumbnailImg = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${color('gray', '70')};
  border-radius: 0.7rem;
  width: 70%;
  aspect-ratio: 3 / 4;
  height: auto;
  ${media.tablet} {
    aspect-ratio: 2 / 3;
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: 0.7rem;
    object-fit: cover;
    ${media.mobile} {
      border-radius: 0.5rem;
    }
  }
`
