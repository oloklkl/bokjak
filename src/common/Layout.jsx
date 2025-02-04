import { Outlet } from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import { Smiley } from '@phosphor-icons/react';
import {
    BarButton,
    CategoryButton,
    IconButton,
    RecentSearchButton,
    SlidePrev,
} from '../ui';

const Layout = () => {
    return (
        <div className="inner">
            <Header />
            <main>
                {/* Router 페이지 */}
                <RecentSearchButton text="나 혼자 산다" />
                <CategoryButton text="코미디" />
                <BarButton
                    className="share"
                    text="재생하기"
                    width="300px"
                    height="60px"
                />
                <IconButton
                    icon={<Smiley />}
                    text="smiley"
                />
                <SlidePrev />
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
