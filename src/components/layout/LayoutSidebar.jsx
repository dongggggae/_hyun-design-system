import  { useState } from 'react';
import LayoutSidebarNav from './LayoutSidebarNav';
import navData from '../../data/nav';

const LayoutSidebar = () => {
  const [openGroup, setOpenGroup] = useState(null);

  const toggleGroup = (idx) => {
    setOpenGroup(openGroup === idx ? null : idx);
  };

  return (
    <aside className="sidebar">
      <LayoutSidebarNav navData={navData} openGroup={openGroup} toggleGroup={toggleGroup} />
    </aside>
  );
};

export default LayoutSidebar;
