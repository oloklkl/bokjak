import React from 'react';
import { Link } from 'react-router-dom';
import { IconButton } from '../../ui';
import { BellSimple, CaretUp, MagnifyingGlass, User } from '@phosphor-icons/react';
import { NavCenter, NavRight, NavWrap } from './style';

const NavBar = () => {
    return (
        <NavWrap className='nav'>
            <NavCenter className='nav-center'>
                <li>
                    <Link to={'/about'}>About</Link>
                </li>
                <li>
                    <Link to={'/'} className='category'>
                        카테고리
                        <IconButton
                            className='none'
                            icon={<CaretUp size={24} />}
                            text='CaretUp'
                            aria-label='카테고리 열기'
                        />
                    </Link>
                    {/* <ul>
                        <li>
                            <Link to={'/'}>코미디</Link>
                        </li>
                        <li>
                            <Link to={'/'}>공포</Link>
                        </li>
                        <li>
                            <Link to={'/'}>판타지</Link>
                        </li>
                        <li>
                            <Link to={'/'}>무협</Link>
                        </li>
                        <li>
                            <Link to={'/'}>SF</Link>
                        </li>
                        <li>
                            <Link to={'/'}>예능</Link>
                        </li>
                        <li>
                            <Link to={'/'}>다큐멘터리</Link>
                        </li>
                        <li>
                            <Link to={'/'}>가족</Link>
                        </li>
                        <li>
                            <Link to={'/'}>키즈</Link>
                        </li>
                        <li>
                            <Link to={'/'}>액션</Link>
                        </li>
                        <li>
                            <Link to={'/'}>로맨스</Link>
                        </li>
                        <li>
                            <Link to={'/'}>스릴러</Link>
                        </li>
                        <li>
                            <Link to={'/'}>어드벤처</Link>
                        </li>
                        <li>
                            <Link to={'/'}>성인</Link>
                        </li>
                        <li>
                            <Link to={'/'}>미스터리</Link>
                        </li>
                        <li>
                            <Link to={'/'}>범죄</Link>
                        </li>
                        <li>
                            <Link to={'/'}>애니메이션</Link>
                        </li>
                        <li>
                            <Link to={'/'}>한국 TV 프로그램</Link>
                        </li>
                        <li>
                            <Link to={'/'}>외국 TV 프로그램</Link>
                        </li>
                    </ul> */}
                </li>

                <li>
                    <Link to={'/subpage'}>영화</Link>
                </li>
                <li>
                    <Link to={'/subpage'}>드라마</Link>
                </li>
            </NavCenter>
            <NavRight className='nav-right'>
                <li>
                    <Link to={'/search'}>
                        <IconButton className='none' icon={<MagnifyingGlass size={24} />} text='MagnifyingGlass' />
                    </Link>
                </li>
                <li>
                    <Link to={'/login'}>
                        <IconButton className='none' icon={<BellSimple size={24} />} text='BellSimple' />
                    </Link>
                </li>
                <li>
                    <Link to={'/login'}>
                        <IconButton className='none' icon={<User size={24} />} text='User' />
                    </Link>
                </li>
            </NavRight>
        </NavWrap>
    );
};

export default NavBar;
