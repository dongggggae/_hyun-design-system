import PropTypes from 'prop-types';

import { useModal } from './Modal';

const Dialog = ({ children }) => {
  const PREFIX = 'modal';
  const { size, type } = useModal();

  return <div className={`${PREFIX}__dialog ${size ? `${PREFIX}__dialog--${size}` : ''} ${type ? `${PREFIX}__dialog--${type}` : ''}`}>{children}</div>;
};

Dialog.propTypes = {
  children: PropTypes.node,
};

export default Dialog;
