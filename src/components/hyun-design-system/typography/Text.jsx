import React from 'react';

import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import { useTheme } from '../../../theme/ThemeContext';

const StyledText = styled.p`
  ${(props) => props.theme.components.typography.textSizes[props.size]};
  color: ${(props) => props.theme.colors[props.color]};
`;

const Text = React.memo(({ size, children, color }) => {
  const theme = useTheme();
  const PREFIX = 'text';

  return (
    <StyledText className={PREFIX} size={size} theme={theme} color={color}>
      {children}
    </StyledText>
  );
});

Text.defaultProps = {
  size: 'md',
  color: 'secondaryText',
};

Text.propTypes = {
  size: PropTypes.oneOf(['lg', 'md', 'sm', 'xs', 'xxs']),
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
};

Text.displayName = 'Text';

export default Text;
