import "../../styles/PaginaInicial.css";

const PaginaInicial = () => {
  return (
    <div className="page2">
      <div className="contenedorPaginaPrincipal">
        <div className="contenedorSecundario">
          <p>Bienvenido (Nombre del Jugador) al juego CONOCIENDO MI BOLIVIA.</p>
          <p>
            Es un juego en donde pondremos a prueba todo el conocimiento que
            tengas sobre nuesta Querida Patria mediante preguntas de distintos
            temas, como ser:
          </p>
          <ul>
            <li className="li">Periodo Prehispánico.</li>
            <li className="li">La Conquista del Imperio Inca.</li>
            <li className="li">La Audiencia de Charcas.</li>
            <li className="li">Guerra de la Independencia.</li>
            <li className="li">Presidentes de Bolivia.</li>
            <li className="li">Guerras Limítrofes.</li>
            <li className="li">Fundación de los Departamentos.</li>
            <li className="li">Economía en Bolivia.</li>
            <li className="li">
              Ingreso y Expulsión de las Misiones Jesuitas.
            </li>
            <li className="li">
              Creación de la Bandera y Escudo Nacional y los Símbolos Patrios.
            </li>
          </ul>
          <p>
            Contamos con 2 desafios de los cuales si sales entre los 3 mejores
            lugares, obtienes un premio que sera cambiado por puntos para el
            Ranking General.
          </p>
        </div>
      </div>
    </div>
  );
};
export default PaginaInicial;
