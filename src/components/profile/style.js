import styled from 'styled-components';
import { color, font } from '../../styled/theme';
import { media } from '../../styled/media';

export const Section = styled.section`
    position: relative;
    left: 50%;
    right: 50%;
    margin-top: 20px;
    margin-left: -50vw;
    margin-right: -50vw;
    display: flex;
    justify-content: space-between;
    padding: 36px 200px;
    width: 100vw;
    height: 150px;
    background: ${color('gray', '70')};

    ${media.tablet} {
        padding: 30px 30px;
        height: 142px;
    }
    ${media.mobile} {
        padding: 20px;
        height: 110px;
    }
`;

export const UserProfile = styled.div`
    display: flex;
    align-items: center;

    img {
        width: 78px;
        border-radius: 50%;

        ${media.tablet} {
            width: 60px;
        }
        ${media.mobile} {
            width: 50px;
        }
    }
    h2 {
        font-size: ${font('title', 'xlg')};
        margin-left: 30px;

        ${media.tablet} {
            font-size: ${font('title', 'lg')};
        }
        ${media.mobile} {
            font-size: ${font('title', 'md')};
        }
    }
`;

export const UserImage = styled.div``;

export const UserInfo = styled.div``;

export const SubscriptionInfo = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    margin-left: 20px;

    span {
        ${media.tablet} {
            font-size: ${font('detail', 'md')};
        }
        ${media.mobile} {
            font-size: ${font('detail', 'sm')};
        }
    }
    span:nth-of-type(1) {
        margin-left: 10px;
        margin-right: 20px;
        color: ${color('gray', '30')};
    }
`;

export const UserActions = styled.div`
    display: flex;
    align-items: flex-start;

    a {
        display: flex;
        align-items: center;

        span {
            font-size: ${font('detail', 'md')};

            ${media.tablet} {
                font-size: ${font('detail', 'sm')};
            }
            ${media.mobile} {
                display: none;
            }
        }
    }
    a:nth-of-type(1) {
        margin-right: 20px;

        ${media.tablet} {
            margin-right: 8px;
        }
    }
`;
