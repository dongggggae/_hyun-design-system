import { Link } from 'react-router-dom';
import { Sidebar, Menu, MenuItem, SubMenu, sidebarClasses } from 'react-pro-sidebar';
import '../../assets/app.css';

const MySidebar = () => {
  const PREFIX = 'Sidebar';
  return (
    <Sidebar
      className={PREFIX}
      rootStyles={{
        [`.${sidebarClasses.container}`]: { padding: '16px 5px 32px 5px', backgroundColor: '#FFFFFF' },
      }}
    >
      <Menu>
        <SubMenu label="Components">
          <MenuItem>
            <Link to="/components/btn">Button</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/components/typography">Typography</Link>
          </MenuItem>
        </SubMenu>
        <MenuItem> Documentation </MenuItem>
        <MenuItem> Calendar </MenuItem>
      </Menu>
    </Sidebar>
  );
};
export default MySidebar;
