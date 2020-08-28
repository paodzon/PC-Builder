import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './Modal.css';
import Processor from './Items/Processor';

const Modals = (props) => {
  const {
    buttonLabel,
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="primary" onClick={toggle} className="btnChoose">{buttonLabel}</Button>
      <Modal isOpen={modal} toggle={toggle} className='xmodal'>
        <ModalHeader className="mHeader" toggle={toggle}></ModalHeader>
        <ModalBody>
            <Processor/>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default Modals;
