import "./ToDoCounter.css";

export default function ToDoCounter({ total, completed }) {
  return (
    <h1 className="ToDoCounter">
      Has completado {completed} de {total} ToDos
    </h1>
  );
}
