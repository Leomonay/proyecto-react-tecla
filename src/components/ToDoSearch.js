import "./ToDoSearch.css";

export default function ToDoSearch({ searchValue, setSearchValue }) {
  const onSearchTodoValue = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <input
      className="ToDoSearch"
      value={searchValue}
      placeholder="Ingresa palabra clave"
      onChange={onSearchTodoValue}
    />
  );
}
