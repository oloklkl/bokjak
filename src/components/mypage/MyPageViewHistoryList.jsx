import { useDispatch, useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { CaretLeft, CaretRight } from '@phosphor-icons/react';
import { useEffect, useRef } from 'react';
import { ViewHistoryContainer } from './style';
import { NavigationButton } from './style';
import { Link, useLocation } from 'react-router-dom';
import { getContentByGenre, getContentDetail, getMovies, getTvShows } from '../../store/modules/getThunk';
import MyPageViewHistoryItem from './MyPageViewHistoryItem';
import { IconButton } from '../../ui';

const MyPageViewHistoryList = () => {
    const { movies } = useSelector((state) => state.contentR);
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
    const swiperRef = useRef();

    const goNext = () => {
        swiperRef.current?.swiper.slideNext();
    };
    const goPrev = () => {
        swiperRef.current?.swiper.slidePrev();
    };

    return (
        <ViewHistoryContainer>
            <div className='viewHeader'>
                <h2>시청중인 콘텐츠</h2>
                <Link>
                    <h3>더보기</h3>
                </Link>
            </div>

            <div className='viewList'>
                <Swiper
                    className='swiper'
                    ref={swiperRef}
                    modules={[Navigation]}
                    pagination={{ clickable: true }}
                    navigation={false}
                    breakpoints={{
                        390: { slidesPerView: 2.1, slidesPerGroup: 1, spaceBetween: 10 },

                        768: { slidesPerView: 2.8, slidesPerGroup: 1, spaceBetween: 16 },
                        1024: {
                            slidesPerView: 4.2,
                            slidesPerGroup: 4.2,
                            spaceBetween: 24,
                        },
                    }}
                >
                    {movies
                        .filter((content) => content.overview && content.overview.trim() !== '')
                        .map((content) => (
                            <SwiperSlide key={content.id}>
                                <Link to={`/movie/${content.id}`} state={{ previousLocation: location }}>
                                    <MyPageViewHistoryItem
                                        content={content}
                                        onClick={() => {
                                            showDetailModal('movie', content.id, content.genre_ids);
                                        }}
                                    />
                                </Link>
                            </SwiperSlide>
                        ))}
                    <NavigationButton>
                        <IconButton onClick={goPrev} className='b30' icon={<CaretLeft size={24} />} text='caretLeft' />
                        <IconButton
                            onClick={goNext}
                            className='b30'
                            icon={<CaretRight size={24} />}
                            text='caretRight'
                        />
                    </NavigationButton>
                </Swiper>
            </div>
        </ViewHistoryContainer>
    );
};

export default MyPageViewHistoryList;
