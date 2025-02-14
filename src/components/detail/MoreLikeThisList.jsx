import { DetailSectionWrap } from './style';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
// import required modules
import { FreeMode } from 'swiper/modules';
import ContentFlipCard from '../../ui/ContentFlipCard';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContentByGenre, getContentDetail } from '../../store/modules/getThunk';
import { Link, useParams } from 'react-router-dom';

const MoreLikeThisList = () => {
    const { moreLikeThisData } = useSelector((state) => state.detailR);
    const { type } = useParams();
    const dispatch = useDispatch();

    const showDetailModal = (type, id, genreId) => {
        dispatch(getContentDetail({ type, id }));
        dispatch(getContentByGenre({ type, genreId }));
    };

    if (!moreLikeThisData) return <div>Loading...</div>;
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
                {moreLikeThisData.map((content) => (
                    <SwiperSlide key={content.id}>
                        <Link to={`/${type}/${content.id}`} state={{ previousLocation: location }}>
                            <ContentFlipCard
                                content={content}
                                onClick={() => {
                                    showDetailModal(type, content.id, content.genre_ids);
                                }}
                            />
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </DetailSectionWrap>
    );
};

export default MoreLikeThisList;
