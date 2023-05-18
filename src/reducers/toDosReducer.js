import { createSlice } from "@reduxjs/toolkit";

export const toDoSlice = createSlice({
  name: "toDos",
  initialState: {
    toDos: [],
    localStorageKey: "toDos_V1",
  },
  reducers: {
    setDefaultToDos: (state, action) => {
      const localStorageItem = localStorage.getItem(state.localStorageKey);
      state.toDos = localStorageItem
        ? JSON.parse(localStorageItem)
        : action.payload;
    },
    addToDo: (state, action) => {
      state.toDos = [
        ...state.toDos,
        { text: action.payload, completed: false },
      ];
    },
    completeToDoAction: (state, action) => {
      const index = state.toDos.findIndex(
        (toDo) => toDo.text === action.payload
      );
      const newToDos = [...state.toDos];
      newToDos[index].completed = true;
      state.toDos = newToDos;
    },
    deleteToDo: (state, action) => {
      const newToDos = [...state.toDos];
      state.toDos = newToDos.filter((toDo) => toDo.text !== action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { setDefaultToDos, addToDo, completeToDoAction, deleteToDo } =
  toDoSlice.actions;

export default toDoSlice.reducer;
