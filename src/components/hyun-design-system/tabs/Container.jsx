import { createContext, useContext, useState } from 'react';

import PropTypes from 'prop-types';

import Tabs from './Tabs';

const TabContext = createContext();

const Container = ({ id, defaultActiveKey, children, fill, type }) => {
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
  };

  return (
    <TabContext.Provider value={contextValue}>
      <div className="tab__wrap">
        <Tabs id={id} defaultActiveKey={defaultActiveKey} fill={fill} type={type}>
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
  type: PropTypes.oneOf(['pills', 'inlines']),
};

export const useTabContext = () => {
  return useContext(TabContext);
};

export default Container;
