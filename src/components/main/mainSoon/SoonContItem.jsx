import { BarButton, IconButton } from '../../../ui'
import { BellSimple, Play } from '@phosphor-icons/react'
import AgeLabel from '../../../ui/AgeLabel'
import {
  ButtonGroup,
  ImageCont,
  LabelWrapper,
  SooncardCont,
  SoonItemCont,
  TextCont,
} from './style'

const SoonContItem = () => {
  return (
    <SoonItemCont>
      <h2 className="soonDate">3월 6일 공개</h2>
      <SooncardCont>
        <ImageCont>
          <img
            src="https://github.com/lse-7660/bokjak-image/blob/main/images/main/intro/introSlide1.png?raw=true"
            alt="위키드"
          />
          <div className="icon">
            <IconButton
              className="border"
              icon={<Play size={24} weight="fill" />}
              text="Play"
            />
          </div>
        </ImageCont>
        <TextCont>
          <div className="soonLogo">
            <img
              src="https://github.com/lse-7660/bokjak-image/blob/main/images/main/intro/introLogoSlide1.png?raw=true"
              alt="위키드"
            />
            <IconButton
              className="soonIconTop"
              icon={<BellSimple size={24} />}
              text="BellSimple"
            />
          </div>
          <div className="textarea">
            <h2>3월 6일 공개</h2>
            <LabelWrapper>
              <AgeLabel text="ALL" />
              <em>·</em>
              <span>2017</span>
              <em>·</em>
              <span>액션</span>
              <em>·</em>
              <span>SF</span>
              <em>·</em>
              <span>해외영화</span>
            </LabelWrapper>
            <p>
              시빌 워 당시 토니 스타크에게 발탁되어 대단한 활약을 펼친
              스파이더맨 피터 파커. 허세와 정의감으로 똘똘 뭉친 그는 세상을
              위협하는 강력한 적 벌처에 맞서려 한다.
            </p>
          </div>
          <ButtonGroup>
            <BarButton text="미리보기" width="366px" height="42px" />
            <IconButton icon={<BellSimple size={24} />} text="BellSimple" />
          </ButtonGroup>
        </TextCont>
      </SooncardCont>
    </SoonItemCont>
  )
}

export default SoonContItem
