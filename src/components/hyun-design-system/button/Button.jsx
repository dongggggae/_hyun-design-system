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

const StyledButton = styled.button`
  display: 'inline-flex';
  justify-content: 'center';
  align-items: 'center';
  font-family: 'inherit';
  text-align: 'center';
  box-sizing: 'border-box';
  border-width: '1px';
  border-style: 'solid';
  border-radius: '5px';
  font-size: '16px';
  padding: 10px 20px;
  user-select: 'none';
  box-shadow: 'none';
  out-line: 'none';
  background-color: ${(props) => StylesButton[props.type].backgroundColor};
  border-color: ${(props) => StylesButton[props.type].borderColor};
  color: ${(props) => StylesButton[props.type].color};
`;

const Button = ({ type, children }) => {
  return (
    <StyledButton className="btn" type={type}>
      {children}
    </StyledButton>
  );
};

StyledButton.defaultProps = {
  type: 'primary',
  // size: 'md',
  // text: 'Button',
};

Button.propTypes = {
  type: PropTypes.oneOf(['primary', 'secondary', 'tertiary']).isRequired,
  // size: PropTypes.string.isRequired,
  // text: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Button;
