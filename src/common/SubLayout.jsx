import { Outlet } from 'react-router-dom';

const SubLayout = () => {
    return (
        <div className="">
            <section className="">
                {/* 서브영역들어오는곳 */}
                <Outlet />
            </section>
        </div>
    );
};

export default SubLayout;
