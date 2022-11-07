import React, { useState } from "react";
import InputControl from "../InputControl/InputControl";
import styles from "./signup.module.css";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

function SingUp() {
  
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDIsable, setSubmitButtonDIsable] = useState(false);

  const handleSubmission = () => {
    if (!values.name || !values.email || !values.password) {
      setErrorMsg("Rellena todos los campos");
      return;
    }
    setErrorMsg("");

    setSubmitButtonDIsable(true);

    createUserWithEmailAndPassword(auth, values.email, values.password)
      .then(async (res) => {
        setSubmitButtonDIsable(false);
        const user = res.user;
        console.log(user);
       await updateProfile(user, {
          displayName: values.name,
        });
        window.location.href = "/";
      })
      .catch((err) => {
        setSubmitButtonDIsable(false);

        setErrorMsg(err.message);
      });
  };

  return (
    <div className={styles.container1}>
      <div className={styles.innerbox}>
        <h1 className={styles.heading}>Regístrate</h1>

        <InputControl
          label="Nombre"
          placeholder="Ingresa tu nombre"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, name: event.target.value }))
          }
        />
        <InputControl
          label="Email"
          placeholder="Ingresa el correo electrónico"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          }
        />
        <InputControl
          label="Contraseña"
          placeholder="Ingresa la contraseña"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, password: event.target.value }))
          }
        />

        <div className={styles.footer}>
          <b className={styles.error}>{errorMsg}</b>
          <button onClick={handleSubmission} disabled={submitButtonDIsable}>
            SignUp
          </button>
          <p>
            ¿Ya tienes una cuenta?{" "}
            <span>
              <Link to="/login">Inicia Sesión</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SingUp;
