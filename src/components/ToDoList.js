import "./ToDoList.css";
export default function ToDoList(props) {
  return (
    <section>
      <ul>{props.children}</ul>
    </section>
  );
}
