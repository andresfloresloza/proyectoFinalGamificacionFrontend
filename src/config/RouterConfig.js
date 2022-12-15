import React from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router";
import LoginForm from "../pages/auth/LoginForm";
import RegisterForm from "../pages/auth/RegisterForm";
import Verify from "../pages/auth/Verify";
import IniciarJuego from "../pages/home/IniciarJuego";
import PaginaInicial from "../pages/home/PaginaInicial";
import Perfil from "../pages/home/Perfil";
import Ranking from "../pages/home/Ranking";
import RecompensaPremios from "../pages/home/RecompensaPremios";
import Quiz from "../pages/others/Quiz";
import Reto1 from "../pages/others/Reto1";
import Reto2 from "../pages/others/Reto2";

import {
  JUEGO_QUIZ,
  RETO_1,
  RETO_2,
  ROUTER_HOME,
  ROUTER_INITIAL,
  ROUTER_JUEGOS,
  ROUTER_LOGIN_FORM,
  ROUTER_PERFIL,
  ROUTER_RANKING,
  ROUTER_RECOMPENSAS,
  ROUTER_REGISTER_FORM,
  ROUTER_VERIFY_EMAIL,
} from "./Constant";
import NoRequireAuth from "./NoRequireAuth";
import RequireAuth from "./RequireAuth";

const RouterConfig = () => {
  const Token = useSelector((state) => state.login.token);

  return (
    <Routes>
      <Route
        path={ROUTER_INITIAL}
        element={
          <>
            <NoRequireAuth Token={Token}>
              <LoginForm />
            </NoRequireAuth>
          </>
        }
      />
      <Route
        path={ROUTER_LOGIN_FORM}
        element={
          <>
            {" "}
            <NoRequireAuth Token={Token}>
              <LoginForm />
            </NoRequireAuth>
          </>
        }
      />
      <Route
        path={ROUTER_REGISTER_FORM}
        element={
          <>
            {" "}
            <NoRequireAuth Token={Token}>
              <RegisterForm />
            </NoRequireAuth>
          </>
        }
      />
      <Route
        path={ROUTER_HOME}
        element={
          <>
            {" "}
            <RequireAuth Token={Token}>
              <PaginaInicial />{" "}
            </RequireAuth>
          </>
        }
      />
      <Route
        path={ROUTER_VERIFY_EMAIL}
        element={
          <>
            <NoRequireAuth Token={Token}>
              <Verify />
            </NoRequireAuth>
          </>
        }
      />
      <Route
        path={ROUTER_JUEGOS}
        element={
          <>
            {" "}
            <RequireAuth Token={Token}>
              <IniciarJuego />{" "}
            </RequireAuth>
          </>
        }
      />
      <Route
        path={ROUTER_PERFIL}
        element={
          <>
            {" "}
            <RequireAuth Token={Token}>
              <Perfil />{" "}
            </RequireAuth>
          </>
        }
      />
      <Route
        path={ROUTER_RANKING}
        element={
          <>
            {" "}
            <RequireAuth Token={Token}>
              <Ranking />{" "}
            </RequireAuth>
          </>
        }
      />
      <Route
        path={ROUTER_RECOMPENSAS}
        element={
          <>
            {" "}
            <RequireAuth Token={Token}>
              <RecompensaPremios />{" "}
            </RequireAuth>
          </>
        }
      />

      <Route
        path={JUEGO_QUIZ}
        element={
          <>
            {" "}
            <RequireAuth Token={Token}>
              <Quiz />{" "}
            </RequireAuth>
          </>
        }
      />

      <Route
        path={RETO_1}
        element={
          <>
            {" "}
            <RequireAuth Token={Token}>
              <Reto1 />{" "}
            </RequireAuth>
          </>
        }
      />

      <Route
        path={RETO_2}
        element={
          <>
            {" "}
            <RequireAuth Token={Token}>
              <Reto2 />{" "}
            </RequireAuth>
          </>
        }
      />
    </Routes>
  );
};

export default RouterConfig;
