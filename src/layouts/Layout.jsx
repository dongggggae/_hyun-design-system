import { Outlet } from 'react-router-dom';
import LayoutHeader from '../components/layout/LayoutHeader';
import LayoutSidebar from '../components/layout/LayoutSidebar';
import LayoutMain from '../components/layout/LayoutMain';

const Layout = () => {
  const PREFIX = 'Wrap';
  return (
    <div className={PREFIX}>
      <LayoutHeader></LayoutHeader>
      <LayoutSidebar></LayoutSidebar>
      <LayoutMain>
        <Outlet />
      </LayoutMain>
    </div>
  );
};
export default Layout;
