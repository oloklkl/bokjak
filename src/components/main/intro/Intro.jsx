import styled from 'styled-components'
import { BarButton } from '../../../ui' // 외부 컴포넌트 경로 그대로 사용
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import { useSelector } from 'react-redux'

const MultiBanner = styled.section`
  position: relative;
  width: 100%;
  height: 800px;
  overflow: hidden;

  .swiper {
    width: 100%;
    height: 100%;
  }
`

const BannerImg = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.8),
      rgba(0, 0, 0, 0) 54%
    );
    border-radius: 12px;
  }
  .bannerImg {
    width: 100%;
    height: 100%;
    border-radius: 12px;
    object-fit: cover;
  }
`

const BannerTit = styled.div`
  position: absolute;
  bottom: 40px;
  left: 40px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  .bannerLogo {
    width: 300px;
    height: 157px;
    object-fit: contain;
  }

  span {
    color: white;
    font-size: 24px;
    line-height: 1.5;
  }
`

const Intro = ({ item }) => {
  const { introData } = useSelector((state) => state.mainR)
  const { imgUrl, logoUrl, imgTitle, title, btnText } = item
  return (
    <MultiBanner>
      <Swiper
        className="swiper multiBanner"
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}>
        {introData.map((item) => (
          <SwiperSlide key={item.id} item={item}>
            <BannerImg>
              <div className="overlay"></div>
              <img className="bannerImg" src={imgUrl} alt={imgTitle} />
            </BannerImg>
            <BannerTit>
              <img className="bannerLogo" src={logoUrl} alt={imgTitle} />
              <span>{title}</span>
              <BarButton text={btnText} width="300px" height="60px" />
            </BannerTit>
          </SwiperSlide>
        ))}
      </Swiper>
    </MultiBanner>
  )
}

export default Intro
