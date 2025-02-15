import { CaretLeft, CaretRight } from '@phosphor-icons/react'
import { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'
import { NavigationButton } from '../style'
import { IconButton } from '../../../ui'
import { detailActions } from '../../../store/modules/detailSlice'
import SeriesContItem from './SeriesContItem'
import { SeriesContainer } from './style'
import { Link } from 'react-router-dom'

const SeriesContList = () => {
  const dispatch = useDispatch()
  const swiperRef = useRef()

  const goNext = () => {
    swiperRef.current?.swiper.slideNext()
  }
  const goPrev = () => {
    swiperRef.current?.swiper.slidePrev()
  }
  return (
    <SeriesContainer>
      <div className="seriesHeader">
        <h2>title</h2>
        <Link>
          <h3>more</h3>
        </Link>
      </div>
      <div className="seriesList">
        <Swiper
          className="swiper"
          ref={swiperRef}
          modules={[Navigation]}
          pagination={{ clickable: true }}
          navigation={false}
          breakpoints={{
            320: { slidesPerView: 1.2, slidesPerGroup: 1.2, spaceBetween: 10 },
            390: { slidesPerView: 1.2, slidesPerGroup: 1.2, spaceBetween: 10 },

            768: { slidesPerView: 2.2, slidesPerGroup: 2.2, spaceBetween: 16 },
            1024: {
              slidesPerView: 3.2,
              slidesPerGroup: 3.2,
              spaceBetween: 24,
            },
          }}>
          <SwiperSlide>
            <SeriesContItem
              onClick={() => dispatch(detailActions.openDetailModal())}
            />
          </SwiperSlide>
          <SwiperSlide>
            <SeriesContItem
              onClick={() => dispatch(detailActions.openDetailModal())}
            />
          </SwiperSlide>
          <SwiperSlide>
            <SeriesContItem
              onClick={() => dispatch(detailActions.openDetailModal())}
            />
          </SwiperSlide>
          <SwiperSlide>
            <SeriesContItem
              onClick={() => dispatch(detailActions.openDetailModal())}
            />
          </SwiperSlide>
          <SwiperSlide>
            <SeriesContItem
              onClick={() => dispatch(detailActions.openDetailModal())}
            />
          </SwiperSlide>
          <SwiperSlide>
            <SeriesContItem
              onClick={() => dispatch(detailActions.openDetailModal())}
            />
          </SwiperSlide>
          <SwiperSlide>
            <SeriesContItem
              onClick={() => dispatch(detailActions.openDetailModal())}
            />
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
    </SeriesContainer>
  )
}

export default SeriesContList
