import { IconButton } from '../../../ui'
import { CaretLeft, CaretRight } from '@phosphor-icons/react'
import ThumbnailCard from '../../../common/main/card/thumbnail/ThumbnailCard'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'
// import { useDispatch } from 'react-redux'
import { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  getContentByGenre,
  getContentDetail,
  getMovies,
  getTvShows,
} from '../../../store/modules/getThunk'
// import { detailActions } from '../../../store/modules/detailSlice'
import { Link, useLocation } from 'react-router-dom'
import { ThumbnailContainer, ThumbnailHeader, ThumbnailList } from './style'
import { NavigationButton } from '../style'

const ThumbnailContList = () => {
  const { movies } = useSelector((state) => state.contentR)
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
  // const dispatch = useDispatch()
  const swiperRef = useRef()

  const goNext = () => {
    swiperRef.current?.swiper.slideNext()
  }
  const goPrev = () => {
    swiperRef.current?.swiper.slidePrev()
  }

  return (
    <ThumbnailContainer>
      <ThumbnailHeader>
        <h2>title</h2>
        <Link>
          <h3>더보기</h3>
        </Link>
      </ThumbnailHeader>
      <ThumbnailList>
        <Swiper
          className="swiper"
          ref={swiperRef}
          modules={[Navigation]}
          pagination={{ clickable: true }}
          navigation={false}
          breakpoints={{
            330: {
              slidesPerView: 2.8,
              slidesPerGroup: 1,
              spaceBetween: 10,
            },
            390: {
              slidesPerView: 3.1,
              slidesPerGroup: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 4.2,
              slidesPerGroup: 1,
              spaceBetween: 16,
            },
            1024: {
              slidesPerView: 5.1,
              slidesPerGroup: 5.1,
              spaceBetween: 24,
            },
          }}>
          {movies.map((content) => (
            <SwiperSlide key={content.id}>
              <Link
                to={`/movie/${content.id}`}
                state={{ previousLocation: location }}>
                <ThumbnailCard
                  content={content}
                  onClick={() => {
                    showDetailModal('movie', content.id, content.genre_ids)
                  }}
                />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>

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
      </ThumbnailList>
    </ThumbnailContainer>
  )
}

export default ThumbnailContList
