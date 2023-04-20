import { useState } from "react";
import "./App.css";
import CreateToDoButton from "./components/CreateToDoButton";
import ToDoCounter from "./components/ToDoCounter";
import ToDoItem from "./components/ToDoItem";
import ToDoList from "./components/ToDoList";
import ToDoSearch from "./components/ToDoSearch";

const defaultToDos = [
  { text: "ver contenido de tecla", completed: true },
  { text: "pasear al perro", completed: false },
  { text: "salir a ver si llueve", completed: false },
  { text: "preparar la cena", completed: false },
];

function App(props) {
  const [searchValue, setSearchValue] = useState("");
  const [toDos, setToDos] = useState(defaultToDos);

  const completedToDos = toDos.filter((todo) => !!todo.completed).length;
  const totalToDos = toDos.length;

  let searchedToDos = [];

  if (!searchValue.length >= 1) {
    searchedToDos = toDos;
  } else {
    searchedToDos = toDos.filter((toDo) => {
      const toDoText = toDo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();

      return toDoText.includes(searchText);
    });
  }

  const completeToDo = (text) => {
    const toDoIndex = toDos.findIndex((toDo) => toDo.text === text);
    const newToDos = [...toDos];

    newToDos[toDoIndex].completed = true;

    setToDos(newToDos);
  };

  const deleteToDo = (text) => {
    const toDoIndex = toDos.findIndex((toDo) => toDo.text === text);
    const newToDos = [...toDos];

    newToDos.splice(toDoIndex, 1);

    setToDos(newToDos);
  };

  return (
    <>
      <ToDoCounter total={totalToDos} completed={completedToDos} />

      <ToDoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
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
      <CreateToDoButton />
    </>
  );
}

export default App;
