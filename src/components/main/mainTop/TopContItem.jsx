import styled from 'styled-components'
import { color } from '../../../styled/theme'
import { media } from '../../../styled/media'

const TopItemWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 24px;
`

const TopContBox = styled.div`
  width: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-shrink: 0;
  width: 100%;
  height: 295px;
  ${media.tablet} {
    width: 210px;
    height: 210px;
  }
  ${media.mobile} {
    width: 140px;
    height: 130px;
  }
`

const Number = styled.div`
  width: auto;
  height: 100%;
  ${media.tablet} {
    width: 70px;
  }
  ${media.mobile} {
    width: 50px;
  }
  .numberBox {
    /* background: ${color('gray', '30')}; */
    width: 100%;
    height: 100%;
    img {
      width: 80px;
      height: 150px;
    }
  }
`

const TopThumbnail = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  height: 100%;
  ${media.tablet} {
    width: 140px;
  }
  ${media.mobile} {
    width: 90px;
  }

  .imgBox {
    background: ${color('gray', '70')};
    border-radius: 7px;
    overflow: hidden;
    width: 100%;
    height: 100%;
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
    <TopItemWrap>
      <TopContBox>
        <Number>
          <div className="numberBox">
            <img
              src="https://raw.githubusercontent.com/lse-7660/bokjak-image/c9ff4c8cc09bdda334eb731251f0ec9a55642779/images/main/top/numberImg/pc/pc_number1.svg"
              alt=""
            />
          </div>
        </Number>
        <TopThumbnail>
          <div className="imgBox">
            <img
              src="https://github.com/lse-7660/bokjak-image/blob/main/images/main/intro/introSlide1.png?raw=true"
              alt=""
            />
          </div>
        </TopThumbnail>
      </TopContBox>
    </TopItemWrap>
  )
}

export default TopContItem
