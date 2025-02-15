import { UpcomingNotificationListWrap } from './style';
import UpcomingNotificationItem from './UpcomingNotificationItem';

const UpcomingNotificationList = () => {
    return (
        <UpcomingNotificationListWrap>
            <UpcomingNotificationItem />
            <UpcomingNotificationItem />
            <UpcomingNotificationItem />
            <UpcomingNotificationItem />
        </UpcomingNotificationListWrap>
    );
};

export default UpcomingNotificationList;
