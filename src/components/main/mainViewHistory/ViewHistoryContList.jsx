import styled from 'styled-components'
import { font } from '../../../styled/theme'
import { media } from '../../../styled/media'

import { useDispatch } from 'react-redux'

import { detailActions } from '../../../store/modules/detailSlice'
import ViewHistoryContItem from './ViewHistoryContItem'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Autoplay } from 'swiper/modules'

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

  .swiper-slide {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    overflow: visible;
    gap: 24px;
    ${media.tablet} {
      gap: 16px;
    }
    ${media.mobile} {
      gap: 10px;
    }
  }

  .swiper-button-prev,
  .swiper-button-next {
    position: absolute;
    top: 50%;
    z-index: 10;
    transform: translateY(-50%);
    background-color: rgba(0, 0, 0, 0.5);
    border: none;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    cursor: pointer;
    color: #fff;
  }

  .swiper-button-prev {
    left: 10px;
  }

  .swiper-button-next {
    right: 10px;
  }
`

const ViewHistoryContList = () => {
  const dispatch = useDispatch()

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
          modules={[Autoplay]}
          pagination={{ clickable: true }}
          spaceBetween={24}
          slidesPerView={1}
          navigation={{
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
          }}>
          <SwiperSlide className="swiper-slide">
            <ViewHistoryContItem
              onClick={() => dispatch(detailActions.openDetailModal())}
            />
            <ViewHistoryContItem />
            <ViewHistoryContItem />
            <ViewHistoryContItem />
            <ViewHistoryContItem />
            <ViewHistoryContItem />
            <ViewHistoryContItem />
            <ViewHistoryContItem />
            <ViewHistoryContItem />
          </SwiperSlide>
        </Swiper>
        {/* 내비게이션 버튼은 이제 ViewHistoryList 내부에 위치 */}
      </ViewHistoryList>
    </ViewHistoryContBox>
  )
}

export default ViewHistoryContList
