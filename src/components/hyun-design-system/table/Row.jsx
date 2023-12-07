import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import { useTable } from './Table';
import { useTheme } from '../../../theme/ThemeContext';

const StyledRow = styled.tr`
  ${(props) => (props.active ? props.theme.components.table.activeRowStyle : '')}

  &:hover {
    ${(props) => (props.hover ? props.theme.components.table.activeRowStyle : '')}
  }
`;

const Row = ({ active, children }) => {
  const theme = useTheme();
  const { hover } = useTable();

  return (
    <StyledRow theme={theme} active={active} hover={hover}>
      {children}
    </StyledRow>
  );
};

Row.defaultProps = {
  active: false,
  hover: false,
};

Row.propTypes = {
  children: PropTypes.node,
  active: PropTypes.bool,
  hover: PropTypes.bool,
};

export default Row;
