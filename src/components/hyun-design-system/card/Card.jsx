import React from 'react';

import PropTypes from 'prop-types';

const Card = ({ tag, children }) => {
  const PREFIX = 'card';

  return React.createElement(tag, { className: PREFIX }, children);
};

Card.propTypes = {
  children: PropTypes.node,
  tag: PropTypes.oneOf(['div', 'a']),
};

export default Card;
