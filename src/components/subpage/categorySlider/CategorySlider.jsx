import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import { FreeMode } from 'swiper/modules';
import { CategoryContainer } from './style';
import { CategoryButton } from '../../../ui';
import { useLocation } from 'react-router-dom';

const categories = [
    { name: '영화', path: 'movie' },
    { name: '코미디' },
    { name: '시리즈', path: 'series' },
    { name: '공포' },
    { name: '판타지' },
    { name: '무협' },
    { name: 'SF' },
    { name: '예능' },
    { name: '다큐멘터리' },
    { name: '가족' },
    { name: '키즈' },
    { name: '액션' },
    { name: '로맨스' },
    { name: '스릴러' },
    { name: '어드벤처' },
    { name: '성인' },
    { name: '미스터리' },
    { name: '범죄' },
    { name: '애니메이션' },
    { name: '한국 TV 프로그램' },
    { name: '외국 TV 프로그램' },
];

const CategorySlider = () => {
    const location = useLocation();
    const currentCategory = location.pathname.split('/')[2];

    return (
        <CategoryContainer>
            <Swiper modules={[FreeMode]} freeMode={true} slidesPerView={'auto'} spaceBetween={8}>
                {categories.map((cat, index) => (
                    <SwiperSlide key={index}>
                        <CategoryButton
                            key={cat.path || cat.name}
                            text={cat.name}
                            to={`/subpage/${cat.path || cat.name}`}
                            isActive={currentCategory === (cat.path || cat.name)}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </CategoryContainer>
    );
};

export default CategorySlider;
