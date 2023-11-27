import React from 'react';

import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import { useTheme } from '../../../theme/ThemeContext';

const StyledBadge = styled.span`
  ${(props) => props.theme.components.badge.baseStyle};
  background-color: ${(props) => (props.outline ? 'white' : props.theme.components.badge.badgeTypes[props.state])};
  border-color: ${(props) => (props.outline ? props.theme.components.badge.badgeTypes[props.state] : 'transparent')};
  color: ${(props) => (props.outline ? props.theme.components.badge.badgeTypes[props.state] : 'white')};
`;

const Badge = React.memo(({ state, text, outline }) => {
  const theme = useTheme();
  const PREFIX = 'badge';

  return (
    <StyledBadge className={PREFIX} state={state} outline={outline} theme={theme}>
      {text}
    </StyledBadge>
  );
});

Badge.defaultProps = {
  state: 'information',
  outline: false,
};

Badge.propTypes = {
  state: PropTypes.oneOf(['success', 'warn', 'error', 'information']),
  text: PropTypes.string,
  outline: PropTypes.bool,
};

Badge.displayName = 'Badge';

export default Badge;
