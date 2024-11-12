import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import useScrollToTop from '../Hooks/useScrollToTop';

const Layout = () => {
  useScrollToTop();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;