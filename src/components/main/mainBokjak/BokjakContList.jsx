import styled from 'styled-components'
import BokjakContItem from './BokjakContItem'
import { color, font } from '../../../styled/theme'
import { IconButton } from '../../../ui'
import { QuestionMark } from '@phosphor-icons/react'
import { media } from '../../../styled/media'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'

const BokjakContBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  gap: 40px;
`

const BokjakTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;
  ${media.mobile} {
    gap: 20px;
  }
`
const TitleCont = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  gap: 16px;
  ${media.mobile} {
    gap: 10px;
  }

  h2 {
    font-size: ${font('title', 'xxlg')};
    ${media.tablet} {
      font-size: ${font('title', 'xlg')};
    }
    ${media.mobile} {
      font-size: ${font('title', 'lg')};
    }
  }
  h3 {
    font-size: ${font('body', 'sm')};
  }

  .border {
    width: 24px;
    height: 24px;
    ${media.mobile} {
      width: 18px;
      height: 18px;
      size: 14px;
    }
  }
`

const BokjakList = styled.div`
  display: flex;
  justify-content: flex-start;
  ${media.tablet} {
    gap: 16px;
  }
  ${media.mobile} {
    gap: 10px;
  }
  .swiper-slide {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    gap: 24px;
  }
`
const MsgBox = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  width: 550px;
  height: 65px;
  background: ${color('gray', '70')};
  border-radius: 7px;
  font-size: ${font('body', 'sm')};
  color: ${color('gray', '30')};
  text-align: start;
  padding: 10px;
`

const BokjakContList = () => {
  return (
    <BokjakContBox>
      <BokjakTitle>
        <TitleCont>
          <h2>title</h2>
          <IconButton
            className="border"
            icon={<QuestionMark size={18} />}
            text="smiley"
          />
          <MsgBox className="on">
            &quot;모여봐요 복작!&quot;은 다른 시청자들과 실시간으로 영상을 함께
            보며 채팅으로 소통하는 <br /> 서비스입니다. 마치 한 공간에서 같이
            영화를 보는 듯한 경험을 제공합니다.
          </MsgBox>
        </TitleCont>
      </BokjakTitle>

      <BokjakList>
        <Swiper
          className="swiper"
          modules={[Autoplay]}
          spaceBetween={24}
          slidesPerView={1}>
          <SwiperSlide className="swiper-slide">
            <BokjakContItem />
            <BokjakContItem />
            <BokjakContItem />
            <BokjakContItem />
            <BokjakContItem />
          </SwiperSlide>
        </Swiper>
      </BokjakList>
    </BokjakContBox>
  )
}

export default BokjakContList
