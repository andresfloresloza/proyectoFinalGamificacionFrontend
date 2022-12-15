import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ModalGeneric from "../../components/ModalGeneric";
import ModalGenericPremios from "../../components/ModalGenericPremios";
import { DOMAIN, DOMAIN_IMAGE } from "../../config/Constant";

const Reto2 = () => {
  const token = useSelector((state) => state.login.token);
  const [showModal, setShowModal] = useState(false);
  const [showOtroModal, setShowOtroModal] = useState(false);
  const [listaPreguntas, setListaPreguntas] = useState([]);
  const [diff, setDiff] = useState(null);
  const [initial, setInitial] = useState(null);

  useEffect(() => {
    getPreguntas();
    start();
  }, []);

  // CRONOMETRO
  useEffect(() => {
    if (initial) {
      requestAnimationFrame(tick);
    }
  }, [initial]);

  useEffect(() => {
    if (diff) {
      requestAnimationFrame(tick);
    }
  }, [diff]);

  const tick = () => {
    setDiff(new Date(+new Date() - initial));
  };

  const start = () => {
    setInitial(+new Date());
  };

  const timeFormat = (date) => {
    if (!date) return "00:00:00";
    let mm = date.getUTCMinutes();
    let ss = date.getSeconds();
    let cm = Math.round(date.getMilliseconds() / 10);
    mm = mm < 10 ? "0" + mm : mm;
    ss = ss < 10 ? "0" + ss : ss;
    cm = cm < 10 ? "0" + cm : cm;
    return `${mm}:${ss}:${cm}`;
  };

  // OBTENER LISTA DE PREGUNTAS ALEATORIAS
  const getPreguntas = async () => {
    const response = await fetch(DOMAIN + "profiles/listaPreguntasReto2", {
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

  function onHideModal() {
    setShowModal(false);
  }
  function onHideOtroModal() {
    setShowOtroModal(false);
  }

  return (
    <>
      {listaPreguntas?.map((link, index) => (
        <div className="page2">
          <div className="contenedorPrincipalPreguntas">
            <div className="contenedorPregunta">
              <p>Tiempo {timeFormat(diff)} </p>
              <label className="labelPregunta">
                <p>
                  Pregunta {index + 1}. {link.pregunta}
                </p>
                <img
                  className="imagenPregunta"
                  src={DOMAIN_IMAGE + link.image}
                />
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
      {/* <button
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
        /> */}
    </>
  );
};
export default Reto2;
