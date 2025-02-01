import { Outlet } from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import { Detail } from '../components';

const Layout = () => {
    return (
        <div className="wrap">
            <Header />
            {/* <Detail /> */}
            <main className="main">
                {/* Router 페이지 */}
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
