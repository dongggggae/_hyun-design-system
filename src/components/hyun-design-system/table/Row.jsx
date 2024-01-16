import PropTypes from 'prop-types';
const Row = ({ children }) => {
  return <tr>{children}</tr>;
};

Row.propTypes = {
  children: PropTypes.node,
};

export default Row;
