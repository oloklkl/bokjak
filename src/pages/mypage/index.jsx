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
    const { user } = useSelector((state) => state.authR);
    const likedContents = user.likedContent;
    const bookmarkedContents = user.bookmarkedContent;

    const handleLogout = () => {
        dispatch(authActions.logout());
        navigate('/login');
    };

    return (
        <MyPageWrap>
            <div>
                <ProfileSection />

                <MyPageViewHistoryCont />
                <SubThumbnailCont
                    title="관심 콘텐츠"
                    contents={bookmarkedContents}
                    className="inner"
                    noContentText="북마크 아이콘을 눌러 관심 콘텐츠를 설정해 보세요"
                />
                <SubThumbnailCont
                    title="평가한 콘텐츠"
                    contents={likedContents}
                    noContentText="하트 아이콘을 눌러 콘텐츠를 평가해 보세요"
                />

                <BarButton
                    className="share"
                    text="로그아웃"
                    width="500px"
                    height="50px"
                    onClick={handleLogout}
                />
            </div>
            <BottomNavigation />
        </MyPageWrap>
    );
};

export default MyPage;
