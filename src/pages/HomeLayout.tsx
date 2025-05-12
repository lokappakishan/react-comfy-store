import { Outlet, useNavigation } from 'react-router-dom';
import { Header, Loading, Navbar } from '../components';
import { FC } from 'react';

const HomeLayout: FC = () => {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === 'loading';
  return (
    <>
      <Header />
      <Navbar />
      {isPageLoading ? (
        <Loading />
      ) : (
        <section className="py-15">
          <Outlet />
        </section>
      )}
    </>
  );
};
export default HomeLayout;
