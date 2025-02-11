import styled from 'styled-components'
import { media } from '../../../styled/media'
import { color, font } from '../../../styled/theme'
import { BarButton, IconButton } from '../../../ui'
import { BellSimple } from '@phosphor-icons/react'
import AgeLabel from '../../../ui/AgeLabel'

const SoonItemCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
  border-radius: 7px;
  height: auto;
  max-width: 1294px;
  max-height: 484px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  ${media.tablet} {
    max-width: 100%;
    height: auto;
    max-height: 459px;
  }
  ${media.mobile} {
    max-width: 100%;
    height: auto;
    max-height: 404px;
  }
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
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 80%;
    height: 100%;
    border-radius: inherit;
    background: linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
  }
`

const TextCont = styled.div`
  width: 432px;
  height: 396px;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 40px;
  gap: 24px;
  .soonLogo {
    width: 432px;
    height: 133px;
    img {
      width: auto;
      height: 100%;
      object-fit: contain;
    }
  }

  h2,
  p,
  .soonLogo,
  .LabelWrapper,
  .ButtonGroup {
    text-align: left;
    align-self: flex-start;
  }
  .textarea {
    display: flex;
    flex-direction: column;
    align-self: flex-start;
    text-align: left;
    gap: 10px;
    p {
      font-size: ${font('body', 'sm')};
      font-weight: lighter;
    }
  }
  /* 반응형 추가 */
`

const LabelWrapper = styled.div`
  display: flex;
  align-items: center;

  em {
    font-style: normal;
    color: ${color('gray', '30')};
    font-size: ${font('body', 'sm')};
    margin: 0 5px;
  }

  span {
    font-size: ${font('body', 'sm')};
    color: ${color('gray', '30')};
  }
`
const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 24px;
`

const SoonContItem = () => {
  return (
    <SoonItemCont>
      <ImageCont>
        <img
          src="https://github.com/lse-7660/bokjak-image/blob/main/images/main/intro/introSlide1.png?raw=true"
          alt="위키드"
        />
      </ImageCont>
      <TextCont>
        <div className="soonLogo">
          <img
            src="https://github.com/lse-7660/bokjak-image/blob/main/images/main/intro/introLogoSlide1.png?raw=true"
            alt="위키드"
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
            시빌 워 당시 토니 스타크에게 발탁되어 대단한 활약을 펼친 스파이더맨
            피터 파커. 허세와 정의감으로 똘똘 뭉친 그는 세상을 위협하는 강력한
            적 벌처에 맞서려 한다.
          </p>
        </div>
        <ButtonGroup>
          <BarButton text="미리보기" width="366px" height="42px" />
          <IconButton icon={<BellSimple size={24} />} text="BellSimple" />
        </ButtonGroup>
      </TextCont>
    </SoonItemCont>
  )
}

export default SoonContItem
