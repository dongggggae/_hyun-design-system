import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import { useAccordionItem } from './AccordionItem';
import { useTheme } from '../../../theme/ThemeContext';

const StyledBody = styled.div`
  ${(props) => props.theme.components.accordion.accordionBodyStyle}
  ${(props) => props.collapsed && props.theme.components.accordion.collapsedBodyStyle}
`;

const AccordionBody = ({ children }) => {
  const { state } = useAccordionItem();
  const theme = useTheme();

  return (
    <StyledBody theme={theme} collapsed={state.collapsed}>
      {children}
    </StyledBody>
  );
};

AccordionBody.propTypes = {
  children: PropTypes.node,
};

export default AccordionBody;
