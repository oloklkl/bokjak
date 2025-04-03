import {
    CaretLeft,
    CaretRight,
} from '@phosphor-icons/react';
import { IconButton } from '../../../ui';
import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import GroupNotificationItem from './GroupNotificationItem';
import {
    GroupNotificationHeader,
    GroupNotificationListWrap,
    GroupNotificationSlider,
    HeaderContent,
    NavigationButton,
} from './style';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
    getContentByGenre,
    getContentDetail,
    getMovies,
    getTvShows,
} from '../../../store/modules/getThunk';

const GroupNotificationList = () => {
    const dispatch = useDispatch();
    const { user, joinData } = useSelector(
        (state) => state.authR
    );
    const [combinedContent, setCombinedContent] = useState(
        []
    );
    const { movies, tvShows } = useSelector(
        (state) => state.contentR
    );
    const location = useLocation();

    const [hiddenItems, setHiddenItems] = useState([]);

    const currentUser = joinData.find(
        (item) => item.id === user.id
    );

    const userBokjakAlarmData = currentUser.bokjakAlarm;

    // useEffect(() => {
    //     dispatch(getMovies());
    //     dispatch(getTvShows());
    // }, [dispatch]);

    // 두 데이터 합치기 (movies + tvShows)
    // useEffect(() => {
    //     if (movies && tvShows) {
    //         setCombinedContent([...movies, ...tvShows]);
    //     }
    // }, [movies, tvShows]);

    const swiperRef = useRef();

    const goNext = () => {
        swiperRef.current?.swiper.slideNext();
    };
    const goPrev = () => {
        swiperRef.current?.swiper.slidePrev();
    };

    // const handleHideItem = (id) => {
    //     setHiddenItems((prev) => [...prev, id]);
    // };

    return (
        <GroupNotificationListWrap>
            <GroupNotificationHeader>
                <HeaderContent>
                    <h2>
                        <span>모여봐요!</span> 알림
                    </h2>
                    <h3>more</h3>
                </HeaderContent>
            </GroupNotificationHeader>
            {userBokjakAlarmData &&
            userBokjakAlarmData.length > 0 ? (
                <GroupNotificationSlider>
                    <Swiper
                        className="swiper"
                        ref={swiperRef}
                        modules={[Navigation]}
                        pagination={{ clickable: true }}
                        navigation={false}
                        breakpoints={{
                            330: {
                                slidesPerView: 'auto',
                                spaceBetween: 10,
                            },
                            390: {
                                slidesPerView: 'auto',
                                spaceBetween: 10,
                            },
                            768: {
                                slidesPerView: 'auto',
                                spaceBetween: 16,
                            },
                            1024: {
                                slidesPerView: 'auto',
                                spaceBetween: 24,
                            },
                        }}
                    >
                        {userBokjakAlarmData.map(
                            (content) => (
                                <SwiperSlide
                                    key={content.id}
                                >
                                    <Link
                                        to={`/movie/${content.id}`}
                                        state={{
                                            previousLocation:
                                                location,
                                        }}
                                    >
                                        <GroupNotificationItem
                                            content={
                                                content
                                            }
                                            onClick={() => {
                                                handleHideItem(
                                                    content.id
                                                );
                                            }}
                                        />
                                    </Link>
                                </SwiperSlide>
                            )
                        )}
                    </Swiper>

                    <NavigationButton>
                        <IconButton
                            onClick={goPrev}
                            className="b30"
                            icon={<CaretLeft size={24} />}
                            text="caretLeft"
                        />
                        <IconButton
                            onClick={goNext}
                            className="b30"
                            icon={<CaretRight size={24} />}
                            text="caretRight"
                        />
                    </NavigationButton>
                </GroupNotificationSlider>
            ) : (
                <div className="noAlarmWrap">
                    <p>
                        복작 알림을 설정하고 즐거움을 함께
                        나눠보세요!
                    </p>
                </div>
            )}
        </GroupNotificationListWrap>
    );
};

export default GroupNotificationList;
