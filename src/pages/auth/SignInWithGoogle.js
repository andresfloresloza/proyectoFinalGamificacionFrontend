/* eslint-disable jsx-a11y/alt-text */

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  DOMAIN,
  ENDPOINT_LOGIN_REGISTER,
  ROUTER_HOME,
  ROUTER_VERIFY_EMAIL,
} from "../../config/Constant";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../firebase/FirebaseUtils";
import { userLogin } from "../../redux/loginSlice";

const GoogleButton = ({ callback }) => {
  const dispatch = useDispatch();
  const history = useNavigate();

  const onClick = async () => {
    const res = await signInWithPopup(auth, new GoogleAuthProvider());
    const user = res.user;
    let idToken = await user.getIdToken(true);
    callback(idToken);

    const response = await fetch(DOMAIN + ENDPOINT_LOGIN_REGISTER, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${idToken}`,
      },
    });
    await response.json().then((data) => {
      const token = idToken;
      dispatch(userLogin(token));
      if (data.detail === "Email not Verified") {
        return history(ROUTER_VERIFY_EMAIL);
      }
      if (data.detail === "Invalid Token") {
        return alert("Invalid Token");
      }
      console.log(data);
      history(ROUTER_HOME);
    });
  };
  return (
    <img
      onClick={function () {
        onClick();
      }}
      src={require("../../assets/icon google.png")}
      className={"icono-google"}
    />
  );
};

export default GoogleButton;
