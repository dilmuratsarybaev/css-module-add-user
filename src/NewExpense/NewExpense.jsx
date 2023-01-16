import React from "react";
import styles from "./NewExpense.module.css"
export const NewExpense = ({ todo }) => {
  todo.sort((a, b) => {
    return b.number - a.number;
  });
//   console.log(todo);
  return (
    <div className={styles.continerList}>
      {todo.map((element) => {
        return (
          <ul className={styles.list}>
            <li className={styles.list_item} key={element.id}>
              {element.title}
              <span>({element.number} years old)</span>
            </li>
          </ul>
        );
      })}
    </div>
  );
};
