import React from 'react';
import PropTypes from 'prop-types';
import Button from '../button/Button';
import Icon from '../icon/Icon';

const InputAddon = React.memo(({ value, clear, field, handleClear, showPassword, handleTogglePassword }) => {
  return (
    <div className="input-wrap__addon">
      {clear && value.length > 0 && (
        <Button size="xs" onClick={handleClear}>
          <Icon name="closeFill" size="sm" />
          <b className="blind">입력취소</b>
        </Button>
      )}
      {field === 'password' && (
        <Button size="xs" onClick={handleTogglePassword}>
          <Icon name={showPassword ? 'invisible' : 'visible'} size="sm" />
          <b className="blind">{showPassword ? '비밀번호 보기' : '비밀번호 숨기기'}</b>
        </Button>
      )}
      {field === 'search' && (
        <Button size="xs">
          <Icon name="search" size="sm" />
          <b className="blind">검색</b>
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
