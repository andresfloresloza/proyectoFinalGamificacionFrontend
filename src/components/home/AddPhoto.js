import axios from "axios";
import React, { useRef } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { DOMAIN } from "../../config/Constant";
import "../../styles/AddPhoto.css";

export default function AddPhoto({ handleOnHide }) {
  const token = useSelector((state) => state.login.token);
  const fileRef = useRef(null);
  const [imageView, setImageView] = useState(
    require("../../assets/icon cloud.png")
  );
  const [imageForm, setImageForm] = useState(null);

  function handleOpenFilePicker() {
    if (fileRef.current) {
      fileRef.current.click();
    }
  }
  const handleChangeFile = (e) => {
    e.preventDefault();
    const files = e.target.files;
    const fileReader = new FileReader();
    if (fileReader && files && files.length > 0) {
      const reader = new FileReader();
      reader.onload = async function () {
        setImageView(reader.result);
      };
      setImageForm(files[0]);
      reader.readAsDataURL(files[0]);
    }
  };
  const sendPhoto = async () => {
    if (imageForm === null) {
      return;
    }
    const url = DOMAIN + "profiles/user";
    const data = new FormData();
    data.append("image", imageForm);
    axios
      .put(url, data, {
        headers: {
          Authorization: "JWT " + token,
        },
      })
      .then((res) => {
        handleOnHide();
      })
      .catch((error) => {});
  };

  // "../../assets/Iconos/icon cloud.png"
  return (
    <div className="contenedorAddPhoto">
      <img
        className="imagenAddPhoto"
        src={imageView}
        alt=""
        onClick={handleOpenFilePicker}
      />
      <div className="contenedorButton">
        <button className="modal-btn-photo" onClick={handleOpenFilePicker}>
          Subir
        </button>
        <input
          accept="image/x-png,image/jpeg"
          ref={fileRef}
          type="file"
          style={{ display: "none" }}
          onChange={handleChangeFile}
        />
        <button className="modal-btn-photo" onClick={sendPhoto}>
          Guardar
        </button>
      </div>
    </div>
  );
}
