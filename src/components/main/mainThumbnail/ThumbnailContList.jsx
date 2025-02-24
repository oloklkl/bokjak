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
import './style.css'

const ThumbnailContList = ({
  title,
  targetGenreId = null,
  typeFilter = null,
}) => {
  const { movies, tvShows, trending } = useSelector((state) => state.contentR)
  // const { currentContent } = useSelector((state) => state.detailR)
  const dispatch = useDispatch()
  const location = useLocation()

  const [filteredContent, setFilteredContent] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  // const [isFirstLoad, setIsFirstLoad] = useState(true)
  // const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  // useEffect(() => {
  //   const handleResize = () => {
  //     setWindowWidth(window.innerWidth) // 화면 크기 업데이트
  //   }

  //   window.addEventListener('resize', handleResize)
  //   return () => window.removeEventListener('resize', handleResize) // 컴포넌트가 언마운트 될 때 이벤트 리스너 제거
  // }, [])

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)

      let combinedContent = []

      if (typeFilter === 'movie') {
        combinedContent = movies.map((item) => ({ ...item, type: 'movie' }))
      } else if (typeFilter === 'tv') {
        combinedContent = tvShows.map((item) => ({ ...item, type: 'tv' }))
      } else {
        combinedContent = [
          ...movies.map((item) => ({ ...item, type: 'movie' })),
          ...tvShows.map((item) => ({ ...item, type: 'tv' })),
          ...trending.map((item) => ({ ...item, type: 'trend' })),
        ]
      }

      // 장르 필터링 적용
      if (targetGenreId) {
        combinedContent = combinedContent.filter((content) =>
          content.genre_ids.includes(targetGenreId)
        )
      }

      setFilteredContent(combinedContent)
      setIsLoading(false)
    }

    fetchData()
  }, [movies, tvShows, trending, targetGenreId, typeFilter])

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
      {isLoading ? (
        <p>로딩 중...</p> // 로딩 표시 (원하는 UI로 변경 가능)
      ) : (
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
            {filteredContent
              .filter((content) =>
                content.type === 'movie' || content.type === 'trend'
                  ? !!content.logoImage &&
                    content.logoImage.trim() !== '' &&
                    !!content.overview &&
                    content.overview.trim() !== ''
                  : !!content.overview && content.overview.trim() !== ''
              )

              .map((content) => (
                <SwiperSlide
                  className="swiper-slide"
                  key={`${content.type}-${content.id}`}>
                  <Link
                    to={`/${content.type}/${content.id}`}
                    state={{ previousLocation: location }}>
                    <ThumbnailCard
                      content={content}
                      onClick={() => {
                        // 데스크탑이 아닐 때만 모달을 여는 함수 호출
                        showDetailModal(
                          content.type,
                          content.id,
                          content.genre_ids
                        )
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
      )}
    </ThumbnailContainer>
  )
}

export default ThumbnailContList
