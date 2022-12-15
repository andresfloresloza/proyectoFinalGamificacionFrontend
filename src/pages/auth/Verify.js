import { useEffect, useState } from "react";
import ModalAlert from "../../components/ModalAlert";
import "../../styles/verify.css";
import { auth } from "../../firebase/FirebaseUtils";
import { ROUTER_LOGIN_FORM } from "../../config/Constant";
import { Link } from "react-router-dom";
import { sendEmailVerification } from "firebase/auth";

const Verify = () => {
  const [email, setEmail] = useState("");
  const [user, setUser] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    auth.onAuthStateChanged(function (userFirebase) {
      if (userFirebase) {
        setEmail(userFirebase.email);
        setUser(userFirebase);
      }
    });
  });

  const sendEmail = () => {
    if (user) {
      setShowModal(true);
      sendEmailVerification(user);
    }
  };

  return (
    <div className="page">
      <div className="contenedorVerificador">
        <ModalAlert
          showModal={showModal}
          title={"Listo! Revisa tu correo."}
          body={
            "Por favor revisa tu buzon de correo y sigue las instrucciones enviadas. El correo fue enviado a:"
          }
          dynamicData={email}
          textButton={"Listo"}
          onHide={() => {
            setShowModal(false);
          }}
        />
        <div className="alt-verify">
          <h1 className="tituloVerificador">Verificar tu correo electronico</h1>
          <button
            className="verificador-btn"
            onClick={() => {
              sendEmail();
            }}
          >
            Enviar mensaje de verificación
          </button>
          <Link className="iniciar" to={ROUTER_LOGIN_FORM}>
            Iniciar Sesión
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Verify;
