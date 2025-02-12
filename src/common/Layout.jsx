import { Outlet } from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import { Detail } from '../components';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

const Layout = () => {
    const { isDetailOpen } = useSelector((state) => state.detailR);

    useEffect(() => {
        if (isDetailOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [isDetailOpen]);

    return (
        <div className="inner">
            {isDetailOpen && <Detail />}

            <Header />
            <main>
                {/* Router 페이지 */}
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
