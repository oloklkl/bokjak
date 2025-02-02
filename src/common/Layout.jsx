import { Outlet } from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import { Smiley } from '@phosphor-icons/react';
import IconBtn from './iconbutton';

const Layout = () => {
    const [isActive]
    return (
        <div className="inner">
            <Header />
            {/* <Detail /> */}
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
