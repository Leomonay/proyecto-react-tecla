import React from "react";
import "./ToDoSearch.css";

class ToDoSearch extends React.Component {
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.handleSubmit();
  };

  // document.queryselector('#input_keyword').value

  render() {
    return (
      <form className="searchForm" onSubmit={this.handleSubmit}>
        <input
          onChange={this.props.handleChange}
          className="ToDoSearch"
          placeholder="Ingresa palabra clave"
        />
        <button type="submit" className="searchButton">
          Buscar
        </button>
      </form>
    );
  }
}

export default ToDoSearch;

// export default function ToDoSearch() {
//   const handleChange = (e) => {
//     console.log(e.target.value);
//   };
//   return (
//     <input
//       onChange={handleChange}
//       className="ToDoSearch"
//       placeholder="Ingresa palabra clave"
//     />
//   );
// }
