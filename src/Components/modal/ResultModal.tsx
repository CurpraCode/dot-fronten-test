import React, { useState } from "react";
import ReactModal from "react-modal";
import "./ResultModal.css"

interface Props {
  results: { [key: string]: string };
}
const ResultModal: React.FC<Props> = ({ results }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  console.log(results)

  return (
    <div >
      <button className="btn" onClick={() => setModalIsOpen(true)}>SUBMIT VOTE BUTTON</button>
      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        ariaHideApp={false}
      >
        <div className="container">
            <h1>Successful Winners</h1>
          {Object.entries(results).map(([key, value]) => (
            <p key={key}>
              {key}: {value}
            </p>
          ))}
        </div>
        <button onClick={() => setModalIsOpen(false)}>Close</button>
      </ReactModal>
    </div>
  );
};

export default ResultModal;
