const ToDoData = (props) => {
  const { todoList } = props;
  console.log("ToDoData props:", todoList);

  return (
    <div className="todo-data">
      {todoList.map((item, index) => {
        return (
          <div className="todo-item">
          <div >{item.name}</div>
            
            <button style={{ cursor: "pointer" }}>Delete</button>
          </div>
        );
      })}
      <div>{JSON.stringify(props.todoList)}</div>
    </div>
  );
};

export default ToDoData;
