import { useState } from "react";
import "./App.css";
import { Home } from "./Home";

const defaultToDos = [
  { text: "ver contenido de tecla", completed: true },
  { text: "pasear al perro", completed: false },
  { text: "salir a ver si llueve", completed: false },
  { text: "preparar la cena", completed: false },
];

function useLocalStorage(itemName, initialValue) {
  const localStorageItem = localStorage.getItem(itemName);

  let parsedItem;

  if (localStorageItem) {
    parsedItem = JSON.parse(localStorageItem);
  } else {
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItem = initialValue;
  }

  const [item, setItem] = useState(parsedItem);

  const saveItem = (newItem) => {
    const strigifiedItem = JSON.stringify(newItem);
    localStorage.setItem(itemName, strigifiedItem);

    setItem(newItem);
  };

  return [item, saveItem];
}

function App() {
  const [toDos, saveToDos] = useLocalStorage("TODOS_V1", defaultToDos);

  const [searchValue, setSearchValue] = useState("");

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

    saveToDos(newToDos);
  };

  const deleteToDo = (text) => {
    const toDoIndex = toDos.findIndex((toDo) => toDo.text === text);
    const newToDos = [...toDos];

    newToDos.splice(toDoIndex, 1);

    saveToDos(newToDos);
  };

  return (
    <Home
      totalToDos={totalToDos}
      completedToDos={completedToDos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedToDos={searchedToDos}
      completeToDo={completeToDo}
      deleteToDo={deleteToDo}
    />
  );
}

export { App };
