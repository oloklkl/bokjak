import styled from 'styled-components'
import { color } from '../../../styled/theme'
import { media } from '../../../styled/media'

const TopItemCont = styled.div`
  display: flex;
  flex-direction: row;
  height: auto;
  min-width: 295px;
  min-height: 295px;
  overflow: hidden;

  ${media.tablet} {
    width: 210px;
    height: 210px;
  }
  ${media.mobile} {
    width: 140px;
    height: 130px;
  }
`

const TopNumberImg = styled.div`
  padding-top: 140px;
  max-width: 80px;
  ${media.tablet} {
    max-width: 70px;
  }
  ${media.mobile} {
    max-width: 50px;
  }
  img {
    width: 100%;
    height: 100%;
  }
`

const TopThumbnailImg = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${color('gray', '70')};
  border-radius: 7px;
  max-width: 216px;
  ${media.tablet} {
    max-width: 140px;
  }
  ${media.mobile} {
    max-width: 90px;
  }

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

const TopContItem = () => {
  return (
    <TopItemCont>
      {/* <div className="topItemImg"> */}
      <TopNumberImg>
        <img
          src="https://raw.githubusercontent.com/lse-7660/bokjak-image/c9ff4c8cc09bdda334eb731251f0ec9a55642779/images/main/top/numberImg/pc/pc_number1.svg"
          alt=""
        />
      </TopNumberImg>
      <TopThumbnailImg>
        <img
          src="https://github.com/lse-7660/bokjak-image/blob/main/images/main/intro/introSlide1.png?raw=true"
          alt=""
        />
      </TopThumbnailImg>
      {/* </div> */}
    </TopItemCont>
  )
}

export default TopContItem
