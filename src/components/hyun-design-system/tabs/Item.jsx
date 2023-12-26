import PropTypes from 'prop-types';

import Link from './Link';

const Item = ({ name }) => {
  const PREFIX = 'tab';

  return (
    <li className={`${PREFIX}__item`}>
      <Link name={name} />
    </li>
  );
};

Item.propTypes = {
  name: PropTypes.node,
};

export default Item;
