import styled from 'styled-components'
import { color } from '../../../styled/theme'

const TopItemBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 24px;
`

const TopThumbCont = styled.div`
  width: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-shrink: 0;
  width: 295px;
  height: 295px;
`

const Number = styled.div`
  width: 80px;
  height: 100%;
  .numberBox {
    background: ${color('gray', '30')};
    width: 100%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`

const Thumbnail = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 216px;
  height: 100%;

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
  }
`

const TopContItem = () => {
  return (
    <TopItemBox>
      <TopThumbCont>
        <Number>
          <div className="numberBox">
            <img src="" alt="" />
          </div>
        </Number>
        <Thumbnail>
          <div className="imgBox">
            <img src="" alt="" />
          </div>
        </Thumbnail>
      </TopThumbCont>
    </TopItemBox>
  )
}

export default TopContItem
