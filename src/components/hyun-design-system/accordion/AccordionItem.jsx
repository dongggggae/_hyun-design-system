// AccordionItem.js

import React, { createContext, useContext, useReducer, useRef } from 'react';
import styled from '@emotion/styled';
import AccordionHeader from './AccordionHeader';
import AccordionBody from './AccordionBody';
import { useTheme } from '../../../theme/ThemeContext';

const AccordionItemContext = createContext();

const initialState = {
  collapsed: true,
};

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
        <AccordionBody collapsed={state.collapsed} children={children} />
      </StyledItem>
    </AccordionItemContext.Provider>
  );
};

export const useAccordionItem = () => {
  return useContext(AccordionItemContext);
};

export default AccordionItem;
