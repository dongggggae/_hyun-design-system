import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import { useRow } from './Row';
import { useTheme } from '../../../theme/ThemeContext';

const StyledHeader = styled.th`
  ${(props) => props.theme.components.table.headerStyle}

  &:first-of-type {
    border-left: none;
  }

  text-align: ${(props) => {
    if (props.textAlign === 'left') return 'left';
    if (props.textAlign === 'center') return 'center';
    return 'center';
  }};
`;

const Header = ({ children, rowSpan, colSpan, textAlign }) => {
  const theme = useTheme();
  const attributes = {};
  const type = useRow();

  attributes.rowSpan = rowSpan || attributes.rowSpan;
  attributes.colSpan = colSpan || attributes.colSpan;

  return (
    <StyledHeader {...attributes} theme={theme} type={type} textAlign={textAlign}>
      {children}
    </StyledHeader>
  );
};

Header.propTypes = {
  children: PropTypes.node.isRequired,
  rowSpan: PropTypes.number,
  colSpan: PropTypes.number,
  textAlign: PropTypes.string,
};

export default Header;
