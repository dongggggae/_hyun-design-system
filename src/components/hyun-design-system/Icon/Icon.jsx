import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { useTheme } from '../../../theme/ThemeContext';

const StyledIcon = styled.span`
  ${(props) => props.theme.components.icon.baseStyle}

  .icon {
    ${(props) => props.theme.components.icon.iconSizes[props.size]}
    color:${(props) => props.theme.colors[props.color]};
  }
`;

const Icon = React.memo(({ name, size, color }) => {
  const PREFIX = 'icon';
  const theme = useTheme();
  const SelectedIcon = theme.components.icon.iconTypes[name];
  const SelectedIconName = theme.components.icon.iconNames[name];

  if (!SelectedIcon) {
    return null;
  }

  return (
    <StyledIcon size={size} theme={theme} color={color}>
      <SelectedIcon className={PREFIX} />
      <b className="blind">{SelectedIconName}</b>
    </StyledIcon>
  );
});

Icon.defaultProps = {
  size: 'md',
  color: 'black',
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['lg', 'md', 'sm']),
  color: PropTypes.string,
};

Icon.displayName = 'Icon';

export default Icon;
