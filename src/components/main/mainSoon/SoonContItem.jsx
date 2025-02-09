import styled from 'styled-components'
import { media } from '../../../styled/media'
import { color } from '../../../styled/theme'
import { BarButton, IconButton } from '../../../ui'
import { Play, Textbox } from '@phosphor-icons/react'

const SoonItemBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  overflow: visible;
  gap: 16px;
`
const SoonCont = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 16px;
`
const SoonBox = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 200px;
  ${media.tablet} {
    width: 220px;
    height: 150px;
  }
  ${media.mobile} {
    width: 160px;
    height: 100px;
  }
  img {
    width: 100%;
    height: 100%;
    border-radius: 7px;
    background: ${color('gray', '70')};
    ${media.mobile} {
      border-radius: 5px;
    }
  }
`
const Icon = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  ${media.mobile} {
    width: 24px;
    height: 24px;
    size: 18px;
  }
`
const SoonTextBox = styled.div`
  display: flex;
  .soonLogo {
    width: 100%;
  }
`
const Label = styled.div`
  display: flex;
  .labelAge {
    width: 100%;
  }
`
const StateBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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
            <p>desc</p>
          </SoonTextBox>
          <StateBtn>
            <BarButton
              className="share"
              text="재생하기"
              x
              width="300px"
              height="60px"
            />
            <Icon>
              <IconButton
                className="border"
                icon={<Play size={24} weight="fill" />}
                text="Play"
              />
            </Icon>
          </StateBtn>
          <Icon>
            <IconButton
              className="border"
              icon={<Play size={24} weight="fill" />}
              text="Play"
            />
          </Icon>
        </SoonBox>
      </SoonCont>
    </SoonItemBox>
  )
}

export default SoonContItem
