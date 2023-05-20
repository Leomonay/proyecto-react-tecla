import { AppContext } from "../../AppContext";
// import CreateToDoForm from "../CreateToDoForm";
import ToDoCounter from "../../components/ToDoCounter";
import ToDoItem from "../../components/ToDoItem";
import ToDoList from "../../components/ToDoList";
import ToDoSearch from "../../components/ToDoSearch";
import CreateToDoButton from "../../components/CreateToDoButton";

function Home() {
  return (
    <div className="pageContainer">
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
    </div>
  );
}

export default Home;
