import { createContext, useContext } from 'react';

import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import { useTheme } from '../../../theme/ThemeContext';

const TableContext = createContext();

const StyledTable = styled.table`
  ${(props) => props.theme.components.table.baseStyle}
`;

const Table = ({ children, hover, type }) => {
  const PREFIX = 'table';
  const theme = useTheme();

  return (
    <TableContext.Provider value={{ hover, type }}>
      <StyledTable className={PREFIX} theme={theme}>
        {children}
      </StyledTable>
    </TableContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useTable = () => {
  return useContext(TableContext);
};

Table.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string,
  active: PropTypes.bool,
  hover: PropTypes.bool,
};

export default Table;
