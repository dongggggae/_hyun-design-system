import PropTypes from 'prop-types';

import Panel from './Panel';

const Tab = ({ title, eventKey, children, isActive }) => <Panel isActive={isActive}>{children}</Panel>;

Tab.PropTypes = {
  title: PropTypes.number,
  eventKey: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  children: PropTypes.node,
  isActive: PropTypes.func,
};

export default Tab;
