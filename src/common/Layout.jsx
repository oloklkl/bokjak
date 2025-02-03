import { Outlet } from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import { Smiley } from '@phosphor-icons/react';
import IconBtn from '../ui/iconbutton';

const Layout = () => {
    return (
        <div className="inner">
            <Header />
            <main>
                {/* Router 페이지 */}

                <IconBtn icon={<Smiley />} text="smiley" />
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
