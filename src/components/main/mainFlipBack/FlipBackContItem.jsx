import styled from 'styled-components'
import { media } from '../../../styled/media'
import { color } from '../../../styled/theme'

const FlipBackItemCont = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;
  border-radius: 7px;
  height: 100%;
  max-width: 388px;
  max-height: 600px;
`
const ImageCont = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    border-radius: 7px;
    object-fit: cover;
    background: ${color('gray', '80')};
    display: block;

    ${media.mobile} {
      border-radius: 5px;
    }
  }
`
const FlipBackContItem = () => {
  return (
    <FlipBackItemCont>
      <ImageCont>
        <img
          src="https://github.com/lse-7660/bokjak-image/blob/main/images/main/flipback/flipcard1.png?raw=true"
          alt="위키드"
        />
      </ImageCont>
    </FlipBackItemCont>
  )
}

export default FlipBackContItem
