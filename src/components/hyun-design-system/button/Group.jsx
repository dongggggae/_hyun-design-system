import PropTypes from 'prop-types';

const BtnGroup = ({ children }) => {
  const PREFIX = 'btn';
  return <div className={`${PREFIX}-group`}>{children}</div>;
};

BtnGroup.propTypes = {
  children: PropTypes.node,
};

export default BtnGroup;
