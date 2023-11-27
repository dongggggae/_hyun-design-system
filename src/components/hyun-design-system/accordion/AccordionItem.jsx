import { createContext, useContext, useReducer, useRef } from 'react';

import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import AccordionBody from './AccordionBody';
import AccordionHeader from './AccordionHeader';
import { useTheme } from '../../../theme/ThemeContext';

const AccordionItemContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_COLLAPSED':
      return { ...state, collapsed: !state.collapsed };
    default:
      return state;
  }
};

const StyledItem = styled.div`
  ${(props) => props.theme.components.accordion.accordionItemStyle}
`;

const AccordionItem = ({ title, children, isOpen }) => {
  const theme = useTheme();
  const itemIdRef = useRef(0);

  const [state, dispatch] = useReducer(reducer, {
    collapsed: isOpen ? true : false,
  });

  return (
    <AccordionItemContext.Provider value={{ state, dispatch, itemId: itemIdRef.current }}>
      <StyledItem theme={theme}>
        <AccordionHeader title={title} />
        <AccordionBody collapsed={state.collapsed}>{children}</AccordionBody>
      </StyledItem>
    </AccordionItemContext.Provider>
  );
};

export const useAccordionItem = () => {
  return useContext(AccordionItemContext);
};

AccordionItem.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
  isOpen: PropTypes.bool,
};

export default AccordionItem;
