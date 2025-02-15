import styled from 'styled-components';
import { media } from '../../../styled/media';
import { color, font } from '../../../styled/theme';

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

// GroupNotificationItem
export const GroupNotificationImage = styled.div`
    position: relative;
    width: 300px;
    height: 430px;

    ${media.tablet} {
        width: 200px;
        height: 300px;
    }
    ${media.mobile} {
        width: 180px;
        height: 270px;
    }

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #00000070;
    }
`;

export const GroupNotificationContent = styled.div`
    width: 300px;
    height: 100%;
    padding: 16px;
    box-sizing: border-box;
`;

export const TextWrap = styled.div`
    h2 {
        font-size: ${font('title', 'md')};
        font-weight: 700;
        position: absolute;
        top: 62%;
        left: 20px;

        ${media.tablet} {
            font-size: ${font('body', 'sm')};
        }
        ${media.mobile} {
            font-size: ${font('body', 'xsm')};
        }
    }
    span {
        color: ${color('gray', '30')};
        font-size: ${font('body', 'md')};
        position: absolute;
        top: 70%;
        left: 140px;

        ${media.tablet} {
            font-size: ${font('body', 'xsm')};
        }
        ${media.mobile} {
            font-size: ${font('label', 'xsm')};
        }
    }
    span:nth-of-type(1) {
        position: absolute;
        top: 70%;
        left: 20px;
    }
`;

export const IconWrap = styled.div`
    position: absolute;
    top: 5%;
    left: 20px;
    cursor: pointer;

    ${media.tablet} {
    }
    ${media.mobile} {
    }
`;

export const ButtonWrap = styled.div`
    position: absolute;
    top: 78%;
    margin-top: auto;

    .link {
        ${media.tablet} {
            width: 178px;
            height: 30px;
        }
        ${media.mobile} {
            width: 160px;
            height: 20px;
        }
    }
`;

// GroupNotificationList
export const GroupNotificationHeader = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

export const HeaderContent = styled.div`
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
