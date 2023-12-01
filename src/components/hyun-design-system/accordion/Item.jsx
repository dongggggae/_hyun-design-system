import { createContext, useContext, useReducer, useRef } from 'react';

import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import Body from './Body';
import Header from './Header';
import { useTheme } from '../../../theme/ThemeContext';

const ItemContext = createContext();

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

const Item = ({ title, children, isOpen }) => {
  const theme = useTheme();
  const itemIdRef = useRef(0);

  const [state, dispatch] = useReducer(reducer, {
    collapsed: isOpen ? true : false,
  });

  return (
    <ItemContext.Provider value={{ state, dispatch, itemId: itemIdRef.current }}>
      <StyledItem theme={theme}>
        <Header title={title} />
        <Body collapsed={state.collapsed}>{children}</Body>
      </StyledItem>
    </ItemContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useItem = () => {
  return useContext(ItemContext);
};

Item.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
  isOpen: PropTypes.bool,
};

export default Item;
