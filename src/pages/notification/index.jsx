import { Container, ContentWrapper, NotificationSection, SectionTitle } from './style';

import BottomNavigation from '../../common/bottomnavigation';
import ProfileSection from '../../components/profile';

const Notification = () => {
    return (
        <Container>
            <ProfileSection />

            <ContentWrapper>
                <NotificationSection>
                    <SectionTitle></SectionTitle>
                    {/* 모아보기 알림 내용 */}
                </NotificationSection>

                <NotificationSection>
                    <SectionTitle></SectionTitle>
                    {/* 공개예정 내용 */}
                </NotificationSection>
            </ContentWrapper>
            <BottomNavigation />
        </Container>
    );
};

export default Notification;
