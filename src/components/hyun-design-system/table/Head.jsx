import PropTypes from 'prop-types';

const Head = ({ children }) => {
  return <thead>{children}</thead>;
};

Head.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Head;
