import styled from 'styled-components'
import { media } from '../../../styled/media'
import { font } from '../../../styled/theme'

//cont
export const ThumbnailSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 100px 0 50px;
  ${media.tablet} {
    padding: 80px 0 40px;
  }
  ${media.mobile} {
    gap: 20px;
    padding: 40px 0 20px;
  }
`

///////////////////////////////////////////
//list
export const ThumbnailContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 40px;
  ${media.mobile} {
    gap: 20px;
  }
`

export const ThumbnailHeader = styled.div`
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
`

export const ThumbnailList = styled.div`
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
`
