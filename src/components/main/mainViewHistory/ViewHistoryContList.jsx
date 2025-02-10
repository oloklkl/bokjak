import styled from 'styled-components'
import { font } from '../../../styled/theme'
import { media } from '../../../styled/media'
import { useDispatch } from 'react-redux'
import { detailActions } from '../../../store/modules/detailSlice'
import ViewHistoryContItem from './ViewHistoryContItem'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'
import { IconButton } from '../../../ui'
import { CaretLeft, CaretRight } from '@phosphor-icons/react'
import { useRef } from 'react'

const ViewHistoryContBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
`

const ViewHistoryTitle = styled.div`
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
    font-size: ${font('heading', 'sm')};
    ${media.tablet} {
      font-size: ${font('heading', 'xs')};
    }
    ${media.mobile} {
      font-size: ${font('title', 'lg')};
    }
  }
  h3 {
    font-size: ${font('body', 'sm')};
  }
`

const ViewHistoryList = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  overflow: visible;
  .swiper {
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
`

const ViewHistoryContList = () => {
  const dispatch = useDispatch()
  const swiperRef = useRef()

  const goNext = () => {
    // **추가됨: goNext 함수**
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext()
    }
  }

  const goPrev = () => {
    // **추가됨: goPrev 함수**
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev()
    }
  }

  return (
    <ViewHistoryContBox>
      <ViewHistoryTitle>
        <TitleCont>
          <h2>title</h2>
          <h3>more</h3>
        </TitleCont>
      </ViewHistoryTitle>
      <ViewHistoryList>
        <Swiper
          className="swiper"
          ref={swiperRef}
          modules={[Navigation]}
          pagination={{ clickable: true }}
          spaceBetween={24}
          slidesPerGroup={4.5}
          slidesPerView={4.5}
          navigation={false}>
          <SwiperSlide>
            <ViewHistoryContItem
              onClick={() => dispatch(detailActions.openDetailModal())}
            />
          </SwiperSlide>
          <SwiperSlide>
            <ViewHistoryContItem />
          </SwiperSlide>
          <SwiperSlide>
            <ViewHistoryContItem />
          </SwiperSlide>
          <SwiperSlide>
            <ViewHistoryContItem />
          </SwiperSlide>
          <SwiperSlide>
            <ViewHistoryContItem />
          </SwiperSlide>
          <SwiperSlide>
            <ViewHistoryContItem />
          </SwiperSlide>
          <SwiperSlide>
            <ViewHistoryContItem />
          </SwiperSlide>
          <SwiperSlide>
            <ViewHistoryContItem />
          </SwiperSlide>
          <SwiperSlide>
            <ViewHistoryContItem />
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
      </ViewHistoryList>
    </ViewHistoryContBox>
  )
}

export default ViewHistoryContList
