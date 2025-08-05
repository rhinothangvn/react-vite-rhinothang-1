import "./components/todo/todo.css";
import ToDoData from "./components/todo/ToDoData";
import ToDoNew from "./components/todo/ToDoNew";
import reactLogo from "./assets/react.svg";
import { useState } from "react";

const App = () => {
//Khai bao useState todoList --> ben trong la Object
  const [todoList, setTodoList] = useState([
    // { id: 1, name: "Learning React"},
    // { id: 2, name: "Watching YouTube"}
  ]);


  const [inputValue, setInputValue] = useState("Rhino Thang");

  const addNewToDo = (name) => {
    const newToDo = {
      id: randomIntFromInterval(1, 1000), // Random ID for the new task
      name: name,
    }

    setTodoList([...todoList, newToDo]);
  }

  const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }


  return (
    <div className="todo-container">
      <div className="todo-title">To Do List</div>
      <ToDoNew addNewToDo={addNewToDo}/>
      <ToDoData 
        todoList={todoList}
      />
      <div className="todo-image">
        <img src={reactLogo} alt="React Logo" className="logo" />
      </div>
    </div>
  );
};

export default App;
