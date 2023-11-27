import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import { useAccordionItem } from './AccordionItem';
import { useTheme } from '../../../theme/ThemeContext';
import Icon from '../icon/Icon';

const StyledHeader = styled.button`
  ${(props) => props.theme.components.accordion.accordionHeaderStyle}
  ${(props) => props.collapsed && props.theme.components.accordion.collapsedHeaderStyle}
`;

const AccordionHeader = ({ title }) => {
  const theme = useTheme();
  const { state, dispatch, itemId } = useAccordionItem();

  const handleCollapsed = () => {
    dispatch({ type: 'TOGGLE_COLLAPSED', itemId });
  };

  return (
    <StyledHeader theme={theme} collapsed={state.collapsed} onClick={handleCollapsed}>
      {title}
      <Icon name={state.collapsed ? 'arrowDown' : 'arrowUp'} color={state.collapsed ? 'gray600' : 'gray400'} />
    </StyledHeader>
  );
};

AccordionHeader.propTypes = {
  title: PropTypes.string,
};

export default AccordionHeader;