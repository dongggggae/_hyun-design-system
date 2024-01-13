import PropTypes from 'prop-types';

const Thumbnail = ({ imageUrl }) => {
  const PREFIX = 'card__thumbnail';

  const thumbnailUrl = {
    backgroundImage: `url(${imageUrl})`,
  };

  return <div className={PREFIX} style={thumbnailUrl}></div>;
};

Thumbnail.propTypes = {
  imageUrl: PropTypes.string,
};

export default Thumbnail;
