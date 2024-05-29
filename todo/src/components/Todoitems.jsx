import React from "react";
import styles from "./todoitems.module.css";
export default function Todoitems({ items, todos, settodos }) {
  function del(items) {
    settodos(todos.filter((todo) => todo !== items));
  }
  function mark(name) {
    const newArray = todos.map((todo) =>
      todo.name === name ? { ...todo, done: !todo.done } : todo
    );
    settodos(newArray);
  }
  const className = items.done ? styles.completed : "'";
  return (
    <div className={styles.item}>
      <div className={styles.iname}>
        {" "}
        <span className={className} onClick={() => mark(items.name)}>
          {items.name}
        </span>
        <span>
          <button onClick={() => del(items)} className={styles.delbutton}>
            x
          </button>
        </span>
      </div>

      <hr className={styles.hor} />
    </div>
  );
}
