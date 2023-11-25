import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
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
      {/*  아이콘 only 일때는 name을 그냥 Icon에 porps를 주고 + 새로운 스타일을 줘야함  + Icon에는 웹접근서성을
      위해서 블라인드 메시지를 줘야하는데 이걸 그냥 js파일에서 관리하는게 나을 듯?*/}
      {icononly ? (
        <StyledIconButton className={`${PREFIX}__icon`} type={type} size={size} theme={theme} onClick={handleClick}>
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
