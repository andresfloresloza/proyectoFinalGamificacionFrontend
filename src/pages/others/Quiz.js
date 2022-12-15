/* eslint-disable jsx-a11y/alt-text */
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ModalGeneric from "../../components/ModalGeneric";
import { DOMAIN } from "../../config/Constant";
import "../../styles/Quizz.css";

const Quiz = () => {
  const token = useSelector((state) => state.login.token);
  const [listaPreguntas, setListaPreguntas] = useState([]);

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    getPreguntas();
  }, []);

  function onHideModal() {
    setShowModal(false);
  }

  const getPreguntas = async () => {
    const response = await fetch(DOMAIN + "profiles/listaPreguntas", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${token}`,
      },
    });
    await response.json().then((response) => {
      setListaPreguntas(response);
      console.log(response);
    });
  };

  return (
    <>
      {listaPreguntas?.map((link, index) => (
        <div className="page2">
          <div className="contenedorPrincipalPreguntas">
            <div className="contenedorPregunta">
              <label className="labelPregunta">
                <p>
                  Pregunta {index + 1}. {link.pregunta}
                </p>
              </label>
            </div>
            <div className="contenedorPrincipalRespuestas">
              <div className="contenedorRespuestas">
                <label className="labelRespuesta">
                  <p>A. {link.respuestaCorrecta} </p>
                </label>
                <label className="labelRespuesta">
                  <p>B. {link.respuestaIncorrecta1} </p>
                </label>
              </div>
              <div className="contenedorRespuestas">
                <label className="labelRespuesta">
                  <p>C. {link.respuestaIncorrecta2} </p>
                </label>
                <label className="labelRespuesta">
                  <p>D. {link.respuestaIncorrecta3} </p>
                </label>
              </div>
            </div>
            <ModalGeneric
              title="FELICIDADES HAS COMPLETADO EL QUIZ"
              show={showModal}
              onHide={() => onHideModal()}
              description="Lograste responder"
              description2="... / 10 Preguntas Correctas."
            />
          </div>
        </div>
      ))}
    </>
  );
};
export default Quiz;
