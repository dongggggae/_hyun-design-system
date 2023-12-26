import PropTypes from 'prop-types';

const List = ({ children }) => {
  const PREFIX = 'tab';

  return <ul className={`${PREFIX}`}>{children}</ul>;
};

List.propTypes = {
  children: PropTypes.node,
};

export default List;
