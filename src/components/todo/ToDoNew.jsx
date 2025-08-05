import { useState } from "react";

const ToDoNew = (props) => {

//const inputValue = "Rhino Thang";
  // Destructuring props
  const [ inputValue, setInputValue ] = useState("Rhino Thang");

  const { addNewToDo } = props;

  // addNewToDo("Rhino Thang");
  const handleClick = () => {
    addNewToDo(inputValue);
    
    setInputValue("");
  };

  const handleOnChange = (name) => {
    setInputValue(name);
  };

  return (
    <div className="todo-new">
      <input
        type="text"
        placeholder="Add a new task"
        title="Add a new task"
        onChange={(event) => handleOnChange(event.target.value)}
        value={inputValue}
      />
      <button style={{ cursor: "pointer" }} onClick={handleClick}>
        Add
      </button>
    </div>
  );
};

export default ToDoNew;
