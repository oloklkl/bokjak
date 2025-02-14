import styled from 'styled-components'
import { media } from '../../../styled/media'
import { color, font } from '../../../styled/theme'

//cont
// const BokjakWrap = styled.div`
//   width: 100%;
// `

export const BokjakSection = styled.div`
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

///////////////////////////////////////////////////////
// list
export const BokjakListWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
  ${media.mobile} {
    gap: 20px;
  }
`

export const BokjakHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  gap: 16px;
  ${media.mobile} {
    gap: 10px;
  }

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

  .border {
    width: 24px;
    height: 24px;
    ${media.mobile} {
      width: 18px;
      height: 18px;
      size: 14px;
    }
  }
`

export const BokjakList = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: flex-start;

  .swiper {
    width: 100%;
    overflow: visible;
  }
  .swiper-slide {
    width: auto;
    height: auto;
  }
`
export const MsgBox = styled.div`
  display: flex;
  /* justify-content: flex-start; */
  align-content: center;
  width: 290px;
  height: 40px;
  background: ${color('gray', '70')};
  border-radius: 7px;
  padding: 10px;
  .textarea {
    width: 280px;
    display: flex;
    text-align: left;
    font-size: ${font('body', 'sm')};
    color: ${color('gray', '30')};
  }
  ${media.mobile} {
    width: 250px;
    height: 32px;
    border-radius: 5px;
    padding: 7px 10px;
    .textarea {
      width: 240px;
      font-size: ${font('body', 'xsm')};
    }
  }
`

///////////////////////////////////////////
// item
export const BokjakItemCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: auto;
  max-width: 250px;
  /* width: clamp(150px, 10vw, 250px); */
  aspect-ratio: 1;
  gap: 16px;
  ${media.tablet} {
    max-width: 200px;
    gap: 10px;
  }
`
export const ImgCont = styled.div`
  width: 100%;
  height: 100%;
  background: ${color('gray', '80')};
  border-radius: 999px;
  ${media.tablet} {
    max-width: 200px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
`

export const TextCont = styled.div`
  text-align: center;
  width: 100%;
  h3 {
    font-size: ${font('title', 'xlg')};
    ${media.tablet} {
      font-size: ${font('title', 'md')};
    }
    ${media.mobile} {
      font-size: ${font('body', 'md')};
    }
  }
  h4 {
    font-size: ${font('title', 'lg')};
    color: ${color('gray', '40')};
    ${media.tablet} {
      font-size: ${font('body', 'md')};
    }
    ${media.mobile} {
      font-size: ${font('body', 'sm')};
    }
  }
`

/////////////////////////////////////////////////////
