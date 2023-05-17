import "./index.css";

export default function CreateToDoForm({
  open,
  newToDo,
  handleClick,
  handleChange,
  handleSubmit,
  handleCancel,
}) {
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
              <button className="submit" type="submit" disabled={!newToDo}>
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
