import GlobalStyle from './styled/GlobalStyle';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Layout from './common/Layout';
import {
    About,
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
import Plans from './pages/plans';
import ScrollToTop from './components/common/ScrollToTop';
import { Helmet } from 'react-helmet';

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

    return null;
};

const App = () => {
    const location = useLocation();
    const previousLocation = location.state?.previousLocation;
    return (
        <>
            <Helmet>
                <meta charset='UTF-8' />
                <meta name='viewport' content='width=device-width, initial-scale=1.0' />
                <title>Bokjak</title>

                {/* <!-- 기본 설명 --> */}
                <meta
                    name='description'
                    content='복작 OTT 팀 프로젝트 사이트입니다. 트렌디하고 감각적인 영상 콘텐츠 플랫폼이에요.'
                />

                {/* <!-- Open Graph --> */}
                <meta property='og:type' content='website' />
                <meta property='og:title' content='조성주 • BOKJAK-OTT' />
                <meta property='og:description' content='복작 팀 프로젝트' />
                <meta property='og:image' content='https://bokjak-project.netlify.app/meta/bokjak-meta.jpg' />

                <meta property='og:url' content='https://bokjak-project.netlify.app/' />

                {/* <!-- Twitter Card --> */}
                <meta name='twitter:card' content='summary_large_image' />
                <meta name='twitter:title' content='조성주 • BOKJAK-OTT' />
                <meta name='twitter:description' content='복작 팀 프로젝트' />
                <meta name='twitter:image' content='https://bokjak-project.netlify.app/meta/bokjak-meta.jpg' />
            </Helmet>
            <WindowListener />
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <ScrollToTop />
                <Routes location={previousLocation || location}>
                    <Route path='/' element={<Layout />}>
                        <Route index element={<Main />} />
                        <Route path='/notification' element={<Notification />} />
                        <Route path='/about' element={<About />} />
                        <Route path='/membership' element={<Membership />} />
                        <Route path='/subpage/*' element={<SubPage />} />
                        <Route path='/filmo'>
                            <Route path=':id' element={<FilmoPage />} />
                        </Route>
                        <Route path='/mypage' element={<MyPage />} />
                    </Route>
                    <Route element={<SubLayout />}>
                        <Route path='/login' element={<Login />} />
                        <Route path='/login/join' element={<Join />} />
                        <Route path='/plans' element={<Plans />} />
                        <Route path='/plans/:type' element={<Plans />} />
                        <Route path='/video' element={<Video />} />
                    </Route>
                    <Route element={<SearchLayout />}>
                        <Route path='/search' element={<Search />} />
                    </Route>
                    <Route path='/oauth/kakao/callback' element={<KakaoAuthCallback />} />
                    <Route path='*' element={<NotFiles />} />
                </Routes>
                {previousLocation && (
                    <Routes>
                        <Route path='/:type/:id' element={<Detail />} />
                    </Routes>
                )}
            </ThemeProvider>
        </>
    );
};

export default App;
