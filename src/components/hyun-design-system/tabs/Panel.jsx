import PropTypes from 'prop-types';

const Panel = ({ children }) => {
  const PREFIX = 'tab';

  return <div className={`${PREFIX}__panel`}>{children}</div>;
};

Panel.propTypes = {
  children: PropTypes.node,
};

export default Panel;
