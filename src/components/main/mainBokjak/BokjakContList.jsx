import BokjakContItem from './BokjakContItem'
import { IconButton } from '../../../ui'
import { CaretLeft, CaretRight, QuestionMark } from '@phosphor-icons/react'
import { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'
import { BokjakHeader, BokjakList, BokjakListWrap, MsgBox } from './style'
import { NavigationButton } from '../style'

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
              slidesPerView: 3,
              spaceBetween: 10,
            },

            600: {
              slidesPerView: 4,
              spaceBetween: 16,
            },

            1024: {
              slidesPerView: 6,
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
