import styled from 'styled-components'
import { color, font } from '../../../styled/theme'
import { media } from '../../../styled/media'

const BokjakItemWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;
  ${media.mobile} {
    gap: 10px;
  }
`
const BokjakImg = styled.div`
  width: 160px;
  height: 160px;
  background: ${color('gray', '80')};
  border-radius: 999px;
  border: none;
  ${media.tablet} {
    width: 120px;
    height: 120px;
  }
  ${media.mobile} {
    width: 90px;
    height: 90px;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;

    border-radius: 999px;
  }
`
const BokjakTitle = styled.div`
  width: 160px;
  ${media.tablet} {
    width: 120px;
  }
  ${media.mobile} {
    width: 90px;
  }
  text-align: center;
  h3 {
    font-size: ${font('title', 'xlg')};
    ${media.tablet} {
      font-size: ${font('title', 'lg')};
    }
    ${media.mobile} {
      font-size: ${font('title', 'md')};
    }
  }
  h4 {
    font-size: ${font('title', 'lg')};
    color: ${color('gray', '40')};
    ${media.tablet} {
      font-size: ${font('title', 'md')};
    }
    ${media.mobile} {
      font-size: ${font('body', 'sm')};
    }
  }
`

const BokjakContItem = () => {
  return (
    <BokjakItemWrap>
      <BokjakImg>
        <img src="" alt="" />
      </BokjakImg>
      <BokjakTitle>
        <h3>title</h3>
        <h4>desc</h4>
      </BokjakTitle>
    </BokjakItemWrap>
  )
}

export default BokjakContItem
