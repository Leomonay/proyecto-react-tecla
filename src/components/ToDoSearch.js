import "./ToDoSearch.css";

export default function ToDoSearch() {
  const handleChange = (e) => {
    console.log(e.target.value);
  };
  return (
    <input
      onChange={handleChange}
      className="ToDoSearch"
      placeholder="Ingresa palabra clave"
    />
  );
}
