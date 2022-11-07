import React, { useState, useRef } from "react";
import { FaEdit } from "react-icons/fa";
import { useForm } from "../hooks/useForm";

export const TodoUpdate = ({ todo, handleUpdateTodo }) => {
  const { updateDescription, onInputChange } = useForm({
    updateDescription: todo.description,
  });

  const [disable, setDisable] = useState(true);
  const focusInputRef = useRef();

  const onSubmitUpdate = (e) => {
    e.preventDefault();
    const id = todo.id;
    const description = updateDescription;
    handleUpdateTodo(id, description);
    setDisable(!disable);
    focusInputRef.current.focus();
  };

  return (
    <form onSubmit={onSubmitUpdate}>
      <input
        type="text"
        className={`input-update ${todo.done ? "text-decoration-dashed" : ""}`}
        name="updateDescription"
        value={updateDescription}
        onChange={onInputChange}
        placeholder="¿Que hay que Hacer?"
        readOnly={disable}
        ref={focusInputRef}
      />
      <button className="btn-edit" type="submit">
        <FaEdit />
      </button>
    </form>
  );
};
