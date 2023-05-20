import React from "react";
import { Field, reduxForm } from "redux-form";
import "./index.css";
import { Link } from "react-router-dom";

let CreateToDoForm = ({ handleSubmit, pristine, submitting, reset }) => {
  // pristine: situación en que ningún input ha cambiado.
  // submitting: situación en que form está siendo enviado.

  return (
    <div className="toDoModal">
      <form className="addToDoForm" onSubmit={handleSubmit}>
        <h1>Crear Nuevo To-Do</h1>
        <Field
          className="ToDoSearch"
          name="newToDo"
          component="input"
          type="text"
        />
        <div>
          <button
            className="submit"
            type="submit"
            disabled={pristine || submitting}
          >
            Agregar
          </button>
          <Link className="cancel" to="/">
            Cancelar
          </Link>
        </div>
      </form>
    </div>
  );
};

// función para crear nuevo form
const createReduxForm = reduxForm({ form: "createToDo" });

// creación del nuevo form
CreateToDoForm = createReduxForm(CreateToDoForm);

export default CreateToDoForm;
