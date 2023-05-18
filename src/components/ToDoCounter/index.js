import { useContext } from "react";
import { AppContext } from "../../AppContext";
import "./index.css";

export default function ToDoCounter() {
  const { completed, totalToDos } = useContext(AppContext);
  return (
    <h1 className="ToDoCounter">
      Has completado {completed} de {totalToDos} ToDos
    </h1>
  );
}
