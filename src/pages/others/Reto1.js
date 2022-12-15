import { useState } from "react";
import ModalGeneric from "../../components/ModalGeneric";
import ModalGenericPremios from "../../components/ModalGenericPremios";

const Reto1 = () => {
  const [showModal, setShowModal] = useState(false);
  const [showOtroModal, setShowOtroModal] = useState(false);

  function onHideModal() {
    setShowModal(false);
  }
  function onHideOtroModal() {
    setShowOtroModal(false);
  }
  return (
    <div className="page2">
      <div className="contenedorIniciarJuego">
        <button
          onClick={() => {
            setShowModal(true);
          }}
        >
          Abrir Modal Finalizado
        </button>
        <ModalGeneric
          title="FELICIDADES HAS COMPLETADO EL QUIZ"
          show={showModal}
          onHide={() => onHideModal()}
          description="Lograste responder"
          description2="... / 10 Preguntas Correctas."
        />
        <button
          onClick={() => {
            setShowOtroModal(true);
          }}
        >
          Abrir Modal de Recompensa
        </button>
        <ModalGenericPremios
          title="FELICIDADES HAS GANADO UN PREMIO!!!"
          show={showOtroModal}
          onHide={() => onHideOtroModal()}
          imagen={
            <img
              className="medallaModal"
              src={require("../../assets/medalla_bronce.png")}
            />
          }
          description2="Por Completar el Desafio (Nombre del Desafio)."
        />
      </div>
    </div>
  );
};
export default Reto1;
