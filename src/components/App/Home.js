import { CreateToDoButton } from "../CreateToDoButton";
import { ToDoCounter } from "../ToDoCounter";
import { ToDoItem } from "../ToDoItem";
import { ToDoList } from "../ToDoList";
import { ToDoSearch } from "../ToDoSearch";

function Home({
  error,
  loading,
  totalToDos,
  completedToDos,
  searchValue,
  setSearchValue,
  searchedToDos,
  completeToDo,
  deleteToDo,
}) {
  return (
    <>
      <ToDoCounter total={totalToDos} completed={completedToDos} />

      <ToDoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      {error && <p>Desperate, hubo un error...</p>}
      {loading && <p>Cargando...</p>}
      {!loading && !searchedToDos.length && <p>Crea tu primer To Do...</p>}
      {!loading && searchedToDos.length && (
        <ToDoList>
          {searchedToDos.map((toDo) => (
            <ToDoItem
              key={toDo.text}
              text={toDo.text}
              completed={toDo.completed}
              onComplete={() => completeToDo(toDo.text)}
              onDelete={() => deleteToDo(toDo.text)}
            />
          ))}
        </ToDoList>
      )}
      <CreateToDoButton />
    </>
  );
}

export { Home };
