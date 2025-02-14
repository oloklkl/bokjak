import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import { HeaderWrap } from './style';

const Header = () => {
    const [logoSrc, setLogoSrc] = useState(
        'https://raw.githubusercontent.com/lse-7660/bokjak-image/1cc1bc51d66246dcc6e27bc9ed887e2759fba6d1/images/common/bokjak.svg'
    );

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 1024) {
                setLogoSrc(
                    'https://raw.githubusercontent.com/lse-7660/bokjak-image/1cc1bc51d66246dcc6e27bc9ed887e2759fba6d1/images/common/bokjak-logo-only.svg'
                );
            } else {
                setLogoSrc(
                    'https://raw.githubusercontent.com/lse-7660/bokjak-image/1cc1bc51d66246dcc6e27bc9ed887e2759fba6d1/images/common/bokjak.svg'
                );
            }
        };

        handleResize(); // 초기 실행
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <HeaderWrap>
            <div className='inner'>
                <div className='header_inner'>
                    <h1>
                        <Link to={'/'}>
                            <img src={logoSrc} alt='logo' />
                        </Link>
                    </h1>
                    <NavBar />
                </div>
            </div>
        </HeaderWrap>
    );
};

export default Header;
