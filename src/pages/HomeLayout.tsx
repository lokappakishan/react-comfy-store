import { Outlet } from 'react-router-dom';
import { Header, Navbar } from '../components';

const HomeLayout = () => {
  return (
    <>
      <Header />
      <Navbar />
      <section className="py-15">
        <Outlet />
      </section>
    </>
  );
};
export default HomeLayout;
