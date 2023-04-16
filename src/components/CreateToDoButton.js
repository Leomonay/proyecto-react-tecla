import "./CreateToDoButton.css";

export default function CreateToDoButton(props) {
  const handleClick = () => {
    alert("Se ha clickeado el botón");
  };
  return (
    <button className="CreateToDoButton" onClick={handleClick}>
      +
    </button>
  );
}
