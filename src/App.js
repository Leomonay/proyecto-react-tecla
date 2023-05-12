import React from "react";
import "./App.css";
import CreateToDoButton from "./components/CreateToDoButton";
import ToDoCounter from "./components/ToDoCounter";
import ToDoItem from "./components/ToDoItem";
import ToDoList from "./components/ToDoList";
import ToDoSearch from "./components/ToDoSearch";

const toDos = [
  { text: "ver contenido de tecla", completed: true },
  { text: "pasear al perro", completed: false },
  { text: "salir a ver si llueve", completed: false },
  { text: "preparar la cena", completed: false },
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keyWord: "",
      toDos: toDos,
      filteredToDos: toDos,
    };
  }

  setNewKeyword = (event) => {
    const newKeyWord = event.target.value;
    this.setState({ keyWord: newKeyWord });
  };

  render() {
    return (
      <>
        <ToDoCounter />

        <ToDoSearch handleChange={this.setNewKeyword} />

        <ToDoList>
          {toDos.map((todo) => (
            <ToDoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
            />
          ))}
        </ToDoList>
        <CreateToDoButton />
      </>
    );
  }
}

// function App() {
//   return (
//     <>
//       <ToDoCounter />

//       <ToDoSearch />
//       <ToDoList>
//         {toDos.map((todo) => (
//           <ToDoItem
//             key={todo.text}
//             text={todo.text}
//             completed={todo.completed}
//           />
//         ))}
//       </ToDoList>
//       <CreateToDoButton />
//     </>
//   );
// }

export default App;
