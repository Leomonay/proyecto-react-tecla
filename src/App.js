import React, { useState } from "react";
import "./App.css";
import CreateToDoButton from "./components/CreateToDoButton";
import ToDoCounter from "./components/ToDoCounter";
import ToDoItem from "./components/ToDoItem";
import ToDoList from "./components/ToDoList";
import ToDoSearch from "./components/ToDoSearch";

const initialToDos = [
  { text: "ver contenido de tecla", completed: true },
  { text: "pasear al perro", completed: false },
  { text: "salir a ver si llueve", completed: false },
  { text: "preparar la cena", completed: false },
];

function useLocalStorage(itemName, intialValue) {
  const localStorageItem = localStorage.getItem(itemName);
  const value = localStorageItem ? JSON.parse(localStorageItem) : intialValue;
  const [item, setItem] = useState(value);
  const saveItem = (newValue) => {
    localStorage.setItem(itemName, JSON.stringify(newValue));
    setItem(newValue);
  };
  return [item, saveItem];
}

function App() {
  const [keyword, setKeyword] = useState();
  const [toDos, setToDos] = useLocalStorage("toDos_V1", initialToDos);
  const [filteredToDos, setFilteredToDos] = useState(toDos);

  function setNewKeyword(event) {
    setKeyword(event.target.value);
  }

  function filterToDos(event) {
    event.preventDefault();
    const newList = keyword
      ? toDos.filter((toDo) => toDo.text.includes(keyword))
      : toDos;
    setFilteredToDos(newList);
  }

  function completeToDo(text) {
    const newToDos = [...toDos];
    const index = toDos.findIndex((toDo) => toDo.text === text);
    newToDos[index].completed = true;
    setToDos(newToDos);
    setFilteredToDos(newToDos);
  }

  function deleteToDo(text) {
    const newToDos = toDos.filter((toDo) => toDo.text !== text);
    setToDos(newToDos);
    setFilteredToDos(newToDos);
  }

  return (
    <>
      <ToDoCounter />

      <ToDoSearch handleChange={setNewKeyword} handleSubmit={filterToDos} />

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
      <CreateToDoButton />
    </>
  );
}

export default App;
