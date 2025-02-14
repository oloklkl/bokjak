import { CaretLeft, CaretRight } from '@phosphor-icons/react';
import { GroupNotificationListWrap, GroupNotificationSlider, NavigationButton } from '../style';
import { IconButton } from '../../../ui';
import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import GroupNotificationItem from './GroupNotificationItem';
import styled from 'styled-components';
import { color, font } from '../../../styled/theme';
import { media } from '../../../styled/media';

const GroupNotificationHeader = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const HeaderContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    gap: 1400px;
    h2 {
        font-size: ${font('title', 'exlg')};
        width: 200px;

        ${media.tablet} {
            gap: 620px;
            font-size: ${font('title', 'xlg')};
        }
        ${media.mobile} {
            gap: 320px;
            font-size: ${font('title', 'lg')};
        }
        span {
            color: ${color('primary', 'default')};
        }
    }
    h3 {
        font-size: ${font('body', 'sm')};
    }
`;

const GroupNotificationList = () => {
    const swiperRef = useRef();

    const goNext = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideNext();
        }
    };

    const goPrev = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slidePrev();
        }
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
                    spaceBetween={24}
                    slidesPerGroup={6}
                    slidesPerView={4.5}
                    breakpoints={{
                        1024: {
                            slidesPerView: 4, // 테블릿
                        },
                        600: {
                            slidesPerView: 3.5, // 모바일
                        },
                    }}
                    navigation={false}
                >
                    <SwiperSlide>
                        <GroupNotificationItem />
                    </SwiperSlide>
                    <SwiperSlide>
                        <GroupNotificationItem />
                    </SwiperSlide>
                    <SwiperSlide>
                        <GroupNotificationItem />
                    </SwiperSlide>
                    <SwiperSlide>
                        <GroupNotificationItem />
                    </SwiperSlide>
                    <SwiperSlide>
                        <GroupNotificationItem />
                    </SwiperSlide>
                    <SwiperSlide>
                        <GroupNotificationItem />
                    </SwiperSlide>
                    <SwiperSlide>
                        <GroupNotificationItem />
                    </SwiperSlide>
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
