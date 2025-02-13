import styled from 'styled-components'
import BokjakContItem from './BokjakContItem'
import { color, font } from '../../../styled/theme'
import { IconButton } from '../../../ui'
import { CaretLeft, CaretRight, QuestionMark } from '@phosphor-icons/react'
import { media } from '../../../styled/media'
import { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'

const BokjakListWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
  ${media.mobile} {
    gap: 20px;
  }
`

const BokjakHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
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
  width: 100%;
  position: relative;
  display: flex;
  justify-content: flex-start;

  .swiper {
    width: 100%;
    overflow: visible;
  }
  .swiper-slide {
    width: auto;
    height: auto;
  }
`
const MsgBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-content: center;
  width: 270px;
  height: 40px;
  background: ${color('gray', '70')};
  border-radius: 7px;
  padding: 10px;
  .textarea {
    width: 260px;
    display: flex;
    text-align: left;
    font-size: ${font('body', 'sm')};
    color: ${color('gray', '30')};
  }
  ${media.mobile} {
    width: 235px;
    height: 32px;
    border-radius: 5px;
    padding: 6px 10px;
    .textarea {
      width: 2300px;
      font-size: ${font('body', 'xsm')};
    }
  }
`

const NavigationButton = styled.div`
  position: absolute;
  top: 50%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  transform: translateY(-50%);
  z-index: 3;

  ${media.tablet} {
    display: none;
  }
  ${media.mobile} {
    display: none;
  }
`

const BokjakContList = () => {
  const swiperRef = useRef()

  const goNext = () => {
    swiperRef.current?.swiper.slideNext()
  }

  const goPrev = () => {
    swiperRef.current?.swiper.slidePrev()
  }
  return (
    <BokjakListWrap>
      <BokjakHeader>
        <h2>title</h2>
        <IconButton
          className="border"
          icon={<QuestionMark size={18} />}
          text="smiley"
        />
        <MsgBox>
          <div className="textarea">실시간 영상 시청 및 채팅 서비스입니다.</div>
        </MsgBox>
      </BokjakHeader>

      <BokjakList>
        <Swiper
          className="swiper"
          ref={swiperRef}
          modules={[Navigation]}
          slidesPerGroupAuto
          breakpoints={{
            330: {
              slidesPerView: 'auto',
              spaceBetween: 10,
            },
            390: {
              slidesPerView: 'auto',
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 'auto',
              spaceBetween: 16,
            },

            1024: {
              slidesPerView: 'auto',
              spaceBetween: 24,
            },
          }}>
          <SwiperSlide>
            <BokjakContItem />
          </SwiperSlide>
          <SwiperSlide>
            <BokjakContItem />
          </SwiperSlide>
          <SwiperSlide>
            <BokjakContItem />
          </SwiperSlide>
          <SwiperSlide>
            <BokjakContItem />
          </SwiperSlide>
          <SwiperSlide>
            <BokjakContItem />
          </SwiperSlide>
          <SwiperSlide>
            <BokjakContItem />
          </SwiperSlide>
          <SwiperSlide>
            <BokjakContItem />
          </SwiperSlide>
          <SwiperSlide>
            <BokjakContItem />
          </SwiperSlide>
          <SwiperSlide>
            <BokjakContItem />
          </SwiperSlide>
          <SwiperSlide>
            <BokjakContItem />
          </SwiperSlide>
          <SwiperSlide>
            <BokjakContItem />
          </SwiperSlide>

          <NavigationButton>
            <IconButton
              onClick={goPrev}
              className="b30"
              icon={<CaretLeft size={24} />}
              text="caretLeft"
            />
            <IconButton
              onClick={goNext}
              className="b30"
              icon={<CaretRight size={24} />}
              text="caretRight"
            />
          </NavigationButton>
        </Swiper>
      </BokjakList>
    </BokjakListWrap>
  )
}

export default BokjakContList
