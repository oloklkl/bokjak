import { AboutHotContentsWrap } from './style'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Autoplay } from 'swiper/modules'

function AboutHotContents() {
  const contentList = [
    {
      id: 1,
      title: '퀴즈의 블랙홀',
      img: '/images/quiz.png',
    },
    {
      id: 2,
      title: '위키드',
      img: 'https://github.com/lse-7660/bokjak-image/blob/main/images/main/intro/introSlide1.png?raw=true',
    },
    {
      id: 3,
      title: '위키드',
      img: '/images/wicked.png',
    },
    {
      id: 4,
      title: '위키드',
      img: 'https://github.com/lse-7660/bokjak-image/blob/main/images/main/intro/introSlide1.png?raw=true',
    },
  ]

  return (
    <>
      <AboutHotContentsWrap>
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
            {contentList.map((item) => (
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
