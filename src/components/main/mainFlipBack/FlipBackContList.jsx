import FlipBackContItem from './FlipBackContItem';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useRef } from 'react';
import 'swiper/css/effect-flip'; //
import { IconButton } from '../../../ui';
import { CaretLeft, CaretRight } from '@phosphor-icons/react';
import { FlipBackHeader, FlipBackList, FlipBackListContainer } from './style';
import { NavigationButton } from '../style';
import { Link } from 'react-router-dom';

const images = [
    'https://github.com/lse-7660/bokjak-image/blob/main/images/main/flipback/1.png?raw=true',
    'https://github.com/lse-7660/bokjak-image/blob/main/images/main/flipback/2.png?raw=true',
    'https://github.com/lse-7660/bokjak-image/blob/main/images/main/flipback/3.png?raw=true',
    'https://github.com/lse-7660/bokjak-image/blob/main/images/main/flipback/4.png?raw=true',
    'https://github.com/lse-7660/bokjak-image/blob/main/images/main/flipback/5.png?raw=true',
];
const FlipBackContList = () => {
    const swiperRef = useRef();

    const goNext = () => {
        swiperRef.current?.swiper.slideNext();
    };

    const goPrev = () => {
        swiperRef.current?.swiper.slidePrev();
    };

    return (
        <FlipBackListContainer>
            <FlipBackHeader>
                <h2>다시 시작된 게임, 이번엔 다를 거야</h2>
                <Link>
                    <h3>더보기</h3>
                </Link>
            </FlipBackHeader>
            <FlipBackList>
                <Swiper
                    className="swiper"
                    ref={swiperRef}
                    modules={[Navigation]}
                    navigation={false}
                    breakpoints={{
                        320: { slidesPerViews: 3, slidesPerGroup: 3, paceBetween: 10 },
                        390: { slidesPerView: 3, slidesPerGroup: 3, spaceBetween: 10 },
                        768: { slidesPerView: 4, slidesPerGroup: 4, spaceBetween: 16 },
                        1024: { slidesPerView: 5, slidesPerGroup: 5, spaceBetween: 10 },
                    }}
                >
                    {images.map((imageUrl, index) => (
                        <SwiperSlide key={index}>
                            <FlipBackContItem content={{ id: index, imageUrl }} />
                        </SwiperSlide>
                    ))}

                    <NavigationButton>
                        <IconButton onClick={goPrev} className="b30" icon={<CaretLeft size={24} />} text="caretLeft" />
                        <IconButton
                            onClick={goNext}
                            className="b30"
                            icon={<CaretRight size={24} />}
                            text="caretRight"
                        />
                    </NavigationButton>
                </Swiper>
            </FlipBackList>
        </FlipBackListContainer>
    );
};

export default FlipBackContList;
