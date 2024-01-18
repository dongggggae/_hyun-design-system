import React from 'react';

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Icon from '@/components/hyun-design-system/icon/Icon';

const LayoutSidebarNav = React.memo(({ navData, openGroups, toggleOpenGroup }) => {
  return (
    <nav className="navigation">
      <ul className="sidebar__nav">
        {navData.map((item, idx) => (
          <React.Fragment key={idx}>
            {item.type === 'group' ? (
              <li className={`nav__group ${openGroups[idx] ? 'show' : ''}`} key={idx}>
                {item.children && item.children.length > 0 ? (
                  <Link className="nav__link" onClick={() => toggleOpenGroup(idx)}>
                    {item.name}
                    <Icon name="arrow-down" size="sm" color="blue" />
                  </Link>
                ) : (
                  <span className="nav__link">{item.name}</span>
                )}
                <ul className="nav__group-items">
                  {item.children.map((child, childIdx) => (
                    <li className="nav__item" key={childIdx}>
                      <Link className="nav__link" to={child.to}>
                        {child.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ) : (
              <li className="nav__item" key={idx}>
                <Link className="nav__link" to={item.to}>
                  {item.name}
                </Link>
              </li>
            )}
          </React.Fragment>
        ))}
      </ul>
    </nav>
  );
});

LayoutSidebarNav.propTypes = {
  navData: PropTypes.array,
  openGroups: PropTypes.array,
  toggleOpenGroup: PropTypes.func,
};

LayoutSidebarNav.displayName = 'LayoutSidebarNav';

export default LayoutSidebarNav;
