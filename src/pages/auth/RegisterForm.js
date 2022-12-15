import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  DOMAIN,
  ENDPOINT_LOGIN_REGISTER,
  ROUTER_LOGIN_FORM,
} from "../../config/Constant";
import "../../styles/LoginRegisterForm.css";
import { auth } from "../../firebase/FirebaseUtils";

const RegisterForm = () => {
  const [fullName, setFullName] = useState("");
  const [birthdayDate, setBirthdayDate] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const history = useNavigate();

  const validatePassword = () => {
    let isValid = true;
    if (password !== "" && confirmPassword !== "") {
      if (password !== confirmPassword) {
        isValid = false;
        setMessage("Las Contraseñas no coinciden");
      }
    }
    return isValid;
  };

  const registerNewUser = async () => {
    try {
      setMessage("");
      if (validatePassword()) {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        let idToken = await user.getIdToken(true);

        const response = await fetch(DOMAIN + ENDPOINT_LOGIN_REGISTER, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `JWT ${idToken}`,
          },
        });
        await response.json().then((data) => {
          setMessage("Perfil creado correctamente.");
          history(ROUTER_LOGIN_FORM);
        });
      }
    } catch (e) {
      console.log(e);
      window.alert(e.code);
    }
  };

  return (
    <div className="page">
      <img
        className="icono"
        src={require("../../assets/Recurso 2.png")}
        alt="Pais Bolivia"
      />
      <div className="contenedorRegister">
        <img
          className="icono-perfil"
          src={require("../../assets/icono foto.png")}
          alt="icono-perfil"
        />
        <div className="contenedorEmail">
          <input
            className="email"
            type="email"
            placeholder="Correo Electronico..."
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="contenedorPassword">
          <input
            className="contraseña"
            type="password"
            placeholder="Contraseña..."
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="contenedorConfirmPassword">
          <input
            className="input"
            type="password"
            placeholder="Confirmar Contraseña..."
            value={confirmPassword}
            required
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <Link
          className="login-btn"
          onClick={() => {
            registerNewUser();
          }}
        >
          Registrate
        </Link>
        <h4 className="pregunta">¿Ya tienes una cuenta?</h4>
        <Link className="textoIniciar" to={ROUTER_LOGIN_FORM}>
          Iniciar Sesión
        </Link>
      </div>
    </div>
  );
};
export default RegisterForm;
