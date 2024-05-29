import React from "react";
import { useState } from "react";
import styles from "./form.module.css";

export default function Form({ todos, settodos }) {
  const [todo, settodo] = useState({ name: "", done: false });

  function handleSubmit(e) {
    e.preventDefault();
    settodos([...todos, todo]);
    settodo(" ");
  }
  return (
    <form className={styles.todoform} onSubmit={handleSubmit}>
      <div className={styles.incontainer}>
        <input
          className={styles.inputform}
          onChange={(e) => settodo({ name: e.target.value, done: false })}
          value={todo.name}
          type="text"
          placeholder="enter todo list....."
        />
        <button className={styles.buttoncss} type="submit">
          Add
        </button>
      </div>
    </form>
  );
}
