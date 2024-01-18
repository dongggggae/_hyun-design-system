import React from 'react';

import PropTypes from 'prop-types';

import BtnText from './Text';
import Icon from '@/components/hyun-design-system/icon/Icon';

const Btn = ({ type, size, text, icon, iconColor, iconOnly, reverse, onClick }) => {
  const PREFIX = 'btn';

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <button className={[PREFIX, `${PREFIX}--${type}`, `${PREFIX}--${size}`].join(' ')} onClick={handleClick}>
      {icon && iconOnly && <Icon color={iconColor} name={icon} />}
      {!iconOnly && icon && (
        <React.Fragment>
          {!reverse && <Icon name={icon} color={iconColor} />}
          <BtnText text={text} />
          {reverse && <Icon name={icon} color={iconColor} />}
        </React.Fragment>
      )}
      {!icon && <BtnText text={text} />}
    </button>
  );
};

Btn.defaultProps = {
  type: 'solid-green',
  size: 'md',
  text: '',
  icon: '',
  iconColor: '',
  iconOnly: false,
  reverse: false,
  onClick: () => {},
};

Btn.propTypes = {
  type: PropTypes.oneOf(['solid-green', 'solid-red', 'outline-green', 'outline-gray', 'link']),
  size: PropTypes.oneOf(['lg', 'md', 'sm', 'xs']),
  text: PropTypes.string,
  icon: PropTypes.string,
  iconColor: PropTypes.string,
  iconOnly: PropTypes.bool,
  reverse: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Btn;
