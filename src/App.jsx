import "./App.scss";
import Form_Registrazione from "./Components/Form_Registrazione";
import Form_Login from "./Components/Form_Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Clienti from "./Components/Clienti";
import Menu from "./Components/Menu";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Form_Login />} />
        <Route path="/registrazione" element={<Form_Registrazione />} />
        <Route path="/clienti" element={<Clienti />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
