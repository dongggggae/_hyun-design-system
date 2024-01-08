import PropTypes from 'prop-types';

const Dialog = ({ children }) => {
  const PREFIX = 'modal';
  return <div className={`${PREFIX}__dialog`}>{children}</div>;
};

Dialog.propTypes = {
  children: PropTypes.node,
};

export default Dialog;
