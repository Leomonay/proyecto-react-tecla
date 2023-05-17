import "./App.css";
import CreateToDoForm from "../CreateToDoForm";
import ToDoCounter from "../ToDoCounter";
import ToDoItem from "../ToDoItem";
import ToDoList from "../ToDoList";
import ToDoSearch from "../ToDoSearch";

function Home({
  completed,
  totalToDos,
  handleChange,
  filteredToDos,
  completeToDo,
  deleteToDo,
  open,
  newToDo,
  handleClick,
  formInputChange,
  handleCancel,
  handleSubmit,
}) {
  return (
    <>
      <ToDoCounter completed={completed} totalToDos={totalToDos} />

      <ToDoSearch handleChange={handleChange} />

      <ToDoList>
        {filteredToDos.map((todo) => (
          <ToDoItem
            key={todo.text}
            completeToDo={completeToDo}
            deleteToDo={deleteToDo}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </ToDoList>
      <CreateToDoForm
        open={open}
        newToDo={newToDo}
        handleClick={handleClick}
        handleChange={formInputChange}
        handleCancel={handleCancel}
        handleSubmit={handleSubmit}
      />
    </>
  );
}

export default Home;
