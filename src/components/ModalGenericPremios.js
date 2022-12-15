import React from "react";
import { Link } from "react-router-dom";
import "../../src/styles/Modals.css";
import { ROUTER_JUEGOS } from "../config/Constant";

const ModalGenericPremios = (props) => {
  return (
    <>
      {!props.show ? null : (
        <div className="overlay">
          <div className="container_modal">
            <div className="modal_header">
              <p className="tituloModalPremio"> {props.title}</p>
            </div>
            <div className="modal_body_premio">
              <p>{props.imagen}</p>
              <p className="contenidoModalPremio">{props.description2}</p>
            </div>
            <div className="modal_footer">
              <Link className="modal-btn" to={ROUTER_JUEGOS}>
                Volver
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalGenericPremios;
