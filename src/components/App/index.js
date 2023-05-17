import React, { useEffect, useState } from "react";
import Home from "./Home";

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
  const [open, setOpen] = useState(false);
  const [newToDo, setNewToDo] = useState("");

  const totalToDos = toDos.length;
  const completed = toDos.filter((toDo) => toDo.completed).length;

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

  useEffect(() => {
    if (!keyword) {
      setFilteredToDos(toDos);
    } else {
      setFilteredToDos(toDos.filter((toDo) => toDo.text.includes(keyword)));
    }
  }, [toDos, keyword]);

  function handleClick(e) {
    e.preventDefault();
    setOpen(true);
  }

  function formInputChange(e) {
    setNewToDo(e.target.value);
  }

  function addToDo(e) {
    e.preventDefault();
    const newToDos = [...toDos, { text: newToDo, completed: false }];
    setToDos(newToDos);
    setNewToDo("");
    setOpen(false);
  }

  function handleCancel(e) {
    e.preventDefault();
    setNewToDo("");
    setOpen(false);
  }

  return (
    <Home
      completed={completed}
      totalToDos={totalToDos}
      handleChange={setNewKeyword}
      completeToDo={completeToDo}
      deleteToDo={deleteToDo}
      filteredToDos={filteredToDos}
      open={open}
      newToDo={newToDo}
      handleClick={handleClick}
      formInputChange={formInputChange}
      handleCancel={handleCancel}
      handleSubmit={addToDo}
    />
  );
}

export default App;
