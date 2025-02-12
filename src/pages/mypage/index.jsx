import BottomNavigation from '../../common/bottomnavigation';
import ProfileSection from '../../components/profile';
import { BarButton } from '../../ui';
import { MyPageWrap } from './style';

const MyPage = () => {
    return (
        <MyPageWrap>
            <ProfileSection />
            <BarButton className='share' text='로그아웃' width='500px' height='50px' />
            <BottomNavigation />
        </MyPageWrap>
    );
};

export default MyPage;
