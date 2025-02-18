import { useSelector } from 'react-redux';
import BottomNavigation from '../../common/bottomnavigation';
import MyPageViewHistoryCont from '../../components/mypage/MyPageViewHistoryCont';
import ProfileSection from '../../components/profile';
import SubThumbnailCont from '../../components/subpage/subThumbnailCont/SubThumbnailCont';
import { BarButton } from '../../ui';
import { MyPageWrap } from './style';

const MyPage = () => {
    const { movies, tvShows } = useSelector((state) => state.contentR);

    const combinedContents = [...movies, ...tvShows].slice(0, 10);

    return (
        <MyPageWrap>
            <div className='inner'>
                <ProfileSection />

                <MyPageViewHistoryCont />
                <SubThumbnailCont title='관심 콘텐츠' contents={combinedContents} />

                <BarButton className='share' text='로그아웃' width='500px' height='50px' />
            </div>
            <BottomNavigation />
        </MyPageWrap>
    );
};

export default MyPage;
