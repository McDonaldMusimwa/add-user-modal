import React from "react";
import Card from "../Card/Card";
import styles from "./UserList.module.css";
const UsersList = (props) => {
    //console.log(props.users)
  let render;
  if (props.users.length > 0) {
    render = (
      <Card className={styles.users}>
        <ul>
          {props.users.map((user) => (
            <li key={user.key}>
              <strong>{user.name}</strong> ({user.age} years old){" "}
            </li>
          ))}
        </ul>
      </Card>
    );
  }else{
    render = null;
  }
  return render ;
};

export default UsersList;
