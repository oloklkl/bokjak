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
import {
    getContentByGenre,
    getContentDetail,
} from '../../store/modules/getThunk';
import { Link, useParams } from 'react-router-dom';

const MoreLikeThisList = () => {
    const { moreLikeThisData, currentGenre } = useSelector(
        (state) => state.detailR
    );
    const { width } = useSelector((state) => state.windowR);
    const { type } = useParams();
    const dispatch = useDispatch();

    const showDetailModal = (type, id, genreId) => {
        dispatch(getContentDetail({ type, id }));
        dispatch(getContentByGenre({ type, genreId }));
    };

    useEffect(() => {
        const genreId = currentGenre.map(
            (genre) => genre.id
        );
        dispatch(getContentByGenre({ type, genreId }));
    }, [currentGenre]);

    if (!moreLikeThisData || moreLikeThisData.length <= 0)
        return <div>Loading...</div>;

    return (
        <DetailSectionWrap>
            {width > 600 ? (
                <>
                    <h3>관련 콘텐츠</h3>
                    <Swiper
                        slidesPerView={2.4}
                        spaceBetween={20}
                        freeMode={true}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[FreeMode]}
                        className="moreLikeThisSwiper"
                        breakpoints={{
                            860: {
                                slidesPerView: 3.2,
                                spaceBetween: 24,
                            },
                        }}
                    >
                        {moreLikeThisData.map((content) => (
                            <SwiperSlide key={content.id}>
                                <Link
                                    to={`/${type}/${content.id}`}
                                    state={{
                                        previousLocation:
                                            location,
                                    }}
                                >
                                    <ContentFlipCard
                                        content={content}
                                        onClick={() => {
                                            showDetailModal(
                                                type,
                                                content.id,
                                                content.genre_ids
                                            );
                                        }}
                                    />
                                </Link>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </>
            ) : (
                <div className="morelikethis-wrap-mo">
                    {moreLikeThisData.map((content) => (
                        <Link
                            key={content.id}
                            to={`/${type}/${content.id}`}
                            state={{
                                previousLocation: location,
                            }}
                        >
                            <ContentFlipCard
                                content={content}
                                onClick={() => {
                                    showDetailModal(
                                        type,
                                        content.id,
                                        content.genre_ids
                                    );
                                }}
                            />
                        </Link>
                    ))}
                </div>
            )}
        </DetailSectionWrap>
    );
};

export default MoreLikeThisList;
