import { Link } from 'react-router-dom';
import { IconButton } from '../../ui';
import { BellSimple, House, MagnifyingGlass, User } from '@phosphor-icons/react';
import { BottomNavList } from './style';

const BottomNavigation = () => {
    return (
        <BottomNavList>
            <li>
                <Link to={'/'}>
                    <IconButton className='gray40 none' icon={<House size={24} />} text='BellSimple' />
                </Link>
                홈
            </li>
            <li>
                <Link to={'/notification'}>
                    <IconButton className='gray40 none' icon={<BellSimple size={24} />} text='BellSimple' />
                </Link>
                알람
            </li>
            <li>
                <Link to={'/search'}>
                    <IconButton className='gray40 none' icon={<MagnifyingGlass size={24} />} text='BellSimple' />
                </Link>
                검색
            </li>
            <li>
                <Link to={'/mypage'}>
                    <IconButton className='gray40 none' icon={<User size={24} />} text='BellSimple' />
                </Link>
                MY
            </li>
        </BottomNavList>
    );
};

export default BottomNavigation;
