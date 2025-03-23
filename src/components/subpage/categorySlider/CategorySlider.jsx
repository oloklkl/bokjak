import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import { FreeMode } from 'swiper/modules';
import { CategoryContainer } from './style';
import { CategoryButton } from '../../../ui';
import { useLocation, useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const CategorySlider = () => {
    const categories = useSelector((state) => state.categoryR.categories);

    const location = useLocation();
    const [searchParams] = useSearchParams();

    const currentCategory = location.pathname.split('/')[2];
    const selectedCategory = searchParams.get('category') || (currentCategory === 'series' ? '시리즈' : '영화');

    const sortedCategories = [...categories].sort((a, b) => {
        if (a === selectedCategory) return -1;
        if (b === selectedCategory) return 1;
        return 0;
    });

    return (
        <CategoryContainer>
            <Swiper modules={[FreeMode]} freeMode={true} slidesPerView={'auto'} spaceBetween={8}>
                {sortedCategories.map((cat, index) => {
                    const targetPath = ['예능', '공포'].includes(cat) ? 'series' : 'movie';

                    const isActive = selectedCategory === cat;

                    return (
                        <SwiperSlide key={index}>
                            <CategoryButton
                                text={cat}
                                to={`/subpage/${targetPath}?category=${cat}`}
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
