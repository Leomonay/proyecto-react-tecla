import { configureStore } from "@reduxjs/toolkit";
import toDosReducer from "../reducers/toDosReducer";

const store = configureStore({
  reducer: {
    toDos: toDosReducer,
  },
});

export default store;
