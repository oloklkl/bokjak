import styled from 'styled-components'
import { media } from '../../../styled/media'
import { color, font } from '../../../styled/theme'
import { BarButton, IconButton } from '../../../ui'
import { BellSimple } from '@phosphor-icons/react'

const SoonItemBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  overflow: visible;
`
const SoonCont = styled.div`
  width: 1294px;
  height: 484px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
`
const SoonBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  ${media.tablet} {
    width: 550px;
    height: 456px;
  }
  ${media.mobile} {
    width: 310px;
    height: 404px;
  }
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

const SoonTextBox = styled.div`
  width: 432px;
  height: 396px;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
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
  }
  p {
    font-size: ${font('body', 'sm')};
  }
`
const Label = styled.div`
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
const StateBtn = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 24px;
`

const SoonContItem = () => {
  return (
    <SoonItemBox>
      <SoonCont>
        <SoonBox>
          <img src="" alt="" />
          <SoonTextBox>
            <div className="soonLogo">
              <img src="" alt="" />
            </div>
            <h2>title</h2>
            <Label>
              <div className="labelAge">
                <img src="" alt="" />
              </div>
              <span>genre</span>
            </Label>
            <p>
              시빌 워 당시 토니 스타크에게 발탁되어 대단한 활약을 펼친
              스파이더맨 피터 파커. 허세와 정의감으로 똘똘 뭉친 그는 세상을
              위협하는 강력한 적 벌처에 맞서려 한다.
            </p>
            <StateBtn>
              <BarButton text="미리보기" x width="366px" height="42px" />
              <IconButton
                className="none"
                icon={<BellSimple size={24} />}
                text="Play"
              />
            </StateBtn>
          </SoonTextBox>
        </SoonBox>
      </SoonCont>
    </SoonItemBox>
  )
}

export default SoonContItem
