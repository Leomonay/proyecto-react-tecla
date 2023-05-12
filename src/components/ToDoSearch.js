import React from "react";
import "./ToDoSearch.css";

export default function ToDoSearch(props) {
  return (
    <form className="searchForm" onSubmit={props.handleSubmit}>
      <input
        onChange={props.handleChange}
        className="ToDoSearch"
        placeholder="Ingresa palabra clave"
      />
      <button type="submit" className="searchButton">
        Buscar
      </button>
    </form>
  );
}
