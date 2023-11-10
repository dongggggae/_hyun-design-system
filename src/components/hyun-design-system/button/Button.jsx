import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const StylesButton = {
  primary: {
    backgroundColor: '#0F62FE',
    borderColor: '#0F62FE',
    color: '#ffffff',
  },
  secondary: {
    backgroundColor: '#393939',
    borderColor: '#393939',
    color: '#ffffff',
  },
  tertiary: {
    backgroundColor: '#ffffff',
    borderColor: '#0F62FE',
    color: '#0F62FE',
  },
};

const SizesButton = {
  lg: {
    height: '56px',
    paddingX: '18px',
    fontSize: '16px',
    lineHeight: '24px',
  },
  md: {
    height: '48px',
    paddingX: '14px',
    fontSize: '14px',
    lineHeight: '24px',
  },
  sm: {
    height: '32px',
    paddingX: '10px',
    fontSize: '14px',
    lineHeight: '24px',
  },
  xs: {
    height: '24px',
    paddingX: '6px',
    fontSize: '12px',
    lineHeight: '20px',
  },
};

const StyledButton = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-family: inherit;
  text-align: center;
  box-sizing: border-box;
  border-width: 1px;
  border-style: solid;
  border-radius: 5px;
  user-select: none;
  box-shadow: none;
  outline: none;
  height: ${(props) => SizesButton[props.size].height};
  font-size: ${(props) => SizesButton[props.size].fontSize};
  line-height: ${(props) => SizesButton[props.size].lineHeight};
  padding-right: ${(props) => SizesButton[props.size].paddingX};
  padding-left: ${(props) => SizesButton[props.size].paddingX};
  background-color: ${(props) => StylesButton[props.variant].backgroundColor};
  border-color: ${(props) => StylesButton[props.variant].borderColor};
  color: ${(props) => StylesButton[props.variant].color};
`;

const Button = ({ variant, size, text }) => {
  return (
    <StyledButton className="btn" variant={variant} size={size}>
      {text}
    </StyledButton>
  );
};

StyledButton.defaultProps = {
  variant: 'primary',
  size: 'md',
  text: 'Button',
};

Button.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
  size: PropTypes.oneOf(['lg', 'md', 'sm', 'xs']),
  text: PropTypes.string,
};

export default Button;
