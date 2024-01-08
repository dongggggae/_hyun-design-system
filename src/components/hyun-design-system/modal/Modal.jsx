import { createContext, useContext } from 'react';

import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';

import Content from './Content';
import Dialog from './Dialog';

const ModalContext = createContext();

const Modal = ({ show, onHide, children }) => {
  const PREFIX = 'modal';
  const handleClose = () => {
    onHide();
  };

  return createPortal(
    <ModalContext.Provider value={{ handleClose }}>
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
  selectedModal: PropTypes.bool,
};

export default Modal;
