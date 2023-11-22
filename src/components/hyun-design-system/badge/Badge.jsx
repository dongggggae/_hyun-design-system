import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { useTheme } from '../../../theme/ThemeContext';

const StyledBadge = styled.span`
  ${(props) => props.theme.components.badge.baseStyle}
  ${(props) => props.theme.components.badge.badgeTypes[props.state]}
`;

const Badge = React.memo(({ state, text }) => {
  const theme = useTheme();
  const PREFIX = 'badge';

  return (
    <StyledBadge className={PREFIX} state={state} theme={theme}>
      {text}
    </StyledBadge>
  );
});

Badge.defaultProps = {
  state: 'information',
};

Badge.propTypes = {
  state: PropTypes.oneOf(['success', 'warn', 'error', 'information']),
  text: PropTypes.string,
};

Badge.displayName = 'Badge';

export default Badge;
