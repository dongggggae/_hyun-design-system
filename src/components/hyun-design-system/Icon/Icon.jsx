import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { useTheme } from '../../../theme/ThemeContext';

const StyledIcon = styled.span`
  ${(props) => props.theme.components.icon.baseStyle}

  .Icon {
    ${(props) => props.theme.components.icon.iconSizes[props.size]}
    color:${(props) => props.theme.colors[props.color]};
  }
`;

const Icon = ({ name, size, color }) => {
  const PREFIX = 'Icon';
  const theme = useTheme();
  const SelectedIcon = theme.components.icon.iconTypes[name];

  if (!SelectedIcon) {
    return null;
  }

  return (
    <StyledIcon size={size} theme={theme} color={color}>
      <SelectedIcon className={PREFIX} />
    </StyledIcon>
  );
};

Icon.defaultProps = {
  size: 'md',
  color: 'black',
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['lg', 'md', 'sm']),
  color: PropTypes.string,
};

export default Icon;
