import React from 'react';

import PropTypes from 'prop-types';

const Badge = React.memo(({ state, outline, text }) => {
  const PREFIX = 'badge';

  return (
    <React.Fragment>
      {state && outline ? <span className={[PREFIX, `${PREFIX}--outline-${state}`].join(' ')}>{text}</span> : <span className={[PREFIX, `${PREFIX}--${state}`].join(' ')}>{text}</span>}
    </React.Fragment>
  );
});

Badge.displayName = 'Badge';

Badge.defaultProps = {
  state: 'information',
  outline: false,
};

Badge.propTypes = {
  state: PropTypes.oneOf(['sucess', 'caution', 'negative', 'information']),
  outline: PropTypes.bool,
  text: PropTypes.node,
};

export default Badge;
