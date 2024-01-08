import { useState } from 'react';

import Btn from '../../components/hyun-design-system/button/Button';
import { Modal, ModalHeader, ModalBody, ModalFooter } from '../../components/hyun-design-system/modal';

const ComponentPage = () => {
  const [modals, setModals] = useState({
    modal1: false,
    modal2: false,
  });

  const handleShow = (modalKey) => {
    setModals((prevModals) => ({ ...prevModals, [modalKey]: true }));
  };

  const handleClose = (modalKey) => {
    setModals((prevModals) => ({ ...prevModals, [modalKey]: false }));
  };

  const modalButtons = [
    { text: 'Button 1', type: 'outline-gray' },
    { text: 'Button 2', type: 'solid-red' },
  ];

  return (
    <div className="docs">
      <div className="docs-table">
        <Btn onClick={() => handleShow('modal1')} text={'Modal Btn'} />
        <Modal show={modals.modal1} onHide={() => handleClose('modal1')} modalKey={'modal1'}>
          <ModalHeader title={'Modal Title1'} />
          <ModalBody>Modal Body1</ModalBody>
          <ModalFooter buttons={modalButtons} />
        </Modal>

        <Btn onClick={() => handleShow('modal2')} text={'Modal Btn'} />
        <Modal show={modals.modal2} onHide={() => handleClose('modal2')} modalKey={'modal2'}>
          <ModalHeader title={'Modal Title2'} />
          <ModalBody>Modal Body2</ModalBody>
          <ModalFooter buttons={modalButtons} />
        </Modal>
      </div>
    </div>
  );
};

export default ComponentPage;
