import FlipBackContItem from './FlipBackContItem'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'
import { useRef } from 'react'
import styled from 'styled-components'
import { media } from '../../../styled/media'
import { font } from '../../../styled/theme'
import { IconButton } from '../../../ui'
import { CaretLeft, CaretRight } from '@phosphor-icons/react'

const FlipBackListContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
  ${media.mobile} {
    gap: 20px;
  }
`
const FlipBackHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
`

const FlipBackList = styled.div`
  display: flex;
  flex-direction: row;
  overflow: hidden;
  position: relative;

  .swiper {
    width: 100%;
    overflow: hidden;
  }
  .swiper-slide {
    width: 100%;
    height: 100%;
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
`

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
