import "./components/todo/todo.css";
import ToDoData from "./components/todo/ToDoData";
import ToDoNew from "./components/todo/ToDoNew";
import reactLogo from "./assets/react.svg";
import { useState } from "react";
import Header from "./components/layout/header.jsx";
import Footer from "./components/layout/footer.jsx";

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
    };

    setTodoList([...todoList, newToDo]);
  };

  const deleteTodo = (id) => {
    const newTodoList = todoList.filter((item) => item.id !== id);
    setTodoList(newTodoList);
    console.log("Delete todo with id:", id);
  };

  const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  return (
    <>
      <Header />
      <div className="todo-container">
        <div className="todo-title">To Do List</div>
        <ToDoNew addNewToDo={addNewToDo} />

        {todoList.length > 0 ? (
          <ToDoData todoList={todoList} deleteTodo={deleteTodo} />
        ) : (
          <div className="todo-image">
            <img src={reactLogo} alt="React Logo" className="logo" />
          </div>
        )}

        {/* {todoList.length > 0 && (
        <ToDoData todoList={todoList} />
      )}

      {todoList.length === 0 && (
        <div className="todo-image">
          <img src={reactLogo} alt="React Logo" className="logo" />
        </div>
      )} */}
      </div>
      <Footer />
    </>
  );
};

export default App;
