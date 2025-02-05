import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import { HeaderWrap } from './style';

const Header = () => {
    return (
        <HeaderWrap>
            <div className='header_inner'>
                <h1>
                    <Link to={'/'}>
                        <img src='bokjak.svg' alt='logo' />
                    </Link>
                </h1>
                <NavBar />
            </div>
        </HeaderWrap>
    );
};

export default Header;
