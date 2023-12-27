import PropTypes from 'prop-types';

const Link = ({ title }) => {
  const PREFIX = 'tab';

  return (
    <button className={`${PREFIX}__link`}>
      <span className={`${PREFIX}__text`}>{title}</span>
    </button>
  );
};

Link.propTypes = {
  title: PropTypes.string,
};

export default Link;
