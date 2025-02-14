import FlipBackContItem from './FlipBackContItem'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'
import { useRef } from 'react'
import { IconButton } from '../../../ui'
import { CaretLeft, CaretRight } from '@phosphor-icons/react'
import { FlipBackHeader, FlipBackList, FlipBackListContainer } from './style'
import { NavigationButton } from '../style'

const FlipBackContList = () => {
  const swiperRef = useRef()

  const goNext = () => {
    swiperRef.current?.swiper.slideNext()
  }

  const goPrev = () => {
    swiperRef.current?.swiper.slidePrev()
  }

  return (
    <FlipBackListContainer>
      <FlipBackHeader>
        <h2>title</h2>
        <h3>more</h3>
      </FlipBackHeader>
      <FlipBackList>
        <Swiper
          className="swiper"
          ref={swiperRef}
          modules={[Navigation]}
          pagination={{ clickable: true }}
          slidesPerGroup={4}
          slidesPerView={4}
          navigation={false}
          breakpoints={{
            320: { spaceBetween: 10 },
            390: { spaceBetween: 10 },
            768: { spaceBetween: 16 },
            1024: { spaceBetween: 24 },
          }}>
          <SwiperSlide className="swiper-slide">
            <FlipBackContItem />
          </SwiperSlide>
          <SwiperSlide>
            <FlipBackContItem />
          </SwiperSlide>
          <SwiperSlide>
            <FlipBackContItem />
          </SwiperSlide>
          <SwiperSlide>
            <FlipBackContItem />
          </SwiperSlide>
          <SwiperSlide>
            <FlipBackContItem />
          </SwiperSlide>
          <SwiperSlide>
            <FlipBackContItem />
          </SwiperSlide>
          <SwiperSlide>
            <FlipBackContItem />
          </SwiperSlide>
          <SwiperSlide>
            <FlipBackContItem />
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
      </FlipBackList>
    </FlipBackListContainer>
  )
}

export default FlipBackContList
