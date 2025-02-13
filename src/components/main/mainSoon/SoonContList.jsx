import styled from 'styled-components'
import { media } from '../../../styled/media'
import { font } from '../../../styled/theme'
import SoonContItem from './SoonContItem'
import { IconButton } from '../../../ui'
import { CaretLeft, CaretRight } from '@phosphor-icons/react'
import { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'

const SoonListContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
  ${media.mobile} {
    gap: 20px;
  }
`

const SoonHeader = styled.div`
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

const SoonList = styled.div`
  display: flex;
  flex-direction: row;
  overflow: visible;
  position: relative;

  .swiper {
    width: 100%;
    overflow: visible;
  }
  .swiper-slide {
    display: flex;
    justify-content: flex-start;
    width: 100%;
    height: auto;
    overflow: hidden;
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
  ${media.tablet} {
    display: none;
  }
`

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
        <h3>more</h3>
      </SoonHeader>
      <SoonList>
        <Swiper
          className="swiper"
          ref={swiperRef}
          modules={[Navigation]}
          // spaceBetween={24}
          // slidesPerView={'auto'}
          navigation={false}
          breakpoints={{
            320: { slidesPerView: 1.1, spaceBetween: 10 },
            390: { slidesPerView: 1.3, spaceBetween: 10 },
            768: { slidesPerView: 2.2, spaceBetween: 16 },
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
