import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  DOMAIN,
  DOMAIN_IMAGE,
  ROUTER_RECOMPENSAS,
} from "../../config/Constant";
import "../../styles/Perfil.css";
import { RiPencilFill } from "react-icons/ri";
import { BiCheck } from "react-icons/bi";
import { IoIosClose } from "react-icons/io";
import { useSelector } from "react-redux";
import ModalGeneric2 from "../../components/ModalGeneric2";
import AddPhoto from "../../components/home/AddPhoto";

const Perfil = () => {
  const [showAddPhoto, setShowAddPhoto] = useState(false);

  const [stateFullName, setStateFullName] = useState(true);
  const [stateBirthdayDate, setStateBirthdayDate] = useState(true);
  const [statePhoneNumber, setStatePhoneNumber] = useState(true);

  const [fullName, setFullName] = useState("");
  const [birthdayDate, setBirthdayDate] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [image, setImage] = useState("");

  const [profile, setProfile] = useState({});
  const token = useSelector((state) => state.login.token);
  const [listaJugadores, setListaJugadores] = useState([]);

  useEffect(() => {
    getPlayers();
    getProfile();
  }, []);

  const getProfile = async () => {
    const response = await fetch(DOMAIN + "profiles/user", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${token}`,
      },
    });
    await response.json().then((response) => {
      console.log("esto es profile", response);
      if (response.success === true) {
        setFullName(response.data.full_name);
        setBirthdayDate(response.data.birthday_date);
        setPhoneNumber(response.data.phone_number);
        setImage(response.data.image);
        setProfile(response.data);
      }
    });
  };

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
      console.log(response);
    });
  };

  const updateProfile = async (setState) => {
    setState(true);
    profile.full_name = fullName;
    profile.birthday_date = birthdayDate;
    profile.phone_number = phoneNumber;
    const response = await fetch(DOMAIN + "profiles/user", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${token}`,
      },
      body: JSON.stringify({
        full_name: fullName,
        birthday_date: birthdayDate,
        phone_number: phoneNumber,
      }),
    });
    await response.json().then((data) => {
      console.log("Actualizo su Perfil:");
      console.log(data);
      getPlayers();
    });
  };

  function onHideModal() {
    setShowAddPhoto(false);
    getProfile();
  }

  return (
    <div className="page2">
      <div>
        <div className="contenedorPerfil">
          <img
            onClick={() => setShowAddPhoto(true)}
            className="icono-perfil"
            src={DOMAIN_IMAGE + image}
            alt="icono-perfil"
          />

          <div className="contenedorInput">
            {stateFullName ? (
              <>
                {" "}
                <div className="contenedorSecundarioInput">
                  {" "}
                  <div className="inputNombre">
                    <h4 className="inputContainer2">
                      {fullName === "" ? "Nombre Completo..." : fullName}
                    </h4>{" "}
                  </div>
                  <button
                    className="botonEditar"
                    onClick={() => setStateFullName(false)}
                  >
                    <RiPencilFill></RiPencilFill>
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="contenedorSecundarioInput">
                  <div className="inputNombre">
                    <input
                      className="inputContainer"
                      type="fullName"
                      value={fullName}
                      required
                      placeholder="Nombre Completo..."
                      onChange={(e) => setFullName(e.target.value)}
                    />
                  </div>
                  <button
                    className="botonCancelar"
                    onClick={() => {
                      setStateFullName(true);
                      setFullName(profile.full_name);
                    }}
                  >
                    <IoIosClose></IoIosClose>
                  </button>
                  <button
                    className="botonAceptar"
                    onClick={() => {
                      updateProfile(setStateFullName);
                    }}
                  >
                    <BiCheck></BiCheck>
                  </button>
                </div>
              </>
            )}
          </div>
          <div className="contenedorInput">
            {stateBirthdayDate ? (
              <>
                <div className="contenedorSecundarioInput">
                  {" "}
                  <div className="inputFecha">
                    <h4 className="inputContainer2">
                      {birthdayDate === ""
                        ? "Fecha de Nacimiento..."
                        : birthdayDate}
                    </h4>{" "}
                  </div>
                  <button
                    className="botonEditar2"
                    onClick={() => setStateBirthdayDate(false)}
                  >
                    <RiPencilFill></RiPencilFill>
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="contenedorSecundarioInput">
                  <div className="inputFecha">
                    <input
                      className="inputContainer"
                      type="birthdayDate"
                      value={birthdayDate}
                      required
                      placeholder="Fecha de Nacimiento..."
                      onChange={(e) => setBirthdayDate(e.target.value)}
                    />
                  </div>
                  <button
                    className="botonCancelar"
                    onClick={() => {
                      setStateBirthdayDate(true);
                      setBirthdayDate(profile.birthday_date);
                    }}
                  >
                    <IoIosClose> </IoIosClose>
                  </button>
                  <button
                    className="botonAceptar"
                    onClick={() => {
                      updateProfile(setStateBirthdayDate);
                    }}
                  >
                    <BiCheck> </BiCheck>
                  </button>
                </div>
              </>
            )}
          </div>
          <div className="contenedorInput">
            {statePhoneNumber ? (
              <>
                <div className="contenedorSecundarioInput">
                  {" "}
                  <div className="inputTelefono">
                    <h4 className="inputContainer2">
                      {phoneNumber === ""
                        ? "Telefono / Celular..."
                        : phoneNumber}
                    </h4>{" "}
                  </div>
                  <button
                    className="botonEditar3"
                    onClick={() => setStatePhoneNumber(false)}
                  >
                    <RiPencilFill></RiPencilFill>
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="contenedorSecundarioInput">
                  <div className="inputTelefono">
                    <input
                      className="inputContainer"
                      type="phoneNumber"
                      value={phoneNumber}
                      required
                      placeholder="Telefono / Celular..."
                      onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                  </div>
                  <button
                    className="botonCancelar"
                    onClick={() => {
                      setStatePhoneNumber(true);
                      setPhoneNumber(profile.phone_number);
                    }}
                  >
                    <IoIosClose></IoIosClose>
                  </button>
                  <button
                    className="botonAceptar"
                    onClick={() => {
                      updateProfile(setStatePhoneNumber);
                    }}
                  >
                    <BiCheck></BiCheck>
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <div>
        <div className="contenedorRanking">
          <div className="containerTable">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">N°</th>
                  <th scope="col">JUGADORES</th>
                  <th scope="col">PUNTOS</th>
                </tr>
                {listaJugadores?.map((link, index) => (
                  <tr key={index}>
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
              </thead>
            </table>
          </div>
        </div>
        <div className="contenedorPremios">
          <p className="tituloRecompensa">RECOMPENSAS - PREMIOS</p>
          <div className="contenedorPremios2">
            <div className="simbolos_patrios1">
              <Link to={ROUTER_RECOMPENSAS}>
                <img
                  className="simbolos"
                  src={require("../../assets/medalla_bronce.png")}
                  alt="Libros"
                />
              </Link>
            </div>
            <div className="simbolos_patrios1">
              <Link to={ROUTER_RECOMPENSAS}>
                <img
                  className="simbolos"
                  src={require("../../assets/medalla_plata.png")}
                  alt="Libros"
                />
              </Link>
            </div>
            <div className="simbolos_patrios1">
              <Link to={ROUTER_RECOMPENSAS}>
                <img
                  className="simbolos"
                  src={require("../../assets/medalla_oro.png")}
                  alt="Libros"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <ModalGeneric2
        title="Añadir Foto de Perfil"
        show={showAddPhoto}
        onHide={() => onHideModal()}
        children={<AddPhoto handleOnHide={onHideModal} />}
      />
    </div>
  );
};
export default Perfil;
