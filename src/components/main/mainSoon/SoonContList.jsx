import SoonContItem from './SoonContItem'
import { IconButton } from '../../../ui'
import { CaretLeft, CaretRight } from '@phosphor-icons/react'
import { useEffect, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'
import { SoonHeader, SoonList, SoonListContainer } from './style'
import { NavigationButton } from '../style'
import { Link, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {
  getContentByGenre,
  getContentDetail,
  getMovies,
  getTvShows,
} from '../../../store/modules/getThunk'

const SoonContList = () => {
  const { movies } = useSelector((state) => state.contentR)
  // const { movies, tvShows } = useSelector((state) => state.contentR)
  const dispatch = useDispatch()
  const location = useLocation()
  const soon = movies.slice(0, 6)

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

  // const actionMovies = movies.filter((movie) =>
  //   movie.genreNames.includes('액션')
  // )

  return (
    <SoonListContainer>
      <SoonHeader>
        <h2>💛 곧 공개 예정!</h2>
        <Link>
          <h3>더보기</h3>
        </Link>
      </SoonHeader>
      <SoonList>
        <Swiper
          className="swiper"
          ref={swiperRef}
          modules={[Navigation]}
          navigation={false}
          breakpoints={{
            320: { slidesPerView: 1.2, slidesPerGroup: 1, spaceBetween: 10 },
            768: { slidesPerView: 1.7, slidesPerGroup: 1, spaceBetween: 16 },
            1024: {
              slidesPerView: 1.2,
              spaceBetween: 24,
            },
          }}>
          {soon
            .filter((content) => content.overview?.trim() !== '')
            .map((content) => (
              <SwiperSlide key={content.id}>
                <Link
                  to={`/movie/${content.id}`}
                  state={{ previousLocation: location }}>
                  <SoonContItem
                    content={content}
                    onClick={() => {
                      showDetailModal('movie', content.id, content.genre_ids[0])
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
      </SoonList>
    </SoonListContainer>
  )
}

export default SoonContList
