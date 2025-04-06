import { AboutHotContentsWrap } from './style'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Autoplay } from 'swiper/modules'
import hotContentList from '../../assets/api/about/aboutHotContentList'

function AboutHotContents() {
  return (
    <>
      <AboutHotContentsWrap className="aboutHotContentsWrap">
        <div className="aboutHotContents-cont">
          <h2>요즘 뜨는 콘텐츠</h2>
          <Swiper
            spaceBetween={30}
            slidesPerView={3}
            centeredSlides={true}
            loop={true}
            modules={[Autoplay]}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            className="trending-swiper">
            {hotContentList.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="content-card">
                  <div className="overlay"></div>
                  <img src={item.img} alt={item.title} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </AboutHotContentsWrap>
    </>
  )
}

export default AboutHotContents
