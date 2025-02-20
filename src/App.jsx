import GlobalStyle from './styled/GlobalStyle';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Layout from './common/Layout';
import {
    About,
    BokjakLogin,
    FilmoPage,
    Join,
    Login,
    Main,
    Membership,
    MyPage,
    NotFiles,
    Notification,
    Search,
    SubPage,
    Video,
} from './pages';
import { ThemeProvider } from 'styled-components';
import { theme } from './styled/theme';
import SubLayout from './common/SubLayout';
import SearchLayout from './common/SearchLayout';
import { Detail } from './components';
import KakaoAuthCallback from './components/login/KakaoAuthCallback';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { windowActions } from './store/modules/windowSlice';

const WindowListener = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const handleResize = () => {
            dispatch(windowActions.setWindowWidth(window.innerWidth));
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [dispatch]);

    return null; // UI를 렌더링할 필요 없음
};

const App = () => {
    const location = useLocation();
    const previousLocation = location.state?.previousLocation;
    return (
        <>
            <WindowListener />
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <Routes location={previousLocation || location}>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Main />} />
                        <Route path="/notification" element={<Notification />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/membership" element={<Membership />} />
                        <Route path="/subpage/*" element={<SubPage />} />
                        <Route path="/filmo">
                            <Route path=":id" element={<FilmoPage />} />
                        </Route>
                        <Route path="/mypage" element={<MyPage />} />
                    </Route>
                    <Route element={<SubLayout />}>
                        <Route path="/login" element={<Login />} />
                        <Route path="/login/bokjaklogin" element={<BokjakLogin />} />
                        <Route path="/login/join" element={<Join />} />
                        <Route path="/video" element={<Video />} />
                    </Route>
                    <Route element={<SearchLayout />}>
                        <Route path="/search" element={<Search />} />
                    </Route>
                    <Route path="/oauth/kakao/callback" element={<KakaoAuthCallback />} />
                    <Route path="*" element={<NotFiles />} />
                </Routes>
                {previousLocation && (
                    <Routes>
                        <Route path="/:type/:id" element={<Detail />} />
                    </Routes>
                )}
            </ThemeProvider>
        </>
    );
};

export default App;
