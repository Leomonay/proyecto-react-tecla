import React from "react";
import "./ToDoSearch.css";

export default function ToDoSearch(props) {
  return (
    <input
      onChange={props.handleChange}
      className="ToDoSearch"
      placeholder="Ingresa palabra clave"
    />
  );
}
