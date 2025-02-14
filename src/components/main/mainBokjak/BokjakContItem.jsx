import styled from 'styled-components'
import { color, font } from '../../../styled/theme'
import { media } from '../../../styled/media'

const BokjakItemCont = styled.div`
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
const ImgCont = styled.div`
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
        <img
          src="https://github.com/lse-7660/bokjak-image/blob/main/images/main/intro/introSlide1.png?raw=true"
          alt=""
        />
      </ImgCont>
      <TextCont>
        <h3>title</h3>
        <h4>desc</h4>
      </TextCont>
    </BokjakItemCont>
  )
}

export default BokjakContItem
