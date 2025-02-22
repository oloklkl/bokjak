import {
    Container,
    ContentWrapper,
    NotificationSection,
} from './style';

import BottomNavigation from '../../common/bottomnavigation';
import ProfileSection from '../../components/profile';
import GroupNotification from '../../components/notification/groupNotification/GroupNotification';
import UpcomingNotification from '../../components/notification/upcomingNotification/UpcomingNotification';

const Notification = () => {
    return (
        <Container>
            <ProfileSection />

            <ContentWrapper>
                <div className="inner">
                    <NotificationSection>
                        <GroupNotification />
                    </NotificationSection>

                    <NotificationSection>
                        <UpcomingNotification />
                    </NotificationSection>
                </div>
            </ContentWrapper>
            <BottomNavigation />
        </Container>
    );
};

export default Notification;
