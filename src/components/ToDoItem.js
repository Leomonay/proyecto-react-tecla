import "./ToDoItem.css";

export default function ToDoItem(props) {
  const onComplete = () => {
    alert(`Has completado: ${props.text}`);
  };
  const onDelete = () => {
    alert(`Has eliminado: ${props.text}`);
  };

  return (
    <li className="ToDoItem">
      <span
        className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
        onClick={onComplete}
      >
        ✔
      </span>
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>
      <span className="Icon Icon-delete" onClick={onDelete}>
        ✘
      </span>
    </li>
  );
}
