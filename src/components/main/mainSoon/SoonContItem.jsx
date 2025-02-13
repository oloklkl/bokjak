import styled from 'styled-components'
import { media } from '../../../styled/media'
import { color, font } from '../../../styled/theme'
import { BarButton, IconButton } from '../../../ui'
import { BellSimple, Play } from '@phosphor-icons/react'
import AgeLabel from '../../../ui/AgeLabel'

const SoonItemCont = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
  width: 100%;
  height: auto;
  max-width: 1294px;
  max-height: 484px;
  .soonDate {
    width: 100%;
    font-size: ${font('body', 'md')};
    font-weight: bold;
    display: flex;
    margin-bottom: 10px;
    ${media.mobile} {
      font-size: ${font('body', 'sm')};
    }
    ${media.desktop} {
      display: none;
    }
  }
  ${media.tablet} {
    width: 577px;
    height: auto;
  }
  ${media.mobile} {
    width: 310px;
    height: auto;
  }
`
const SooncardCont = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 7px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  overflow: hidden;

  ${media.tablet} {
    display: flex;
    flex-direction: column;
  }
  ${media.mobile} {
    border-radius: 5px;
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

    ${media.tablet} {
      border-radius: 0px;
      flex: 1;
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
    ${media.tablet} {
      width: 100%;
      background: rgba(0, 0, 0, 0.3);
    }
  }
  .icon {
    ${media.desktop} {
      display: none;
    }
    ${media.tablet} {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
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
  ${media.tablet} {
    background: ${color('gray', '100')};
    width: 100%;
    height: auto;
    position: static;
    flex: 1;
    margin: 0;
    padding: 20px;
    display: flex;
    gap: 10px;
  }
  .soonLogo {
    width: 432px;
    height: 133px;
    ${media.tablet} {
      width: 100%;
      height: 70px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    ${media.mobile} {
      height: 55px;
    }
    img {
      width: auto;
      height: 100%;
      object-fit: contain;
    }
  }
  .soonIconTop {
    ${media.desktop} {
      display: none;
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
    ${media.tablet} {
    }
    h2 {
      font-size: ${font('title', 'xlg')};
      font-weight: bold;
      ${media.tablet} {
        display: none;
      }
    }
    p {
      font-size: ${font('body', 'sm')};
      font-weight: lighter;
      ${media.mobile} {
        font-size: ${font('body', 'xsm')};
      }
    }
  }
`

const LabelWrapper = styled.div`
  width: 100%;
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
    ${media.tablet} {
      font-size: ${font('body', 'xsm')};
    }
  }
`
const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 24px;
  ${media.tablet} {
    display: none;
  }
`

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
