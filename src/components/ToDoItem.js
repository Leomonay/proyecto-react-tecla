import "./ToDoItem.css";

export default function ToDoItem(props) {
  return (
    <li className="ToDoItem">
      <span
        className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
        onClick={() => props.completeToDo(props.text)}
      >
        ✔
      </span>
      <p className={`ToDoItem-p ${props.completed && "ToDoItem-p--complete"}`}>
        {props.text}
      </p>
      <span
        className="Icon Icon-delete"
        onClick={() => props.deleteToDo(props.text)}
      >
        ✘
      </span>
    </li>
  );
}
