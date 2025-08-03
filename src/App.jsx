import "./components/todo/todo.css";
import ToDoData from "./components/todo/ToDoData";
import ToDoNew from "./components/todo/ToDoNew";
import reactLogo from "./assets/react.svg";

const App = () => {
  const hoidanit = "Rhino Thang";
  const age = 18;
  const data = ["Learning React", "Watch Youtube"];

  const addNewToDo = (name) => {
    alert(`Add new: ${name}`);
  }


  return (
    <div className="todo-container">
      <div className="todo-title">To Do List</div>
      <ToDoNew addNewToDo={addNewToDo}/>
      <ToDoData 
      name = {hoidanit}
      age = {age}
      data = {data}
      
      />
      <div className="todo-image">
        <img src={reactLogo} alt="React Logo" className="logo" />
      </div>
    </div>
  );
};

export default App;
