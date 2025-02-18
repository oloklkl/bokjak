import { CaretLeft, CaretRight } from '@phosphor-icons/react'
import { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'
import { NavigationButton } from '../style'
import { IconButton } from '../../../ui'
import SeriesContItem from './SeriesContItem'
import { SeriesContainer } from './style'
import { Link, useLocation } from 'react-router-dom'
import {
  getContentByGenre,
  getContentDetail,
  getMovies,
  getTvShows,
} from '../../../store/modules/getThunk'

const SeriesContList = () => {
  const { tvShows } = useSelector((state) => state.contentR)
  // const { movies, tvShows } = useSelector((state) => state.contentR)
  const dispatch = useDispatch()
  const location = useLocation()

  useEffect(() => {
    dispatch(getMovies())
    dispatch(getTvShows())
  }, [dispatch])

  const showDetailModal = (type, id, genreId) => {
    dispatch(getContentDetail({ type, id }))
    dispatch(getContentByGenre({ type, genreId }))
  }

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
        <h2>한번에 몰아보는 몰입감 넘치는 시리즈!</h2>
        <Link>
          <h3>더보기</h3>
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
            320: { slidesPerView: 1.2, slidesPerGroup: 1, spaceBetween: 10 },
            390: { slidesPerView: 1.2, slidesPerGroup: 1, spaceBetween: 10 },

            768: { slidesPerView: 2, slidesPerGroup: 1, spaceBetween: 16 },
            1024: {
              slidesPerView: 3.1,
              slidesPerGroup: 3,
              spaceBetween: 24,
            },
          }}>
          {tvShows.map((content) => (
            <SwiperSlide key={content.id}>
              <Link
                to={`/tvShows/${content.id}`}
                state={{ previousLocation: location }}>
                <SeriesContItem
                  content={content}
                  onClick={() => {
                    showDetailModal('tvShows', content.id, content.genre_ids)
                  }}
                />
              </Link>
            </SwiperSlide>
          ))}

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
