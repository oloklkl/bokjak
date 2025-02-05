import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import { useSelector } from 'react-redux'
import IntroItem from './IntroItem'

const IntroList = () => {
  const { introData } = useSelector((state) => state.mainR)
  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      // autoplay={{ delay: 5000, disableOnInteraction: false }}
      loop={true}>
      {introData.map((item) => (
        <SwiperSlide key={item.id}>
          <IntroItem {...item} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default IntroList
