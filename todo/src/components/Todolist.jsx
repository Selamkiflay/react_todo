import React from "react";
import Todoitems from "./Todoitems";
import styles from "./todolist.module.css";

export default function Todolist({ todos, settodos }) {
  return (
    <div className={styles.list}>
      {todos.map((items) => (
        <Todoitems
          key={items.name}
          items={items}
          todos={todos}
          settodos={settodos}
        />
      ))}
    </div>
  );
}
