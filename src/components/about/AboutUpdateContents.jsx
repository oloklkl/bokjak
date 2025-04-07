import { AboutUpdateContentsWrap } from './style'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'
import updateContentList from '../../assets/api/about/aboutUpdateContentList'

function AboutUpdateContents() {
  return (
    <>
      <AboutUpdateContentsWrap className="aboutUpdateContentsWrap">
        <div className="aboutUpdateContents-cont">
          <h2>
            매주 새롭게! <br />
            다채로운 장르와 풍성한 <br className="tM-only" />
            콘텐츠 업데이트
          </h2>
          <Swiper
            slidesPerGroup={1}
            breakpoints={{
              1024: {
                slidesPerView: 3,
                spaceBetween: 70,
              },
              768: {
                slidesPerView: 2.2,
                spaceBetween: 30,
              },
              390: {
                slidesPerView: 1.2,
                spaceBetween: 20,
              },
            }}
            loop={true}
            modules={[Pagination]}
            pagination={{
              clickable: true,
            }}
            className="updateCont-swiper">
            {updateContentList.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="updateCont-card">
                  <div className="overlay"></div>
                  <img src={item.img} alt={item.title} />
                  <div className="text-area">
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </AboutUpdateContentsWrap>
    </>
  )
}

export default AboutUpdateContents
