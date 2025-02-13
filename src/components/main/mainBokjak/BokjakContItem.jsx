import styled from 'styled-components'
import { color, font } from '../../../styled/theme'
import { media } from '../../../styled/media'

const BokjakItemCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: clamp(100px, 10vw, 160px);
  height: 100%;
  gap: 16px;
  ${media.tablet} {
    gap: 10px;
  }
  ${media.mobile} {
    gap: 10px;
  }
`
const ImgCont = styled.div`
  width: 100%;
  height: clamp(100px, 10vw, 160px);
  background: ${color('gray', '80')};
  border-radius: 999px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
`

const TextCont = styled.div`
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
const BokjakContItem = () => {
  return (
    <BokjakItemCont>
      <ImgCont>
        <img src="" alt="" />
      </ImgCont>
      <TextCont>
        <h3>title</h3>
        <h4>desc</h4>
      </TextCont>
    </BokjakItemCont>
  )
}

export default BokjakContItem
