import { CaretLeft, CaretRight } from '@phosphor-icons/react';
import {
    GroupNotificationHeader,
    GroupNotificationListWrap,
    GroupNotificationSlider,
    NavigationButton,
} from '../style';
import { IconButton } from '../../../ui';
import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import GroupNotificationItem from './GroupNotificationItem';
import styled from 'styled-components';
import { font } from '../../../styled/theme';
import { media } from '../../../styled/media';

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
    }
    h3 {
        font-size: ${font('body', 'sm')};
    }
`;

const GroupNotificationList = () => {
    const swiperRef = useRef();

    const goNext = () => {
        // **추가됨: goNext 함수**
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideNext();
        }
    };

    const goPrev = () => {
        // **추가됨: goPrev 함수**
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slidePrev();
        }
    };

    return (
        <GroupNotificationListWrap>
            <GroupNotificationHeader>
                <HeaderContent>
                    <h2>모여봐요! 알림</h2>
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
                    slidesPerView={6}
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
