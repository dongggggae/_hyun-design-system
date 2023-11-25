import React from 'react';
import PropTypes from 'prop-types';
import Button from '../button/Button';
import Icon from '../icon/Icon';

const InputAddon = React.memo(({ value, clear, field, handleClear, showPassword, handleTogglePassword }) => {
  return (
    <div className="input-wrap__addon">
      {clear && value.length > 0 && (
        <Button icononly size="xs" onClick={handleClear}>
          <Icon name="closeFill" size="sm" />
        </Button>
      )}
      {field === 'password' && (
        <Button icononly size="xs" onClick={handleTogglePassword}>
          <Icon name={showPassword ? 'invisible' : 'visible'} size="sm" />
        </Button>
      )}
      {field === 'search' && (
        <Button icononly size="xs">
          <Icon name="search" size="sm" />
        </Button>
      )}
    </div>
  );
});

InputAddon.propTypes = {
  clear: PropTypes.bool,
  field: PropTypes.string,
  handleClear: PropTypes.func,
  showPassword: PropTypes.bool,
  handleTogglePassword: PropTypes.func,
  value: PropTypes.string,
};

InputAddon.displayName = 'InputAddon';

export default InputAddon;
