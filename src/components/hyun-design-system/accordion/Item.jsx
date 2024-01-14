import { createContext, useContext, useEffect, useState } from 'react';

import PropTypes from 'prop-types';

import Body from './Body';
import Header from './Header';

const ItemContext = createContext();

const Item = ({ title, children, isOpen }) => {
  const PREFIX = 'accordion__item';
  const [isCollapsed, setCollapsed] = useState(true);

  useEffect(() => {
    setCollapsed(!isOpen);
  }, [isOpen]);

  const toggleCollapse = () => {
    setCollapsed(!isCollapsed);
  };

  return (
    <ItemContext.Provider value={{ toggleCollapse, title }}>
      <div className={`${PREFIX} ${isCollapsed ? 'collapsed' : ''}`}>
        <Header />
        <Body>{children}</Body>
      </div>
    </ItemContext.Provider>
  );
};

export const useItemContext = () => {
  return useContext(ItemContext);
};

Item.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
  isOpen: PropTypes.bool,
};

export default Item;
