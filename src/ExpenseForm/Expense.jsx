import React from "react";
import { useState } from "react";
import styles from "./Expense.module.css";
export const Expense = ({ onTodos }) => {
  const [textInput, setText] = useState("");
  const [numberInput, setNumber] = useState("");
  const inputChangeUserName = (event) => {
    setText(event.target.value);
  };
  const inputChangeUserAge = (event) => {
    setNumber(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (textInput.trim().length !== 0 && numberInput.trim().length !== 0) {
      onTodos(textInput, numberInput);
      // console.log(textInput);
      // console.log(numberInput);
      setNumber("");
      setText("");
    }
  };
  return (
    <div className={styles.containerForm}>
      <form action="" className={styles.form}>
        <label htmlFor="name">Username</label>
        <input
          type="text"
          name="name"
          id="name"
          value={textInput}
          onChange={inputChangeUserName}
        />
        <label htmlFor="age">Age(years)</label>
        <input
          type="number"
          name="age"
          id="age"
          value={numberInput}
          onChange={inputChangeUserAge}
        />
        <button className={styles.addBtn} onClick={submitHandler}>
          Add User
        </button>
      </form>
    </div>
  );
};
