import React,{useState} from "react";
import UserForm from "./components/Form";
import UsersList from "./components/UsersList/UsersList";

function App() {
  
  let [usersList,setUsers]=useState([]);

  const extractUserHandler=(username,userage)=>{
    setUsers((prevUsersList)=>{
    return[...prevUsersList,{name:username,age:userage,key:Math.random().toString()}]
    })
  }
  return (
    <div>
      <UserForm onAddUser={extractUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
