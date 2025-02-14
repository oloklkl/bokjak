import { Outlet } from 'react-router-dom'
import Header from './header'
import Footer from './footer'
import { Detail } from '../components'
import { useSelector } from 'react-redux'

const Layout = () => {
  const { isDetailOpen } = useSelector((state) => state.detailR)
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
  )
}

export default Layout
