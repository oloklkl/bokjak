import { IconButton } from '../../../ui'
import { Info, Play } from '@phosphor-icons/react'
import { InfoCont, StateBar, ViewHistoryItemCont } from './style'

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
