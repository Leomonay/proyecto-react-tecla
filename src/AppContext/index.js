import { createContext, useEffect, useState } from "react";
import useLocalStorage from "./useLocalStorage";

const initialToDos = [
  { text: "ver contenido de tecla", completed: true },
  { text: "pasear al perro", completed: false },
  { text: "salir a ver si llueve", completed: false },
  { text: "preparar la cena", completed: false },
];

const AppContext = createContext();

function Provider(props) {
  const [keyword, setKeyword] = useState();
  const [toDos, setToDos] = useLocalStorage("toDos_V1", initialToDos);
  const [filteredToDos, setFilteredToDos] = useState(toDos);
  const [open, setOpen] = useState(false);
  const [newToDo, setNewToDo] = useState("");

  const totalToDos = toDos.length;
  const completed = toDos.filter((toDo) => toDo.completed).length;

  function handleChange(event) {
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

  function handleSubmit(e) {
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
    <AppContext.Provider
      value={{
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
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}

export { AppContext, Provider };
