import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { useTheme } from '../../../theme/ThemeContext';
import { defaultTheme } from '../../../themes';

const StyledHeading = styled.h1`
  ${(props) => props.theme.components.typography.headingSizes[props.size]};
  color: ${(props) => props.color};
  letter-spacing: ${(props) => props.theme.components.typography.fontSpacing[props.spacing]};
`;

const Heading = ({ as, size, text, color, spacing }) => {
  const theme = useTheme();
  const PREFIX = 'Heading';

  return (
    <StyledHeading className={PREFIX} as={as} size={size} theme={theme} color={color} spacing={spacing}>
      {text}
    </StyledHeading>
  );
};

StyledHeading.defaultProps = {
  as: 'h1',
  size: 1,
  text: '',
  color: `${defaultTheme.colors.primaryText}`,
  spacing: 'normal',
};

Heading.propTypes = {
  as: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']).isRequired,
  size: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
  spacing: PropTypes.string,
};

export default Heading;
