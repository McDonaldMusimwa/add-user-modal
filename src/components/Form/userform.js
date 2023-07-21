import React, { useState } from "react";
import styles from "./userformstyle.module.css";
import Card from "../Card/Card";
import Button from "../Button/Button";
import ErrorModal from "../Modal/ErrorModal";

const Userform = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState();

  const addUserName = (event) => {
    setName(event.target.value);
  };

  const addAge = (event) => {
    setAge(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (name.trim().length === 0 || age.trim().length === 0) {
      setError  ({title:'Invalid input',
      message:'Please enter a valid name and age(non-empty values)',
    head:"Username"})
      return;
    }

    if (+age < 1) {
      setError  ({title:'Invalid age',
      message:'Please enter a valid age (>0)',
    head:"age"})
      return;
    }

    console.log(name, age);

    const addedUser = {
      name: name,
      age: age,
    };

    props.extractDataHandler(addedUser);
    setName("");
    setAge("");
  };

  const errorHandler = ()=>{
    setError(null)
  }

  return (
    <div>
      {error && <ErrorModal onConfirm={errorHandler}
        title={error.title}
        head={error.head}
        message={error.message}
      />}
      <Card className={styles.input}>
        <form onSubmit={onSubmitHandler}>
          <label htmlFor="username">Username:</label>
          <input
            id="username"
            type="text"
            name="name"
            onChange={addUserName}
            value={name}
          ></input>
          <label htmlFor="userage">Age(year):</label>
          <input
            value={age}
            type="number"
            id="userage"
            name="vol"
            min="0"
            max="50"
            onChange={addAge}
          ></input>
          <Button className={styles.button} type="submit">
            Add User
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default Userform;
