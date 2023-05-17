import "./index.css";

export default function ToDoCounter({ completed, totalToDos }) {
  return (
    <h1 className="ToDoCounter">
      Has completado {completed} de {totalToDos} ToDos
    </h1>
  );
}
