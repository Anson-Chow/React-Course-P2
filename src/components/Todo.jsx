import React from "react";
import './Todo.css'

const Todo = ({ title, onTodoDelete }) => {

  return (
    <div className="todo">
      <p>{title}</p>
      <button onClick={onTodoDelete}>Delete</button>
    </div>
  );
};

export default Todo;
