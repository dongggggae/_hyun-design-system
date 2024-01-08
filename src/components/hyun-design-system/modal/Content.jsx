import PropTypes from 'prop-types';

const Content = ({ children }) => {
  const PREFIX = 'modal';

  return <div className={`${PREFIX}__content`}>{children}</div>;
};

Content.propTypes = {
  children: PropTypes.node,
};

export default Content;
