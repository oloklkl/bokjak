import FlipBackContItem from './FlipBackContItem'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { EffectFlip, Navigation } from 'swiper/modules'
import { useEffect, useRef } from 'react'
import { IconButton } from '../../../ui'
import { CaretLeft, CaretRight } from '@phosphor-icons/react'
import { FlipBackHeader, FlipBackList, FlipBackListContainer } from './style'
import { NavigationButton } from '../style'
import { Link, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {
  getContentByGenre,
  getContentDetail,
  getMovies,
  getTvShows,
} from '../../../store/modules/getThunk'

const FlipBackContList = () => {
  const { movies } = useSelector((state) => state.contentR)
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
    <FlipBackListContainer>
      <FlipBackHeader>
        <h2>title</h2>
        <Link>
          <h3>더보기</h3>
        </Link>
      </FlipBackHeader>
      <FlipBackList>
        <Swiper
          className="swiper"
          ref={swiperRef}
          modules={[Navigation]}
          pagination={{ clickable: true }}
          // effect="flip"
          navigation={false}
          breakpoints={{
            320: { slidesPerViews: 3, slidesPerGroup: 3, paceBetween: 10 },
            390: { slidesPerView: 3, slidesPerGroup: 3, spaceBetween: 10 },
            768: { slidesPerView: 4, slidesPerGroup: 4, spaceBetween: 16 },
            1024: { slidesPerView: 5, slidesPerGroup: 5, spaceBetween: 24 },
          }}>
          {movies.map((content) => (
            <SwiperSlide key={content.id}>
              <Link
                to={`/movie/${content.id}`}
                state={{ previousLocation: location }}>
                <FlipBackContItem
                  content={content}
                  onClick={() => {
                    showDetailModal('movie', content.id, content.genre_ids)
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
      </FlipBackList>
    </FlipBackListContainer>
  )
}

export default FlipBackContList
