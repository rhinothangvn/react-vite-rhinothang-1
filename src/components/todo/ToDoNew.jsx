const ToDoNew = (props) => {
  console.log(">>> check poit:", props);

  const { addNewToDo } = props;

  // addNewToDo("Rhino Thang");
  const handleClick = () => {
    alert("Add new task");
    addNewToDo("Rhino Thang");
  };

const handleOnChange = (name) => {
    console.log(">>> check handle onChange",name);
}

  return (
    <div className="todo-new">
      <input type="text" placeholder="Add a new task" title="Add a new task"  
      onChange={(event) => handleOnChange(event.target.value)}/>
      <button style={{ cursor: "pointer" }} 
      onClick={handleClick}>
        Add
      </button>
    </div>
  );
};

export default ToDoNew;
