import { createContext, useContext, useState } from 'react';

import PropTypes from 'prop-types';

import Tabs from './Tabs';

const TabContext = createContext();

const Container = ({ id, defaultActiveKey, children }) => {
  const [activeKey, setActiveKey] = useState(defaultActiveKey);

  const changeActiveKey = (eventKey) => {
    setActiveKey(eventKey);
  };

  const isActive = (eventKey) => {
    return eventKey == activeKey ? true : false;
  };

  const contextValue = {
    changeActiveKey: changeActiveKey,
    activeKey: activeKey,
    isActive: isActive,
    fill: 'fill',
    type: ['pills', 'inlines'],
  };

  return (
    <TabContext.Provider value={contextValue}>
      <div className="tab__wrap">
        <Tabs id={id} defaultActiveKey={defaultActiveKey}>
          {children}
        </Tabs>
      </div>
    </TabContext.Provider>
  );
};

Container.propTypes = {
  id: PropTypes.string,
  defaultActiveKey: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  children: PropTypes.node,
  fill: PropTypes.bool,
};

export const useTabContext = () => {
  return useContext(TabContext);
};

export default Container;
