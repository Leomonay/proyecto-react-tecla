import { Link } from "react-router-dom";
import "./index.css";

export default function ErrorPage() {
  return (
    <div className="toDoModal">
      <div className="notFound">
        <h1>¿Te has perdido?</h1>
        <img
          src="https://media.tenor.com/xQfGQV6UX9AAAAAC/meme.gif"
          alt="John Travolta looking around"
        ></img>
        <p>La página solicitada no existe.</p>
        <Link className="backToHome" to="/">
          &#10229; Volver a Home
        </Link>
      </div>
    </div>
  );
}
