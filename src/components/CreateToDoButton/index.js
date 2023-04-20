import "./CreateToDoButton.css";

function CreateToDoButton(props) {
  const handleClick = () => {
    alert("Se ha clickeado el botón");
  };
  return (
    <button className="CreateToDoButton" onClick={handleClick}>
      +
    </button>
  );
}

export { CreateToDoButton };
