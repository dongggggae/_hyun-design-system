import { createContext, useContext } from 'react';

import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';

import Content from './Content';
import Dialog from './Dialog';

const ModalContext = createContext();

const Modal = ({ show, onHide, children, size, type }) => {
  const PREFIX = 'modal';
  const handleClose = () => {
    onHide();
  };

  return createPortal(
    <ModalContext.Provider value={{ handleClose, size, type }}>
      <div className={`${PREFIX} ${show ? 'show' : ''}`}>
        <Dialog>
          <Content>{children}</Content>
        </Dialog>
      </div>
    </ModalContext.Provider>,
    document.body,
  );
};

export const useModal = () => {
  return useContext(ModalContext);
};

Modal.propTypes = {
  children: PropTypes.node,
  size: PropTypes.string,
  type: PropTypes.string,
};

export default Modal;
