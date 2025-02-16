import SoonContItem from './SoonContItem'
import { IconButton } from '../../../ui'
import { CaretLeft, CaretRight } from '@phosphor-icons/react'
import { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'
import { SoonHeader, SoonList, SoonListContainer } from './style'
import { NavigationButton } from '../style'
import { Link } from 'react-router-dom'

const SoonContList = () => {
  const swiperRef = useRef()

  const goNext = () => {
    swiperRef.current?.swiper.slideNext()
  }

  const goPrev = () => {
    swiperRef.current?.swiper.slidePrev()
  }

  return (
    <SoonListContainer>
      <SoonHeader>
        <h2>title</h2>
        <Link>
          <h3>더보기</h3>
        </Link>
      </SoonHeader>
      <SoonList>
        <Swiper
          className="swiper"
          ref={swiperRef}
          modules={[Navigation]}
          navigation={false}
          breakpoints={{
            320: { slidesPerView: 1.2, spaceBetween: 10 },
            768: { slidesPerView: 1.7, spaceBetween: 16 },
            1024: {
              slidesPerView: 1.2,
              spaceBetween: 24,
            },
          }}>
          <SwiperSlide className="swiper-slide">
            <SoonContItem />
          </SwiperSlide>
          <SwiperSlide>
            <SoonContItem />
          </SwiperSlide>
          <SwiperSlide>
            <SoonContItem />
          </SwiperSlide>
          <SwiperSlide>
            <SoonContItem />
          </SwiperSlide>
          <SwiperSlide>
            <SoonContItem />
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
      </SoonList>
    </SoonListContainer>
  )
}

export default SoonContList
