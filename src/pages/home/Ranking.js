import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { DOMAIN, DOMAIN_IMAGE } from "../../config/Constant";
import "../../styles/Ranking.css";

const Ranking = () => {
  const [listaJugadores, setListaJugadores] = useState([]);
  const token = useSelector((state) => state.login.token);

  useEffect(() => {
    getPlayers();
  }, [listaJugadores]);

  const getPlayers = async () => {
    const response = await fetch(DOMAIN + "profiles/users", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${token}`,
      },
    });
    await response.json().then((response) => {
      setListaJugadores(response);
      console.log(listaJugadores);
    });
  };

  return (
    <div className="page2">
      <div className="contenedorMensaje">
        <p className="tituloRanking">TABLA DE POSICIONES</p>
        <div className="containerTable">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th scope="col">N°</th>
                <th scope="col">JUGADORES</th>
                <th scope="col">PUNTOS</th>
              </tr>
              {/* */}
            </thead>
            <tbody>
              {listaJugadores?.map((link, index) => (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>
                    <div className="fila">
                      <img
                        className="icono_jugador"
                        src={DOMAIN_IMAGE + link.image}
                        alt="Pais Bolivia"
                      />
                      <p className="nombre">{link.full_name}</p>
                    </div>
                  </td>
                  <td>
                    <div className="fila2">
                      <p className="nombre2">{link.puntos} Pts.</p>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="contenedorImagen">
          <div className="simbolos_patrios_1">
            <img
              className="simbolo"
              src={require("../../assets/bandera.png")}
              alt="Libros"
            />
          </div>
          <div>
            <img
              className="simbolo"
              src={require("../../assets/escudo.png")}
              alt="Libros"
            />
          </div>
          <div className="simbolos_patrios">
            <img
              className="simbolo3"
              src={require("../../assets/bolivia2.png")}
              alt="Libros"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Ranking;
