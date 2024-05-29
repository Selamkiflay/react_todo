import React, { useState } from "react";

import Todolist from "./Todolist";
import Form from "./Form";
import Footer from "./Footer";

function Todo() {
  const [todos, settodos] = useState([]);
  const completedtodos = todos.filter((todo) => todo.done).length;
  const totaltodos = todos.length;
  return (
    <div>
      <Form todos={todos} settodos={settodos} />
      <Todolist todos={todos} settodos={settodos} />
      <Footer completedtodos={completedtodos} totaltodos={totaltodos} />
    </div>
  );
}

export default Todo;
