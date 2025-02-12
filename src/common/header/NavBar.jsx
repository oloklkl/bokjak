import { Link, NavLink } from 'react-router-dom';
import { IconButton } from '../../ui';
import { BellSimple, BellSimpleRinging, CaretDown, CaretUp, MagnifyingGlass, User, X } from '@phosphor-icons/react';
import { CategoryDropdown, CategoryTitleWrap, CloseButton, NavCenter, NavRight, NavWrap } from './style';
import { useDispatch, useSelector } from 'react-redux';
import { selectCategory, toggleCategory } from '../../store/modules/categorySlice';
import { setActiveLink } from '../../store/modules/navSlice';

const NavBar = () => {
    const dispatch = useDispatch();
    const activeLink = useSelector((state) => state.navR.activeLink);

    const handleNavClick = (link) => {
        dispatch(setActiveLink(link));
    };

    const { categories, isOpen } = useSelector((state) => state.categoryR);

    const handleToggle = (e) => {
        e.preventDefault();
        dispatch(toggleCategory());
    };

    const handleCategorySelect = (category) => {
        dispatch(selectCategory(category));
        dispatch(toggleCategory());
    };

    return (
        <NavWrap className='nav'>
            <NavCenter className='nav-center'>
                <li>
                    <NavLink
                        to={'/about'}
                        className={({ isActive }) => (isActive ? 'active' : '')}
                        onClick={() => handleNavClick('/about')}
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
                                    <Link to={`/category/${category}`} onClick={() => handleCategorySelect(category)}>
                                        <span>{category}</span>
                                    </Link>
                                </li>
                            ))}
                            <CloseButton
                                className=''
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
                        to={'/subpage/movie'}
                        className={({ isActive }) => (isActive ? 'active' : '')}
                        onClick={() => handleNavClick('/subpage/movie')}
                    >
                        영화
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to={'/subpage/drama'}
                        className={({ isActive }) => (isActive ? 'active' : '')}
                        onClick={() => handleNavClick('/subpage/drama')}
                    >
                        드라마
                    </NavLink>
                </li>
            </NavCenter>
            <NavRight className='nav-right'>
                <li>
                    <NavLink
                        to={'/search'}
                        className={({ isActive }) => (isActive ? 'active' : '')}
                        onClick={() => handleNavClick('search')}
                    >
                        <IconButton className='gray40 none' icon={<MagnifyingGlass size={24} />} text='검색' />
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to={'/notification'}
                        className={({ isActive }) => (isActive ? 'active' : '')}
                        onClick={() => handleNavClick('notification')}
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
                        to={'/login'}
                        className={({ isActive }) => (isActive ? 'active' : '')}
                        onClick={() => handleNavClick('login')}
                    >
                        <IconButton
                            className='gray40 none'
                            icon={activeLink === 'mypage' ? <User size={24} weight='fill' /> : <User size={24} />}
                            text='MY'
                        />
                    </NavLink>
                </li>
            </NavRight>
        </NavWrap>
    );
};

export default NavBar;
