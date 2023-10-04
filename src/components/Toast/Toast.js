// import { useState, useEffect } from "react";
// import { Modal } from "antd";
// import NewsLetter from "../NewsLetter/NewsLetter";

// const Toast = () => {
//   const [visible, setVisible] = useState(false);

//   useEffect(() => {
//     setVisible(true);
//   }, []);

//   const handleOk = () => {
//     setVisible(false);
//   };
//   const handleCancel = () => {
//     setVisible(false);
//   };

//   return (
//     <div>
//       <Modal
//         // title="Basic Modal"
//         visible={visible}
//         onOk={handleOk}
//         onCancel={handleCancel}
//       >
//         <NewsLetter/>
//       </Modal>
//     </div>
//   );
// };
// export default Toast;

import React, { useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import NewsLetter from "../NewsLetter/NewsLetter";

const Toast = ({ show, onHide }) => {
  useEffect(() => {
    if (show) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
  }, [show]);

  return (
    <Modal show={show} onHide={onHide} backdrop="static" keyboard={false}>
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <NewsLetter />
      </Modal.Body>
      <Modal.Footer>
        <button className="btn btn-secondary" onClick={onHide}>
          OK
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export default Toast;
