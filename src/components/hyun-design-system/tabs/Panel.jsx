import PropTypes from 'prop-types';

import { useTabContext } from './Container';

const Panel = ({ children, eventKey }) => {
  const PREFIX = 'tab';
  const { isActive } = useTabContext();

  return <div className={`${PREFIX}__panel ${isActive(eventKey) ? 'active' : ''}`}>{children}</div>;
};

Panel.propTypes = {
  children: PropTypes.node,
  eventKey: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default Panel;
