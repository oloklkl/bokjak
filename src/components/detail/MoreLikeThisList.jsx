import { DetailSectionWrap } from './style';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
// import required modules
import { FreeMode } from 'swiper/modules';
import ContentFlipCard from '../../ui/ContentFlipCard';

const MoreLikeThisList = () => {
    return (
        <DetailSectionWrap>
            <h3>관련 콘텐츠</h3>
            <Swiper
                slidesPerView={3.2}
                spaceBetween={24}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode]}
                className="moreLikeThisSwiper"
            >
                <SwiperSlide>
                    <ContentFlipCard />
                </SwiperSlide>
                <SwiperSlide>
                    <ContentFlipCard />
                </SwiperSlide>
                <SwiperSlide>
                    <ContentFlipCard />
                </SwiperSlide>
                <SwiperSlide>
                    <ContentFlipCard />
                </SwiperSlide>
                <SwiperSlide>
                    <ContentFlipCard />
                </SwiperSlide>
            </Swiper>
        </DetailSectionWrap>
    );
};

export default MoreLikeThisList;
