import React from 'react';

import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import { useTheme } from '../../../theme/ThemeContext';

const StyledButton = styled.button`
  ${(props) => props.theme.components.button.baseStyle}
  ${(props) => props.theme.components.button.buttonSizes[props.size]}
  ${(props) => props.theme.components.button.buttonTypes[props.type]}
`;

const StyledIconButton = styled.button`
  ${(props) => props.theme.components.button.baseStyle}
  ${(props) => props.theme.components.button.iconButtonStyle}
  ${(props) => props.theme.components.button.iconButtonSizes[props.size]}
`;

const Button = React.memo(({ type, size, text, children, reverse, icononly, onClick }) => {
  const PREFIX = 'btn';
  const theme = useTheme();

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <React.Fragment>
      {icononly ? (
        <StyledIconButton className={`${PREFIX}__icon`} size={size} theme={theme} onClick={handleClick}>
          {children}
        </StyledIconButton>
      ) : (
        <StyledButton className={PREFIX} type={type} size={size} theme={theme} onClick={handleClick}>
          {reverse ? (
            <>
              {text}
              {children}
            </>
          ) : (
            <>
              {children}
              {text}
            </>
          )}
        </StyledButton>
      )}
    </React.Fragment>
  );
});

Button.defaultProps = {
  type: 'solidGreen',
  size: 'md',
  reverse: false,
  icononly: false,
};

Button.propTypes = {
  type: PropTypes.oneOf(['solidGreen', 'solidRed', 'outlineGreen', 'outlineGray']),
  size: PropTypes.oneOf(['lg', 'md', 'sm', 'xs']),
  text: PropTypes.string,
  children: PropTypes.node,
  reverse: PropTypes.bool,
  icononly: PropTypes.bool,
  onClick: PropTypes.func,
};

Button.displayName = 'Button';

export default Button;
