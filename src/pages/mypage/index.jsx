import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../../store/modules/authSlice';
import { useNavigate } from 'react-router-dom';
import BottomNavigation from '../../common/bottomnavigation';
import MyPageViewHistoryCont from '../../components/mypage/MyPageViewHistoryCont';
import ProfileSection from '../../components/profile';
import SubThumbnailCont from '../../components/subpage/subThumbnailCont/SubThumbnailCont';
import { BarButton } from '../../ui';
import { MyPageWrap } from './style';

const MyPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { movies, tvShows } = useSelector((state) => state.contentR);

    const combinedContents = [...movies, ...tvShows].slice(0, 10);

    const handleLogout = () => {
        dispatch(authActions.logout());
        navigate('/login');
    };

    return (
        <MyPageWrap>
            <div className='inner'>
                <ProfileSection />

                <MyPageViewHistoryCont />
                <SubThumbnailCont title='관심 콘텐츠' contents={combinedContents} />

                <BarButton className='share' text='로그아웃' width='500px' height='50px' onClick={handleLogout} />
            </div>
            <BottomNavigation />
        </MyPageWrap>
    );
};

export default MyPage;
