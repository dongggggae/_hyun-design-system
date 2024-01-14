import PropTypes from 'prop-types';

const Body = ({ children }) => {
  const PREFIX = 'accordion__body';
  return <div className={PREFIX}>{children}</div>;
};

Body.propTypes = {
  children: PropTypes.node,
};

export default Body;
