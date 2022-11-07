import React, { useEffect,useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { auth } from "./firebase";
import Home from "./Home/Home";
import Login from "./Login/Login";
import SignUp from "./SignUp/SignUp";
import AppPrincipal from "../todo-app/AppPrincipal";


function Rutas() {

  const [userName, setUserName]=useState("");


  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      } else {
        setUserName("");
      }
    });
  }, []);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<Home name={userName}/>} />
          <Route path="/todo" element={<AppPrincipal/>} />
        </Routes>
      </Router>
    </>
  );
}

export default Rutas;
