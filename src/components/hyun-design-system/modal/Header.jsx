import PropTypes from 'prop-types';

import { useModal } from './Modal';
import Title from './Title';
import Icon from '../icon/Icon';

const Header = ({ title }) => {
  const PREFIX = 'modal';
  const { handleClose } = useModal();

  return (
    <div className={`${PREFIX}__header`}>
      <Title>{title}</Title>
      <button className="btn" onClick={handleClose}>
        <Icon name={'close'} color={'black'} />
      </button>
    </div>
  );
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
