import PropTypes from 'prop-types';

const Body = ({ children }) => {
  const PREFIX = 'modal';
  return <div className={`${PREFIX}__body`}>{children}</div>;
};

Body.propTypes = {
  children: PropTypes.node,
};

export default Body;
