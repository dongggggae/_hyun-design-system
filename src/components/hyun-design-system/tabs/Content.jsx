import PropTypes from 'prop-types';

import Panel from './Panel';

const Content = ({ children }) => {
  const PREFIX = 'tab';
  return (
    <div className={`${PREFIX}__content`}>
      <Panel>{children}</Panel>
    </div>
  );
};

Content.propTypes = {
  children: PropTypes.node,
};

export default Content;
