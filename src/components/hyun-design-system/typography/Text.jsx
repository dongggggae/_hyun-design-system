import React from 'react';

import PropTypes from 'prop-types';

const Text = React.memo(({ size, children, color }) => {
  const PREFIX = 'text';

  return (
    <p
      className={
        size && color ? [PREFIX, `${PREFIX}--${size}`, `fc--${color}`].join(' ') : [PREFIX, `${PREFIX}--${size}`]
      }
    >
      {children}
    </p>
  );
});

Text.defaultProps = {
  size: 'md',
  color: 'secondary',
};

Text.propTypes = {
  size: PropTypes.oneOf(['lg', 'md', 'sm', 'xs', 'xxs']),
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'information', 'positive', 'caution', 'negative']),
};

Text.displayName = 'Text';

export default Text;
