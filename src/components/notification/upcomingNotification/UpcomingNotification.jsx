import styled from 'styled-components';
import UpcomingNotificationList from './UpcomingNotificationList';
import { UpcomingNotificationWrap } from '../style';
import { font } from '../../../styled/theme';

const UpcomingTitleWrap = styled.div`
    h2 {
        font-size: ${font('title', 'exlg')};
    }
`;

const UpcomingNotification = () => {
    return (
        <UpcomingNotificationWrap>
            <UpcomingTitleWrap>
                <h2>곧 공개 예정 알림</h2>
            </UpcomingTitleWrap>
            <UpcomingNotificationList />
        </UpcomingNotificationWrap>
    );
};

export default UpcomingNotification;
