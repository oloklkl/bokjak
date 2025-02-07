import GlobalStyle from './styled/GlobalStyle';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './common/Layout';
import { About, Login, Main, Membership, NotFiles, Notification, Search, SubPage, Video } from './pages';
import { ThemeProvider } from 'styled-components';
import { theme } from './styled/theme';
import SubLayout from './common/SubLayout';

const App = () => {
    return (
        <>
            <BrowserRouter>
                <ThemeProvider theme={theme}>
                    <GlobalStyle />
                    <Routes>
                        <Route path="/" element={<Layout />}>
                            <Route index element={<Main />} />

                            <Route path="/search" element={<Search />} />
                            <Route path="/notification" element={<Notification />} />
                            <Route path="/about" element={<About />} />

                            <Route path="/membership" element={<Membership />} />
                            <Route path="/subpage" element={<SubPage />} />
                        </Route>
                        <Route element={<SubLayout />}>
                            <Route path="/login" element={<Login />} />
                            <Route path="/video" element={<Video />} />
                        </Route>
                        <Route path="*" element={<NotFiles />} />
                    </Routes>
                </ThemeProvider>
            </BrowserRouter>
        </>
    );
};

export default App;
