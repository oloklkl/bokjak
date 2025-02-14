import styled from 'styled-components'
import { color, font } from '../../../styled/theme'
import { IconButton } from '../../../ui'
import { Info, Play } from '@phosphor-icons/react'
import { media } from '../../../styled/media'

const ViewHistoryItemCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: visible;
  gap: 16px;
  width: clamp(160px, 20vw, 300px);
  /* height: clamp(100px, 12vw, 250px); */
  height: auto;

  .thumbnailCont {
    position: relative;
    width: clamp(160px, 20vw, 300px);
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .thumbnailBox {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    border-radius: 7px;

    img {
      width: 100%;
      height: 100%;
      border-radius: 7px;
      background: ${color('gray', '70')};
      ${media.mobile} {
        border-radius: 5px;
      }
    }
  }
  .icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    ${media.mobile} {
      width: 24px;
      height: 24px;
      size: 18px;
    }
  }
`

const StateBar = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: ${color('gray', '50')};
  z-index: 1;
  border-radius: 0 0 7px 7px;
  ${media.mobile} {
    height: 3px;
    border-radius: 0 0 5px 5px;
  }
`
const InfoCont = styled.div`
  width: 100%;
  display: none;
  /* display: flex; */
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  text-align: left;
  h2 {
    font-size: ${font('body', 'lg')};
    font-weight: bold;
    ${media.tablet} {
      font-size: ${font('body', 'md')};
    }
    ${media.mobile} {
      font-size: ${font('body', 'sm')};
    }
  }
  span {
    font-size: ${font('body', 'md')};
    color: ${color('gray', '40')};
    ${media.tablet} {
      font-size: ${font('body', 'sm')};
    }
    ${media.mobile} {
      font-size: ${font('body', 'xsm')};
    }
  }
`

const ViewHistoryContItem = () => {
  return (
    <ViewHistoryItemCont>
      <div className="thumbnailCont">
        <img
          src="https://github.com/lse-7660/bokjak-image/blob/main/images/main/intro/introSlide1.png?raw=true"
          alt=""
        />

        <div className="icon">
          <IconButton
            className="border"
            icon={<Play size={24} weight="fill" />}
            text="Play"
          />
        </div>
        <StateBar></StateBar>
      </div>
      <InfoCont>
        <div className="textarea">
          <h2>헝거게임 2: 부제목</h2>
          <span>12분 13초 남음</span>
        </div>
        <IconButton className="none" icon={<Info size={24} />} text="Info" />
      </InfoCont>
    </ViewHistoryItemCont>
  )
}

export default ViewHistoryContItem
