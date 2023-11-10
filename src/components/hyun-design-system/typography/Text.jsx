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

const Text = ({ size, children }) => {
  return <StyledText size={size}>{children}</StyledText>;
};

StyledText.defaultProps = {
  size: 'md',
};

Text.propTypes = {
  size: PropTypes.oneOf(['lg', 'md', 'sm', 'xs', 'xxs']),
  children: PropTypes.node.isRequired,
};

export default Text;
