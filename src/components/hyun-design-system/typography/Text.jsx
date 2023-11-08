import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const StylesText = {
  lg: {
    fontSize: '18px',
    lineHeight: '32px',
  },
  md: {
    fontSize: '16px',
    lineHeight: '24px',
  },
  sm: {
    fontSize: '14px',
    lineHeight: '24px',
  },
  xs: {
    fontSize: '12px',
    lineHeight: '20px',
  },
  xxs: {
    fontSize: '10px',
    lineHeight: '16px',
  },
};

const StyledText = styled.p`
  font-size: ${(props) => StylesText[props.size].fontSize};
  line-height: ${(props) => StylesText[props.size].lineHeight};
`;

const Text = ({ size, text }) => {
  if (!text) {
    return null;
  }

  return <StyledText size={size}>{text}</StyledText>;
};

StyledText.defaultProps = {
  size: 'md',
  text: null,
};

Text.propTypes = {
  size: PropTypes.PropTypes.oneOf(['lg', 'md', 'sm', 'xs', 'xxs']),
  text: PropTypes.string.isRequired,
};

export default Text;
