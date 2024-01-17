import React from 'react';

import PropTypes from 'prop-types';

const Icon = React.memo(({ name, size, color }) => {
  const PREFIX = 'icon';

  return (
    <i className={[PREFIX, `${PREFIX}__${name}`, `${PREFIX}--${size}`, `${PREFIX}--${color}`].join(' ')}>
      <b className="blind">{name}</b>
    </i>
  );
});

Icon.defaultProps = {
  size: 'md',
  color: 'black',
};

Icon.propTypes = {
  name: PropTypes.string,
  size: PropTypes.oneOf(['lg', 'md', 'sm']),
  color: PropTypes.string,
};

Icon.displayName = 'Icon';

export default Icon;
