import { Children } from 'react';

import PropTypes from 'prop-types';

import Link from './Link';
import { useTabContext } from './Tabs';

const Item = ({ name }) => {
  const PREFIX = 'tab';
  const { setActiveTabIndex } = useTabContext();
  const tabArray = Children.toArray(name);
  console.log(tabArray);

  const handleActiveTab = (tabIndex) => {
    console.log(tabIndex);
    setActiveTabIndex(tabIndex);
  };

  return (
    <li className={`${PREFIX}__item`}>
      {Children.map((name, index) => (
        <Link key={index} name={name} onClick={() => handleActiveTab(index)} />
      ))}
    </li>
  );
};

Item.propTypes = {
  name: PropTypes.node,
};

export default Item;
