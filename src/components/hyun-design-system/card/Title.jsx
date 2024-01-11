import PropTypes from 'prop-types';

const Title = ({ title }) => {
  const PREFIX = 'card__title';

  return <strong className={PREFIX}>{title}</strong>;
};

Title.propTypes = {
  title: PropTypes.string,
};

export default Title;
