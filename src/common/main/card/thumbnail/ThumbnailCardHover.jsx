import {
  BookmarkSimple,
  Heart,
  SpeakerSimpleSlash,
} from '@phosphor-icons/react'
import { LabelWrapper } from '../../../../components/main/mainSoon/style'
import { BarButton, IconButton } from '../../../../ui'
import AgeLabel from '../../../../ui/AgeLabel'
import { HoverItemWrap } from './style'

const ThumbnailCardHover = () => {
  return (
    <HoverItemWrap>
      <div className="videoCont">
        <video src=""></video>
        <div className="topCont">
          <img src="{logoUrl}" alt="{title}" />
          <IconButton
            className="b30"
            icon={<SpeakerSimpleSlash size={24} />}
            text="SpeakerSimpleSlash"
          />
        </div>
      </div>
      <div className="textCont">
        <div className="topBtn">
          <div className="leftBtn">
            <BarButton text="재생하기" width="100px" height="42px" />
            <IconButton
              icon={<BookmarkSimple size={24} />}
              text="BookmarkSimple"
            />
            <IconButton icon={<Heart size={24} />} text="Heart" />
            <IconButton
              icon="https://raw.githubusercontent.com/lse-7660/bokjak-image/f7683cb4e88d31d422118d70c20dcdccb0ad102e/images/icon/bokjak-icon.svg"
              text="모여보기"
            />
          </div>
          <IconButton
            icon="https://raw.githubusercontent.com/lse-7660/bokjak-image/f7683cb4e88d31d422118d70c20dcdccb0ad102e/images/icon/bokjak-icon.svg"
            text="info"
          />
        </div>
        <div className="textarea">
          <h2>title</h2>
          <LabelWrapper>
            <AgeLabel text="12+" />
            <em>·</em>
            <span>year</span>
            <em>·</em>
            <span>액션</span>
            <em>·</em>
            <span>SF</span>
            <em>·</em>
            <span>해외영화</span>
          </LabelWrapper>
          <p>desc</p>
        </div>
      </div>
    </HoverItemWrap>
  )
}

export default ThumbnailCardHover
