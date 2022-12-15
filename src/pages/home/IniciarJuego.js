import { Link } from "react-router-dom";
import "../../styles/IniciarJuego.css";
import { JUEGO_QUIZ, RETO_1, RETO_2 } from "../../config/Constant";

const IniciarJuego = () => {
  return (
    <div className="page2">
      <div className="contenedorIniciarJuego">
        <div className="container">
          <div className="titulos">
            <p className="p">QUIZ</p>
            <p className="p">NORMAL</p>
          </div>
          <div className="imagen1">
            <img
              className="icono-juego1"
              src={require("../../assets/libros.png")}
              alt="Libros"
            />
          </div>
          <div className="boton">
            <Link className="login-btn" to={JUEGO_QUIZ}>
              INICIAR QUIZ
            </Link>
          </div>
          <div className="relleno">
            <p className="preguntas">Preguntas 10</p>
          </div>
        </div>

        <div className="container">
          <div className="titulos">
            <p className="p">DESAFIO</p>
            <p className="p">EL MÁS RAPIDO</p>
          </div>
          <div className="imagen">
            <img
              className="icono-juego2"
              src={require("../../assets/cronometro.png")}
              alt="Libros"
            />
          </div>
          <div className="boton">
            <Link className="login-btn" to={RETO_1}>
              INICIAR DESAFIO
            </Link>
          </div>
          <div className="relleno">
            <p className="preguntas">Preguntas 5</p>
          </div>
        </div>

        <div className="container">
          <div className="titulos">
            <p className="p">DESAFÍO</p>{" "}
            <p className="p">¿RECONOCES LAS IMAGENES?</p>
          </div>
          <div className="imagen">
            <img
              className="icono-juego3"
              src={require("../../assets/multimedia.png")}
              alt="Libros"
            />
          </div>
          <div className="boton">
            <Link className="login-btn" to={RETO_2}>
              INICIAR DESAFIO
            </Link>
          </div>
          <div className="relleno">
            <p className="preguntas">Preguntas 10</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default IniciarJuego;
