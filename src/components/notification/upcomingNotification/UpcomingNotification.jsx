import { UpcomingNotificationWrap, UpcomingTitleWrap } from './style';
import UpcomingNotificationList from './UpcomingNotificationList';

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
