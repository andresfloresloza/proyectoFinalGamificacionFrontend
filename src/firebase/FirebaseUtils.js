import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAK-PrSUVufbELk_Ud3tuYF2-5M8aF_1Sw",
  authDomain: "proyectofinalgamificacion.firebaseapp.com",
  projectId: "proyectofinalgamificacion",
  storageBucket: "proyectofinalgamificacion.appspot.com",
  messagingSenderId: "1005202780570",
  appId: "1:1005202780570:web:9caaa87bd176ae02370a23",
  measurementId: "G-677VZLLYXF",
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
