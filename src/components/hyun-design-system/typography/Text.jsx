import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { useTheme } from '../../../theme/ThemeContext';

const StyledText = styled.p`
  ${(props) => props.theme.components.typography.textSizes[props.size]};
  color: ${(props) => props.theme.colors[props.color]};
`;

const Text = ({ size, children, color, spacing }) => {
  const theme = useTheme();
  const PREFIX = 'Text';

  return (
    <StyledText className={PREFIX} size={size} theme={theme} color={color} spacing={spacing}>
      {children}
    </StyledText>
  );
};

StyledText.defaultProps = {
  size: 'md',
  color: 'secondaryText',
  spacing: 'normal',
};

Text.propTypes = {
  size: PropTypes.oneOf(['lg', 'md', 'sm', 'xs', 'xxs']),
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  spacing: PropTypes.string,
};

export default Text;
