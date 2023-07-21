import React from "react";
import UserForm from "./Form/userform";
//import Model from "./Modal/ErrorModal";

const Form = (props) => {
  /*
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState(0);
*/


  const incomeDataHandler = (data) => {
    /*
    setUserName(data.name);
    setUserAge(data.age);
    */
    props.onAddUser(data.name,data.age);
    
  };

  let RenderUi = <UserForm extractDataHandler={incomeDataHandler} />;

  return <div>{RenderUi}</div>;
};

export default Form;
