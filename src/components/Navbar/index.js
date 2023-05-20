import { NavLink } from "react-router-dom";
import "./index.css";

export default function NavBar() {
  const routes = [
    { text: "Home", path: "/" },
    { text: "Crear", path: "/crear" },
  ];

  return (
    <nav className="navBar">
      <div>
        <b>{"//TECLA"}</b>
      </div>
      <div>Lista de To-Dos</div>
      <div className="linkContainer">
        {routes.map(({ text, path }) => (
          <NavLink
            key={text}
            activeclass="activeLink"
            className={(navData) => (navData.isActive ? "activeLink" : "")}
            to={path}
          >
            {text}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
