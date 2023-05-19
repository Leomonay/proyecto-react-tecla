import React from "react";
import { Field, reduxForm } from "redux-form";
import { useContext } from "react";
import { AppContext } from "../../AppContext";
import "./index.css";

let CreateToDoForm = ({ handleSubmit, pristine, submitting }) => {
  // pristine: situación en que ningún input ha cambiado.
  // submitting: situación en que form está siendo enviado.

  const { handleCancel } = useContext(AppContext);

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
          <button className="cancel" onClick={handleCancel}>
            Cancelar
          </button>
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
