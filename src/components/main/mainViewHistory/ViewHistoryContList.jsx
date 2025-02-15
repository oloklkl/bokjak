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
import { ViewHistoryContainer } from './style'
import { NavigationButton } from '../style'
import { Link } from 'react-router-dom'

const ViewHistoryContList = () => {
  const dispatch = useDispatch()
  const swiperRef = useRef()

  const goNext = () => {
    swiperRef.current?.swiper.slideNext()
  }
  const goPrev = () => {
    swiperRef.current?.swiper.slidePrev()
  }

  return (
    <ViewHistoryContainer>
      <div className="viewHeader">
        <h2>title</h2>
        <Link>
          <h3>more</h3>
        </Link>
      </div>

      <div className="viewList">
        <Swiper
          className="swiper"
          ref={swiperRef}
          modules={[Navigation]}
          pagination={{ clickable: true }}
          navigation={false}
          breakpoints={{
            390: { slidesPerView: 1.8, spaceBetween: 10 },

            768: { slidesPerView: 2.8, spaceBetween: 16 },
            1024: {
              slidesPerView: 4.2,
              slidesPerGroup: 4.2,
              spaceBetween: 24,
            },
          }}>
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
      </div>
    </ViewHistoryContainer>
  )
}

export default ViewHistoryContList
