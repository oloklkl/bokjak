import styled from 'styled-components'
import { color, font } from '../../../../styled/theme'
import { media } from '../../../../styled/media'

//card
export const TopItemWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 24px;
`

export const TopThumbCont = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
  width: 100%;
  height: 100%;
  aspect-ratio: 2 / 3;
  img {
    width: 100%;
    height: 100%;
    border-radius: 7px;
    object-fit: cover;
    object-position: center center;
  }
`

/////////////////////////////////////////////
//hoevr

export const HoverItemWrap = styled.div`
  width: 500px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  background: ${color('gray', '80')};
  border-radius: 7px;

  .videoCont {
    width: 100%;
    height: 100%;
    .topCont {
      padding: 0 20px;
      width: 100%;
      display: flex;
      justify-content: space-between;
    }
  }
  .textCont {
    padding: 20px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    .topBtn {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      .leftBtn {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 10px;
      }
    }
    .textarea {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      gap: 10px;
      h2 {
        font-weight: bold;
        font-size: ${font('title', 'xlg')};
      }
      p {
        display: -webkit-box;
        -webkit-line-clamp: 2;
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
  }
`
