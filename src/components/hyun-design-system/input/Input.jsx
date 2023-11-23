import React, { useState, useCallback, useRef } from 'react';
import styled from '@emotion/styled';
import Icon from '../icon/Icon';
import Button from '../button/Button';
import { useTheme } from '../../../theme/ThemeContext';

const StyledInput = styled.div`
  .input-wrap__addon {
    visibility: ${(props) => (props.hasValue ? 'visible' : 'hidden')};
  }
`;

const Input = React.memo(({ label }) => {
  const formInput = useRef();
  const [value, setValue] = useState('');

  const handleChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const handleClear = useCallback(() => {
    formInput.current.value = '';
    setValue('');
  }, []);

  const PREFIX = 'input-wrap';
  const theme = useTheme();

  return (
    <div className="form-group">
      <div>
        <label className='form-label' htmlFor="aa">{label}</label>
      </div>
      <StyledInput className={`${PREFIX}`} hasValue={value.length > 0} theme={theme}>
        <input id="aa" type="text" ref={formInput} className="form__control" onChange={handleChange} />
        <div className={`${PREFIX}__addon`}>
          <Button size="xs" onClick={handleClear}>
            <Icon name="closeFill" size="sm" />
          </Button>
        </div>
        <div className={`${PREFIX}__backdrop`}></div>
      </StyledInput>
      <div>{value.length}</div>
    </div>
  );
});

Input.displayName = 'Input';

export default Input;
