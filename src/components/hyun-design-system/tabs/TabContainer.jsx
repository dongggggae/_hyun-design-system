import PropTypes from 'prop-types';

import Tabs from './Tabs';

const TabContainer = ({ id, defaultActiveKey, children }) => (
  <div className="tab__wrap">
    <Tabs id={id} defaultActiveKey={defaultActiveKey}>
      {children}
    </Tabs>
  </div>
);

TabContainer.propTypes = {
  id: PropTypes.number,
  defaultActiveKey: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  children: PropTypes.node,
};

export default TabContainer;
