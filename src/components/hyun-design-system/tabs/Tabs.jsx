import { createContext, useContext, useState } from 'react';

import PropTypes from 'prop-types';

const TabContext = createContext();

const Tabs = ({ children }) => {
  const PREFIX = 'tab';
  const [activeTabIndex, setActiveTabIndex] = useState([]);

  return (
    <TabContext.Provider value={{ activeTabIndex, setActiveTabIndex }}>
      <div className={`${PREFIX}__wrap`}>{children}</div>
    </TabContext.Provider>
  );
};
Tabs.propTypes = {
  children: PropTypes.node,
};

export const useTabContext = () => {
  return useContext(TabContext);
};

export default Tabs;
