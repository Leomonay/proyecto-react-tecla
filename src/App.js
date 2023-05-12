import React, { useEffect, useState } from "react";
import "./App.css";
import CreateToDoForm from "./components/CreateToDoForm";
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
    const newKeyword = event.target.value;
    setKeyword(newKeyword);
  }

  function completeToDo(text) {
    const newToDos = [...toDos];
    const index = toDos.findIndex((toDo) => toDo.text === text);
    newToDos[index].completed = true;
    setToDos(newToDos);
  }

  function deleteToDo(text) {
    const newToDos = toDos.filter((toDo) => toDo.text !== text);
    setToDos(newToDos);
  }

  function addToDo(text) {
    const newToDos = [...toDos, { text, completed: false }];
    setToDos(newToDos);
  }

  useEffect(() => {
    if (!keyword) {
      setFilteredToDos(toDos);
    } else {
      setFilteredToDos(toDos.filter((toDo) => toDo.text.includes(keyword)));
    }
  }, [toDos, keyword]);

  return (
    <>
      <ToDoCounter />

      <ToDoSearch handleChange={setNewKeyword} />

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
      <CreateToDoForm handleSubmit={addToDo} />
    </>
  );
}

export default App;
