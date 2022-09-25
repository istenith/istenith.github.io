import React, { useRef } from "react";
import ReactDom from "react-dom";

export const Modal = ({ setShowModal, Img, fluid }) => {
  // close the modal when clicking outside the modal.
  const modalRef = useRef();
  const closeModal = (e) => {
    if (e.target === modalRef.current) {
      setShowModal(false);
    }
  };

  const [domReady, setDomReady] = React.useState(false)

  React.useEffect(() => {
    setDomReady(true)
  })

  return domReady
    ? ReactDom.createPortal(<div className="container" ref={modalRef} onClick={closeModal}>
      <div className="modal">
        <Img fluid={fluid} style={{ borderRadius: "10px" }} />
        <button onClick={() => setShowModal(false)}>X</button>
      </div>
    </div>, document.getElementById('container-id'))
    : null


};
