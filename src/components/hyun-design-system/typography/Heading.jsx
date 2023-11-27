import React from 'react';

import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import { useTheme } from '../../../theme/ThemeContext';

const StyledHeading = styled.h1`
  ${(props) => props.theme.components.typography.headingSizes[props.size]};
  color: ${(props) => props.theme.colors[props.color]};
  letter-spacing: ${(props) => props.theme.components.typography.fontSpacing[props.spacing]};
`;

const Heading = React.memo(({ as, size, text, color, spacing }) => {
  const theme = useTheme();
  const PREFIX = 'heading';

  return (
    <StyledHeading className={PREFIX} as={as} size={size} theme={theme} color={color} spacing={spacing}>
      {text}
    </StyledHeading>
  );
});

Heading.defaultProps = {
  as: 'h1',
  size: '1',
  text: '',
  color: 'primaryText',
  spacing: 'normal',
};

Heading.propTypes = {
  as: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']).isRequired,
  size: PropTypes.oneOf(['1', '2', '3', '4', '5', '6']),
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
  spacing: PropTypes.string,
};

Heading.displayName = 'Heading';

export default Heading;
