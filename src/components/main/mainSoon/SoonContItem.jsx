import styled from 'styled-components'
import { media } from '../../../styled/media'
import { color } from '../../../styled/theme'
import { IconButton } from '../../../ui'
import { Play } from '@phosphor-icons/react'

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

const SoonContItem = () => {
  return (
    <SoonItemBox>
      <SoonCont>
        <SoonBox>
          <img src="" alt="" />
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
