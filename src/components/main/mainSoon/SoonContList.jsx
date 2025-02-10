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
  position: relative;
  .swiper {
    width: 100%;
    overflow: visible;
  }
  .swiper-slide {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
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
  padding: 0 10px; // 버튼이 너무 붙어있지 않도록 패딩 추가
`

const SoonContList = () => {
  // const dispatch = useDispatch()
  const swiperRef = useRef()

  const goNext = () => {
    swiperRef.current?.swiper.slideNext()
  }

  const goPrev = () => {
    swiperRef.current?.swiper.slidePrev()
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
          slidesPerView={'auto'} // 변경: slidesPerView를 'auto'로 설정
          navigation={false}
          breakpoints={{
            320: {
              slidesPerView: 1.1,
            },
            768: {
              slidesPerView: 2.1,
            },
            1200: {
              slidesPerView: 3.1,
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
    </SoonListWrap>
  )
}

export default SoonContList
