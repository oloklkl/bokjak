import { CaretLeft, CaretRight } from '@phosphor-icons/react';
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
import { getContentByGenre, getContentDetail, getMovies, getTvShows } from '../../../store/modules/getThunk';

const GroupNotificationList = () => {
    const dispatch = useDispatch();
    const [combinedContent, setCombinedContent] = useState([]);
    const { movies, tvShows } = useSelector((state) => state.contentR);
    const location = useLocation();

    const [hiddenItems, setHiddenItems] = useState([]);

    useEffect(() => {
        dispatch(getMovies());
        dispatch(getTvShows());
    }, [dispatch]);

    // 두 데이터 합치기 (movies + tvShows)
    useEffect(() => {
        if (movies && tvShows) {
            setCombinedContent([...movies, ...tvShows]);
        }
    }, [movies, tvShows]);

    const swiperRef = useRef();

    const goNext = () => {
        swiperRef.current?.swiper.slideNext();
    };
    const goPrev = () => {
        swiperRef.current?.swiper.slidePrev();
    };

    const handleHideItem = (id) => {
        setHiddenItems((prev) => [...prev, id]);
    };

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
            <GroupNotificationSlider>
                <Swiper
                    className='swiper'
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
                    {combinedContent.slice(0, 10).map(
                        (content) =>
                            !hiddenItems.includes(content.id) && (
                                <SwiperSlide key={content.id}>
                                    <Link to={`/movie/${content.id}`} state={{ previousLocation: location }}>
                                        <GroupNotificationItem
                                            content={content}
                                            onClick={() => {
                                                handleHideItem(content.id);
                                            }}
                                        />
                                    </Link>
                                </SwiperSlide>
                            )
                    )}
                </Swiper>

                <NavigationButton>
                    <IconButton onClick={goPrev} className='b30' icon={<CaretLeft size={24} />} text='caretLeft' />
                    <IconButton onClick={goNext} className='b30' icon={<CaretRight size={24} />} text='caretRight' />
                </NavigationButton>
            </GroupNotificationSlider>
        </GroupNotificationListWrap>
    );
};

export default GroupNotificationList;
