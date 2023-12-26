import PropTypes from 'prop-types';

import Panel from './Panel';

const Tab = ({ children, eventKey }) => {
  return <Panel eventKey={eventKey}>{children}</Panel>;
};

Tab.propTypes = {
  eventKey: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  children: PropTypes.node,
};

export default Tab;
