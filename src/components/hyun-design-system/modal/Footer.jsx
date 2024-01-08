import PropTypes from 'prop-types';

import { useModal } from './Modal';
import Btn from '../button/Button';
const Footer = ({ buttons }) => {
  const PREFIX = 'modal';
  const { handleClose } = useModal();

  return <div className={`${PREFIX}__footer`}>{buttons && buttons.map((button, index) => <Btn key={index} {...button} onClick={handleClose} />)}</div>;
};

Footer.propTypes = {
  buttons: PropTypes.array,
};

export default Footer;
