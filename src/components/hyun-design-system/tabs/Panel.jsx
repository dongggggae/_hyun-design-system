import PropTypes from 'prop-types';

const Panel = ({ isActive, children }) => {
  const PREFIX = 'tab';
  return (
    <div isActive={isActive} className={`${PREFIX}__panel`}>
      {children}
    </div>
  );
};

Panel.propTypes = {
  isActive: PropTypes.bool,
  children: PropTypes.node,
};

export default Panel;
