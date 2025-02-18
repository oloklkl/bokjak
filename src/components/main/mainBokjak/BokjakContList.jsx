import BokjakContItem from './BokjakContItem'
import { IconButton } from '../../../ui'
import { CaretLeft, CaretRight, QuestionMark } from '@phosphor-icons/react'
import { useEffect, useRef, useState } from 'react'
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
import BokjakModal from './BokjakModal'

const BokjakContList = () => {
  const { movies } = useSelector((state) => state.contentR)
  const { bokjakData } = useSelector((state) => state.mainR)

  const dispatch = useDispatch()
  const location = useLocation()
  const movie = movies.slice(0, 10)
  const bokjakItems = bokjakData.slice(0, 10)

  // combinedContent: 영화 데이터와 복작 데이터의 타이틀, 시간 결합
  const combinedContent = movie.map((content, index) => {
    const bokjakTitle = bokjakItems[index]?.bokjak_title || 'Default Title'
    const bokjakTime = bokjakItems[index]?.bokjak_time || 'Default Time'
    const bokjakPeople =
      bokjakItems[index]?.expected_participants || 'Default Time'

    return {
      ...content,
      bokjak_title: bokjakTitle,
      bokjak_time: bokjakTime,
      expected_participants: bokjakPeople,
    }
  })

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedContent, setSelectedContent] = useState(null)

  useEffect(() => {
    dispatch(getMovies())
    dispatch(getTvShows())
  }, [dispatch])

  const openModal = (content) => {
    setSelectedContent(content)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedContent(null)
  }

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
    <BokjakListWrap>
      <BokjakHeader>
        <div className="quesCont">
          <h2>title</h2>
          <IconButton
            className="border"
            icon={<QuestionMark size={18} />}
            text="smiley"
          />
          <div className="msgBox">
            <div className="textarea">
              ‘모여보기 복작’은 친구들과 실시간으로 영화를 보며 채팅으로
              소통하는 특별한 경험입니다. <br />
              🎬혼자서 느끼기엔 아쉬운 순간들, 이제 함께 즐기며 더 특별하게
              만들어보세요! 💬✨ 멀리 있어도 함께하는 그 순간, ‘모여보기
              복작’에서 지금 바로 경험해보세요.
            </div>
          </div>
        </div>
        <Link>
          <h3>더보기</h3>
        </Link>
      </BokjakHeader>

      <BokjakList>
        <Swiper
          className="swiper"
          ref={swiperRef}
          modules={[Navigation]}
          breakpoints={{
            330: {
              slidesPerView: 2.8,
              slidesPerGroup: 1,
              spaceBetween: 10,
            },
            390: {
              slidesPerView: 2.8,
              slidesPerGroup: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 4.2,
              slidesPerGroup: 1,
              spaceBetween: 24,
            },
            1024: {
              slidesPerView: 5.2,
              slidesPerGroup: 5.2,
              spaceBetween: 32,
            },
          }}>
          {combinedContent.map((content) => (
            <SwiperSlide key={content.id}>
              <Link
                to={`/movie/${content.id}`}
                state={{ previousLocation: location }}>
                <BokjakContItem
                  content={content}
                  onClick={() => {
                    showDetailModal('movie', content.id, content.genre_ids)
                    openModal(content)
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
      {isModalOpen && selectedContent && (
        <BokjakModal content={selectedContent} closeModal={closeModal} />
      )}
    </BokjakListWrap>
  )
}

export default BokjakContList
