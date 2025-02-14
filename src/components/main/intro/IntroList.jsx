import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import { useSelector } from 'react-redux'
import IntroItem from './IntroItem'
import { IntroSliderCont } from '../style'

const IntroList = () => {
  const { introData } = useSelector((state) => state.mainR)
  return (
    <IntroSliderCont>
      <Swiper
        className="swiper"
        modules={[Autoplay]}
        spaceBetween={24}
        slidesPerView={1}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        breakpoints={{
          390: { spaceBetween: 12 },
          768: { spaceBetween: 16 },
          1024: { spaceBetween: 24 },
        }}>
        {introData.map((item) => (
          <SwiperSlide key={item.id} className="swiper-slide">
            <IntroItem {...item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </IntroSliderCont>
  )
}

export default IntroList
