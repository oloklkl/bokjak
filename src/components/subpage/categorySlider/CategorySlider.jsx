import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import { FreeMode } from 'swiper/modules';
import { CategoryContainer } from './style';
import { CategoryButton } from '../../../ui';
import { useLocation, useSearchParams } from 'react-router-dom';

const categories = [
    { name: '영화', path: 'movie' },
    { name: '코미디', type: 'movie' },
    { name: '시리즈', path: 'series' },
    { name: '공포', type: 'movie' },
    { name: '판타지', type: 'movie' },
    { name: '무협', type: 'movie' },
    { name: 'SF', type: 'movie' },
    { name: '예능', type: 'series' },
    { name: '다큐멘터리', type: 'series' },
    { name: '가족', type: 'movie' },
    { name: '키즈', type: 'movie' },
    { name: '액션', type: 'movie' },
    { name: '로맨스', type: 'movie' },
    { name: '스릴러', type: 'movie' },
    { name: '어드벤처', type: 'movie' },
    { name: '성인', type: 'movie' },
    { name: '미스터리', type: 'movie' },
    { name: '범죄', type: 'movie' },
    { name: '애니메이션', type: 'movie' },
    { name: '한국 TV 프로그램', type: 'series' },
    { name: '외국 TV 프로그램', type: 'series' },
];

const CategorySlider = () => {
    const location = useLocation();
    const [searchParams] = useSearchParams();

    const currentCategory = location.pathname.split('/')[2]; // 현재 카테고리 (movie 또는 series)
    const selectedCategory = searchParams.get('category'); // ?category=값 읽기

    return (
        <CategoryContainer>
            <Swiper modules={[FreeMode]} freeMode={true} slidesPerView={'auto'} spaceBetween={8}>
                {categories.map((cat, index) => {
                    const targetPath = cat.path || (cat.type === 'series' ? 'series' : 'movie');

                    const isActive =
                        (currentCategory === 'series' &&
                            targetPath === 'series' &&
                            (selectedCategory === cat.name || (!selectedCategory && cat.name === '시리즈'))) || // 기본 '시리즈' 활성화
                        (currentCategory === 'movie' &&
                            targetPath === 'movie' &&
                            (selectedCategory === cat.name || (!selectedCategory && cat.name === '영화'))); // 기본 '영화' 활성화

                    return (
                        <SwiperSlide key={index}>
                            <CategoryButton
                                key={cat.name}
                                text={cat.name}
                                to={`/subpage/${targetPath}?category=${cat.name}`}
                                isActive={isActive}
                            />
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </CategoryContainer>
    );
};

export default CategorySlider;
