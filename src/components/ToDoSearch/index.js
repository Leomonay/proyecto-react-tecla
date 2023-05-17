import React from "react";
import "./index.css";

export default function ToDoSearch(props) {
  return (
    <input
      onChange={props.handleChange}
      className="ToDoSearch"
      placeholder="Ingresa palabra clave"
    />
  );
}
