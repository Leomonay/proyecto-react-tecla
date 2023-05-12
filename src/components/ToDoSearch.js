import React from "react";
import "./ToDoSearch.css";

class ToDoSearch extends React.Component {
  render() {
    return (
      <input
        onChange={this.props.handleChange}
        className="ToDoSearch"
        placeholder="Ingresa palabra clave"
      />
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
