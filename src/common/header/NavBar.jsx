import React from 'react';
import { Link } from 'react-router-dom';
import { IconButton } from '../../ui';
import { BellSimple, CaretUp, MagnifyingGlass, User } from '@phosphor-icons/react';
import { NavCenter, NavRight, NavWrap } from './style';

const NavBar = () => {
    // const categories = [
    //     '코미디',
    //     '공포',
    //     '판타지',
    //     '무협',
    //     'SF',
    //     '예능',
    //     '다큐멘터리',
    //     '가족',
    //     '키즈',
    //     '액션',
    //     '로맨스',
    //     '스릴러',
    //     '어드벤처',
    //     '성인',
    //     '미스터리',
    //     '범죄',
    //     '애니메이션',
    //     '한국 TV 프로그램',
    //     '외국 TV 프로그램',
    // ];

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
                            className='gray40 none'
                            icon={<CaretUp size={24} />}
                            text='CaretUp'
                            aria-label='카테고리 열기'
                        />
                    </Link>
                    {/* <ul>
                        {categories.map((category) => (
                            <li key={category}>
                                <Link to={'/'}>{category}</Link>
                            </li>
                        ))}
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
                        <IconButton
                            className='gray40 none'
                            icon={<MagnifyingGlass size={24} />}
                            text='MagnifyingGlass'
                        />
                    </Link>
                </li>
                <li>
                    <Link to={'/notification'}>
                        <IconButton className='gray40 none' icon={<BellSimple size={24} />} text='BellSimple' />
                    </Link>
                </li>
                <li>
                    <Link to={'/login'}>
                        <IconButton className='gray40 none' icon={<User size={24} />} text='User' />
                    </Link>
                </li>
            </NavRight>
        </NavWrap>
    );
};

export default NavBar;
