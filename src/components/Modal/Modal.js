// import { useState } from "react";
// import Button from "react-bootstrap/Button";
// import Modal from "react-bootstrap/Modal";

// function Modal1() {
//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   return (
//     <>
//       <Button variant="primary" onClick={handleShow}>
//         Launch static backdrop modal
//       </Button>

//       <Modal
//         show={show}
//         onHide={handleClose}
//         backdrop="static"
//         keyboard={false}
//       >
//         <Modal.Header closeButton>
//           <Modal.Title>Modal title</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           I will not close if you click outside me. Don not even try to press
//           escape key.
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//           <Button variant="success">Understood</Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// }

// export default Modal1;
import React, { useEffect } from "react";
import Modal from "react-bootstrap/Modal";

const Modal1 = ({ show, onHide }) => {
  useEffect(() => {
    if (show) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
  }, [show]);

  return (
    <Modal show={show} onHide={onHide} backdrop="static" keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>Your Modal Title</Modal.Title>
      </Modal.Header>
      <Modal.Body>Your modal content goes here.</Modal.Body>
      <Modal.Footer>
        <button className="btn btn-secondary" onClick={onHide}>
          Close
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export default Modal1;
