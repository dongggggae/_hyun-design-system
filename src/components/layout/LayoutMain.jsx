import PropTypes from 'prop-types';

const LayoutMain = ({ children }) => {
  const PREFIX = 'Main';
  return <main className={PREFIX}>{children}</main>;
};

LayoutMain.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutMain;
