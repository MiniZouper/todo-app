import React, { useState, useEffect } from "react";
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";
import { useTodo } from "../hooks/useTodo";
import "./AppP.css";
import { updateProfile, signOut } from "firebase/auth";
import { auth } from "../login-firebase/firebase";
import Home from "../login-firebase/Home/Home";

export function AppPrincipal() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      } else {
        setUserName("");
      }
    });
  }, []);

  const logOut = () => {
    signOut(auth);
    updateProfile(auth);
    window.location.href = "/";
  };

  const {
    todos,
    todosCount,
    pendingTodos,
    handleNewTodo,
    handleDeleteTodo,
    handleCompleteTodo,
    handleUpdateTodo,
  } = useTodo();
  return (
    <div className="AppPrincipal">
      
      <div className="card-to-do">
      <div>
        <button onClick={logOut} className="logOut">Salir</button>
      </div>
        <h1 className="lista">
          Tareas de: <span className="user-list">{userName}</span>{" "}
        </h1>
        <div className="counter-todos">
          <h3>
            Nº de Tareas: <span>{todosCount}</span>
          </h3>
          <h3>
            Pendientes: <span>{pendingTodos}</span>
          </h3>
        </div>

        <div className="add-todo">
          <h3>Agregar Tarea</h3>
          <TodoAdd handleNewTodo={handleNewTodo} />
        </div>

        <TodoList
          todos={todos}
          handleDeleteTodo={handleDeleteTodo}
          handleCompleteTodo={handleCompleteTodo}
          handleUpdateTodo={handleUpdateTodo}
        />
      </div>
    </div>
  );
}

export default AppPrincipal;
