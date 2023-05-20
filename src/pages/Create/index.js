import { useContext } from "react";
import { AppContext } from "../../AppContext";
import CreateToDoForm from "../../components/CreateToDoForm";

export default function OtraPagina() {
  const { handleSubmit } = useContext(AppContext);
  return <CreateToDoForm onSubmit={handleSubmit} />;
}
