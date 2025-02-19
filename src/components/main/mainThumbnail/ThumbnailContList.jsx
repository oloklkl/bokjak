import { IconButton } from '../../../ui'
import { CaretLeft, CaretRight } from '@phosphor-icons/react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'
import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  getContentByGenre,
  getContentDetail,
  getMovies,
  getTvShows,
} from '../../../store/modules/getThunk'
import { Link, useLocation } from 'react-router-dom'
import { ThumbnailContainer, ThumbnailHeader, ThumbnailList } from './style'
import ThumbnailCard from '../../../ui/ThumbnailCard'
import { NavigationButton } from '../style'

const ThumbnailContList = ({
  title,
  targetGenreId = null,
  isRandom = false,
}) => {
  const { movies, tvShows } = useSelector((state) => state.contentR)
  const dispatch = useDispatch()
  const location = useLocation()

  const combinedContent = [
    ...movies.map((item) => ({ ...item, type: 'movie' })),
    ...tvShows.map((item) => ({ ...item, type: 'tv' })),
  ]

  let filteredContent = combinedContent

  if (targetGenreId) {
    filteredContent = combinedContent.filter((content) =>
      content.genre_ids.includes(targetGenreId)
    )
  }

  if (isRandom) {
    filteredContent = [...filteredContent].sort(() => Math.random() - 0.5)
  }

  const thumnail = filteredContent.slice(0, 12)

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
    <ThumbnailContainer>
      <ThumbnailHeader>
        <h2>{title}</h2>
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
              slidesPerGroup: 5,
              spaceBetween: 24,
            },
          }}>
          {thumnail
            .filter(
              (content) =>
                !!content.logoImage &&
                content.logoImage.trim() !== '' &&
                !!content.overview &&
                content.overview.trim() !== ''
            )
            .map((content) => (
              <SwiperSlide key={`${content.type}-${content.id}`}>
                <Link
                  to={`/${content.type}/${content.id}`}
                  state={{ previousLocation: location }}>
                  <ThumbnailCard
                    content={content}
                    onClick={() =>
                      showDetailModal(
                        content.type,
                        content.id,
                        content.genre_ids
                      )
                    }
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
