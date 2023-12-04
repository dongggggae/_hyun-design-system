import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import { useTheme } from '../../../theme/ThemeContext';

const StyledTable = styled.table`
  ${(props) => props.theme.components.table.baseStyle}
`;

const Table = ({ children }) => {
  const PREFIX = 'table';
  const theme = useTheme();

  return (
    <StyledTable className={PREFIX} theme={theme}>
      {children}
    </StyledTable>
  );
};

Table.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string,
  active: PropTypes.bool,
};

export default Table;
