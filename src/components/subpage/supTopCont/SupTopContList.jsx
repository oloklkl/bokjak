import { IconButton } from '../../../ui';
import { CaretLeft, CaretRight } from '@phosphor-icons/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useEffect, useRef, useState } from 'react';
import {
    getContentByGenre,
    getContentDetail,
    getMovies,
    getTrending,
    getTvShows,
} from '../../../store/modules/getThunk';
import { useDispatch, useSelector } from 'react-redux';
import { NavigationButton, TopListWrap } from './style';
import { Link, useLocation } from 'react-router-dom';
import topData from '../../../assets/api/topData';
import SupTopContItem from './SupTopContItem';

const SupTopContList = () => {
    const { trending, movies, tvShows } = useSelector((state) => state.contentR);
    const dispatch = useDispatch();
    const location = useLocation();
    const trendTop = trending.slice(0, 5);
    const [currentData, setCurrentData] = useState(trendTop);

    useEffect(() => {
        if (location.pathname.includes('/movie')) {
            dispatch(getMovies());
            setCurrentData(movies.slice(0, 5));
        } else if (location.pathname.includes('/series')) {
            dispatch(getTvShows());
            setCurrentData(tvShows.slice(0, 5));
        } else {
            dispatch(getTrending());
            setCurrentData(trendTop);
        }
    }, [dispatch, location.pathname, movies, tvShows, trendTop]);

    const getTitle = () => {
        if (location.pathname.includes('/movie')) return '🎬 이번주 영화 TOP 5';
        if (location.pathname.includes('/series')) return '📺 이번주 시리즈 TOP 5';
        return '🔥 이번주 인기작 TOP 5';
    };

    const showDetailModal = (type, id, genreId) => {
        dispatch(getContentDetail({ type, id }));
        dispatch(getContentByGenre({ type, genreId }));
    };
    const swiperRef = useRef();
    const goNext = () => swiperRef.current?.swiper.slideNext();
    const goPrev = () => swiperRef.current?.swiper.slidePrev();

    return (
        <TopListWrap>
            <div className='topHeader'>
                <h2>{getTitle()}</h2>
            </div>
            <div className='topList'>
                <Swiper
                    className='swiper'
                    ref={swiperRef}
                    modules={[Navigation]}
                    navigation={false}
                    breakpoints={{
                        320: { slidesPerView: 2.3, slidesPerGroup: 1, spaceBetween: 10 },
                        390: { slidesPerView: 2.3, slidesPerGroup: 1, spaceBetween: 10 },
                        768: { slidesPerView: 3.2, slidesPerGroup: 1, spaceBetween: 16 },
                        1024: { slidesPerView: 5, slidesPerGroup: 5, spaceBetween: 24 },
                    }}
                >
                    {currentData.map((content, index) => (
                        <SwiperSlide key={content.id}>
                            <Link to={`/trending/${content.id}`} state={{ previousLocation: location }}>
                                <SupTopContItem
                                    content={content}
                                    index={index}
                                    numberImg={topData[index]?.numberUrl}
                                    onClick={() => {
                                        showDetailModal('trending', content.id, content.genre_ids);
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
        </TopListWrap>
    );
};
export default SupTopContList;
