import React from "react";
import { Modal, Button } from "react-bootstrap";

const Confirm = ({ header, children, show, onOk, onCancel, dialogProps }) => {
  return (
    <Modal.Dialog backdrop="static" {...dialogProps} show={show}>
      {header && <Modal.Header>{header}</Modal.Header>}
      <Modal.Body>{children}</Modal.Body>
      <Modal.Footer>
        <Button bsSize="lg" onClick={onCancel}>
          Cancel
        </Button>
        <Button bsSize="lg" onClick={onOk}>
          OK
        </Button>
      </Modal.Footer>
    </Modal.Dialog>
  );
};

export default Confirm;
