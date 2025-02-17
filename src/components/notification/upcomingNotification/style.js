import styled from 'styled-components';
import { color, font } from '../../../styled/theme';
import { media } from '../../../styled/media';

export const UpcomingNotificationWrap = styled.div``;

export const UpcomingNotificationListWrap = styled.div``;

export const UpcomingNotificationItemWrap = styled.div`
    width: 100%;
    padding: 40px 0;
    border-bottom: 1px solid ${color('gray', '60')};

    ${media.tablet} {
        padding: 30px 0;
    }

    ${media.mobile} {
        padding: 20px 0;
    }
`;

// UpcomingNotification
export const UpcomingTitleWrap = styled.div`
    font-weight: bold;
    margin-bottom: 40px;

    h2 {
        font-size: ${font('title', 'exlg')};

        ${media.tablet} {
            font-size: ${font('title', 'xlg')};
        }
        ${media.mobile} {
            font-size: ${font('title', 'lg')};
        }

        span {
            color: ${color('primary', 'default')};
        }
    }
`;

// UpcomingNotificationItem
export const UpcomingContentWrap = styled.div`
    ${media.desktop} {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 50px;
    }

    ${media.tablet} {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
`;

export const HeaderTitle = styled.div`
    h2 {
        color: ${color('gray', '20')};
        font-size: ${font('title', 'xlg')};
        font-weight: bold;
        width: 100px;

        ${media.tablet} {
            font-size: ${font('title', 'lg')};
            margin-bottom: 10px;
        }
        ${media.mobile} {
            font-size: ${font('title', 'md')};
        }
    }
`;

export const UpcomingImageWrap = styled.div`
    img {
        width: 130px;
        height: 160px;
        border-radius: 7px;

        ${media.tablet} {
            width: 100px;
            height: 140px;
        }
        ${media.mobile} {
            width: 90px;
            height: 115px;
        }
    }
`;

export const UpcomingInfoWrap = styled.div`
    ${media.desktop} {
        margin-top: 15px;
    }
    ${media.tablet} {
        margin-left: 30px;
        margin-bottom: 15px;
    }
    ${media.mobile} {
    }

    h3 {
        font-size: ${font('title', 'md')};
        color: ${color('gray', '20')};

        ${media.desktop} {
            margin-right: 5px;
        }

        ${media.tablet} {
            font-size: ${font('body', 'md')};
        }
        ${media.mobile} {
            margin-right: 10px;
            font-size: ${font('body', 'md')};
        }
    }
    em,
    span {
        font-size: ${font('detail', 'lg')};
        color: ${color('gray', '40')};

        ${media.tablet} {
            font-size: ${font('detail', 'md')};
        }
        ${media.mobile} {
            font-size: ${font('detail', 'md')};
        }
    }
    em {
        margin: 0 5px;
    }
`;

export const UpcomingActionWrap = styled.div`
    display: flex;
    align-items: center;
    width: 250px;
    margin-bottom: 10px;

    ${media.tablet} {
    }
`;

export const UpcomingDescription = styled.div`
    p {
        color: ${color('gray', '40')};
        font-size: ${font('title', 'md')};

        ${media.tablet} {
            font-size: ${font('body', 'md')};
            margin-top: 20px;
        }
        ${media.mobile} {
            font-size: ${font('body', 'xsm')};
        }
    }
`;

export const UpcomingUpIconWrap = styled.div`
    cursor: pointer;

    ${media.desktop} {
        display: none;
    }
    ${media.tablet} {
        display: flex;
    }
`;

export const UpcomingDownIconWrap = styled.div`
    cursor: pointer;
    width: 60px;

    ${media.tablet} {
        display: none;
    }
`;

export const UpcomingHeaderWrap = styled.div`
    display: flex;

    justify-content: space-between;

    ${media.tablet} {
        width: 100%;
    }
`;

export const FlexWrap = styled.div`
    ${media.desktop} {
        display: flex;
        align-items: center;
        gap: 50px;
    }

    ${media.tablet} {
        display: flex;
        align-items: center;
    }
`;
