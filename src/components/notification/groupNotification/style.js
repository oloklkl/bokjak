import styled from 'styled-components';
import { media } from '../../../styled/media';
import { color, font } from '../../../styled/theme';

export const GroupNotificationWrap = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 100px 0 50px 0;

    ${media.tablet} {
        padding: 80px 0 40px;
    }
    ${media.mobile} {
        gap: 20px;
        padding: 40px 0 20px;
    }
`;

// GroupNotificationItem
export const GroupNotificationItemWrap = styled.div``;

export const GroupNotificationImage = styled.div`
    position: relative;
    width: 300px;
    height: 430px;

    overflow: hidden;
    border-radius: 7px;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 7px;
    }

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
    width: 100%;
    height: 100%;
    padding: 16px;
    box-sizing: border-box;
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    padding: 16px;
    top: 0;
    left: 0;
`;

export const TextWrap = styled.div`
    text-align: center;
    width: 100%;
    margin-bottom: 10px;

    h2 {
        font-size: ${font('title', 'exlg')};
        font-weight: 700;
        max-width: 300px;
        white-space: normal;
        word-wrap: break-word;
        overflow-wrap: break-word;
        margin-bottom: 10px;

        ${media.tablet} {
            font-size: ${font('title', 'lg')};
            max-width: 180px;
        }
        ${media.mobile} {
            font-size: ${font('title', 'lg')};
            max-width: 180px;
        }
    }
    span {
        color: ${color('gray', '30')};
        font-size: ${font('body', 'lg')};
        margin-top: 10px;
    }
    span:nth-of-type(1) {
        margin-right: 20px;
    }

    p {
        color: ${color('gray', '20')};
        margin-top: 15px;
        font-size: ${font('title', 'xlg')};

        ${media.tablet} {
            font-size: ${font('title', 'lg')};
        }
        ${media.mobile} {
            font-size: ${font('title', 'md')};
        }
    }
`;

export const IconWrap = styled.div`
    cursor: pointer;
    align-self: flex-start;

    ${media.tablet} {
    }
    ${media.mobile} {
    }
`;

export const ButtonWrap = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;

    .link {
        ${media.tablet} {
            width: 178px;
            height: 40px;
        }
        ${media.mobile} {
            width: 160px;
            height: 35px;
        }
    }
`;
// GroupNotificationItem 끝

// GroupNotificationList
export const GroupNotificationListWrap = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 40px;

    ${media.mobile} {
        gap: 20px;
    }

    div {
        &.noAlarmWrap {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 140px;

            border-radius: 10px;
            border: 1px solid ${color('gray', '80')};

            color: ${color('gray', '60')};
            text-align: center;
        }
    }
`;

export const GroupNotificationHeader = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

export const HeaderContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    // text-align: center;
    width: 100%;

    h2 {
        font-size: ${font('title', 'exlg')};
        font-weight: bold;
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

export const GroupNotificationSlider = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: row;

    .swiper {
        width: 100%;
        overflow: visible;
    }

    .swiper-slide {
        width: auto;
        height: auto;
    }
`;

export const NavigationButton = styled.div`
    position: absolute;
    top: 50%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    transform: translateY(-50%);
    z-index: 3;
`;
// GroupNotificationList 끝
