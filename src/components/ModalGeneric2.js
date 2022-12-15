import React from "react";
import "../../src/styles/Modals.css";

const ModalGeneric2 = (props) => {
  return (
    <>
      {!props.show ? null : (
        <div className="overlay2">
          <div className="container_modal2">
            <div className="modal_header2">
              <p className="tituloModal2"> {props.title}</p>
              <img
                className="iconoSalir"
                onClick={props.onHide}
                src={require("../../src/assets/icon X.png")}
                alt=""
              />
            </div>
            <div className="modal_footer2">{props.children}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalGeneric2;
