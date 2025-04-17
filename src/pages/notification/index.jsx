import { Container, ContentWrapper, LoginPrompt, NotificationSection } from './style';

import BottomNavigation from '../../common/bottomnavigation';
import ProfileSection from '../../components/profile';
import GroupNotification from '../../components/notification/groupNotification/GroupNotification';
import UpcomingNotification from '../../components/notification/upcomingNotification/UpcomingNotification';
import { useSelector } from 'react-redux';

const Notification = () => {
    const isAuthed = useSelector((state) => state.authR.authed);

    return (
        <Container>
            {isAuthed ? (
                <>
                    <ProfileSection />
                    <ContentWrapper>
                        <div className='inner'>
                            <NotificationSection>
                                <GroupNotification />
                            </NotificationSection>

                            <NotificationSection>
                                <UpcomingNotification />
                            </NotificationSection>
                        </div>
                    </ContentWrapper>
                </>
            ) : (
                <LoginPrompt>
                    <div className='inner'>
                        <p>🎉 로그인하고 멋진 알림을 만나보세요!</p>
                    </div>
                </LoginPrompt>
            )}
            <BottomNavigation /> {/* 로그인 여부와 관계없이 항상 표시 */}
        </Container>
    );
};

export default Notification;
