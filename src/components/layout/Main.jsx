import PropTypes from 'prop-types';

const Main = ({ children }) => {
  const PREFIX = 'Main';
  return <main className={PREFIX}>{children}</main>;
};

Main.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Main;
