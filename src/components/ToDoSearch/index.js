import React, { useContext } from "react";
import { AppContext } from "../../AppContext";
import "./index.css";

export default function ToDoSearch() {
  const { handleChange } = useContext(AppContext);
  return (
    <input
      onChange={handleChange}
      className="ToDoSearch"
      placeholder="Ingresa palabra clave"
    />
  );
}
