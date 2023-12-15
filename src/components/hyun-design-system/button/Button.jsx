import PropTypes from 'prop-types';

import BtnText from './Text';

const Btn = ({ type, size, text }) => {
  const PREFIX = 'btn';

  return (
    <button className={[PREFIX, `${PREFIX}--${type}`, `${PREFIX}--${size}`].join(' ')}>
      <BtnText text={text} />
    </button>
  );
};

Btn.defaultProps = {
  type: 'solid-green',
  size: 'md',
};

Btn.propTypes = {
  type: PropTypes.oneOf(['solid-green', 'solid-red', 'outline-green', 'outline-gray', 'link']),
  size: PropTypes.oneOf(['lg', 'md', 'sm', 'xs']),
  text: PropTypes.string,
};

export default Btn;
