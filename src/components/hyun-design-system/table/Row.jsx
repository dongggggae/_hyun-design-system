import { createContext, useContext } from 'react';

import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import { useTheme } from '../../../theme/ThemeContext';

const TableRowContext = createContext();

const StyledRow = styled.tr`
  ${(props) => (props.active ? props.theme.components.table.activeRowStyle : '')}
`;

const Row = ({ children, type, active }) => {
  const theme = useTheme();

  return (
    <TableRowContext.Provider value={{ type, active }}>
      <StyledRow theme={theme} active={active}>
        {children}
      </StyledRow>
    </TableRowContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useRow = () => {
  return useContext(TableRowContext);
};

Row.defaultProps = {
  type: 'col',
  active: false,
};

Row.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string,
  active: PropTypes.bool,
};

export default Row;
