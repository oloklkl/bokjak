import styled from 'styled-components'
import { media } from '../../../styled/media'
import { font } from '../../../styled/theme'
import SoonContItem from './SoonContItem'
import { IconButton } from '../../../ui'
import { CaretLeft, CaretRight } from '@phosphor-icons/react'
// import { useDispatch } from 'react-redux'
import { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'

const SoonListWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
`

const SoonHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;
  ${media.mobile} {
    gap: 20px;
  }
`
const TitleCont = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  gap: 1400px;
  ${media.tablet} {
    gap: 620px;
  }
  ${media.mobile} {
    gap: 320px;
  }

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
  .swiper {
    display: flex;
    overflow: visible;
  }
  .swiper-slide {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    /* gap: 100px; */
    ${media.tablet} {
      gap: 16px;
    }
    ${media.mobile} {
      gap: 10px;
    }
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

const SoonContList = () => {
  // const dispatch = useDispatch()
  const swiperRef = useRef()

  const goNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext()
    }
  }

  const goPrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev()
    }
  }
  return (
    <SoonListWrap>
      <SoonHeader>
        <TitleCont>
          <h2>title</h2>
          <h3>more</h3>
        </TitleCont>
      </SoonHeader>
      <SoonList>
        <Swiper
          className="swiper"
          ref={swiperRef}
          modules={[Navigation]}
          spaceBetween={24}
          pagination={{ clickable: true }}
          slidesPerView={1.1}
          navigation={false}>
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
    </SoonListWrap>
  )
}

export default SoonContList
