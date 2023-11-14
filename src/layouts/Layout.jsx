import { Outlet } from 'react-router-dom';
import Header from '../components/layout/Header';
import Sidebar from '../components/layout/Sidebar';
import Main from '../components/layout/Main';

const Layout = () => {
  const PREFIX = 'Wrap';
  return (
    <div className={PREFIX}>
      <Header></Header>
      <Sidebar></Sidebar>
      <Main>
        <Outlet />
      </Main>
    </div>
  );
};
export default Layout;
