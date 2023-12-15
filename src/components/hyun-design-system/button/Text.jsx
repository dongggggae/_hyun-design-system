import PropTypes from 'prop-types';

const BtnText = ({ text }) => {
  const PREFIX = 'btn';

  return <span className={`${PREFIX}__text`}>{text}</span>;
};

BtnText.propTypes = {
  text: PropTypes.string,
};

export default BtnText;
