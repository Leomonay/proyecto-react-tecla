import { useState } from "react";
import "./CreateToDoForm.css";

export default function CreateToDoForm(props) {
  const [open, setOpen] = useState(false);
  const [newToDo, setNewToDo] = useState("");

  function handleClick(e) {
    e.preventDefault();
    setOpen(true);
  }

  function handleChange(e) {
    setNewToDo(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.handleSubmit(newToDo);
    setNewToDo("");
    setOpen(false);
  }
  function handleCancel(e) {
    e.preventDefault();
    setNewToDo("");
    setOpen(false);
  }

  return (
    <>
      <button className="CreateToDoButton" onClick={handleClick}>
        +
      </button>
      {open && (
        <div className="toDoModal">
          <form className="addToDoForm" onSubmit={handleSubmit}>
            <input
              className="ToDoSearch"
              placeholder="Escribe tu To-Do"
              value={newToDo}
              onChange={handleChange}
            />
            <div>
              <button className="submit" type="submit">
                Agregar
              </button>
              <button className="cancel" onClick={handleCancel}>
                Cancelar
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
