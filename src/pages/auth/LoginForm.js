import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  DOMAIN,
  ENDPOINT_LOGIN_REGISTER,
  ROUTER_HOME,
  ROUTER_REGISTER_FORM,
  ROUTER_VERIFY_EMAIL,
} from "../../config/Constant";
import "../../styles/LoginRegisterForm.css";
import GoogleButton from "./SignInWithGoogle";
import { auth } from "../../firebase/FirebaseUtils";
import { signInWithEmailAndPassword } from "firebase/auth";
import { userLogin } from "../../redux/loginSlice";

const LoginForm = () => {
  const dispatch = useDispatch();
  const history = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");

  const signInUser = async () => {
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
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
        const token = idToken;
        if (data.detail === "Email not Verified") {
          return history(ROUTER_VERIFY_EMAIL);
        }
        console.log(token);
        dispatch(userLogin(token));
        return history(ROUTER_HOME);
      });
    } catch (e) {
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
      <div className="contenedor">
        <img
          className="icono-form"
          src={require("../../assets/bolivia2.png")}
          alt="Pais Bolivia"
        />
        <div className="contenedorEmail">
          <input
            className="email"
            type="text"
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
        <Link
          onClick={() => {
            signInUser();
          }}
          className="login-btn"
        >
          Iniciar Sesion
        </Link>
        <div className="alt-login">
          <div className="titulo">¿No tienes una Cuenta?</div>
          <Link className="titulo2" to={ROUTER_REGISTER_FORM}>
            Registrate
          </Link>
        </div>
        <div className="alt-login2">
          <p className="titulo">Entrar con</p>
          <GoogleButton callback={setToken} />
        </div>
      </div>
    </div>
  );
};
export default LoginForm;
