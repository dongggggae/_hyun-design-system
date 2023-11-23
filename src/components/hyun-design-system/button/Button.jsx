import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { useTheme } from '../../../theme/ThemeContext';

const StyledButton = styled.button`
  ${(props) => props.theme.components.button.baseStyle}
  ${(props) => props.theme.components.button.buttonSizes[props.size]}
  ${(props) => props.theme.components.button.buttonTypes[props.type]}
`;

const Button = React.memo(({ type, size, text, children, reverse, onClick }) => {
  const PREFIX = 'btn';
  const theme = useTheme();

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
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
  );
});

Button.defaultProps = {
  type: 'solidGreen',
  size: 'md',
  reverse: false,
};

Button.propTypes = {
  type: PropTypes.oneOf(['solidGreen', 'solidRed', 'outlineGreen', 'outlineGray']),
  size: PropTypes.oneOf(['lg', 'md', 'sm', 'xs']),
  text: PropTypes.string,
  children: PropTypes.node,
  reverse: PropTypes.bool,
  onClick: PropTypes.func,
};

Button.displayName = 'Button';

export default Button;
