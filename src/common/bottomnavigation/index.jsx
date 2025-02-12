import { NavLink } from 'react-router-dom';
import { IconButton } from '../../ui';
import { BellSimple, BellSimpleRinging, House, MagnifyingGlass, User } from '@phosphor-icons/react';
import { BottomNavList } from './style';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveLink } from '../../store/modules/navSlice';

const BottomNavigation = () => {
    const dispatch = useDispatch();
    const activeLink = useSelector((state) => state.navR.activeLink);

    const handleNavClick = (link) => {
        dispatch(setActiveLink(link));
    };

    return (
        <BottomNavList>
            <li>
                <NavLink
                    to={'/'}
                    className={({ isActive }) => (isActive ? 'active' : '')}
                    onClick={() => handleNavClick('home')}
                >
                    <IconButton
                        className='gray40 none'
                        icon={activeLink === 'home' ? <House size={24} weight='fill' /> : <House size={24} />}
                        text='홈'
                    />
                    홈
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
                        text='알람'
                    />
                    알람
                </NavLink>
            </li>
            <li>
                <NavLink
                    to={'/search'}
                    className={({ isActive }) => (isActive ? 'active' : '')}
                    onClick={() => handleNavClick('search')}
                >
                    <IconButton className='gray40 none' icon={<MagnifyingGlass size={24} />} text='검색' />
                    검색
                </NavLink>
            </li>
            <li>
                <NavLink
                    to={'/mypage'}
                    className={({ isActive }) => (isActive ? 'active' : '')}
                    onClick={() => handleNavClick('mypage')}
                >
                    <IconButton
                        className='gray40 none'
                        icon={activeLink === 'mypage' ? <User size={24} weight='fill' /> : <User size={24} />}
                        text='MY'
                    />
                    MY
                </NavLink>
            </li>
        </BottomNavList>
    );
};

export default BottomNavigation;
