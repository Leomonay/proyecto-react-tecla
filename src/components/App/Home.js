import "./App.css";
import { AppContext } from "../../AppContext";
// import CreateToDoForm from "../CreateToDoForm";
import ToDoCounter from "../ToDoCounter";
import ToDoItem from "../ToDoItem";
import ToDoList from "../ToDoList";
import ToDoSearch from "../ToDoSearch";
import CreateToDoButton from "../CreateToDoButton";
import { useContext } from "react";
import CreateToDoForm from "../CreateToDoForm";

function Home() {
  const { open, handleSubmit } = useContext(AppContext);
  return (
    <>
      <ToDoCounter />
      <ToDoSearch />
      <AppContext.Consumer>
        {({ filteredToDos, completeToDo, deleteToDo }) => {
          return (
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
          );
        }}
      </AppContext.Consumer>
      <CreateToDoButton />
      {open && <CreateToDoForm onSubmit={handleSubmit} />}
    </>
  );
}

export default Home;
