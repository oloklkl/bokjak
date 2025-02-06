import styled from 'styled-components'
import { color } from '../../../styled/theme'
import { IconButton } from '../../../ui'
import { Play } from '@phosphor-icons/react'

const ViewHistoryItemBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  overflow: visible;
  gap: 16px;
`
const ThumbnailCont = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 16px;
`
const ThumbnailBox = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 180px;
  img {
    width: 100%;
    height: 100%;
    border-radius: 7px;
    background: ${color('gray', '70')};
  }
`
const Icon = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const StateBar = styled.div`
  display: block;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: ${color('gray', '50')};
  z-index: 1;
  border-radius: 0 0 7px 7px;
  .progress {
    height: 100%;
    background: ${color('gray', '50')};
    width: 0%;
    transition: width 0.2s ease;
  }
`

const ViewHistoryContItem = () => {
  return (
    <ViewHistoryItemBox>
      <ThumbnailCont>
        <ThumbnailBox>
          {/* <video>
            <source src="movie.mp4" type="video/mp4" />
          </video> */}
          <img src="" alt="" />
          <Icon>
            <IconButton
              className="border"
              icon={<Play size={24} weight="fill" />}
              text="Play"
            />
          </Icon>
          <StateBar>
            <div className="progress"></div>
          </StateBar>
        </ThumbnailBox>
      </ThumbnailCont>
    </ViewHistoryItemBox>
  )
}

export default ViewHistoryContItem
