import "../../styles/RecompensaPremios.css";

const RecompensaPremios = () => {
  return (
    <div className="page2">
      <div className="contenedor1">
        <p className="title">RECOMPENSAS - PREMIOS</p>
        <div className="contenedorRecompensas">
          <div className="containerPremios">
            <img
              className="premios"
              src={require("../../assets/medalla_bronce.png")}
              alt="Medalla Bronce"
            />
            <p className="descripcion">Obtenido en ....</p>
          </div>
          <div className="containerPremios">
            <img
              className="premios"
              src={require("../../assets/medalla_plata.png")}
              alt="Medalla Plata"
            />{" "}
            <p className="descripcion">Obtenido en ....</p>
          </div>
          <div className="containerPremios">
            <img
              className="premios"
              src={require("../../assets/medalla_oro.png")}
              alt="Medalla Oro"
            />{" "}
            <p className="descripcion">Obtenido en ....</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RecompensaPremios;
