import { Link } from 'react-router-dom';
import { IconButton } from '../../ui';
import { BellSimple, CaretDown, CaretUp, MagnifyingGlass, User, X } from '@phosphor-icons/react';
import { CategoryDropdown, CloseButton, NavCenter, NavRight, NavWrap } from './style';
import { useDispatch, useSelector } from 'react-redux';
import { selectCategory, toggleCategory } from '../../store/modules/categorySlice';

const NavBar = () => {
    const dispatch = useDispatch();
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
                    <Link to={'/about'}>About</Link>
                </li>
                <li className='category'>
                    <Link to='#' className='category-link' onClick={handleToggle}>
                        카테고리
                        <IconButton
                            className='gray40 none'
                            icon={isOpen ? <CaretUp size={24} /> : <CaretDown size={24} />}
                            text={isOpen ? 'Close' : 'Open'}
                            aria-label='카테고리 열기/닫기'
                        />
                    </Link>
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
                    <Link to={'/subpage/movie'}>영화</Link>
                </li>
                <li>
                    <Link to={'/subpage/drama'}>드라마</Link>
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
