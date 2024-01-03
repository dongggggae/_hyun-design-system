import { Outlet } from 'react-router-dom';

import LayoutHeader from '@/components/layout/LayoutHeader';
import LayoutMain from '@/components/layout/LayoutMain';
import LayoutSidebar from '@/components/layout/LayoutSidebar';
import LayoutSidebarNav from '@/components/layout/LayoutSidebarNav';

const Layout = () => {
  const PREFIX = 'wrap';
  return (
    <div className={PREFIX}>
      <LayoutHeader></LayoutHeader>
      <LayoutSidebar>
        <LayoutSidebarNav></LayoutSidebarNav>
      </LayoutSidebar>
      <LayoutMain>
        <Outlet />
      </LayoutMain>
    </div>
  );
};
export default Layout;
