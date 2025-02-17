import BottomNavigation from '../../common/bottomnavigation';
import { ThumbnailCont } from '../../components';
import MyPageViewHistoryCont from '../../components/mypage/MyPageViewHistoryCont';
import ProfileSection from '../../components/profile';
import { BarButton } from '../../ui';
import { MyPageWrap } from './style';

const MyPage = () => {
    return (
        <MyPageWrap>
            <div className='inner'>
                <ProfileSection />

                <MyPageViewHistoryCont />
                <ThumbnailCont />
                <BarButton className='share' text='로그아웃' width='500px' height='50px' />
            </div>
            <BottomNavigation />
        </MyPageWrap>
    );
};

export default MyPage;
