import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCreative } from 'swiper/modules';
import { useDispatch, useSelector } from 'react-redux';
import IntroItem from './IntroItem';
import { IntroSliderCont } from './style';
import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { getContentByGenre, getContentDetail, getMovies, getTvShows } from '../../../store/modules/getThunk';

const IntroList = () => {
    const { movies } = useSelector((state) => state.contentR);
    // const { movies, tvShows } = useSelector((state) => state.contentR)
    const dispatch = useDispatch();
    const location = useLocation();
    const intro = movies.slice(0, 7);

    useEffect(() => {
        dispatch(getMovies());
        dispatch(getTvShows());
    }, [dispatch]);

    const showDetailModal = (type, id, genreId) => {
        dispatch(getContentDetail({ type, id }));
        dispatch(getContentByGenre({ type, genreId }));
    };
    return (
        <IntroSliderCont>
            <Swiper
                className='swiper'
                modules={[Autoplay, EffectCreative]}
                spaceBetween={0} // 슬라이드 간 간격을 0으로 설정하여 양쪽 끝에 포스터가 보이게 함
                slidesPerView='auto' // 자동으로 슬라이드 크기 조정
                centeredSlides={true} // 가운데 정렬
                loop={true} // 무한 루프 설정
                initialSlide={0} // 첫 번째 슬라이드로 설정
                autoplay={{
                    delay: 6000,
                    disableOnInteraction: false,
                }}
                effect='creative'
                creativeEffect={{
                    prev: {
                        opacity: 1,
                        translate: ['-80%', 0, -50],
                        scale: 0.9,
                    },
                    next: {
                        opacity: 0.9,
                        translate: ['80%', 0, -100],
                        scale: 1,
                    },
                }}
                breakpoints={{
                    390: { spaceBetween: 12 },
                    768: { spaceBetween: 16 },
                    1024: { spaceBetween: 24 },
                }}
            >
                {intro
                    .filter((content) => content.overview?.trim() !== '')
                    .map((content) => (
                        <SwiperSlide key={content.id}>
                            <Link
                                to={`/movie/${content.id}`}
                                state={{
                                    previousLocation: location,
                                }}
                            >
                                <IntroItem
                                    content={content}
                                    onClick={() => {
                                        showDetailModal('movie', content.id, content.genre_ids);
                                    }}
                                />
                            </Link>
                        </SwiperSlide>
                    ))}
            </Swiper>
        </IntroSliderCont>
    );
};

export default IntroList;
