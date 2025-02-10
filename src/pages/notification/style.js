import styled from 'styled-components';
import { color, font } from '../../styled/theme';

export const Container = styled.div`
    width: 100%;
`;

export const ProfileSection = styled.section`
    display: flex;
    justify-content: space-between;
    /* align-items: center; */
    padding: 36px 160px;
    width: 100%;
    height: 150px;
    overflow: visible;
    box-sizing: border-box;
    background: ${color('gray', '70')};
`;

export const UserProfile = styled.div`
    display: flex;
    img {
        width: 78px;
        border-radius: 50%;
    }
    h2 {
        font-size: ${font('title', 'xlg')};
        margin-left: 30px;
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
    }
    a:nth-of-type(1) {
        margin-right: 20px;
    }
`;

export const ContentWrapper = styled.div`
    background: ${color('gray', '80')};
    min-height: calc(100vh - 150px);
    padding: 40px 160px;
`;
export const NotificationSection = styled.div``;
export const SectionTitle = styled.div``;
