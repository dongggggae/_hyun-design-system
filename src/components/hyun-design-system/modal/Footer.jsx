import PropTypes from 'prop-types';

const Footer = ({ children }) => {
  const PREFIX = 'modal';

  return <div className={`${PREFIX}__footer`}>{children}</div>;
};

Footer.propTypes = {
  children: PropTypes.node,
};

export default Footer;
