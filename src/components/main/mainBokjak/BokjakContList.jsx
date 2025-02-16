import BokjakContItem from './BokjakContItem'
import { IconButton } from '../../../ui'
import { CaretLeft, CaretRight, QuestionMark } from '@phosphor-icons/react'
import { useEffect, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'
import { BokjakHeader, BokjakList, BokjakListWrap } from './style'
import { NavigationButton } from '../style'
import { Link, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {
  getContentByGenre,
  getContentDetail,
  getMovies,
  getTvShows,
} from '../../../store/modules/getThunk'

const BokjakContList = () => {
  const { movies } = useSelector((state) => state.contentR)
  // const { movies, tvShows } = useSelector((state) => state.contentR)
  const dispatch = useDispatch()
  const location = useLocation()

  useEffect(() => {
    dispatch(getMovies())
    dispatch(getTvShows())
  }, [dispatch])

  const BokjakModal = (type, id, genreId) => {
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
    <BokjakListWrap>
      <BokjakHeader>
        <h2>title</h2>
        <IconButton
          className="border"
          icon={<QuestionMark size={18} />}
          text="smiley"
        />
        <div className="msgBox">
          <div className="textarea">
            {/* 실시간 영상 시청 및 채팅 서비스입니다. */}
            ‘모여보기 복작’은 친구들과 실시간으로 영화를 보며 채팅으로 소통하는
            특별한 경험입니다. <br />
            🎬혼자서 느끼기엔 아쉬운 순간들, 이제 함께 즐기며 더 특별하게
            만들어보세요! 💬✨ 멀리 있어도 함께하는 그 순간, ‘모여보기 복작’에서
            지금 바로 경험해보세요.
          </div>
        </div>
      </BokjakHeader>

      <BokjakList>
        <Swiper
          className="swiper"
          ref={swiperRef}
          modules={[Navigation]}
          breakpoints={{
            330: {
              slidesPerView: 2.8,
              spaceBetween: 10,
            },
            390: {
              slidesPerView: 2.8,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 4.2,
              spaceBetween: 24,
            },
            1024: {
              slidesPerView: 5.2,
              slidesPerGroup: 5.2,
              spaceBetween: 32,
            },
          }}>
          {movies.map((content) => (
            <SwiperSlide key={content.id}>
              <Link
                to={`/movie/${content.id}`}
                state={{ previousLocation: location }}>
                <BokjakContItem
                  content={content}
                  onClick={() => {
                    BokjakModal('movie', content.id, content.genre_ids)
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
      </BokjakList>
    </BokjakListWrap>
  )
}

export default BokjakContList
