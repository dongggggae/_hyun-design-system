import PropTypes from 'prop-types';

const Panel = ({ children }) => {
  const PREFIX = 'tab';

  return <div className={`${PREFIX}`}>{children}</div>;
};

Panel.propTypes = {
  children: PropTypes.node,
};

export default Panel;
