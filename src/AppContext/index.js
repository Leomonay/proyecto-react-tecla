import { createContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  addToDo,
  completeToDoAction,
  deleteToDo as deleteToDoAction,
  setDefaultToDos,
} from "../reducers/toDosReducer";

const initialToDos = [
  { text: "ver contenido de tecla", completed: true },
  { text: "pasear al perro", completed: false },
  { text: "salir a ver si llueve", completed: false },
  { text: "preparar la cena", completed: false },
];

const AppContext = createContext();

function Provider(props) {
  const { toDos, localStorageKey } = useSelector((state) => state.toDos);

  const [keyword, setKeyword] = useState();
  const [filteredToDos, setFilteredToDos] = useState(toDos);
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => dispatch(setDefaultToDos(initialToDos)), [dispatch]);
  useEffect(
    () => localStorage.setItem(localStorageKey, JSON.stringify(toDos)),
    [localStorageKey, toDos]
  );

  const totalToDos = toDos.length;
  const completed = toDos.filter((toDo) => toDo.completed).length;

  function handleChange(event) {
    const newKeyword = event.target.value;
    setKeyword(newKeyword);
  }

  function completeToDo(text) {
    dispatch(completeToDoAction(text));
  }

  function deleteToDo(text) {
    dispatch(deleteToDoAction(text));
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

  function handleSubmit(values) {
    const { newToDo } = values;
    if (!newToDo) return alert("debe ingresar un To Do");
    dispatch(addToDo(newToDo));
    setOpen(false);
  }

  function handleCancel(e) {
    e.preventDefault();
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
        handleClick,
        handleCancel,
        handleSubmit,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}

export { AppContext, Provider };
