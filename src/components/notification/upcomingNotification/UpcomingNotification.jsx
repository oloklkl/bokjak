import styled from 'styled-components';
import UpcomingNotificationList from './UpcomingNotificationList';
import { UpcomingNotificationWrap } from '../style';
import { color, font } from '../../../styled/theme';
import { media } from '../../../styled/media';

const UpcomingTitleWrap = styled.div`
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

const UpcomingNotification = () => {
    return (
        <UpcomingNotificationWrap>
            <UpcomingTitleWrap>
                <h2>
                    <span>곧 공개 예정</span> 알림
                </h2>
            </UpcomingTitleWrap>
            <UpcomingNotificationList />
        </UpcomingNotificationWrap>
    );
};

export default UpcomingNotification;
