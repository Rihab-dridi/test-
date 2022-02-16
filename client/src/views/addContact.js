import { Button, Modal, Form } from "react-bootstrap";
import { useState } from "react";

export default function Example() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add Contact
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add a contact </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control type="text" placeholder="enter the  name" />
          <br />
          <Form.Control type="text" placeholder="enter the phone number" />
          <br />
          <Form.Control type="email" placeholder="enter the  email" />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">add</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
