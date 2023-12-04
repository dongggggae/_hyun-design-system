import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import { useRow } from './Row';
import { useTheme } from '../../../theme/ThemeContext';

const StyledData = styled.td`
  ${(props) => props.theme.components.table.dataStyle}

  ${(props) =>
    props.type === '' &&
    !props.row &&
    `
    &:first-of-type {
      border-left: none;
    }
  `}
`;

const Data = ({ children, rowSpan, colSpan }) => {
  const theme = useTheme();
  const type = useRow();
  const attributes = {};

  attributes.rowSpan = rowSpan || attributes.rowSpan;
  attributes.colSpan = colSpan || attributes.colSpan;

  return (
    <StyledData {...attributes} theme={theme} type={type}>
      {children}
    </StyledData>
  );
};

Data.propTypes = {
  children: PropTypes.node.isRequired,
  rowSpan: PropTypes.number,
  colSpan: PropTypes.number,
};

export default Data;
