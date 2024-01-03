import React, { useState } from 'react';

import LayoutSidebarNav from './LayoutSidebarNav';
import navData from '@/data/nav';

const LayoutSidebar = React.memo(() => {
  const [openGroups, setOpenGroups] = useState(Array(navData.length).fill(false));

  const toggleOpenGroup = (idx) => {
    const newOpenGroups = [...openGroups];
    newOpenGroups[idx] = !newOpenGroups[idx];
    setOpenGroups(newOpenGroups);
  };

  return (
    <aside className="sidebar">
      <LayoutSidebarNav navData={navData} openGroups={openGroups} toggleOpenGroup={toggleOpenGroup} />
    </aside>
  );
});

LayoutSidebar.displayName = 'LayoutSidebar';

export default LayoutSidebar;
