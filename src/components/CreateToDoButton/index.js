import { useContext } from "react";
import { AppContext } from "../../AppContext";
import "./index.css";

export default function CreateToDoButton() {
  const { handleClick } = useContext(AppContext);
  return (
    <button className="CreateToDoButton" onClick={handleClick}>
      +
    </button>
  );
}
