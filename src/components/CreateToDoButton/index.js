import { Link } from "react-router-dom";
import "./index.css";

export default function CreateToDoButton() {
  return (
    <Link to="/crear">
      <div className="CreateToDoButton">&#65291;</div>
    </Link>
  );
}
