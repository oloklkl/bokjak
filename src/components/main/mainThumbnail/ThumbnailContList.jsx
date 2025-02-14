
import styled from 'styled-components';
import { font } from '../../../styled/theme';
import { IconButton } from '../../../ui';
import { CaretLeft, CaretRight } from '@phosphor-icons/react';
import ThumbnailCard from '../../../common/main/card/thumbnail/ThumbnailCard';
import { media } from '../../../styled/media';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
// import { useDispatch } from 'react-redux'
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContentByGenre, getContentDetail, getMovies, getTvShows } from '../../../store/modules/getThunk';
import { detailActions } from '../../../store/modules/detailSlice';
import { Link, useLocation } from 'react-router-dom';


const ThumbnailContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 40px;
  ${media.mobile} {
    gap: 20px;
  }
`

const ThumbnailHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  width: 100%;
  display: flex;
  flex-direction: row;
  position: relative;
  .swiper {
    width: 100%;
    overflow: visible;
  }

  .swiper-slide {
    width: auto;
    height: auto;
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

    const { movies, tvShows } = useSelector((state) => state.contentR);
    const dispatch = useDispatch();
    const location = useLocation();

    useEffect(() => {
        dispatch(getMovies());
        dispatch(getTvShows());
    }, [dispatch]);

    const showDetailModal = (type, id, genreId) => {
        dispatch(getContentDetail({ type, id }));
        dispatch(getContentByGenre({ type, genreId }));
    };
    // const dispatch = useDispatch()
    const swiperRef = useRef();


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
        <h3>more</h3>
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
              slidesPerView: 'auto',
              slidesPerGroup: 3,
              spaceBetween: 10,
            },
            390: {
              slidesPerView: 'auto',
              slidesPerGroup: 4,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 'auto',
              slidesPerGroup: 5,
              spaceBetween: 16,
            },
            1024: {
              slidesPerView: 'auto',
              slidesPerGroup: 6,
              spaceBetween: 24,
            },
          }}>
          {movies.map((content) => (
                        <SwiperSlide key={content.id}>
                            <Link to={`/movie/${content.id}`} state={{ previousLocation: location }}>
                                <ThumbnailCard
                                    content={content}
                                    onClick={() => {
                                        showDetailModal('movie', content.id, content.genre_ids);
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
