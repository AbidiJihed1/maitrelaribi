import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import SubscribeForm from './SubscribeForm';

function Subscribe({show,setShow}) {
//   const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  return (
    <>
     

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
          <h1>Subscribe Us</h1>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <SubscribeForm />
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer> */}
      </Modal>
    </>
  );
}

export default Subscribe;