import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Icon from '../hyun-design-system/icon/Icon';

const LayoutSidebarNav = ({ navData, openGroup, toggleGroup }) => {
  return (
    <nav className="navigation">
      <ul className="sidebar__nav">
        {navData.map((item, idx) => (
          <React.Fragment key={idx}>
            {item.type === 'group' ? (
              <li className={`nav__group ${openGroup === idx ? 'show' : ''}`} key={idx}>
                {item.children && item.children.length > 0 ? (
                  <Link className="nav__link" onClick={() => toggleGroup(idx)}>
                    {item.name}
                    <Icon name="arrowDown" size="sm" color="gray300" />
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
};

LayoutSidebarNav.propTypes = {
  navData: PropTypes.array,
  openGroup: PropTypes.number,
  toggleGroup: PropTypes.func,
};

export default LayoutSidebarNav;
