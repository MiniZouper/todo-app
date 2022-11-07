import React from "react";

import { TodoItem } from "./TodoItem";

export const TodoList = ({
  todos,
  handleDeleteTodo,
  handleCompleteTodo,
  handleUpdateTodo,
}) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleDeleteTodo={handleDeleteTodo}
          handleCompleteTodo={handleCompleteTodo}
          handleUpdateTodo={handleUpdateTodo}
        />
      ))}
    </ul>
  );
};
