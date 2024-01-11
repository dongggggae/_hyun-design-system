import PropTypes from 'prop-types';

const Text = ({ text }) => {
  const PREFIX = 'card__text';

  return <span className={PREFIX}>{text}</span>;
};

Text.propTypes = {
  text: PropTypes.string,
};

export default Text;
