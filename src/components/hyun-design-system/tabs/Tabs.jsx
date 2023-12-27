import React from 'react';

import PropTypes from 'prop-types';

import Link from './TabLink';

const Tabs = ({ defaultActiveKey, children }) => {
  const PREFIX = 'tab';

  return (
    <React.Fragment>
      <ul className={`${PREFIX}`}>
        {React.Children.map(children, (child, index) => {
          if (React.isValidElement(child)) {
            return (
              <li key={index} className={`${PREFIX}__item`}>
                <Link title={child.props.title} />
              </li>
            );
          }
          return null;
        })}
      </ul>
      <div className={`${PREFIX}__content`}>
        {React.Children.map(children, (child, index) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child, { isActive: child.props.eventKey === defaultActiveKey, key: index });
          }
          return null;
        })}
      </div>
    </React.Fragment>
  );
};

Tabs.propTypes = {
  defaultActiveKey: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  children: PropTypes.node,
};

export default Tabs;
