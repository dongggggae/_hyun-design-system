import React from 'react';
import PropTypes from 'prop-types';

const LayoutMain = React.memo(({ children }) => {
  const PREFIX = 'main';
  return <main className={PREFIX}>{children}</main>;
});

LayoutMain.propTypes = {
  children: PropTypes.node.isRequired,
};

LayoutMain.displayName = 'LayoutMain';

export default LayoutMain;
