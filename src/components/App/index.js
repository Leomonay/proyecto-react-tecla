import { useEffect, useState } from "react";
import "./App.css";
import { Home } from "./Home";

const defaultToDos = [
  { text: "ver contenido de tecla", completed: true },
  { text: "pasear al perro", completed: false },
  { text: "salir a ver si llueve", completed: false },
  { text: "preparar la cena", completed: false },
];

function useLocalStorage(itemName, initialValue) {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [item, setItem] = useState(initialValue);

  const saveItem = (newItem) => {
    const strigifiedItem = JSON.stringify(newItem);
    localStorage.setItem(itemName, strigifiedItem);
  };

  useEffect(() => {
    try {
      setTimeout(() => {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;

        if (localStorageItem) {
          parsedItem = JSON.parse(localStorageItem);
        } else {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        }
        setItem(parsedItem);
        setLoading(false);
      }, 2000);
    } catch (error) {
      setError(error);
    }
  }, [initialValue, itemName]);

  return { item, saveItem, error, loading };
}

function App() {
  const {
    item: toDos,
    saveItme: saveToDos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", defaultToDos);

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
      loading={loading}
      erro={error}
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
