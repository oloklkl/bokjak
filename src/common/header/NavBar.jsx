import { NavLink, useNavigate } from 'react-router-dom';
import { IconButton } from '../../ui';
import {
    BellSimple,
    BellSimpleRinging,
    CaretDown,
    CaretUp,
    MagnifyingGlass,
    User,
    UserCheck,
    X,
} from '@phosphor-icons/react';
import { CategoryDropdown, CategoryTitleWrap, CloseButton, NavCenter, NavRight, NavWrap } from './style';
import { useDispatch, useSelector } from 'react-redux';
import { selectCategory, toggleCategory } from '../../store/modules/categorySlice';
import { setActiveLink } from '../../store/modules/navSlice';

const NavBar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const activeLink = useSelector((state) => state.navR.activeLink);
    const { authed } = useSelector((state) => state.authR);

    const { categories, isOpen } = useSelector((state) => state.categoryR);

    const handleToggle = (e) => {
        e.preventDefault();
        dispatch(toggleCategory());
    };

    const handleCategorySelect = (category) => {
        dispatch(selectCategory(category));
        const categoryType = ['예능', '공포'].includes(category) ? 'series' : 'movie';
        navigate(`/subpage/${categoryType}?category=${category}`);
        dispatch(toggleCategory());
    };

    return (
        <NavWrap className='nav'>
            <NavCenter className='nav-center'>
                <li>
                    <NavLink
                        to={'/about'}
                        className={({ isActive }) => (isActive ? 'active' : '')}
                        onClick={() => dispatch(setActiveLink('/about'))}
                    >
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink to='#' className={({ isActive }) => (isActive ? 'active' : '')} onClick={handleToggle}>
                        <CategoryTitleWrap>
                            카테고리
                            {isOpen ? <CaretUp size={24} /> : <CaretDown size={24} />}
                        </CategoryTitleWrap>
                    </NavLink>
                    {isOpen && (
                        <CategoryDropdown>
                            {categories.map((category) => (
                                <li key={category}>
                                    <button onClick={() => handleCategorySelect(category)}>
                                        <span>{category}</span>
                                    </button>
                                </li>
                            ))}
                            <CloseButton
                                className='close-btn'
                                icon={<X size={24} />}
                                text='Close'
                                aria-label='카테고리 닫기'
                                onClick={handleToggle}
                            />
                        </CategoryDropdown>
                    )}
                </li>
                <li>
                    <NavLink
                        to={'/subpage?category=영화'}
                        className={({ isActive }) => (isActive ? 'active' : '')}
                        onClick={() => dispatch(setActiveLink('/subpage/movie'))}
                    >
                        영화
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to={'/subpage?category=시리즈'}
                        className={({ isActive }) => (isActive ? 'active' : '')}
                        onClick={() => dispatch(setActiveLink('/subpage/series'))}
                    >
                        시리즈
                    </NavLink>
                </li>
            </NavCenter>
            <NavRight className='nav-right'>
                <li>
                    <NavLink
                        to={'/search'}
                        className={({ isActive }) => (isActive ? 'active' : '')}
                        onClick={() => dispatch(setActiveLink('search'))}
                    >
                        <IconButton className='gray40 none' icon={<MagnifyingGlass size={24} />} text='검색' />
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to={'/notification'}
                        className={({ isActive }) => (isActive ? 'active' : '')}
                        onClick={() => dispatch(setActiveLink('notification'))}
                    >
                        <IconButton
                            className='gray40 none'
                            icon={
                                activeLink === 'notification' ? (
                                    <BellSimpleRinging size={24} weight='fill' />
                                ) : (
                                    <BellSimple size={24} />
                                )
                            }
                            text='알림'
                        />
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to={authed ? '/mypage' : '/login'}
                        className={({ isActive }) => (isActive ? 'active' : '')}
                        onClick={() => dispatch(setActiveLink(authed ? 'mypage' : 'login'))}
                    >
                        <IconButton
                            className='gray40 none'
                            icon={authed ? <UserCheck size={24} weight='fill' /> : <User size={24} />}
                            text={authed ? 'My Page' : 'Login'}
                        />
                    </NavLink>
                </li>
            </NavRight>
        </NavWrap>
    );
};

export default NavBar;
