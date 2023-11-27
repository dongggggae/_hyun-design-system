import PropTypes from 'prop-types';

const Accordion = ({ children }) => {
  const PREFIX = 'accordion';
  return <div className={PREFIX}>{children}</div>;
};

Accordion.propTypes = {
  children: PropTypes.node,
};

export default Accordion;
