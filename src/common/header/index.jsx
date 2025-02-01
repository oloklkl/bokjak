import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';

const Header = () => {
    return (
        <div>
            <h1>
                <Link to={'/'}>Logo</Link>
            </h1>
            <NavBar />
        </div>
    );
};

export default Header;
