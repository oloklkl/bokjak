import styled from 'styled-components'
import { media } from '../../../styled/media'
import { color, font } from '../../../styled/theme'
import { BarButton, IconButton } from '../../../ui'
import { BellSimple } from '@phosphor-icons/react'

const SoonItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
  border-radius: 7px;
  width: 100%;
  max-width: 1294px;
  height: auto;
  ${media.mobile} {
    max-width: 100%;
    height: auto;
  }
`

const SoonContainer = styled.div`
  width: auto;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  /* ${media.tablet} {
    width: 550px;
    height: 456px;
  }
  ${media.mobile} {
    width: 310px;
    height: 404px;
  } */
`

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 100%;
    height: 100%;
    border-radius: 7px;
    background: ${color('gray', '80')};
    ${media.mobile} {
      border-radius: 5px;
    }
  }
`

const TextWrapper = styled.div`
  width: 432px;
  height: 396px;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: left;
  gap: 16px;
  margin-left: 30px;
  margin-top: 50px;
  .soonLogo {
    width: 100%;
    height: 100%;
    img {
      width: 100%;
      height: 133px;
    }
    .overlay {
      background: linear-gradient(to top, black, rgba(0, 0, 0, 1));
    }
  }

  p {
    font-size: ${font('body', 'sm')};
    text-align: left;
  }
`

const LabelWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  gap: 10px;
  .labelAge {
    width: 46px;
    height: 20px;
  }
  span {
    font-size: ${font('body', 'sm')};
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
    <SoonItemWrapper>
      <SoonContainer>
        <ImageWrapper>
          <div className="overlay"></div>
          <div className="imbBox">
            <img
              src="https://github.com/lse-7660/bokjak-image/blob/main/images/main/intro/introSlide1.png?raw=true"
              alt=""
            />
          </div>
        </ImageWrapper>
        <TextWrapper>
          <div className="soonLogo">
            <img
              src="https://github.com/lse-7660/bokjak-image/blob/main/images/main/intro/introLogoSlide1.png?raw=true"
              alt=""
            />
          </div>
          <h2>title</h2>
          <LabelWrapper>
            <div className="labelAge">
              <img src="" alt="" />
            </div>
            <span>genre</span>
          </LabelWrapper>
          <p>
            시빌 워 당시 토니 스타크에게 발탁되어 대단한 활약을 펼친 스파이더맨
            피터 파커. 허세와 정의감으로 똘똘 뭉친 그는 세상을 위협하는 강력한
            적 벌처에 맞서려 한다.
          </p>
          <ButtonGroup>
            <BarButton text="미리보기" x width="366px" height="42px" />
            <IconButton
              className="none"
              icon={<BellSimple size={24} />}
              text="Play"
            />
          </ButtonGroup>
        </TextWrapper>
      </SoonContainer>
    </SoonItemWrapper>
  )
}

export default SoonContItem
