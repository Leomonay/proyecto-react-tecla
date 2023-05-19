import { configureStore } from "@reduxjs/toolkit";
import toDosReducer from "../reducers/toDosReducer";
import { reducer as formReducer } from "redux-form";

const store = configureStore({
  reducer: {
    toDos: toDosReducer,
    form: formReducer,
  },
});

export default store;
