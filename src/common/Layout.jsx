import { Outlet } from 'react-router-dom';
import Header from './header';
import Footer from './footer';

const Layout = () => {
    return (
        <div className="inner">
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
