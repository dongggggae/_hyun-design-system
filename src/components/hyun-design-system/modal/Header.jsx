import React from 'react';

import PropTypes from 'prop-types';

import { useModal } from './Modal';
import Title from './Title';
import Icon from '../icon/Icon';

const Header = ({ title, close }) => {
  const PREFIX = 'modal';
  const { handleClose } = useModal();

  return (
    <div className={`${PREFIX}__header`}>
      <Title>{title}</Title>
      {close ? (
        <React.Fragment>
          <button className="btn" onClick={handleClose}>
            <Icon name={'close'} color={'black'} />
          </button>
        </React.Fragment>
      ) : null}
    </div>
  );
};

Header.propTypes = {
  title: PropTypes.string,
  close: PropTypes.bool,
};

export default Header;
