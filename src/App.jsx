import React from 'react';
import GlobalStyle from './styled/GlobalStyle';
import {
    BrowserRouter,
    Route,
    Routes,
} from 'react-router-dom';
import Layout from './common/Layout';
import { About, Login, Main, NotFiles } from './pages';
import { ThemeProvider } from 'styled-components';
import { theme } from './styled/theme';

const App = () => {
    return (
        <>
            <BrowserRouter>
                <ThemeProvider theme={theme}>
                    <GlobalStyle />
                    <Routes>
                        <Route
                            path="/"
                            element={<Layout />}
                        >
                            <Route
                                index
                                element={<Main />}
                            />
                            <Route
                                path="/login"
                                element={<Login />}
                            />
                            <Route
                                path="/about"
                                element={<About />}
                            />
                        </Route>
                        <Route
                            path="*"
                            element={<NotFiles />}
                        />
                    </Routes>
                </ThemeProvider>
            </BrowserRouter>
        </>
    );
};

export default App;
