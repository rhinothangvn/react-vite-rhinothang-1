import "./components/todo/todo.css";
import ToDoData from "./components/todo/ToDoData";
import ToDoNew from "./components/todo/ToDoNew";
import reactLogo from "./assets/react.svg";

const App = () => {
  return (
    <div className="todo-container">
      <div className="todo-title">To Do List</div>
      <ToDoNew />
      <ToDoData />
      <div className="todo-image">
        <img src={reactLogo} alt="React Logo" className="logo" />
      </div>
    </div>
  );
};

export default App;
