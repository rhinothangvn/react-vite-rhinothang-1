const ToDoData = (props) => {
    const { name, age, data } = props;
    console.log("ToDoData props:", props);


  return (
    <div className="todo-data">
        <div>My name is {name}</div>
        <div>My age is {age}</div>
        <div>My data is {data}</div>
      <div>Learning React</div>
      <div>Watch Youtube</div>
      <div>
        {JSON.stringify(props.todoList)}
      </div>
    </div>
  );
};

export default ToDoData;
