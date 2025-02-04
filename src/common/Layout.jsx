import { Outlet } from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import { Smiley } from '@phosphor-icons/react';
import { BarButton, IconButton } from '../ui';

const Layout = () => {
    return (
        <div className="inner">
            <Header />
            <main>
                {/* Router 페이지 */}
                <BarButton text="재생하기" width="300px" height="60px" />
                <IconButton icon={<Smiley />} text="smiley" />
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
