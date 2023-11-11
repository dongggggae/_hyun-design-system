import { Sidebar, Menu, MenuItem, SubMenu, sidebarClasses } from 'react-pro-sidebar';
import '../../assets/app.css';

const MySidebar = () => {
  const PREFIX = 'sidebar';
  return (
    <Sidebar
      className={PREFIX}
      rootStyles={{
        [`.${sidebarClasses.container}`]: { padding: '16px 5px 32px 5px', backgroundColor: '#1e1e23' },
      }}
    >
      <Menu>
        <SubMenu label="Charts">
          <MenuItem> Pie charts </MenuItem>
          <MenuItem> Line charts </MenuItem>
        </SubMenu>
        <MenuItem> Documentation </MenuItem>
        <MenuItem> Calendar </MenuItem>
      </Menu>
    </Sidebar>
  );
};
export default MySidebar;
