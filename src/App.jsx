import React from 'react';
import GlobalStyle from './styled/GlobalStyle';
import { Route, Routes } from 'react-router-dom';

const App = () => {
    return (
        <>
            <GlobalStyle>
                <Routes>
                    <Route path="/"></Route>
                </Routes>
            </GlobalStyle>
        </>
    );
};

export default App;
