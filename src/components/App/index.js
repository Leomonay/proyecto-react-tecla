import { Provider } from "../../AppContext";
import OtraPagina from "../../pages/Create";
import Home from "../../pages/Home";
import NavBar from "../Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ErrorPage from "../../pages/ErrorPage";
import "./index.css";

function App() {
  return (
    <main id="appContainer">
      <Router>
        <Provider>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/crear" element={<OtraPagina />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Provider>
      </Router>
    </main>
  );
}

export default App;
