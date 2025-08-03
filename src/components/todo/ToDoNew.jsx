const ToDoNew = (props) => {
    console.log(">>> check poit:", props);

    const { addNewToDo } = props;

    // addNewToDo("Rhino Thang");
  return (
    <div className="todo-new">
      <input type="text" placeholder="Add a new task" title="Add a new task" />
      <button>Add</button>
    </div>
  );
};

export default ToDoNew;