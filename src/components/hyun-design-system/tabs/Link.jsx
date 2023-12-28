import PropTypes from 'prop-types';

import { useTabContext } from './Container';

const Link = ({ title, eventKey }) => {
  const PREFIX = 'tab';

  const { changeActiveKey, isActive } = useTabContext();

  const handleClick = () => {
    changeActiveKey(eventKey);
  };

  return (
    <button className={`${PREFIX}__link ${isActive(eventKey) ? 'active' : ''}`} onClick={handleClick}>
      <span className={`${PREFIX}__text`}>{title}</span>
    </button>
  );
};

Link.propTypes = {
  title: PropTypes.string,
  eventKey: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default Link;
