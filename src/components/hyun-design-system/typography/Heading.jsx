import React from 'react';

import PropTypes from 'prop-types';

const Heading = React.memo(({ tag, size, text, color }) => {
  return React.createElement(tag, { className: size ? (color ? `h${size} fc--${color}` : `h${size}`) : '' }, text);
});

Heading.defaultProps = {
  tag: 'h1',
  size: '1',
};

Heading.propTypes = {
  tag: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  size: PropTypes.oneOf(['1', '2', '3', '4', '5', '6']),
  text: PropTypes.string.isRequired,
  color: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'information', 'positive', 'caution', 'negative']),
};

Heading.displayName = 'Heading';

export default Heading;
