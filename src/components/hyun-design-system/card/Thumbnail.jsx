import PropTypes from 'prop-types';

const Thumbnail = ({ children }) => {
  const PREFIX = 'card__thumbnail';

  return <div className={PREFIX}>{children}</div>;
};

Thumbnail.propTypes = {
  children: PropTypes.node,
};

export default Thumbnail;
