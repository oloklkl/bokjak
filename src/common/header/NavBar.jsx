import { NavLink, useNavigate, useLocation, Link } from 'react-router-dom';
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
    const location = useLocation();
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

    // 현재 URL의 'category' 파라미터를 추출하는 함수
    const getCategoryFromUrl = () => {
        const searchParams = new URLSearchParams(location.search);
        return searchParams.get('category');
    };

    // 현재 URL과 카테고리에 따라 active 여부를 반환하는 함수
    const isActiveCategory = (targetCategory) => {
        const currentCategory = getCategoryFromUrl();
        const currentPath = location.pathname;

        const isValidPath = currentPath === '/subpage' || currentPath === '/subpage/movie';
        return isValidPath && currentCategory === targetCategory;
    };

    return (
        <NavWrap className='nav'>
            <NavCenter className='nav-center'>
                <li>
                    <NavLink
                        to='/about'
                        className={location.pathname === '/about' ? 'active' : ''}
                        onClick={() => dispatch(setActiveLink('/about'))}
                    >
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink to='#' className={isOpen ? 'active' : ''} onClick={handleToggle}>
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
                    <Link to='/subpage?category=영화' className={isActiveCategory('영화') ? 'active' : ''}>
                        영화
                    </Link>
                </li>
                <li>
                    <Link to='/subpage?category=시리즈' className={isActiveCategory('시리즈') ? 'active' : ''}>
                        시리즈
                    </Link>
                </li>
            </NavCenter>
            <NavRight className='nav-right'>
                <li>
                    <NavLink
                        to='/search'
                        className={location.pathname === '/search' ? 'active' : ''}
                        onClick={() => dispatch(setActiveLink('search'))}
                    >
                        <IconButton className='gray40 none' icon={<MagnifyingGlass size={24} />} text='검색' />
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/notification'
                        className={location.pathname === '/notification' ? 'active' : ''}
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
                        className={location.pathname === (authed ? '/mypage' : '/login') ? 'active' : ''}
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
