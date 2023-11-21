import PropTypes from 'prop-types';

const LayoutMain = ({ children }) => {
  const PREFIX = 'main';
  return <main className={PREFIX}>{children}</main>;
};

LayoutMain.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutMain;
