import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { useTheme } from '../../../theme/ThemeContext';

const StyledButton = styled.button`
  ${(props) => props.theme.components.button.baseStyle}
  ${(props) => props.theme.components.button.buttonSizes[props.size]}
  ${(props) => props.theme.components.button.buttonTypes[props.type]}
`;

const Button = ({ type, size, text }) => {
  const PREFIX = 'Btn';
  const classNames = [PREFIX, `${PREFIX}-${type}`].join(' ');
  const theme = useTheme();

  return (
    <StyledButton className={classNames} type={type} size={size} theme={theme}>
      {text}
    </StyledButton>
  );
};

Button.defaultProps = {
  type: 'solidGreen',
  size: 'md',
};

Button.propTypes = {
  type: PropTypes.oneOf(['solidGreen', 'solidRed', 'outlineGreen', 'outlineGray']),
  size: PropTypes.oneOf(['lg', 'md', 'sm', 'xs']),
  text: PropTypes.string,
};

export default Button;
