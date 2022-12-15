import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  ROUTER_HOME,
  ROUTER_JUEGOS,
  ROUTER_LOGIN_FORM,
  ROUTER_PERFIL,
  ROUTER_RANKING,
} from "../config/Constant";
import "../styles/Header.css";
import { auth } from "../firebase/FirebaseUtils";
import { userLogout } from "../redux/loginSlice";

const Header = () => {
  const dispatch = useDispatch();
  const history = useNavigate();
  const [user, setUser] = useState(null);
  const token = useSelector((state) => state.login.token);

  useEffect(() => {
    auth.onAuthStateChanged(function (userFirebase) {
      if (userFirebase) {
        setUser(userFirebase);
      }
    });
  });

  const logout = () => {
    auth.signOut(user);
    dispatch(userLogout(token));
    history(ROUTER_LOGIN_FORM);
  };

  return (
    <div className="navbar_principal">
      {token && (
        <nav className="navbar navbar-expand-lg navbar navbar-dark ">
          <div className="container-fluid">
            <a href={ROUTER_HOME}>
              <img
                className="icono-menu"
                src={require("../../src/assets/Recurso 3.png")}
                alt="icono-perfil"
              />
            </a>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href={ROUTER_JUEGOS}>
                    INICIAR QUIZ
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href={ROUTER_RANKING}>
                    RANKING
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href={ROUTER_PERFIL}>
                    VER PERFIL
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href={ROUTER_LOGIN_FORM}
                    onClick={logout}
                  >
                    CERRAR SESIÓN
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      )}
    </div>
  );
};

export default Header;
