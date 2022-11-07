import React from "react";
import { Link } from "react-router-dom";
import "../Home/Home.css";

function Home(props) {
  return (
    <div className="container">
      <div className="innertbox">
        <div className="footer">
          <div>
            <h1 className="links">
              <Link to="/login" className="links">Inicia Sesión</Link>
            </h1 >
            <br />
            <h1 className="links">
              <Link to="/signup" className="links">Regístrate</Link>
            </h1>
          </div>

          <br />
          

          <h2>
            {props.name
              ? `Bienvenido - ${props.name}`
              : "Inicia sesión Por favor"}
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Home;
