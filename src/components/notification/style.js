import styled from 'styled-components';
import { media } from '../../styled/media';

export const UpcomingNotificationWrap = styled.div``;

export const UpcomingNotificationListWrap = styled.div``;

export const GroupNotificationWrap = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 40px;
    padding: 100px 0 50px 0;

    ${media.tablet} {
        padding: 80px 0 40px 0;
    }
    ${media.mobile} {
        gap: 20px;
        padding: 40px 0 20px 0;
    }
`;

export const GroupNotificationListWrap = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 40px;
`;

export const GroupNotificationItemWrap = styled.div``;

export const UpcomingNotificationItemWrap = styled.div`
    width: 1600px;
    height: 186px;
    margin: 40px 0;

    ${media.tablet} {
        width: 708px;
        height: 180px;
    }

    ${media.mobile} {
        width: 350px;
        height: 208px;
    }
`;

export const GroupNotificationSlider = styled.div`
    position: relative;
    display: flex;

    .swiper {
        overflow: visible;
    }

    .swiper-slide {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
    }
`;

export const NavigationButton = styled.div`
    position: absolute;
    top: 42%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    transform: translateY(-50%);
    z-index: 3;
`;
