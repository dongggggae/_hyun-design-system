import PropTypes from 'prop-types';

const Link = ({ name }) => {
  const PREFIX = 'tab';

  return (
    <button className={`${PREFIX}__link`}>
      <span className={`${PREFIX}__text`}>{name}</span>
    </button>
  );
};

Link.propTypes = {
  name: PropTypes.string,
};
export default Link;
