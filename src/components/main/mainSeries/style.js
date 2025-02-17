import styled from 'styled-components'
import { media } from '../../../styled/media'
import { font } from '../../../styled/theme'

//cont
export const SeriesSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 80px 0 50px;
  ${media.tablet} {
    padding: 60px 0 40px;
  }
  ${media.mobile} {
    padding: 40px 0 20px;
  }
`

///////////////////////////////////
//list
export const SeriesContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
  ${media.mobile} {
    gap: 20px;
  }
  .seriesHeader {
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
  .seriesList {
    width: 100%;
    display: flex;
    flex-direction: row;
    position: relative;

    .swiper {
      width: 100%;
      overflow: visible;
    }
    .swiper-slide {
      /* width: clamp(180px, 20vw, 300px); */
      width: auto;
      height: auto;
      overflow: hidden;
      border-radius: 7px;
    }
  }
`

////////////////////////////////
//item
export const SeriesItemCont = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: left;
  gap: 10px;
  h2 {
    font-size: ${font('title', 'md')};
    ${media.tablet} {
      gap: 10px;
      font-size: ${font('body', 'md')};
    }
    ${media.mobile} {
      font-size: ${font('body', 'sm')};
    }
  }
`
export const SeriesCardCont = styled.div`
  width: 100%;
  height: 100%;
  aspect-ratio: 16 / 9;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 7px;
    /* object-position: center; */
  }
`
