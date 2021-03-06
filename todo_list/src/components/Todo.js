const Todo = (props) => {
  return (
    <li className="todo stack-small">
      <div className="form-check">
        <input 
          id={props.id} 
          type="checkbox" 
          defaultChecked={props.completed}
          onChange={() => props.toggleCompleted(props.id)} />
        <label className="todo-label" htmlFor={props.id}>
          {props.name}
        </label>
      </div>
      <div className="btn-group">
        <button type="button" className="btn btn-info">
          Edit <span className="visually-hidden">{props.name}</span>
        </button>
        <button 
          type="button" 
          className="btn btn-danger" 
          onClick={() => props.deleteTask(props.id)} >
          Delete <span className="visually-hidden">{props.name}</span>
        </button>
      </div>
    </li>
  );
}

export default Todo;