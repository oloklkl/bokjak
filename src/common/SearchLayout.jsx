import { Outlet } from 'react-router-dom';
import Header from './header';

const SearchLayout = () => {
    return (
        <div className="">
            <Header />
            <section className="">
                {/* 서브영역들어오는곳 */}
                <Outlet />
            </section>
        </div>
    );
};

export default SearchLayout;
