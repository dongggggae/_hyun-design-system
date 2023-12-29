import React from 'react';

import PropTypes from 'prop-types';

import Link from './Link';
import Tab from './Tab';

const Tabs = ({ children, fill, type }) => {
  const PREFIX = 'tab';

  const renderTab = (child, index) => {
    if (React.isValidElement(child)) {
      const { title, eventKey } = child.props;

      return (
        <li key={index} className={`${PREFIX}__item`}>
          <Link title={title} eventKey={eventKey} />
        </li>
      );
    }
    return null;
  };

  return (
    <React.Fragment>
      <ul className={`${PREFIX} ${fill ? `${PREFIX}--fill` : ''} ${type ? `${PREFIX}--${type}` : ''}`}>{React.Children.map(children, renderTab)}</ul>

      <div className={`${PREFIX}__content`}>
        {React.Children.map(children, (child, index) => {
          if (React.isValidElement(child)) {
            const { ...restProps } = child.props;
            return <Tab title={child.props.title} {...restProps} key={index} />;
          }
          return null;
        })}
      </div>
    </React.Fragment>
  );
};

Tabs.defaultProps = {
  fill: false,
  type: '',
};

Tabs.propTypes = {
  children: PropTypes.node,
  fill: PropTypes.bool,
  type: PropTypes.oneOf(['pills', 'inlines', '']),
};

export default Tabs;
