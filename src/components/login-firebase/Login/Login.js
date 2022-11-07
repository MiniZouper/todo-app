import React, { useState } from "react";
import InputControl from "../InputControl/InputControl";
import InputPassword from "../InputControl/InputPassword";
import styles from "./Login.module.css";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase";
import AppPrincipal from "../../todo-app/AppPrincipal";

function Login() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDIsable, setSubmitButtonDIsable] = useState(false);

  const handleSubmission = () => {
    if (!values.email || !values.password) {
      setErrorMsg("Rellena todos los campos");
      return;
    }
    setErrorMsg("");

    setSubmitButtonDIsable(true);

    signInWithEmailAndPassword(auth, values.email, values.password)
      .then(async (res) => {
        setSubmitButtonDIsable(false);
        const user = res.user;
        console.log(user);
        await updateProfile(user, {
          displayName: values.name,
          
        });
        navigate("/todo");
        localStorage.setItem(AppPrincipal)
      })
      .catch((err) => {
        setSubmitButtonDIsable(false);

        setErrorMsg(err.message);
      });
  };
  return (
    <div className={styles.container1}>
      <div className={styles.innerbox}>
        <h1 className={styles.heading}>Inicia Sesión</h1>

        <InputControl
          label="Email"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          }
          placeholder="Ingresa el correo electrónico"
        />
        
        <InputPassword
          label="Contraseña"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, password: event.target.value }))
          }

          placeholder="Ingresa la contraseña"
        />

        <div className={styles.footer}>
          <b className={styles.error}>{errorMsg}</b>
          <button disabled={submitButtonDIsable} onClick={handleSubmission}>Login</button>
          <p>
          ¿Aún no tienes una cuenta?{" "}
            <span>
              <Link to="/signup">Regístrate</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;

