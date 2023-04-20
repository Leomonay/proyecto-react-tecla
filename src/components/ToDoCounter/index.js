import "./ToDoCounter.css";

function ToDoCounter({ total, completed }) {
  return (
    <h1 className="ToDoCounter">
      Has completado {completed} de {total} ToDos
    </h1>
  );
}

export { ToDoCounter };
