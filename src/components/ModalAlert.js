import { Modal } from "react-bootstrap";
import "../../src/styles/alertView.css";

const ModalAlert = (props) => {
  return (
    <>
      <Modal
        contentClassName="modalContent"
        className="modal"
        show={props.showModal}
        centered
      >
        <Modal.Header className="modalHeader">
          <Modal.Title>
            <h2 className="tituloAlert">{props.title}</h2>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="textoAlert">{props.body}</p>
          <b className="textoAlert2">{props.dynamicData}</b>
          <button className="modalButton" onClick={props.onHide}>
            {props.textButton}
          </button>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalAlert;
