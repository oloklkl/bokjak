import React from 'react';
import GlobalStyle from './styled/GlobalStyle';
import {
    BrowserRouter,
    Route,
    Routes,
} from 'react-router-dom';
import Layout from './common/Layout';
import { About, Login, Main, NotFiles } from './pages';

const App = () => {
    return (
        <>
            <BrowserRouter>
                <GlobalStyle />
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Main />} />
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
            </BrowserRouter>
        </>
    );
};

export default App;
