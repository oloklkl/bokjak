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

const ThumbnailListWrap = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 40px;
`;

const ThumbnailHeader = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const TitleCont = styled.div`
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
`;
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
`;

const NavigationButton = styled.div`
    position: absolute;
    top: 50%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    transform: translateY(-50%);
    z-index: 3;
`;

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
        // **추가됨: goNext 함수**
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideNext();
        }
    };

    const goPrev = () => {
        // **추가됨: goPrev 함수**
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slidePrev();
        }
    };
    return (
        <ThumbnailListWrap>
            <ThumbnailHeader>
                <TitleCont>
                    <h2>title</h2>
                    <h3>more</h3>
                </TitleCont>
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
                    navigation={false}
                >
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
                    <IconButton onClick={goPrev} className="b30" icon={<CaretLeft size={24} />} text="caretLeft" />
                    <IconButton onClick={goNext} className="b30" icon={<CaretRight size={24} />} text="caretRight" />
                </NavigationButton>
            </ThumbnailList>
        </ThumbnailListWrap>
    );
};

export default ThumbnailContList;
