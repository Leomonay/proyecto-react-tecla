import { useState } from "react";
import "./ToDoSearch.css";

// class Componente extends React.Component {
//   constructor() {
//     this.state = {
//       username: "Leo Monay",
//     };
//   }

//   render() {
//     return (
//       <div onClick={() => this.setState({ userName: "Leonardo Monay" })}>
//         {this.state.username}
//       </div>
//     );
//   }
// }

export default function ToDoSearch() {
  const [keyWord, setKeyWord] = useState("");

  const onSearchTodoValue = (event) => {
    console.log(event.target.value);
    setKeyWord(event.target.value);
  };

  return (
    <input
      className="ToDoSearch"
      placeholder="Ingresa palabra clave"
      onChange={onSearchTodoValue}
    />
  );
}
