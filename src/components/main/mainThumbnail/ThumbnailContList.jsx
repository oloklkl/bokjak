import styled from 'styled-components'
import { font } from '../../../styled/theme'
import { IconButton } from '../../../ui'
import { CaretLeft, CaretRight } from '@phosphor-icons/react'
import ThumbnailCard from '../../../common/main/card/thumbnail/ThumbnailCard'
import { media } from '../../../styled/media'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'
// import { useDispatch } from 'react-redux'
import { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getContentDetail, getMovies } from '../../../store/modules/getThunk'
import { detailActions } from '../../../store/modules/detailSlice'

const ThumbnailListWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 40px;
  ${media.mobile} {
    gap: 20px;
  }
`

const ThumbnailHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  gap: 1400px;

  h2 {
    font-size: ${font('title', 'xxlg')};

    ${media.tablet} {
      gap: 620px;
    }
    ${media.mobile} {
      gap: 320px;
    }
  }

  h2 {
    font-size: ${font('title', 'xxlg')};
    ${media.tablet} {
      font-size: ${font('title', 'xlg')};
    }
    ${media.mobile} {
      font-size: ${font('title', 'lg')};
    }
  }
  h3 {
    font-size: ${font('body', 'sm')};
  }
`

const ThumbnailList = styled.div`
  position: relative;
  display: flex;
  .swiper {
    overflow: visible;
  }

  .swiper-slide {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  }
`

const NavigationButton = styled.div`
  position: absolute;
  top: 50%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  transform: translateY(-50%);
  z-index: 3;
`

const ThumbnailContList = () => {
  const { movies } = useSelector((state) => state.contentR)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getMovies())
  }, [dispatch])

  const showDetailModal = (type, id) => {
    dispatch(getContentDetail({ type, id }))
    dispatch(detailActions.openDetailModal({}))
  }
  // const dispatch = useDispatch()
  const swiperRef = useRef()

  const goNext = () => {
    // **추가됨: goNext 함수**
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext()
    }
  }

  const goPrev = () => {
    // **추가됨: goPrev 함수**
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev()
    }
  }
  return (
    <ThumbnailListWrap>
      <ThumbnailHeader>
        <h2>title</h2>
        <h3>more</h3>
      </ThumbnailHeader>
      <ThumbnailList>
        <Swiper
          className="swiper"
          ref={swiperRef}
          modules={[Navigation]}
          pagination={{ clickable: true }}
          spaceBetween={24}
          slidesPerGroup={6}
          slidesPerView={6}
          navigation={false}>
          {movies.map((movie) => (
            <SwiperSlide key={movie.id}>
              <ThumbnailCard
                movie={movie}
                onClick={() => {
                  showDetailModal('movie', movie.id)
                }}
              />
            </SwiperSlide>
          ))}
          {/* <SwiperSlide>
                        <ThumbnailCard />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ThumbnailCard />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ThumbnailCard />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ThumbnailCard />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ThumbnailCard />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ThumbnailCard />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ThumbnailCard />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ThumbnailCard />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ThumbnailCard />
                    </SwiperSlide> */}
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
    </ThumbnailListWrap>
  )
}

export default ThumbnailContList
