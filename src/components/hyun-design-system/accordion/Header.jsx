import PropTypes from 'prop-types';

import { useItemContext } from './Item';

const Header = () => {
  const PREFIX = 'accordion__header';
  const { toggleCollapse, title } = useItemContext();

  return (
    <button className={PREFIX} onClick={toggleCollapse}>
      {title}
    </button>
  );
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
