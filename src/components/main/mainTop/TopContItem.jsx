import styled from 'styled-components'
import { color } from '../../../styled/theme'
import { media } from '../../../styled/media'

const TopItemCont = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;

  width: clamp(140px, 20vw, 350px);
  height: clamp(140px, 20vw, 295px);
`

const TopNumberImg = styled.div`
  display: flex;
  /* flex-shrink: 0; */
  width: clamp(50px, 20vw, 80px);
  height: auto;
  img {
    width: 100%;
    height: auto;
  }
`

const TopThumbnailImg = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${color('gray', '70')};
  border-radius: 7px;
  width: clamp(100px, 20vw, 216px);
  height: clamp(140px, 20vw, 295px);

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
          src="https://raw.githubusercontent.com/lse-7660/bokjak-image/c9ff4c8cc09bdda334eb731251f0ec9a55642779/images/main/top/numberImg/pc/pc_number2.svg"
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
