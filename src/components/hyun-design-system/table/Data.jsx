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

  text-align: ${(props) => {
    if (props.textAlign === 'left') return 'left';
    if (props.textAlign === 'center') return 'center';
    return 'center';
  }};
`;

const Data = ({ children, rowSpan, colSpan, textAlign }) => {
  const theme = useTheme();
  const type = useRow();
  const attributes = {};

  attributes.rowSpan = rowSpan || attributes.rowSpan;
  attributes.colSpan = colSpan || attributes.colSpan;

  return (
    <StyledData {...attributes} theme={theme} type={type} textAlign={textAlign}>
      {children}
    </StyledData>
  );
};

Data.propTypes = {
  children: PropTypes.node.isRequired,
  rowSpan: PropTypes.number,
  colSpan: PropTypes.number,
  textAlign: PropTypes.string,
};

export default Data;
