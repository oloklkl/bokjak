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
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import topData from '../../../assets/api/topData';
import SupTopContItem from './SupTopContItem';

const SupTopContList = () => {
    const { trending, movies, tvShows } = useSelector((state) => state.contentR);
    const dispatch = useDispatch();
    const location = useLocation();
    const [searchParams] = useSearchParams();
    const category = searchParams.get('category');

    // 데이터는 tvShows에서 가져와야 하는 카테고리들
    const tvDataCategories = ['예능', '공포', '다큐', '시사', '시리즈'];
    const isTV = tvDataCategories.includes(category);
    const isMovie = category === '영화';

    const [currentData, setCurrentData] = useState(trending.slice(0, 5));

    useEffect(() => {
        if (isMovie) {
            dispatch(getMovies());
        } else if (isTV) {
            dispatch(getTvShows());
        } else {
            dispatch(getTrending());
        }
    }, [dispatch, category]);

    useEffect(() => {
        if (isMovie && movies.length > 0) {
            setCurrentData(movies.slice(0, 5));
        } else if (isTV && tvShows.length > 0) {
            setCurrentData(tvShows.slice(0, 5));
        } else if (trending.length > 0) {
            setCurrentData(trending.slice(0, 5));
        }
    }, [category, movies, tvShows, trending]);

    const getTitle = () => {
        if (category === '시리즈') return '📺 이번주 시리즈 TOP 5';
        if (category === '영화') return '🎬 이번주 영화 TOP 5';
        return '🔥 이번주 인기작 TOP 5'; // 예능/공포/다큐/시사 포함!
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
